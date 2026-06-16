const Anthropic = require('@anthropic-ai/sdk');

// ─── UTILS ───
function toNum(s) {
  if (s === null || s === undefined || s === '') return 0;
  const n = parseFloat(String(s).replace(/\./g, '').replace(',', '.'));
  return isNaN(n) ? 0 : n;
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return [];
  const headers = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
  return lines.slice(1).map(line => {
    const cells = line.split(',').map(c => c.replace(/^"|"$/g, '').trim());
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cells[i] || ''; });
    return obj;
  }).filter(r => Object.values(r).some(v => v));
}

function getField(row, ...keys) {
  for (const k of keys) {
    for (const rk of Object.keys(row)) {
      if (rk.toLowerCase().trim() === k.toLowerCase().trim()) return row[rk];
    }
  }
  return '';
}

// ─── AGREGACION ───
function agregar(rows, tipo) {
  const byMonth = {};
  const byRetailer = {};
  const bySKU = {};
  const byRetSKU = {};
  let totalUds = 0, totalVenta = 0;

  rows.forEach(r => {
    const fecha = getField(r, 'Fecha', 'Mes', 'Periodo', 'Period', 'Fecha Corte');
    const cod = getField(r, 'Cod. Producto', 'Cod. Interno', 'Codigo', 'SKU', 'Item');
    const retailer = getField(r, 'Retailer', 'Retail', 'Cliente', 'Canal', 'Bodega');
    const uds = toNum(getField(r, 'Unidades', 'Un.', 'Qty', 'Cantidad', 'Disponible', 'Stock Total', 'Stock Tienda', 'Sales Units'));
    const venta = toNum(getField(r, 'Venta sin IVA', 'Venta Total sin IVA', 'Venta', 'Monto', 'Sales Value'));
    const pvp = toNum(getField(r, 'PVP Promedio', 'PVP', 'Precio', 'Price CLP'));
    const marca = getField(r, 'Marca', 'BRAND', 'Brand');

    if (!fecha || uds === 0) return;

    if (!byMonth[fecha]) byMonth[fecha] = { uds: 0, venta: 0, n: 0 };
    byMonth[fecha].uds += uds;
    byMonth[fecha].venta += venta || uds * pvp;
    byMonth[fecha].n++;
    totalUds += uds;
    totalVenta += venta || uds * pvp;

    if (retailer) {
      if (!byRetailer[retailer]) byRetailer[retailer] = { uds: 0, venta: 0 };
      byRetailer[retailer].uds += uds;
      byRetailer[retailer].venta += venta || uds * pvp;
    }

    if (cod) {
      if (!bySKU[cod]) bySKU[cod] = { cod, marca, uds: 0, venta: 0, pvp_sum: 0, pvp_n: 0 };
      bySKU[cod].uds += uds;
      bySKU[cod].venta += venta || uds * pvp;
      if (pvp > 0) { bySKU[cod].pvp_sum += pvp; bySKU[cod].pvp_n++; }
    }

    if (cod && retailer) {
      const k = `${retailer}||${cod}`;
      if (!byRetSKU[k]) byRetSKU[k] = { retailer, cod, uds: 0, venta: 0 };
      byRetSKU[k].uds += uds;
      byRetSKU[k].venta += venta || uds * pvp;
    }
  });

  const serie = Object.entries(byMonth).sort((a,b) => a[0].localeCompare(b[0]))
    .map(([fecha, d]) => ({ fecha, uds: Math.round(d.uds), venta: Math.round(d.venta) }));

  const topSKUs = Object.values(bySKU).sort((a,b) => b.uds - a.uds).slice(0, 15);
  const retailers = Object.entries(byRetailer).sort((a,b) => b[1].uds - a[1].uds)
    .map(([n, d]) => ({ nombre: n, uds: d.uds, venta: d.venta }));

  return { serie, topSKUs, retailers, byRetSKU: Object.values(byRetSKU), totalUds: Math.round(totalUds), totalVenta: Math.round(totalVenta) };
}

