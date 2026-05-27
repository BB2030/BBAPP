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

    // Prompt
    const today = new Date().toLocaleDateString('es-CL');
    const prompt = `Eres analista S&OP senior, 15 años en consumer goods Chile. Directo, brutal con los números. Todo en CLP.

HOY: ${today}
EMPRESA: ${empresa || 'No especificada'}
RUBRO: ${rubro || 'Electrohogar'}
CATEGORÍA: ${cat}
SUBCATEGORÍA: ${subcat}
${filtroMarca ? `MARCA SELECCIONADA: ${filtroMarca}` : ''}
${filtroRetailer ? `RETAILER SELECCIONADO: ${filtroRetailer}` : ''}
${filtroSKU ? `SKU SELECCIONADO: ${filtroSKU}` : ''}
${filtroSKU || filtroRetailer ? `\nANÁLISIS ESPECÍFICO: Analiza EXCLUSIVAMENTE ${filtroSKU || 'todos los SKUs'}${filtroRetailer ? ' en ' + filtroRetailer : ''}${filtroMarca ? ' marca ' + filtroMarca : ''}. El forecast, las alertas y todas las conclusiones deben ser sobre este producto/retailer específico. NO menciones otros SKUs ni otros retailers en las alertas salvo para comparar contra este. Piensa como el KAM responsable de este SKU en este retailer — qué necesita saber el lunes a las 8AM.` : ''}
REGLA CRÍTICA DE SUBCATEGORÍA: Analiza SOLO datos relevantes a "${subcat}". Si la subcategoría es "Lavadora Carga Superior", IGNORA secadoras, lava-secas, semi-automáticas, centrífugas, carga frontal. Las alertas deben ser SOLO sobre la subcategoría seleccionada. Si un SKU es de otra subcategoría (ej: secadora, lava-seca), NO lo menciones en las alertas.
FUENTES DISPONIBLES: ${fuentes.join(', ')} (${fuentes.length} fuentes)

═══ SELL OUT (${soAgg.serie.length} meses, ${soAgg.totalUds.toLocaleString()} un, $${soAgg.totalVenta.toLocaleString()} CLP) ═══
${soAgg.serie.map(d => `${d.fecha}: ${d.uds.toLocaleString()} un · $${d.venta.toLocaleString()}`).join('\n')}

TOP 10 SKUs SO: ${soAgg.topSKUs.map(s => `${s.cod}: ${s.uds.toLocaleString()} un`).join(' | ')}

SO POR RETAILER: ${soAgg.retailers.map(r => `${r.nombre}: ${r.uds.toLocaleString()} un`).join(' | ')}

${siAgg ? `═══ SELL IN (${siAgg.serie.length} meses, ${siAgg.totalUds.toLocaleString()} un) ═══
${siAgg.serie.map(d => `${d.fecha}: ${d.uds.toLocaleString()} un`).join('\n')}
SI POR RETAILER: ${siAgg.retailers.map(r => `${r.nombre}: ${r.uds.toLocaleString()} un`).join(' | ')}` : ''}

${idAgg ? `═══ INVENTARIO DISTRIBUIDOR (${idAgg.totalUds.toLocaleString()} un total) ═══
POR BODEGA: ${idAgg.retailers.map(r => `${r.nombre}: ${r.uds.toLocaleString()} un`).join(' | ')}
TOP SKUs INV: ${idAgg.topSKUs.slice(0,10).map(s => `${s.cod}: ${s.uds.toLocaleString()} un`).join(' | ')}` : ''}

${irAgg ? `═══ INVENTARIO RETAIL (${irAgg.totalUds.toLocaleString()} un total) ═══
POR RETAIL: ${irAgg.retailers.map(r => `${r.nombre}: ${r.uds.toLocaleString()} un`).join(' | ')}
TOP SKUs INV.R: ${irAgg.topSKUs.slice(0,10).map(s => `${s.cod}: ${s.uds.toLocaleString()} un`).join(' | ')}` : ''}

${gfkAgg ? `═══ GfK MERCADO (${gfkAgg.totalUds.toLocaleString()} un total mercado) ═══
SERIE MERCADO: ${gfkAgg.serie.map(d => `${d.fecha}: ${d.uds.toLocaleString()} un`).join('\n')}
TOP MARCAS GfK: ${gfkAgg.topSKUs.slice(0,10).map(s => `${s.cod}: ${s.uds.toLocaleString()} un`).join(' | ')}` : ''}

${MOTOR_LAVADO}

═══ TAREA ═══
Genera un análisis en JSON con EXACTAMENTE esta estructura. Usa los números REALES del dataset. NO inventes datos. Responde SOLO el JSON, sin markdown, sin backticks.

{
  "forecast": [{"mes":"Jul 26","uds":NUMERO,"venta":NUMERO}, ... 12 meses],
  "forecast_base": NUMERO,
  "forecast_ajustado": NUMERO,
  "forecast_factores": [{"factor":"TEXTO corto","impacto":"TEXTO 1 línea","efecto":"+X%" o "-X%"}, ... 3-5 factores],
  "alertas": [{"tipo":"CRITICA|ALTA|OPORTUNIDAD","monto":"$XXM","titulo":"TEXTO corto","detalle":"TEXTO 2-3 líneas max con números reales","accion":"TEXTO 1 línea acción específica"}, ... mínimo 3, máximo 6]
}

REGLAS FORECAST CRUZADO (NO es SO + 10%, es un forecast inteligente):
- forecast_base: promedio mensual SO últimos 6 meses × 12. Ese es el punto de partida SIN ajustar.
- forecast_ajustado: el total REAL que proyectas después de cruzar las 5 fuentes. Puede ser MENOR que el base.
- forecast_factores: cada factor que ajustó el forecast. Ejemplos:
  * SI/SO gap: si SI > SO por 3+ meses → canal cargado → demanda real es MENOR que SO (el retailer compra de más, no el consumidor)
  * Inventario: si DOH distribuidor > 90 días → no necesitas producir/importar → el SO futuro depende del sell-through, no del sell-in
  * GfK mercado: si mercado crece 10% pero tu SO crece 3% → estás perdiendo share → ajustar a la baja por presión competitiva
  * GfK competencia: si Midea/Samsung crecen en tu segmento → presión de precio → ajustar volumen o precio a la baja
  * Estacionalidad: multiplicadores reales del historial (peak BF/Navidad, dip verano)
  * Post-fábrica Maipú: lead time 10-12 semanas puede causar quiebres que deprimen SO
- forecast mensual: distribuir el forecast_ajustado mes a mes respetando estacionalidad real del historial
- Venta en CLP por mes
- El forecast debe EXPLICAR por qué el número es diferente al SO base. Si todas las fuentes dicen que va a bajar, el forecast BAJA. No maquilles.

REGLAS ALERTAS:
- MÍNIMO 3, MÁXIMO 6. Cada una cita números del dataset. Cruzar fuentes. Acción específica. Montos en CLP.
- Detalle: MÁXIMO 3 líneas. Conciso. Números concretos.
- NO generar JSON gigante. Mantenerlo compacto.`;

    // Claude
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    let result = null;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }]
    });

    const raw = response.content[0].text.trim()
      .replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    const first = raw.indexOf('{');
    const last = raw.lastIndexOf('}');
    if (first >= 0 && last > first) {
      result = JSON.parse(raw.substring(first, last + 1));
    }

    if (!result || !result.forecast) {
      return res.status(200).json({ error: 'El motor no pudo generar el análisis. Intenta de nuevo.' });
    }

    // Add metadata
    result.empresa = empresa;
    result.fuentes = fuentes;
    result.total_filas = soFiltered.length + siFiltered.length + idFiltered.length + irFiltered.length + gfkRows.length;
    result.serie_historica = soAgg.serie;
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

    return res.status(200).json(result);

  } catch(err) {
    console.error('BBAPP error:', err.message);
    return res.status(200).json({ error: 'Error: ' + err.message });
  }
};

module.exports.config = { maxDuration: 60 };