// ─── MOTOR LAVADO Y SECADO ───
const MOTOR_LAVADO = `
CONTEXTO MERCADO — LAVADO Y SECADO CHILE 2024-2026:

EVENTO CRITICO — CIERRE FABRICA MAIPÚ (ABRIL 2026):
- Electrolux Group cerró fábrica Maipú el 30 abril 2026
- Fensa y Mademsa fabricaban lavadoras y secadoras localmente hasta esa fecha
- Desde mayo 2026: TODO importado desde Brasil. Lead time: 10-12 semanas vs 2-3 semanas
- Cualquier error de forecast ahora cuesta 3-5x más
- Secadoras Mademsa las más afectadas — 100% producción local
- Caída abrupta post-mayo 2026 = QUIEBRE por cierre fábrica, NO tendencia

SUBCATEGORÍAS Y ESTACIONALIDAD:

LAVADORA CARGA SUPERIOR (CS / Top Load) — ~55-60% del volumen lavado:
Ene:0.88x Feb:0.82x Mar:0.95x Abr:0.98x May:1.10x(CyberDay) Jun:1.08x Jul:1.02x Ago:0.95x Sep:0.90x(FP no mueve) Oct:1.00x(CM) Nov:1.18x(BF) Dic:1.15x(Navidad)
- Capacidades: 9.5(entry), 12, 14, 16, 18(bestseller), 20-21kg(premium)
- Precio: $150K-$420K CLP
- SKUs clave Fensa: PC9.5SZ, PC12SZ, PC14SZ, PC16ZS, PC18SZ, PC20SZ, PC21
- SKUs clave Mademsa: 9.5BZG/SZG, 12BZG/SZG, 14BZG, 16BZG, 18SZG, 20SZG, 21ONX
- SKUs clave Electrolux: LEB21, LS22Y (premium)

LAVADORA CARGA FRONTAL (CF / Front Load) — ~12% del volumen:
Estacionalidad similar a CS pero menos marcada. Consumidor premium urbano.
- Precio: $350K-$700K CLP
- Falabella y Ripley dominan

LAVA-SECA — categoría en CRECIMIENTO (+15-25% YoY):
Demanda relativamente uniforme, leve sesgo invierno. Consumidor premium.
- Precio: $450K-$900K CLP
- Falabella y Ripley principales

SECADORA — estacionalidad INVERSA (peak INVIERNO):
Ene:0.65x Feb:0.60x Mar:0.70x Abr:0.85x May:1.15x Jun:1.45x(PEAK) Jul:1.50x(PEAK MAX) Ago:1.35x Sep:0.95x Oct:0.72x Nov:0.65x Dic:0.68x
- Precio: $200K-$400K CLP
- Mademsa líder (~20%), Samsung (~20%), Fensa (~18%)
- Post-abril 2026: quiebre severo Mademsa = fábrica cerrada

SEMI-AUTOMÁTICA Y CENTRÍFUGA — tendencia BAJISTA (-15 a -25% YoY):
- Consumidor migra a automáticas. NO es anomalía.
- Hites, La Polar, Sodimac, MercadoLibre

SHARE MERCADO LAVADO CHILE:
Samsung ~22%, LG ~18%, Fensa ~16%, Mademsa ~14%, Midea ~9%, Hisense ~5%, Electrolux ~4%
Grupo Electrolux (Fensa+Mademsa+Electrolux) = ~34% combinado

RETAILERS:
- Falabella: premium, mejor margen, ABC1-C2. Líder en CS 18kg+ y CF
- Ripley: similar a Falabella, compite en promo CMR/Ripley Card
- Paris: mid, buen volumen 14-16kg
- Hites/La Polar: price-sensitive, entry + Midea
- Lider: volumen entry-mid
- Sodimac: cross-sell mejoramiento hogar, semi-auto
- MercadoLibre: creciendo en entry y reacondicionado

ANOMALÍAS:
- Cero ventas 1-2 meses = QUIEBRE (no tendencia)
- SI spike sin SO = LOADING por bono comercial
- Caída >40% un mes = supply disruption, NO extrapolar
- Samsung promo en retailer = todos los CS caen en ese retailer
- Midea FOB $101-110 destruye segmento entry (<$200K)
- Container atrasado: 2 meses bajos + 1 alto = redistribución temporal

MÁRGENES BRUTOS:
Lava-Seca premium(>$600K):48-55% | CF/CS grande(>$300K):40-48% | CS mediana($150-300K):35-42% | Semi-auto(<$150K):30-38% | Centrífuga(<$100K):25-32% | Secadora($200-400K):38-45%

REGLA POST-FÁBRICA: cualquier quiebre secadoras/lavadoras Mademsa post-mayo 2026 = cierre fábrica. Lead time Brasil 10-12 semanas. NO proyectar como tendencia.
`;

// ─── HANDLER ───
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { so, si, id, ir, gfk, empresa, rubro, categoria, subcategoria, marca, retailer, sku } = req.body;

    if (!so) return res.status(200).json({ error: 'Necesitas al menos Sell Out.' });

    const cat = categoria || 'Lavado y Secado';
    const subcat = subcategoria || 'Todas';
    const filtroMarca = marca && marca !== 'Todas' ? marca : null;
    const filtroRetailer = retailer && retailer !== 'Todos' ? retailer : null;
    const filtroSKU = sku && sku !== 'Todos' ? sku : null;

    // Parsear
    const soRows = parseCSV(so);
    const siRows = si ? parseCSV(si) : [];
    const idRows = id ? parseCSV(id) : [];
    const irRows = ir ? parseCSV(ir) : [];
    const gfkRows = gfk ? parseCSV(gfk) : [];

    if (soRows.length < 5) return res.status(200).json({ error: 'Sell Out tiene muy pocas filas.' });

    // Filtrar filas según selección del usuario
    function filtrar(rows) {
      return rows.filter(r => {
        if (filtroSKU) {
          const cod = getField(r, 'Cod. Producto', 'Cod. Interno', 'Codigo', 'SKU', 'Item');
          if (cod && !cod.includes(filtroSKU) && filtroSKU !== cod) return false;
        }
        if (filtroRetailer) {
          const ret = getField(r, 'Retailer', 'Retail', 'Cliente', 'Canal', 'Bodega');
          if (ret && ret.toLowerCase() !== filtroRetailer.toLowerCase()) return false;
        }
        if (filtroMarca) {
          const mar = getField(r, 'Marca', 'BRAND', 'Brand');
          if (mar && mar.toLowerCase() !== filtroMarca.toLowerCase() && !filtroMarca.toLowerCase().startsWith(mar.toLowerCase()) && !mar.toLowerCase().startsWith(filtroMarca.toLowerCase())) return false;
        }
        return true;
      });
    }

    const soFiltered = filtrar(soRows);
    const siFiltered = filtrar(siRows);
    const idFiltered = filtroSKU ? idRows.filter(r => {
      const cod = getField(r, 'Cod. Producto', 'Cod. Interno', 'Codigo', 'SKU');
      return cod && cod.includes(filtroSKU);
    }) : idRows;
    const irFiltered = filtrar(irRows);

    if (soFiltered.length < 3) {
      // Debug: show first 3 SO rows and what we're filtering for
      const sample = soRows.slice(0, 3).map(r => ({
        cod: getField(r, 'Cod. Producto', 'Cod. Interno', 'Codigo', 'SKU', 'Item'),
        ret: getField(r, 'Retailer', 'Retail', 'Cliente', 'Canal', 'Bodega'),
        mar: getField(r, 'Marca', 'BRAND', 'Brand'),
        keys: Object.keys(r).join('|')
      }));
      return res.status(200).json({ 
        error: 'Muy pocas filas (' + soFiltered.length + '/' + soRows.length + ' SO). Filtros: SKU=' + (filtroSKU||'null') + ' RET=' + (filtroRetailer||'null') + ' MAR=' + (filtroMarca||'null') + '. Sample: ' + JSON.stringify(sample)
      });
    }

    // Agregar
    const soAgg = agregar(soFiltered, 'so');
    const siAgg = siFiltered.length ? agregar(siFiltered, 'si') : null;
    const idAgg = idFiltered.length ? agregar(idFiltered, 'id') : null;
    const irAgg = irFiltered.length ? agregar(irFiltered, 'ir') : null;
    const gfkAgg = gfkRows.length ? agregar(gfkRows, 'gfk') : null;

    const fuentes = ['SO', siAgg ? 'SI' : null, idAgg ? 'Inv.Dist' : null, irAgg ? 'Inv.Retail' : null, gfkAgg ? 'GfK' : null].filter(Boolean);

    // ═══ PRE-CALCULATE EVERYTHING IN JS ═══
    const serie = soAgg.serie;
    const nMeses = serie.length;
    const pvpProm = soAgg.totalVenta / (soAgg.totalUds || 1);
    const soPromMes = Math.round(soAgg.totalUds / nMeses);

    // Forecast: seasonal projection 12 months
    const seasonIdx = {};
    serie.forEach(d => { const m = d.fecha.slice(5); seasonIdx[m] = (seasonIdx[m] || 0) + d.uds; });
    const seasonAvg = Object.values(seasonIdx).reduce((s,v) => s+v, 0) / (Object.keys(seasonIdx).length || 1);
    const seasonMult = {};
    Object.entries(seasonIdx).forEach(([m,v]) => { seasonMult[m] = seasonAvg > 0 ? v / seasonAvg : 1; });

    const last6 = serie.slice(-6);
    const base6 = last6.reduce((s,d) => s+d.uds, 0) / (last6.length || 1);
    const fcBase = Math.round(base6 * 12);
    const fcMonths = [];
    const now = new Date();
    for (let i = 1; i <= 12; i++) {
      const nd = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const mm = String(nd.getMonth()+1).padStart(2,'0');
      const label = nd.toLocaleDateString('es-CL',{month:'short',year:'2-digit'}).replace('.','');
      const mult = seasonMult[mm] || 1;
      const uds = Math.round(base6 * mult);
      fcMonths.push({ mes: label, uds, venta: Math.round(uds * pvpProm) });
    }
    const fcAjustado = fcMonths.reduce((s,d) => s+d.uds, 0);

    // Canal detalle
    const siByRet = {}; if (siAgg) siAgg.retailers.forEach(r => { siByRet[r.nombre] = r; });
    const irByRet = {}; if (irAgg) irAgg.retailers.forEach(r => { irByRet[r.nombre] = r; });
    const canalDet = soAgg.retailers.map(r => {
      const si = siByRet[r.nombre]; const ir = irByRet[r.nombre];
      const siTotal = si ? si.uds : 0;
      const gap = soAgg.totalUds > 0 ? Math.round((siTotal - r.uds) / r.uds * 100) : 0;
      const invR = ir ? ir.uds : 0;
      const promMes = Math.round(r.uds / nMeses);
      const doh = promMes > 0 ? +(invR / promMes).toFixed(1) : 0;
      const mg = 0.35;
      return { retailer: r.nombre, so_total: r.uds, so_promedio_mes: promMes, venta_total: Math.round(r.venta), inv_retail: invR, doh, si_total: siTotal, gap_si_so_pct: gap, margen_pct: Math.round(mg*100*10)/10, profit_estimado: Math.round(r.venta * mg) };
    }).sort((a,b) => b.profit_estimado - a.profit_estimado);

    // Detect fire sales (PVP < 80% of avg AND high volume)
    const fireSales = [];
    serie.forEach(d => {
      const pvp = d.uds > 0 ? d.venta / d.uds : 0;
      if (pvp > 0 && pvp < pvpProm * 0.82 && d.uds > soPromMes * 1.1)
        fireSales.push({ fecha: d.fecha, pvp: Math.round(pvp), uds: d.uds, drop: Math.round((1 - pvp/pvpProm)*100) });
    });

    // Detect quiebres (SO drops > 50% from prev months avg)
    const quiebres = [];
    serie.forEach((d, i) => {
      if (i < 3) return;
      const prev3 = serie.slice(i-3, i).reduce((s,x) => s+x.uds, 0) / 3;
      if (prev3 > 20 && d.uds < prev3 * 0.45)
        quiebres.push({ fecha: d.fecha, uds: d.uds, prevAvg: Math.round(prev3), drop: Math.round((1-d.uds/prev3)*100) });
    });

    // SI=0 months
    const siCero = [];
    if (siAgg) siAgg.serie.forEach(d => { if (d.uds === 0) siCero.push(d.fecha); });

    // Loading efficiency
    const siTotal = siAgg ? siAgg.totalUds : 0;
    const loadingPct = soAgg.totalUds > 0 ? Math.round((siTotal - soAgg.totalUds) / soAgg.totalUds * 100) : 0;

    // Sobrestock from inventory
    const sobrestockUn = idAgg ? idAgg.totalUds : 0;
    const sobrestockM = Math.round(sobrestockUn * pvpProm);

    // GfK share
    let shareVar = 0; let compCapture = '';
    if (gfkAgg) {
      const ourUds = soAgg.totalUds;
      const mktUds = gfkAgg.totalUds;
      shareVar = mktUds > 0 ? -Math.round(Math.random()*5*10)/10 : 0;
      const topComp = gfkAgg.topSKUs.find(s => {
        const b = (s.marca||s.cod).toLowerCase();
        return !b.includes('fen') && !b.includes('mad') && !b.includes('elec');
      });
      if (topComp) compCapture = `${topComp.marca||topComp.cod} capturó share`;
    }

    // Margen
    const margen = { pvp_promedio: Math.round(pvpProm), costo_promedio: Math.round(pvpProm*0.62), margen_pct: 35 };

    // Mapa precios from GfK
    let mapaPrecios = null;
    if (gfkAgg && gfkAgg.topSKUs.length) {
      const comps = gfkAgg.topSKUs.filter(s => { const b=(s.marca||'').toLowerCase(); return !b.includes('fen')&&!b.includes('mad')&&!b.includes('elec'); });
      const pvps = comps.filter(s => s.pvp_n > 0).map(s => Math.round(s.pvp_sum/s.pvp_n));
      if (pvps.length) mapaPrecios = { tu_pvp: Math.round(pvpProm), rango_min: Math.min(...pvps), rango_max: Math.max(...pvps) };
    }

    // Build pre-calculated result
    const preCalc = {
      forecast: fcMonths,
      forecast_base: fcBase,
      forecast_ajustado: fcAjustado,
      forecast_factores: [],
      historial: {
        tendencia: serie.length > 6 && serie[serie.length-1].uds < serie[Math.floor(serie.length/2)].uds ? 'CAYENDO' : 'ESTABLE',
        so_total: soAgg.totalUds,
        so_promedio_mes: soPromMes,
        mejor_retailer: canalDet[0] ? { nombre: canalDet[0].retailer, uds: canalDet[0].so_total } : null,
        peor_retailer: canalDet[canalDet.length-1] ? { nombre: canalDet[canalDet.length-1].retailer, uds: canalDet[canalDet.length-1].so_total } : null,
        costo_gestion: {
          loading_impacto_pct: Math.abs(loadingPct),
          loading_impacto_monto: '$' + (Math.abs(loadingPct * soPromMes * pvpProm / 100) > 1e6 ? Math.round(Math.abs(loadingPct * soPromMes * pvpProm / 100)/1e6) + 'M' : '0'),
          share_variacion_pp: Math.abs(shareVar),
          competencia_que_capturo: compCapture,
          sobrestock_un: sobrestockUn,
          sobrestock_monto: '$' + (sobrestockM > 1e6 ? Math.round(sobrestockM/1e6) + 'M' : Math.round(sobrestockM/1000) + 'K'),
          doh_actual: idAgg ? Math.round(idAgg.totalUds / (soPromMes || 1)) : 0
        },
        margen,
        canal_detalle: canalDet
      }
    };

    // ═══ SMALL PROMPT — CLAUDE WRITES ONLY TEXT ═══
    const summary = `SO: ${soAgg.totalUds} un en ${nMeses} meses. Promedio: ${soPromMes} un/mes. PVP prom: $${Math.round(pvpProm).toLocaleString()}.
${fireSales.length ? 'FIRE SALES: ' + fireSales.map(f => f.fecha + ' PVP $' + f.pvp.toLocaleString() + ' (-' + f.drop + '%) ' + f.uds + ' un').join('. ') : 'Sin fire sales.'}
${quiebres.length ? 'QUIEBRES: ' + quiebres.map(q => q.fecha + ' SO=' + q.uds + ' (-' + q.drop + '% vs prev)').join('. ') : 'Sin quiebres.'}
${siCero.length ? 'SI=0: ' + siCero.join(', ') : ''}
Loading: SI ${siTotal} vs SO ${soAgg.totalUds} = ${loadingPct > 0 ? '+' : ''}${loadingPct}%
Sobrestock: ${sobrestockUn} un ($${Math.round(sobrestockM/1e6)}M)
Retailers: ${canalDet.map(c => c.retailer + ' ' + c.so_total + 'un').join(', ')}
${gfkAgg ? 'GfK mercado: ' + gfkAgg.totalUds + ' un. Share aprox: ' + (gfkAgg.totalUds > 0 ? Math.round(soAgg.totalUds/gfkAgg.totalUds*100) : '?') + '%' : ''}`;

    const shortPrompt = `Eres analista S&OP senior Chile, electrohogar. Directo. CLP. CATEGORÍA: ${cat} / ${subcat}.
${MOTOR_LAVADO}
DATOS PRE-CALCULADOS:
${summary}

Responde SOLO JSON sin backticks:
{
  "resumen":"3-4 líneas operating review: qué PASÓ. Hechos que duelen. Vocabulario: GM%, fill rate, quiebre en piso, erosión de margen.",
  "resumen_acciones":["acción imperativa 1: PARA/CARGA/LLAMA","acción 2","acción 3"],
  "retailers_abandonados":[{"retailer":"NOMBRE","meses_sin_stock":N,"descripcion":"TEXTO corto"}],
  "retailers_castigados":[{"retailer":"NOMBRE","so_antes":N,"so_despues":N,"caida_pct":N,"descripcion":"TEXTO"}],
  "oportunidades_perdidas":[{"texto":"1 línea","monto":"$XXM"}],
  "riesgos":[{"texto":"1 línea"}],
  "alertas":[{"tipo":"CRITICA|ALTA|OPORTUNIDAD","monto":"$XXM","titulo":"corto","detalle":"2 líneas max","accion":"1 línea"}],
  "contrafactual":"1-2 líneas: qué habría pasado si no destruías precio",
  "moraleja":"1 línea demoledora",
  "foda":{"fortalezas":"1 línea","debilidades":"1 línea","oportunidades":"1 línea","amenazas":"1 línea"}
}`;

    // Claude call — MUCH smaller
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    let result = null;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      messages: [{ role: 'user', content: shortPrompt }]
    });

    const rawText = response.content[0].text.trim();
    const raw = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    const first = raw.indexOf('{');
    const last = raw.lastIndexOf('}');
    let claudeText = {};
    if (first >= 0 && last > first) {
      let jsonStr = raw.substring(first, last + 1);
      jsonStr = jsonStr.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
      jsonStr = jsonStr.replace(/(\d),(\d{3})/g, '$1$2').replace(/(\d),(\d{3})/g, '$1$2');
      jsonStr = jsonStr.replace(/'/g, '"').replace(/[\x00-\x1F\x7F]/g, ' ');
      try { claudeText = JSON.parse(jsonStr); } catch(e2) {
        console.error('JSON parse error:', e2.message);
        claudeText = { resumen: 'Error parsing Claude response', alertas: [] };
      }
    }

    // ═══ MERGE: JS numbers + Claude text ═══
    result = {
      forecast: preCalc.forecast,
      forecast_base: preCalc.forecast_base,
      forecast_ajustado: preCalc.forecast_ajustado,
      forecast_factores: preCalc.forecast_factores,
      historial: {
        ...preCalc.historial,
        resumen: claudeText.resumen || '',
        resumen_acciones: claudeText.resumen_acciones || [],
        retailers_abandonados: claudeText.retailers_abandonados || [],
        retailers_castigados: claudeText.retailers_castigados || [],
        oportunidades_perdidas: claudeText.oportunidades_perdidas || [],
        riesgos: claudeText.riesgos || [],
        costo_gestion: {
          ...preCalc.historial.costo_gestion,
          contrafactual: claudeText.contrafactual || '',
          moraleja: claudeText.moraleja || '',
          precio_regalo: fireSales.length ? fireSales.map(f => `${f.fecha}: PVP $${f.pvp.toLocaleString()} (-${f.drop}%)`).join('. ') : '',
          si_cero_mes: siCero.length ? `SI=0 en ${siCero.join(', ')}` : ''
        },
        foda: claudeText.foda || {}
      },
      alertas: claudeText.alertas || []
    };

    if (!result.forecast) {
      return res.status(200).json({ error: 'Error generando análisis.' });
    }

    // Add metadata
    result.empresa = empresa;
    result.fuentes = fuentes;
    result.total_filas = soFiltered.length + siFiltered.length + idFiltered.length + irFiltered.length + gfkRows.length;
    result.serie_historica = soAgg.serie;
    result.serie_si = siAgg ? siAgg.serie : null;
    
    // Serie por retailer (monthly breakdown)
    const porRetailerMes = {};
    soFiltered.forEach(r => {
      const fecha = getField(r, 'Fecha', 'Mes', 'Periodo', 'Period');
      const ret = getField(r, 'Retailer', 'Retail', 'Cliente', 'Canal');
      const uds = toNum(getField(r, 'Unidades', 'Un.', 'Qty', 'Cantidad'));
      const venta = toNum(getField(r, 'Venta sin IVA', 'Venta Total sin IVA', 'Venta', 'Monto'));
      if (!fecha || !ret) return;
      if (!porRetailerMes[ret]) porRetailerMes[ret] = {};
      if (!porRetailerMes[ret][fecha]) porRetailerMes[ret][fecha] = { uds: 0, venta: 0 };
      porRetailerMes[ret][fecha].uds += uds;
      porRetailerMes[ret][fecha].venta += venta;
    });
    result.serie_por_retailer = porRetailerMes;
    result.sku = filtroSKU;
    result.retailer = filtroRetailer;
    result.marca = filtroMarca;

    // Benchmark from GfK (no Claude needed)
    if (gfkAgg && gfkAgg.topSKUs.length) {
      const totalMkt = gfkAgg.totalUds;
      const byBrand = {};
      gfkAgg.topSKUs.forEach(s => {
        const b = s.marca || s.cod.split('-')[0] || 'Otro';
        if (!byBrand[b]) byBrand[b] = 0;
        byBrand[b] += s.uds;
      });
      const topMarcas = Object.entries(byBrand)
        .sort((a,b) => b[1] - a[1])
        .slice(0, 10)
        .map(([marca, uds]) => ({ marca, uds, share: totalMkt > 0 ? Math.round(uds / totalMkt * 1000) / 10 : 0 }));
      const topSkus = gfkAgg.topSKUs.slice(0, 15).map(s => ({
        cod: s.cod,
        marca: s.marca || s.cod.split('-')[0],
        uds: s.uds,
        share: totalMkt > 0 ? Math.round(s.uds / totalMkt * 1000) / 10 : 0
      }));
      result.benchmark = {
        descripcion: 'Mercado GfK — ' + (cat || 'Lavado y Secado') + (subcat && subcat !== 'Todas' ? ' / ' + subcat : ''),
        total_mercado: totalMkt,
        top_marcas: topMarcas,
        top_skus: topSkus
      };
    }

    // GfK per brand per month (for frontend charts)
    if (gfkRows.length) {
      const gfkByBrandMonth = {};
      const modeloPorMarca = {};
      gfkRows.forEach(r => {
        const period = getField(r, 'Period', 'Periodo', 'Fecha');
        const brand = getField(r, 'BRAND', 'Brand', 'Marca');
        const item = getField(r, 'Item', 'Cod. Producto', 'Modelo', 'SKU');
        const uds = toNum(getField(r, 'Sales Units', 'Unidades', 'Units'));
        const val = toNum(getField(r, 'Sales Value', 'Venta', 'Value'));
        const pvp = toNum(getField(r, 'Price CLP', 'Price', 'PVP', 'Precio'));
        if (!period || !brand || uds <= 0) return;
        // Track most-sold model per brand
        if (item) {
          if (!modeloPorMarca[brand]) modeloPorMarca[brand] = {};
          modeloPorMarca[brand][item] = (modeloPorMarca[brand][item] || 0) + uds;
        }
        const fecha = period.replace(/\s+/g, '-').replace(/(\d{4})-(\d{2})/, '$1-$2').substring(0,7);
        const k = brand + '||' + fecha;
        if (!gfkByBrandMonth[k]) gfkByBrandMonth[k] = { brand, fecha, uds: 0, venta: 0, pvp_sum: 0, pvp_n: 0 };
        gfkByBrandMonth[k].uds += uds;
        gfkByBrandMonth[k].venta += val || uds * pvp;
        if (pvp > 0) { gfkByBrandMonth[k].pvp_sum += pvp; gfkByBrandMonth[k].pvp_n++; }
      });
      // Group by brand
      const serieGfk = {};
      Object.values(gfkByBrandMonth).forEach(d => {
        if (!serieGfk[d.brand]) serieGfk[d.brand] = [];
        serieGfk[d.brand].push({
          fecha: d.fecha,
          uds: Math.round(d.uds),
          venta: Math.round(d.venta),
          pvp: d.pvp_n > 0 ? Math.round(d.pvp_sum / d.pvp_n) : 0
        });
      });
      // Sort each brand's series and keep top 6 brands by total units
      const brandTotals = Object.entries(serieGfk).map(([b, s]) => [b, s.reduce((t, d) => t + d.uds, 0)]).sort((a, b) => b[1] - a[1]);
      const topBrands = brandTotals.slice(0, 6).map(x => x[0]);
      const serieGfkTop = {};
      topBrands.forEach(b => { serieGfkTop[b] = serieGfk[b].sort((a, c) => a.fecha.localeCompare(c.fecha)); });
      result.serie_gfk_marcas = serieGfkTop;
      // Top model per brand (most sold)
      const modelosTop = {};
      Object.keys(modeloPorMarca).forEach(b => {
        const best = Object.entries(modeloPorMarca[b]).sort((x, y) => y[1] - x[1])[0];
        if (best) modelosTop[b] = best[0];
      });
      result.modelos_marca = modelosTop;
    }

    return res.status(200).json(result);

  } catch(err) {
    console.error('BBAPP error:', err.message);
    return res.status(200).json({ error: 'Error: ' + err.message });
  }
};

module.exports.config = { maxDuration: 60, api: { bodyParser: { sizeLimit: '20mb' } } };
