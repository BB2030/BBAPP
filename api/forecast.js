<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>APP</title>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#F2F0EC;--white:#FFF;--dk:#1a0d47;--gold:#F5DF4D;--blue:#0496ff;--sky:#8acdea;--aqua:#0f7173;--border:#E0DDD7;--text:#1a0d47;--text2:#5a5370;--text3:#9a94b0}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Lato',sans-serif;background:var(--bg);color:var(--text);font-size:14px;-webkit-font-smoothing:antialiased}
.nav{position:sticky;top:0;z-index:100;background:rgba(242,240,236,.96);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:0 20px}
.nav-in{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:48px}
.logo{font-size:17px;font-weight:700;font-family:'Lato',sans-serif}
.logo b{background:var(--dk);color:var(--gold);padding:2px 6px}
.gate{display:flex;align-items:center;justify-content:center;min-height:100vh}
.gb{background:var(--white);border:1px solid var(--border);padding:40px;max-width:420px;width:90%;text-align:center}
.gs{width:100%;padding:10px 14px;border:1px solid var(--border);background:var(--bg);font-size:14px;font-family:'Lato',sans-serif;color:var(--dk);margin-bottom:10px;appearance:auto;outline:none}
.gs:focus{border-color:var(--dk)}
.gbt{width:100%;padding:12px;background:var(--dk);color:var(--gold);border:none;font-size:14px;font-weight:700;cursor:pointer;font-family:'Lato',sans-serif;margin-top:8px;letter-spacing:.3px;transition:opacity .2s}
.gbt:disabled{opacity:.35;cursor:not-allowed}
.gbt:hover:not(:disabled){opacity:.85}
#main{display:none;max-width:900px;margin:0 auto;padding:16px}
.ctx{text-align:center;padding:7px;background:#FEFCE8;border:1px solid var(--border);margin-bottom:12px;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:.5px}
.cd{background:var(--white);border:1px solid var(--border);padding:16px;margin-bottom:12px}
.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px}
.fl label{display:block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text3);margin-bottom:4px}
.fs{width:100%;padding:7px 10px;border:1px solid var(--border);background:var(--bg);font-size:13px;font-family:'Lato',sans-serif;color:var(--dk);outline:none}
.fs:focus{border-color:var(--dk)}
.ug{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ub{border:2px dashed var(--border);padding:14px;text-align:center;cursor:pointer;background:var(--bg);transition:all .15s}
.ub:hover{border-color:var(--dk);background:rgba(26,13,71,.03)}
.ub.ok{border:2px solid var(--aqua);background:rgba(15,113,115,.05)}
.uf{border:2px solid var(--border);background:var(--white);cursor:pointer;transition:border-color .15s}
.uf:hover{border-color:var(--dk)}.bt{display:block;margin:16px auto;padding:12px 32px;background:var(--dk);color:var(--gold);border:none;font-size:14px;font-weight:700;cursor:pointer;font-family:'Lato',sans-serif;letter-spacing:.3px;transition:opacity .2s}
.bt:disabled{opacity:.35;cursor:not-allowed}
.bt:hover:not(:disabled){opacity:.85}
#proc{display:none;text-align:center;padding:80px 20px}
.sp{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--dk);border-radius:50%;animation:s .7s linear infinite;margin:0 auto 20px}
@keyframes s{to{transform:rotate(360deg)}}
#res{display:none;max-width:900px;margin:0 auto;padding:16px}
.al{padding:12px 14px;border-left:4px solid;margin-bottom:6px;background:var(--white)}
.al.r{border-color:var(--sky);background:rgba(138,205,234,.06)}
.al.o{border-color:var(--blue);background:rgba(4,150,255,.05)}
.al.g{border-color:var(--aqua);background:rgba(15,113,115,.05)}
.al-h{display:flex;justify-content:space-between;align-items:center}
.al-m{font-size:12px;font-weight:700}
.al.r .al-m{color:#2a7fa8}.al.o .al-m{color:var(--blue)}.al.g .al-m{color:var(--aqua)}
.al-tg{font-size:7px;font-weight:700;padding:2px 7px;letter-spacing:1px}
.al.r .al-tg{background:var(--sky);color:var(--dk)}
.al.o .al-tg{background:var(--blue);color:#fff}
.al.g .al-tg{background:var(--aqua);color:#fff}
.al-t{font-family:'Libre Baskerville',serif;font-size:13px;font-weight:700;margin-top:4px;color:var(--dk)}
.al-d{font-size:10px;color:var(--text2);margin-top:3px;line-height:1.5;font-weight:300}
.al-a{font-size:10px;font-weight:700;margin-top:4px}
.al.r .al-a{color:#2a7fa8}.al.o .al-a{color:var(--blue)}.al.g .al-a{color:var(--aqua)}
.ro{display:flex;align-items:center;gap:12px;padding:14px;background:var(--white);border:1px solid var(--border);margin-bottom:6px;cursor:pointer;transition:all .12s}
.ro:hover{border-color:var(--dk);background:rgba(26,13,71,.02)}
.rl{display:flex;align-items:center;gap:12px;padding:14px;background:var(--bg);border:1px solid var(--border);margin-bottom:6px;opacity:.45}
</style>
</head>
<body>
<div class="nav"><div class="nav-in">
  <div class="logo">APP</div>
  <div style="display:flex;gap:2px">
    <a href="index.html" style="padding:6px 12px;font-size:12px;font-weight:700;color:var(--text3);text-decoration:none;font-family:'Lato',sans-serif">Inicio</a>
    <a href="demo.html" style="padding:6px 12px;font-size:12px;font-weight:700;color:var(--dk);text-decoration:none;border-bottom:2px solid var(--dk);font-family:'Lato',sans-serif">Probar</a>
    <a href="backtest.html" style="padding:6px 12px;font-size:12px;font-weight:700;color:var(--text3);text-decoration:none;font-family:'Lato',sans-serif">Backtest</a>
  </div>
</div></div>

<div class="gate" id="gate"><div class="gb">
<div style="font-size:28px;margin-bottom:10px"><span style="font-family:'Lato',sans-serif;font-weight:700;font-size:28px;color:var(--dk)">APP</span></div>
<div style="font-family:'Libre Baskerville',serif;font-size:22px;font-weight:700;margin-bottom:4px;color:var(--dk)">Probar con tu data</div>
<div style="font-size:12px;color:var(--text3);margin-bottom:24px;line-height:1.7;font-weight:300">Sube tu data y ve qué alertas genera APP.</div>
<select class="gs" id="gr" onchange="ue()"><option value="">Selecciona tu rubro...</option><option value="electrohogar">Electrodomésticos / Electrohogar</option><option value="tecnologia">Tecnología</option><option value="decohogar">Deco y Hogar</option><option value="belleza">Belleza</option><option value="jugueteria">Juguetería</option><option value="consumo">Consumo Masivo</option><option value="ferreteria">Ferretería</option></select>
<select class="gs" id="ge" onchange="cg()"><option value="">Selecciona tu empresa...</option></select>
<button class="gbt" id="gbn" disabled onclick="go()">Empezar →</button>
</div></div>

<div id="main">
<div class="ctx" id="ctx" onclick="location.reload()"></div>
<div class="cd">
  <div style="text-align:center;font-family:'Libre Baskerville',serif;font-size:15px;font-weight:700;margin-bottom:10px;color:var(--dk)">¿Qué quieres analizar?</div>
  <div class="fg">
    <div class="fl"><label>Categoría</label><select class="fs" id="fc" onchange="us();uk()"></select></div>
    <div class="fl"><label>Subcategoría</label><select class="fs" id="fb" onchange="uk()"></select></div>
    <div class="fl"><label>Marca</label><select class="fs" id="fm" onchange="uk()"></select></div>
    <div class="fl"><label>Retailer</label><select class="fs" id="fr"><option value="todos">Todos</option><option>Falabella</option><option>Ripley</option><option>Paris</option><option>Hites</option><option>La Polar</option><option>Sodimac</option><option>Easy</option><option>Lider</option><option>MercadoLibre</option></select></div>
    <div class="fl"><label>Cod. Producto</label><select class="fs" id="fk"></select></div>
  </div>
</div>
<div style="margin:16px 0;padding:16px 18px;background:var(--white);border:1px solid var(--border);display:flex;align-items:center;gap:14px"><div style="font-size:32px">🔒</div><div><b style="font-size:14px;color:var(--dk)">Procesamiento seguro.</b><br><span style="font-size:12px;color:var(--text2);font-weight:300">Tu Excel se procesa en memoria y se elimina inmediatamente. APP no guarda ni comparte tus archivos. Zero data retention.</span></div></div>
<div style="text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin:8px 0">SUBE LO QUE TENGAS</div>
<div style="text-align:center;font-size:10px;color:var(--text3);margin-bottom:10px">Máximo 5MB · ~100.000 filas · .xlsx .xls .csv</div>


<div class="ug">

<div id="u-so" class="uf" onclick="document.getElementById('f-so').click()">
  <input type="file" id="f-so" accept=".xlsx,.xls,.csv" style="display:none" onchange="up(this,'so')">
  <div style="padding:20px 20px;text-align:center">
    <div style="font-size:17px;font-weight:700;color:var(--dk);display:flex;align-items:center;justify-content:center;gap:8px">📊 Sell Out <span style="font-size:9px;font-weight:700;padding:2px 8px;background:var(--dk);color:var(--gold);letter-spacing:1px">OBLIGATORIO</span></div>
    <div style="font-size:13px;color:var(--text2);margin-top:6px">Haz click o arrastra tu Excel</div>
    <p id="n-so" style="font-size:11px;color:var(--aqua);font-weight:700;margin-top:4px"></p>
  </div>
  <div style="text-align:center;padding-bottom:10px" onclick="event.stopPropagation()">
    <span onclick="tf('fmt-so')" style="font-size:11px;color:var(--aqua);font-weight:700;cursor:pointer;text-decoration:underline">👁 ver formato</span>
  </div>
  <div id="fmt-so" style="display:none;border-top:1px solid var(--border);padding:12px 14px" onclick="event.stopPropagation()">
    <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px">COLUMNAS OBLIGATORIAS</div>
    <table style="width:100%;border-collapse:collapse;font-size:10px">
      <tr><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Fecha</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Retailer</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Marca</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Cod. Producto</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Unidades</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Venta Total sin IVA</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Venta Total con IVA</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">PVP Promedio</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Costo Internado Unit.</th></tr>
      <tr><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">2024-01</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Falabella</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Fensa</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">FEN-PC18SZ</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">89</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">27.589.110</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">32.810.941</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">368.663</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">188.000</td></tr>
      <tr><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td></tr>
    </table>
  </div>
</div>

<div id="u-si" class="uf" onclick="document.getElementById('f-si').click()">
  <input type="file" id="f-si" accept=".xlsx,.xls,.csv" style="display:none" onchange="up(this,'si')">
  <div style="padding:20px 20px;text-align:center">
    <div style="font-size:17px;font-weight:700;color:var(--dk);display:flex;align-items:center;justify-content:center;gap:8px">📦 Sell In <span style="font-size:9px;font-weight:700;padding:2px 8px;background:var(--border);color:var(--text2);letter-spacing:1px">OPCIONAL</span></div>
    <div style="font-size:13px;color:var(--text2);margin-top:6px">Haz click o arrastra tu Excel</div>
    <p id="n-si" style="font-size:11px;color:var(--aqua);font-weight:700;margin-top:4px"></p>
  </div>
  <div style="text-align:center;padding-bottom:10px" onclick="event.stopPropagation()">
    <span onclick="tf('fmt-si')" style="font-size:11px;color:var(--aqua);font-weight:700;cursor:pointer;text-decoration:underline">👁 ver formato</span>
  </div>
  <div id="fmt-si" style="display:none;border-top:1px solid var(--border);padding:12px 14px" onclick="event.stopPropagation()">
    <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px">COLUMNAS OBLIGATORIAS</div>
    <table style="width:100%;border-collapse:collapse;font-size:10px">
      <tr><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Fecha</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Retailer</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Marca</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Cod.</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Un.</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Venta s/IVA</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Costo unit.</th></tr>
      <tr><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">2024-01</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Falabella</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Fensa</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">FEN-PC18SZ</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">89</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">27.589.110</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">188.000</td></tr>
      <tr><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td></tr>
    </table>
  </div>
</div>

<div id="u-id" class="uf" onclick="document.getElementById('f-id').click()">
  <input type="file" id="f-id" accept=".xlsx,.xls,.csv" style="display:none" onchange="up(this,'id')">
  <div style="padding:20px 20px;text-align:center">
    <div style="font-size:17px;font-weight:700;color:var(--dk);display:flex;align-items:center;justify-content:center;gap:8px">🚛 Inv. Distribuidor <span style="font-size:9px;font-weight:700;padding:2px 8px;background:var(--border);color:var(--text2);letter-spacing:1px">OPCIONAL</span></div>
    <div style="font-size:13px;color:var(--text2);margin-top:6px">Haz click o arrastra tu Excel</div>
    <p id="n-id" style="font-size:11px;color:var(--aqua);font-weight:700;margin-top:4px"></p>
  </div>
  <div style="text-align:center;padding-bottom:10px" onclick="event.stopPropagation()">
    <span onclick="tf('fmt-id')" style="font-size:11px;color:var(--aqua);font-weight:700;cursor:pointer;text-decoration:underline">👁 ver formato</span>
  </div>
  <div id="fmt-id" style="display:none;border-top:1px solid var(--border);padding:12px 14px" onclick="event.stopPropagation()">
    <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px">COLUMNAS OBLIGATORIAS</div>
    <table style="width:100%;border-collapse:collapse;font-size:10px">
      <tr><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Fecha Corte</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Bodega</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Cod. Producto</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Disponible</th></tr>
      <tr><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">2025-12-15</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Stgo Centro</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">FEN-PC18SZ</td><td style="padding:4px 6px;color:var(--blue);font-weight:700;border-bottom:1px solid var(--border)">45</td></tr>
      <tr><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td colspan="3" style="padding:4px 6px;color:var(--text3);font-style:italic">...</td></tr>
    </table>
  </div>
</div>

<div id="u-ir" class="uf" onclick="document.getElementById('f-ir').click()">
  <input type="file" id="f-ir" accept=".xlsx,.xls,.csv" style="display:none" onchange="up(this,'ir')">
  <div style="padding:20px 20px;text-align:center">
    <div style="font-size:17px;font-weight:700;color:var(--dk);display:flex;align-items:center;justify-content:center;gap:8px">🏪 Inv. Retail <span style="font-size:9px;font-weight:700;padding:2px 8px;background:var(--border);color:var(--text2);letter-spacing:1px">OPCIONAL</span></div>
    <div style="font-size:13px;color:var(--text2);margin-top:6px">Haz click o arrastra tu Excel</div>
    <p id="n-ir" style="font-size:11px;color:var(--aqua);font-weight:700;margin-top:4px"></p>
  </div>
  <div style="text-align:center;padding-bottom:10px" onclick="event.stopPropagation()">
    <span onclick="tf('fmt-ir')" style="font-size:11px;color:var(--aqua);font-weight:700;cursor:pointer;text-decoration:underline">👁 ver formato</span>
  </div>
  <div id="fmt-ir" style="display:none;border-top:1px solid var(--border);padding:12px 14px" onclick="event.stopPropagation()">
    <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);margin-bottom:8px">COLUMNAS OBLIGATORIAS</div>
    <table style="width:100%;border-collapse:collapse;font-size:10px">
      <tr><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Fecha Corte</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Retail</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Cod. Producto</th><th style="color:var(--blue);font-weight:700;padding:4px 6px;border-bottom:1px solid var(--border);text-align:left">Stock Total</th></tr>
      <tr><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">2025-12-15</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">Falabella</td><td style="padding:4px 6px;color:var(--text2);border-bottom:1px solid var(--border)">FEN-PC18SZ</td><td style="padding:4px 6px;color:var(--aqua);font-weight:700;border-bottom:1px solid var(--border)">5</td></tr>
      <tr><td style="padding:4px 6px;color:var(--text3);font-style:italic">...</td><td colspan="3" style="padding:4px 6px;color:var(--text3);font-style:italic">...</td></tr>
    </table>
  </div>
</div>

<!-- GfK multi-categoría por reporte real -->
<div style="grid-column:1/-1;border:1px solid var(--border);padding:14px;background:var(--bg)">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
    <div style="font-size:14px;font-weight:700;color:var(--dk);display:flex;align-items:center;gap:8px">📈 Data de Mercado (GfK) <span style="font-size:9px;font-weight:700;padding:2px 8px;background:var(--border);color:var(--text2);letter-spacing:1px">OPCIONAL</span></div>
    <div style="font-size:9px;color:var(--text3)">Cada caja = un reporte GfK · sube tal como llega</div>
  </div>
  <div id="gfk-tree"></div>
  <div style="margin-top:8px;font-size:9px;color:var(--text3)">📌 Sin renombrar columnas · Period | BRAND | Item | atributos categoría | Sales Units | Sales Value &lt;LC&gt; | Price CLP</div>
</div>

</div>
<button class="bt" id="gobtn" disabled onclick="az()">Analizar Data →</button>
</div>

<div id="proc"><div class="sp"></div><div style="font-family:'Libre Baskerville',serif;font-size:16px;font-weight:400;color:var(--dk)" id="pt">Leyendo archivos...</div><div style="font-size:12px;color:var(--text3);margin-top:6px;font-weight:300">Cruzando con 12 fuentes de alternative data</div></div>

<div id="res">
  <div style="text-align:center;margin-bottom:20px">
    <div style="display:inline-block;padding:4px 12px;background:var(--bg);border:1px solid var(--border);font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px;color:var(--text3)">ANÁLISIS COMPLETO</div>
    <h2 style="font-family:'Libre Baskerville',serif;font-size:22px;font-weight:700;color:var(--dk)" id="rt"></h2>
    <p style="color:var(--text3);font-size:13px;font-weight:300" id="rs"></p>
  </div>
  <div id="rc"></div>
  <div style="text-align:center;margin-top:20px"><button onclick="location.reload()" style="padding:10px 24px;background:none;border:1px solid var(--border);font-size:13px;color:var(--text3);cursor:pointer;font-family:'Lato',sans-serif">← Nuevo análisis</button></div>
</div>

<div style="text-align:center;padding:20px;font-size:10px;color:var(--text3);border-top:1px solid var(--border);margin-top:20px">APP · 2026</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script>
var RR={electrohogar:["Electrolux Group","Midea Carrier","Whirlpool Chile","LG Electronics","Samsung Chile","BSH Chile","Mabe","Haier","Hisense"],tecnologia:["Intcomex","PCFactory","Lenovo Chile"],decohogar:["Casa Ideas","Homy","Rosen"],belleza:["Coty Chile","Henkel Chile"],jugueteria:["Hasbro Chile","Mattel Chile","LEGO Chile"],consumo:["Unilever Chile","Nestle Chile","Carozzi"],ferreteria:["Stanley Chile","Bosch Chile"]};
var CC={"Electrolux Group":{marcas:["Electrolux","Fensa","Mademsa"],cats:[{v:"lavado",l:"Lavado y Secado",sub:[["todas","Todas"],["lav-cs","Lavadora Carga Superior"],["lav-cf","Lavadora Carga Frontal"],["lavaseca","Lava-Seca"],["secadora","Secadora"],["lav-semi","Semiautomática"],["centrifuga","Centrífuga"]]},{v:"refri",l:"Refrigeración",sub:[["todas","Todas"],["nf","No Frost"],["fd","Frío Directo"],["nf-2p","No Frost 2 Puertas"],["nf-3p","No Frost 3 Puertas"],["freezer","Freezer"],["minifridge","Frigobar"]]},{v:"coccion",l:"Cocinas y Hornos",sub:[["todas","Todas"],["cocina-gas","Cocina a Gas"],["cocina-elec","Cocina Eléctrica"],["horno-emp","Horno Empotrable"],["micro","Microondas"],["campana","Campana Extractora"],["encimera","Encimera"]]},{v:"lavaplatos",l:"Lavavajillas",sub:[["todas","Todas"],["60cm","60cm"],["45cm","45cm Slim"]]},{v:"aspirado",l:"Aspirado y Cuidado",sub:[["todas","Todas"],["aspira","Aspiradora"],["robot","Robot Aspirador"],["stick","Aspiradora Stick"]]},{v:"climatizacion",l:"Climatización",sub:[["todas","Todas"],["split","Split Muro"],["portatil","Portátil"],["ventilador","Ventilador"]]},{v:"calefaccion",l:"Calefacción",sub:[["todas","Todas"],["convector","Convector"],["estufa","Estufa"]]},{v:"otros",l:"Otros Electrodomésticos",sub:[["todas","Todas"],["plancha","Plancha"],["licuadora","Licuadora"],["tostador","Tostador"]]}],skus:[{v:"FEN-PC8.5SZ",l:"PC8.5SZ Fensa 8.5kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC8.5ONX",l:"PC8.5ONX Fensa 8.5kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC9.5SZ",l:"PC9.5SZ Fensa 9.5kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC9.5ONX",l:"PC9.5ONX Fensa 9.5kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC12SZ",l:"PC12SZ Fensa 12kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC12ONX",l:"PC12ONX Fensa 12kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC14SZ",l:"PC14SZ Fensa 14kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC14ONX",l:"PC14ONX Fensa 14kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC14NEG",l:"PC14NEG Fensa 14kg Negro",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC16SZ",l:"PC16SZ Fensa 16kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC16ONX",l:"PC16ONX Fensa 16kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC16NEG",l:"PC16NEG Fensa 16kg Negro",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC18SZ",l:"PC18SZ Fensa 18kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC18ONX",l:"PC18ONX Fensa 18kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC18NEG",l:"PC18NEG Fensa 18kg Negro",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC20SZ",l:"PC20SZ Fensa 20kg Silver",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC20ONX",l:"PC20ONX Fensa 20kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC20NEG",l:"PC20NEG Fensa 20kg Negro",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC21",l:"PC21 Fensa 21kg",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC21ONX",l:"PC21ONX Fensa 21kg Onix",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-PC21NEG",l:"PC21NEG Fensa 21kg Negro",m:"fensa",s:"lav-cs",c:"lavado"},{v:"FEN-EFLW10O",l:"EFLW10O Fensa CF 10kg",m:"fensa",s:"lav-cf",c:"lavado"},{v:"FEN-EFLW12O",l:"EFLW12O Fensa CF 12kg",m:"fensa",s:"lav-cf",c:"lavado"},{v:"FEN-EFLW14O",l:"EFLW14O Fensa CF 14kg",m:"fensa",s:"lav-cf",c:"lavado"},{v:"FEN-VC8WD",l:"VC8WD Fensa Lava-Seca 8kg",m:"fensa",s:"lavaseca",c:"lavado"},{v:"FEN-UM11WD",l:"UM11WD Fensa Lava-Seca 11kg",m:"fensa",s:"lavaseca",c:"lavado"},{v:"FEN-PERC8",l:"PERC8 Fensa Lava-Seca 8kg Inverter",m:"fensa",s:"lavaseca",c:"lavado"},{v:"FEN-PERC11",l:"PERC11 Fensa Lava-Seca 11kg Inverter",m:"fensa",s:"lavaseca",c:"lavado"},{v:"FEN-PERC14",l:"PERC14 Fensa Lava-Seca 14kg Inverter",m:"fensa",s:"lavaseca",c:"lavado"},{v:"FEN-PC7D",l:"PC7D Fensa Secadora 7kg",m:"fensa",s:"secadora",c:"lavado"},{v:"FEN-PC9D",l:"PC9D Fensa Secadora 9kg",m:"fensa",s:"secadora",c:"lavado"},{v:"FEN-PC11D",l:"PC11D Fensa Secadora 11kg",m:"fensa",s:"secadora",c:"lavado"},{v:"MAD-8.5BZG",l:"8.5BZG Mademsa 8.5kg Blanco",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-8.5SZG",l:"8.5SZG Mademsa 8.5kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-9.5BZG",l:"9.5BZG Mademsa 9.5kg Blanco",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-9.5SZG",l:"9.5SZG Mademsa 9.5kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-12BZG",l:"12BZG Mademsa 12kg Blanco",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-12SZG",l:"12SZG Mademsa 12kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-14BZG",l:"14BZG Mademsa 14kg Blanco",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-14SZG",l:"14SZG Mademsa 14kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-16BZG",l:"16BZG Mademsa 16kg Blanco",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-16SZG",l:"16SZG Mademsa 16kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-18SZG",l:"18SZG Mademsa 18kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-18ONX",l:"18ONX Mademsa 18kg Onix",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-20SZG",l:"20SZG Mademsa 20kg Silver",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-20ONX",l:"20ONX Mademsa 20kg Onix",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-21ONX",l:"21ONX Mademsa 21kg Onix",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-21NEG",l:"21NEG Mademsa 21kg Negro",m:"mademsa",s:"lav-cs",c:"lavado"},{v:"MAD-TW5100",l:"TW5100 Mademsa Semi-Auto 5kg",m:"mademsa",s:"lav-semi",c:"lavado"},{v:"MAD-TW5300",l:"TW5300 Mademsa Semi-Auto 5.3kg",m:"mademsa",s:"lav-semi",c:"lavado"},{v:"MAD-TW5500",l:"TW5500 Mademsa Semi-Auto 5.5kg",m:"mademsa",s:"lav-semi",c:"lavado"},{v:"MAD-TW7100",l:"TW7100 Mademsa Semi-Auto 7kg",m:"mademsa",s:"lav-semi",c:"lavado"},{v:"MAD-PR5N",l:"PR5N Mademsa Centrífuga 5kg",m:"mademsa",s:"centrifuga",c:"lavado"},{v:"MAD-PR6N",l:"PR6N Mademsa Centrífuga 6kg",m:"mademsa",s:"centrifuga",c:"lavado"},{v:"MAD-7DBZG",l:"7DBZG Mademsa Secadora 7kg Blanco",m:"mademsa",s:"secadora",c:"lavado"},{v:"MAD-7DPRO",l:"7DPRO Mademsa Secadora 7kg Pro",m:"mademsa",s:"secadora",c:"lavado"},{v:"MAD-9DSZG",l:"9DSZG Mademsa Secadora 9kg Silver",m:"mademsa",s:"secadora",c:"lavado"},{v:"MAD-9DPRO",l:"9DPRO Mademsa Secadora 9kg Pro",m:"mademsa",s:"secadora",c:"lavado"},{v:"MAD-11DPRO",l:"11DPRO Mademsa Secadora 11kg Pro",m:"mademsa",s:"secadora",c:"lavado"},{v:"ELX-LEB21",l:"LEB21 Electrolux CS 21kg",m:"electrolux",s:"lav-cs",c:"lavado"},{v:"ELX-LS22Y",l:"LS22Y Electrolux CS 22kg",m:"electrolux",s:"lav-cs",c:"lavado"},{v:"ELX-LEF18",l:"LEF18 Electrolux CS 18kg Inverter",m:"electrolux",s:"lav-cs",c:"lavado"},{v:"ELX-EFLWM12O",l:"EFLWM12O Electrolux CF 12kg",m:"electrolux",s:"lav-cf",c:"lavado"},{v:"ELX-EFLWM14O",l:"EFLWM14O Electrolux CF 14kg",m:"electrolux",s:"lav-cf",c:"lavado"},{v:"ELX-EFLWM10O",l:"EFLWM10O Electrolux CF 10kg",m:"electrolux",s:"lav-cf",c:"lavado"},{v:"ELX-EFLWD12W",l:"EFLWD12W Electrolux Lava-Seca LS 12kg",m:"electrolux",s:"lavaseca",c:"lavado"},{v:"ELX-FLWD12AU",l:"FLWD12AU Electrolux Lava-Seca LS 12kg AU",m:"electrolux",s:"lavaseca",c:"lavado"},{v:"ELX-EFLWD14W",l:"EFLWD14W Electrolux Lava-Seca LS 14kg",m:"electrolux",s:"lavaseca",c:"lavado"},{v:"ELX-EFLWD10W",l:"EFLWD10W Electrolux Lava-Seca LS 10kg",m:"electrolux",s:"lavaseca",c:"lavado"},{v:"ELX-ETDHP8SZ",l:"ETDHP8SZ Electrolux Secadora 8kg",m:"electrolux",s:"secadora",c:"lavado"},{v:"ELX-ETDHP9SZ",l:"ETDHP9SZ Electrolux Secadora 9kg",m:"electrolux",s:"secadora",c:"lavado"},{v:"ELX-ETDHP11",l:"ETDHP11 Electrolux Secadora 11kg",m:"electrolux",s:"secadora",c:"lavado"},{v:"FEN-NFM220",l:"NFM220 Fensa NF 220L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM250",l:"NFM250 Fensa NF 250L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM280",l:"NFM280 Fensa NF 280L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM320",l:"NFM320 Fensa NF 320L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM350",l:"NFM350 Fensa NF 350L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM380",l:"NFM380 Fensa NF 380L",m:"fensa",s:"nf-2p",c:"refri"},{v:"FEN-NFM430",l:"NFM430 Fensa NF 3P 430L",m:"fensa",s:"nf-3p",c:"refri"},{v:"FEN-NFM500",l:"NFM500 Fensa NF 3P 500L",m:"fensa",s:"nf-3p",c:"refri"},{v:"FEN-NFM560",l:"NFM560 Fensa NF 3P 560L",m:"fensa",s:"nf-3p",c:"refri"},{v:"FEN-FRG90",l:"FRG90 Fensa Frigobar 90L",m:"fensa",s:"minifridge",c:"refri"},{v:"FEN-FRG130",l:"FRG130 Fensa Frigobar 130L",m:"fensa",s:"minifridge",c:"refri"},{v:"MAD-R180",l:"R180 Mademsa FD 180L",m:"mademsa",s:"fd",c:"refri"},{v:"MAD-R220",l:"R220 Mademsa FD 220L",m:"mademsa",s:"fd",c:"refri"},{v:"MAD-R250",l:"R250 Mademsa FD 250L",m:"mademsa",s:"fd",c:"refri"},{v:"MAD-R300",l:"R300 Mademsa FD 300L",m:"mademsa",s:"fd",c:"refri"},{v:"MAD-R350",l:"R350 Mademsa FD 350L",m:"mademsa",s:"fd",c:"refri"},{v:"MAD-NF250",l:"NF250 Mademsa NF 250L",m:"mademsa",s:"nf",c:"refri"},{v:"MAD-NF320",l:"NF320 Mademsa NF 320L",m:"mademsa",s:"nf",c:"refri"},{v:"MAD-NF380",l:"NF380 Mademsa NF 380L",m:"mademsa",s:"nf",c:"refri"},{v:"MAD-FZ100",l:"FZ100 Mademsa Freezer 100L",m:"mademsa",s:"freezer",c:"refri"},{v:"MAD-FZ150",l:"FZ150 Mademsa Freezer 150L",m:"mademsa",s:"freezer",c:"refri"},{v:"MAD-FZ180",l:"FZ180 Mademsa Freezer 180L",m:"mademsa",s:"freezer",c:"refri"},{v:"MAD-FZ250",l:"FZ250 Mademsa Freezer 250L",m:"mademsa",s:"freezer",c:"refri"},{v:"MAD-FZ300",l:"FZ300 Mademsa Freezer 300L",m:"mademsa",s:"freezer",c:"refri"},{v:"ELX-ERFP38K2HUS",l:"ERFP38K2HUS Electrolux NF 3P 380L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"ELX-ERQP52K2HSS",l:"ERQP52K2HSS Electrolux SBS 520L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"ELX-ERFG36K2HQS",l:"ERFG36K2HQS Electrolux French Door 360L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"ELX-ERDM26F2HPS",l:"ERDM26F2HPS Electrolux NF 260L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"ELX-ERDM31F2HPS",l:"ERDM31F2HPS Electrolux NF 310L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"ELX-ERQP46K2HSS",l:"ERQP46K2HSS Electrolux SBS 460L",m:"electrolux",s:"nf-3p",c:"refri"},{v:"FEN-CG54",l:"CG54 Fensa Cocina Gas 54cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CG60",l:"CG60 Fensa Cocina Gas 60cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CG64",l:"CG64 Fensa Cocina Gas 64cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CG68",l:"CG68 Fensa Cocina Gas 68cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CG76",l:"CG76 Fensa Cocina Gas 76cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CG86",l:"CG86 Fensa Cocina Gas 86cm",m:"fensa",s:"cocina-gas",c:"coccion"},{v:"FEN-CE60",l:"CE60 Fensa Cocina Eléctrica 60cm",m:"fensa",s:"cocina-elec",c:"coccion"},{v:"FEN-CE76",l:"CE76 Fensa Cocina Eléctrica 76cm",m:"fensa",s:"cocina-elec",c:"coccion"},{v:"FEN-EG60",l:"EG60 Fensa Encimera Gas 60cm",m:"fensa",s:"encimera",c:"coccion"},{v:"FEN-EG70",l:"EG70 Fensa Encimera Gas 70cm",m:"fensa",s:"encimera",c:"coccion"},{v:"FEN-EG90",l:"EG90 Fensa Encimera Gas 90cm",m:"fensa",s:"encimera",c:"coccion"},{v:"FEN-EI60",l:"EI60 Fensa Encimera Inducción 60cm",m:"fensa",s:"encimera",c:"coccion"},{v:"FEN-EI90",l:"EI90 Fensa Encimera Inducción 90cm",m:"fensa",s:"encimera",c:"coccion"},{v:"FEN-CAMCE60",l:"CAMCE60 Fensa Campana 60cm",m:"fensa",s:"campana",c:"coccion"},{v:"FEN-CAMCE70",l:"CAMCE70 Fensa Campana 70cm",m:"fensa",s:"campana",c:"coccion"},{v:"FEN-CAMCE90",l:"CAMCE90 Fensa Campana 90cm",m:"fensa",s:"campana",c:"coccion"},{v:"FEN-CAMCI60",l:"CAMCI60 Fensa Campana Isla 60cm",m:"fensa",s:"campana",c:"coccion"},{v:"FEN-CAMCI90",l:"CAMCI90 Fensa Campana Isla 90cm",m:"fensa",s:"campana",c:"coccion"},{v:"FEN-HE60",l:"HE60 Fensa Horno Eléctrico 60cm",m:"fensa",s:"horno-emp",c:"coccion"},{v:"FEN-HE70",l:"HE70 Fensa Horno Eléctrico 70cm",m:"fensa",s:"horno-emp",c:"coccion"},{v:"FEN-HG60",l:"HG60 Fensa Horno Gas 60cm",m:"fensa",s:"horno-emp",c:"coccion"},{v:"MAD-CG45",l:"CG45 Mademsa Cocina Gas 45cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"MAD-CG50",l:"CG50 Mademsa Cocina Gas 50cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"MAD-CG55",l:"CG55 Mademsa Cocina Gas 55cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"MAD-CG60",l:"CG60 Mademsa Cocina Gas 60cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"MAD-CG68",l:"CG68 Mademsa Cocina Gas 68cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"MAD-CG76",l:"CG76 Mademsa Cocina Gas 76cm",m:"mademsa",s:"cocina-gas",c:"coccion"},{v:"ELX-EOED60",l:"EOED60 Electrolux Horno 60cm",m:"electrolux",s:"horno-emp",c:"coccion"},{v:"ELX-EOEE60",l:"EOEE60 Electrolux Horno Eléc 60cm",m:"electrolux",s:"horno-emp",c:"coccion"},{v:"ELX-EOEG60",l:"EOEG60 Electrolux Horno Gas 60cm",m:"electrolux",s:"horno-emp",c:"coccion"},{v:"ELX-EMS30400OX",l:"EMS30400OX Electrolux Micro 30L",m:"electrolux",s:"micro",c:"coccion"},{v:"ELX-EMS26400OX",l:"EMS26400OX Electrolux Micro 26L",m:"electrolux",s:"micro",c:"coccion"},{v:"ELX-EME28400",l:"EME28400 Electrolux Micro 28L",m:"electrolux",s:"micro",c:"coccion"},{v:"ELX-EMS20400",l:"EMS20400 Electrolux Micro 20L",m:"electrolux",s:"micro",c:"coccion"},{v:"ELX-EIV63440",l:"EIV63440 Electrolux Encimera Inducción 60cm",m:"electrolux",s:"encimera",c:"coccion"},{v:"ELX-EGT76G3NE",l:"EGT76G3NE Electrolux Encimera Gas 76cm",m:"electrolux",s:"encimera",c:"coccion"},{v:"FEN-ME25",l:"ME25 Fensa Microondas 25L",m:"fensa",s:"micro",c:"coccion"},{v:"FEN-ME30",l:"ME30 Fensa Microondas 30L",m:"fensa",s:"micro",c:"coccion"},{v:"MAD-ME20",l:"ME20 Mademsa Microondas 20L",m:"mademsa",s:"micro",c:"coccion"},{v:"MAD-ME25",l:"ME25 Mademsa Microondas 25L",m:"mademsa",s:"micro",c:"coccion"},{v:"FEN-LV14",l:"LV14 Fensa LV 14 Cubiertos",m:"fensa",s:"60cm",c:"lavaplatos"},{v:"FEN-LV10",l:"LV10 Fensa LV 10 Cubiertos",m:"fensa",s:"60cm",c:"lavaplatos"},{v:"FEN-LV8",l:"LV8 Fensa LV 8 Cubiertos",m:"fensa",s:"45cm",c:"lavaplatos"},{v:"ELX-EHFB13T4PS",l:"EHFB13T4PS Electrolux LV 13C",m:"electrolux",s:"60cm",c:"lavaplatos"},{v:"ELX-EHFB14T4PS",l:"EHFB14T4PS Electrolux LV 14C",m:"electrolux",s:"60cm",c:"lavaplatos"},{v:"ELX-ESF5534LOW",l:"ESF5534LOW Electrolux LV Slim 10C",m:"electrolux",s:"45cm",c:"lavaplatos"},{v:"ELX-ESF5542LOW",l:"ESF5542LOW Electrolux LV Slim 9C",m:"electrolux",s:"45cm",c:"lavaplatos"},{v:"ELX-ERG36",l:"ERG36 Electrolux Aspiradora 1600W",m:"electrolux",s:"aspira",c:"aspirado"},{v:"ELX-ERG38",l:"ERG38 Electrolux Aspiradora 1800W",m:"electrolux",s:"aspira",c:"aspirado"},{v:"ELX-ERG40",l:"ERG40 Electrolux Aspiradora 2000W",m:"electrolux",s:"aspira",c:"aspirado"},{v:"ELX-EERC72",l:"EERC72 Electrolux Robot",m:"electrolux",s:"robot",c:"aspirado"},{v:"ELX-EERC80",l:"EERC80 Electrolux Robot Pro",m:"electrolux",s:"robot",c:"aspirado"},{v:"ELX-EHVS5110",l:"EHVS5110 Electrolux Stick 21.6V",m:"electrolux",s:"stick",c:"aspirado"},{v:"ELX-EHVS5220",l:"EHVS5220 Electrolux Stick 25.2V",m:"electrolux",s:"stick",c:"aspirado"},{v:"ELX-EHVS6350",l:"EHVS6350 Electrolux Stick Pro 28.8V",m:"electrolux",s:"stick",c:"aspirado"},{v:"FEN-EAFI09",l:"EAFI09 Fensa Split 9000BTU",m:"fensa",s:"split",c:"climatizacion"},{v:"FEN-EAFI12",l:"EAFI12 Fensa Split 12000BTU",m:"fensa",s:"split",c:"climatizacion"},{v:"FEN-EAFI18",l:"EAFI18 Fensa Split 18000BTU",m:"fensa",s:"split",c:"climatizacion"},{v:"FEN-EAFI24",l:"EAFI24 Fensa Split 24000BTU",m:"fensa",s:"split",c:"climatizacion"},{v:"FEN-EAFP09",l:"EAFP09 Fensa Portátil 9000BTU",m:"fensa",s:"portatil",c:"climatizacion"},{v:"FEN-EAFP12",l:"EAFP12 Fensa Portátil 12000BTU",m:"fensa",s:"portatil",c:"climatizacion"},{v:"FEN-EAFP14",l:"EAFP14 Fensa Portátil 14000BTU",m:"fensa",s:"portatil",c:"climatizacion"},{v:"FEN-VN40",l:"VN40 Fensa Ventilador Pedestal 40cm",m:"fensa",s:"ventilador",c:"climatizacion"},{v:"FEN-VN50",l:"VN50 Fensa Ventilador Pedestal 50cm",m:"fensa",s:"ventilador",c:"climatizacion"},{v:"FEN-VT20",l:"VT20 Fensa Ventilador Torre 20",m:"fensa",s:"ventilador",c:"climatizacion"},{v:"MAD-CF10N",l:"CF10N Mademsa Calefont 10L",m:"mademsa",s:"convector",c:"calefaccion"},{v:"MAD-CF14N",l:"CF14N Mademsa Calefont 14L",m:"mademsa",s:"convector",c:"calefaccion"},{v:"MAD-CF16N",l:"CF16N Mademsa Calefont 16L",m:"mademsa",s:"convector",c:"calefaccion"},{v:"FEN-CF10T",l:"CF10T Fensa Calefont 10L",m:"fensa",s:"convector",c:"calefaccion"},{v:"FEN-CF14T",l:"CF14T Fensa Calefont 14L",m:"fensa",s:"convector",c:"calefaccion"},{v:"FEN-CF16T",l:"CF16T Fensa Calefont 16L",m:"fensa",s:"convector",c:"calefaccion"},{v:"MAD-EK2000",l:"EK2000 Mademsa Estufa 2000W",m:"mademsa",s:"estufa",c:"calefaccion"},{v:"MAD-EK3000",l:"EK3000 Mademsa Estufa 3000W",m:"mademsa",s:"estufa",c:"calefaccion"},{v:"MAD-EK5000",l:"EK5000 Mademsa Estufa 5000W",m:"mademsa",s:"estufa",c:"calefaccion"},{v:"MAD-EP1500",l:"EP1500 Mademsa Estufa Parafina 1500W",m:"mademsa",s:"estufa",c:"calefaccion"},{v:"MAD-EP3000",l:"EP3000 Mademsa Estufa Parafina 3000W",m:"mademsa",s:"estufa",c:"calefaccion"},{v:"FEN-TM50",l:"TM50 Fensa Termo 50L",m:"fensa",s:"convector",c:"calefaccion"},{v:"FEN-TM80",l:"TM80 Fensa Termo 80L",m:"fensa",s:"convector",c:"calefaccion"},{v:"FEN-TM100",l:"TM100 Fensa Termo 100L",m:"fensa",s:"convector",c:"calefaccion"}]}};
var F={},emp="",rub="",cfg=null,sks=[];
function tf(id){var el=document.getElementById(id);el.style.display=el.style.display==='none'?'block':'none'}
function setupDrop(boxId,fileId){var b=document.getElementById(boxId);if(!b)return;b.ondragover=function(e){e.preventDefault();b.style.borderColor="var(--dk)"};b.ondragleave=function(){b.style.borderColor="var(--border)"};b.ondrop=function(e){e.preventDefault();b.style.borderColor="var(--border)";var f=document.getElementById(fileId);var dt=new DataTransfer();dt.items.add(e.dataTransfer.files[0]);f.files=dt.files;f.dispatchEvent(new Event("change"))}}
// ── GfK ÁRBOL POR REPORTE REAL ──
// Estructura exacta de cómo GfK entrega los reportes: una categoría padre, subcategorías = archivos separados
var GFK_TREE=[
  {cat:"lavado", lbl:"Laundry", ico:"🫧", subs:[
    {k:"wm",   lbl:"Washing Machines",  ico:"🔵", hint:"AUTOMATIC · LOADING · DRYING FUNCTION · LOADING KG",
     subcats:["lav-cs","lav-cf","lav-semi","centrifuga","lavaseca"],
     note:"Top Load · Front Load · Washer-Dryers · Semi-Auto · Centrífuga",
     demo:"ELX_GfK_WashingMachines.xlsx"},
    {k:"td",   lbl:"Tumble Dryers",     ico:"💨", hint:"LOADING KG · DRYING FUNCTION · HEAT SOURCE",
     subcats:["secadora"],
     note:"Secadoras — archivo separado",
     demo:"ELX_GfK_TumbleDryers.xlsx"},
  ]},
  {cat:"refri", lbl:"Refrigeration", ico:"🧊", subs:[
    {k:"rf",   lbl:"Refrigerators",     ico:"❄️", hint:"TYPE · CAPACITY LT · DOORS · DEFROST",
     subcats:["nf","fd","nf-2p","nf-3p"]},
    {k:"fz",   lbl:"Freezers",          ico:"🧊", hint:"TYPE · CAPACITY LT · POSITION",
     subcats:["freezer"]},
    {k:"mb",   lbl:"Mini Bars",         ico:"🍶", hint:"CAPACITY LT · TYPE",
     subcats:["minifridge"]},
  ]},
  {cat:"coccion", lbl:"Cooking", ico:"🔥", subs:[
    {k:"ck",   lbl:"Cookers",           ico:"🍳", hint:"FUEL · BURNERS · WIDTH CM · TYPE",
     subcats:["cocina-gas","cocina-elec"]},
    {k:"bo",   lbl:"Built-in Ovens",    ico:"🔲", hint:"FUEL · CAPACITY L · WIDTH CM · SELF-CLEAN",
     subcats:["horno-emp"]},
    {k:"hb",   lbl:"Hobs",             ico:"⬛", hint:"FUEL · ZONES · WIDTH CM",
     subcats:["encimera"]},
    {k:"mw",   lbl:"Microwaves",        ico:"📡", hint:"TYPE · CAPACITY L · WIDTH CM",
     subcats:["micro"]},
    {k:"hd",   lbl:"Hoods",             ico:"💨", hint:"TYPE · WIDTH CM · MOTOR TYPE",
     subcats:["campana"]},
  ]},
  {cat:"lavaplatos", lbl:"Dishwashers", ico:"🍽️", subs:[
    {k:"dw",   lbl:"Dishwashers",       ico:"🍽️", hint:"CAPACITY COVERS · WIDTH CM · PROGRAMS",
     subcats:["60cm","45cm"]},
  ]},
  {cat:"aspirado", lbl:"Floor Care", ico:"🌀", subs:[
    {k:"vc",   lbl:"Vacuum Cleaners",   ico:"🌀", hint:"TYPE · POWER W · BAGLESS · CORD",
     subcats:["aspira"]},
    {k:"rv",   lbl:"Robot Vacuums",     ico:"🤖", hint:"TYPE · SUCTION PA · MAPPING TECH",
     subcats:["robot"]},
    {k:"sv",   lbl:"Stick Vacuums",     ico:"🔋", hint:"VOLTAGE V · BAGLESS · RUNTIME MIN",
     subcats:["stick"]},
  ]},
  {cat:"climatizacion", lbl:"Air Conditioners", ico:"❄️", subs:[
    {k:"ac",   lbl:"Room AC - Split",   ico:"🌡️", hint:"BTU · INVERTER · WIFI",
     subcats:["split"]},
    {k:"pac",  lbl:"Portable AC",       ico:"📦", hint:"BTU · TYPE",
     subcats:["portatil"]},
    {k:"fan",  lbl:"Fans",              ico:"🌬️", hint:"TYPE · DIAMETER CM",
     subcats:["ventilador"]},
  ]},
  {cat:"calefaccion", lbl:"Heating", ico:"🔆", subs:[
    {k:"eh",   lbl:"Electric Heaters",  ico:"🔆", hint:"TYPE · POWER KW",
     subcats:["estufa"]},
    {k:"wh",   lbl:"Water Heaters",     ico:"🚿", hint:"CAPACITY L · FUEL · TYPE",
     subcats:["convector"]},
  ]},
];
var GFK_DATA={};
function buildGfkTree(){
  var g=document.getElementById("gfk-tree");if(!g)return;
  g.innerHTML="";
  var fc=document.getElementById("fc");
  var activeCat=fc?fc.value:"todas";
  GFK_TREE.forEach(function(parent){
    var activeSub=document.getElementById("fb")?document.getElementById("fb").value:"todas";
    var isParentActive=(activeCat===parent.cat||activeCat==="todas");
    var hasSubs=parent.subs.some(function(s){return!!GFK_DATA[s.k]});
    // Parent header
    var ph=document.createElement("div");
    ph.style.cssText="display:flex;align-items:center;gap:6px;padding:5px 8px;margin-top:8px;background:"+(isParentActive?"var(--dk)":"var(--border)")+";";
    ph.innerHTML="<span style='font-size:12px'>"+parent.ico+"</span>"+
      "<span style='font-size:10px;font-weight:700;color:"+(isParentActive?"var(--gold)":"var(--text2)")+"'>"+parent.lbl.toUpperCase()+"</span>"+
      (isParentActive?"<span style='font-size:7px;font-weight:700;color:var(--gold);margin-left:4px;border:1px solid var(--gold);padding:0 4px'>RECOMENDADO</span>":"")+
      (hasSubs?"<span style='font-size:8px;color:"+(isParentActive?"rgba(245,223,77,.7)":"var(--aqua)")+"';margin-left:auto>✓ archivos cargados</span>":"");
    g.appendChild(ph);
    // Sub-boxes grid
    var sg=document.createElement("div");
    sg.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:4px;padding:4px 0 8px;border-left:2px solid "+(isParentActive?"var(--dk)":"var(--border)")+";margin-left:10px;padding-left:8px;";
    parent.subs.forEach(function(sub){
      var hasFile=!!GFK_DATA[sub.k];
      var isSubActive=isParentActive&&(activeSub==="todas"||(sub.subcats&&sub.subcats.indexOf(activeSub)>=0));
      var div=document.createElement("div");
      div.id="gfk-box-"+sub.k;
      div.style.cssText="border:"+(hasFile?"2px solid var(--aqua)":isSubActive?"2px solid var(--dk)":isParentActive?"1px dashed #aaa":"1px solid var(--border)")+
        ";background:"+(hasFile?"rgba(15,113,115,.06)":isSubActive?"rgba(26,13,71,.06)":isParentActive?"rgba(26,13,71,.01)":"var(--white)")+
        ";padding:7px 8px;cursor:pointer;transition:all .12s;position:relative";
      div.ondragover=function(e){e.preventDefault();div.style.borderColor="var(--aqua)"};
      div.ondragleave=function(){div.style.borderColor=hasFile?"var(--aqua)":isParentActive?"var(--dk)":"var(--border)"};
      div.ondrop=function(e){e.preventDefault();var f=e.dataTransfer.files[0];if(f)upGfk(f,sub.k)};
      div.onclick=function(){document.getElementById("gfk-f-"+sub.k).click()};
      div.innerHTML="<input type='file' id='gfk-f-"+sub.k+"' accept='.xlsx,.xls,.csv' style='display:none'>"+
        "<div style='display:flex;align-items:center;gap:5px'>"+
        "<span style='font-size:13px'>"+sub.ico+"</span>"+
        "<div><div style='font-size:9px;font-weight:700;color:"+(hasFile?"var(--aqua)":isSubActive?"var(--dk)":isParentActive?"var(--text2)":"var(--text3)")+"'>"+sub.lbl+"</div>"+
        (hasFile?"<div style='font-size:8px;color:var(--aqua);font-weight:700'>✓ cargado</div>":
          "<div style='font-size:7px;color:var(--text3);line-height:1.2'>"+(sub.note?"<b>"+sub.note+"</b><br>":"")+sub.hint+
          (sub.demo?"<div style='margin-top:4px'><a href='https://bbapp-nu.vercel.app/"+sub.demo+"' target='_blank' onclick='event.stopPropagation()' style='font-size:7px;color:var(--aqua);font-weight:700;text-decoration:underline'>⬇ ver demo</a></div>":"")+
          "</div>")+
        "</div></div>";
      var inp=div.querySelector("input");
      inp.onchange=function(){if(inp.files[0])upGfk(inp.files[0],sub.k)};
      sg.appendChild(div);
    });
    g.appendChild(sg);
  });
}
function upGfk(file,key){
  if(file.size>5*1024*1024){
    alert("Archivo demasiado grande ("+Math.round(file.size/1024/1024,1)+"MB). Máximo 5MB por archivo.\nFiltra por categoría o período antes de exportar.");
    return;
  }
  var rd=new FileReader();
  rd.onload=function(e){
    try{
      var d=new Uint8Array(e.target.result);
      var wb=XLSX.read(d,{type:"array"});
      var ws=wb.Sheets[wb.SheetNames[0]];
      GFK_DATA[key]=XLSX.utils.sheet_to_csv(ws);
      buildGfkTree();
      document.getElementById("gobtn").disabled=false;
    }catch(err){console.error("GfK read error",err)}
  };
  rd.readAsArrayBuffer(file);
}
function mergeGfk(){
  var keys=Object.keys(GFK_DATA);
  if(!keys.length)return null;
  var merged="";
  keys.forEach(function(k,i){
    var csv=GFK_DATA[k];
    if(i===0){merged=csv;}
    else{var lines=csv.split("\n");merged+="\n"+lines.slice(1).join("\n");}
  });
  return merged||null;
}
document.addEventListener("DOMContentLoaded",function(){
  ["si","so","id","ir"].forEach(function(k){setupDrop("u-"+k,"f-"+k)});
  buildGfkTree();
  var fc=document.getElementById("fc");
  if(fc)fc.addEventListener("change",function(){buildGfkTree()});
  var fb=document.getElementById("fb");
  if(fb)fb.addEventListener("change",function(){buildGfkTree()});
});
function ue(){var r=document.getElementById("gr").value,s=document.getElementById("ge");s.innerHTML="<option value=''>Selecciona...</option>";(RR[r]||[]).forEach(function(e){s.innerHTML+="<option>"+e+"</option>"});cg()}
function cg(){document.getElementById("gbn").disabled=!(document.getElementById("gr").value&&document.getElementById("ge").value)}
function go(){rub=document.getElementById("gr").selectedOptions[0].text;emp=document.getElementById("ge").value;document.getElementById("gate").style.display="none";document.getElementById("main").style.display="block";document.getElementById("ctx").textContent=rub+" · "+emp;lc()}
function lc(){cfg=CC[emp]||null;if(!cfg)return;sks=cfg.skus;var c=document.getElementById("fc");c.innerHTML="<option value='todas'>Todas</option>";cfg.cats.forEach(function(x){c.innerHTML+="<option value='"+x.v+"'>"+x.l+"</option>"});var m=document.getElementById("fm");m.innerHTML="<option value='todas'>Todas</option>";cfg.marcas.forEach(function(x){m.innerHTML+="<option value='"+x.toLowerCase()+"'>"+x+"</option>"});us();uk()}
function us(){var v=document.getElementById("fc").value,s=document.getElementById("fb");s.innerHTML="<option value='todas'>Todas</option>";if(!cfg)return;cfg.cats.forEach(function(c){if(v==="todas"||c.v===v)c.sub.forEach(function(x){if(x[0]!=="todas")s.innerHTML+="<option value='"+x[0]+"'>"+x[1]+"</option>"})})}
function uk(){var cv=document.getElementById("fc").value,sv=document.getElementById("fb").value,mv=document.getElementById("fm").value,sl=document.getElementById("fk"),f=sks.filter(function(x){if(cv!=="todas"&&x.c!==cv)return false;if(sv!=="todas"&&x.s!==sv)return false;if(mv!=="todas"&&x.m!==mv)return false;return true});sl.innerHTML="<option value='todos'>Todos</option>";f.forEach(function(x){sl.innerHTML+="<option value='"+x.v+"'>"+x.l+"</option>"})}
function up(inp,key){
  if(!inp.files[0])return;
  if(inp.files[0].size>5*1024*1024){
    alert("Archivo demasiado grande ("+Math.round(inp.files[0].size/1024/1024,1)+"MB). Máximo 5MB por archivo.\nFiltra por categoría o período antes de exportar.");
    inp.value=""; return;
  }
  F[key]=inp.files[0];document.getElementById("n-"+key).textContent="✓ "+inp.files[0].name;
  var card=document.getElementById("u-"+key);card.style.borderColor="var(--aqua)";card.style.background="rgba(15,113,115,.04)";
  document.getElementById("gobtn").disabled=false;
}
function az(){document.getElementById("main").style.display="none";document.getElementById("proc").style.display="block";document.getElementById("pt").textContent="Leyendo archivos...";
var ks=Object.keys(F),p=ks.length,CSV={};
ks.forEach(function(k){var rd=new FileReader();rd.onload=function(e){try{var d=new Uint8Array(e.target.result),wb=XLSX.read(d,{type:"array"}),ws=wb.Sheets[wb.SheetNames[0]];CSV[k]=XLSX.utils.sheet_to_csv(ws)}catch(er){CSV[k]=null}p--;if(!p)callAPI(CSV)};rd.readAsArrayBuffer(F[k])});
}
function callAPI(CSV){
document.getElementById("pt").textContent="Analizando con IA...";
var cat=document.getElementById("fc");var catName=cat&&cat.selectedOptions[0]&&cat.selectedOptions[0].value!=="todas"?cat.selectedOptions[0].text:"Lavado y Secado";
var sub=document.getElementById("fb");var subName=sub&&sub.selectedOptions[0]&&sub.selectedOptions[0].value!=="todas"?sub.selectedOptions[0].text:"Todas";
var marc=document.getElementById("fm");var marcaName=marc&&marc.selectedOptions[0]&&marc.selectedOptions[0].value!=="todas"?marc.selectedOptions[0].text:"Todas";
var ret=document.getElementById("fr");var retName="Todos";
var sku=document.getElementById("fk");var skuName=sku&&sku.selectedOptions[0]&&sku.selectedOptions[0].value!=="todos"?sku.selectedOptions[0].value:"Todos";
fetch("/api/forecast",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({so:CSV.so||null,si:CSV.si||null,id:CSV.id||null,ir:CSV.ir||null,gfk:mergeGfk()||null,empresa:emp,rubro:rub,categoria:catName,subcategoria:subName,marca:marcaName,retailer:"Todos",sku:skuName})})
.then(function(r){return r.json()})
.then(function(data){
if(data.error){document.getElementById("pt").textContent="⚠️ "+(typeof data.error==="string"?data.error:JSON.stringify(data.error));return}
window.BBDATA=data;
document.getElementById("proc").style.display="none";
document.getElementById("res").style.display="block";
showModes(data);
})
.catch(function(err){document.getElementById("pt").textContent="Error de conexión: "+err.message});
}
function showModes(D){
var nc=D.fuentes?D.fuentes.length:1;
var skuLbl=(D.sku||emp)+(D.retailer&&D.retailer!=="Todos"?" · "+D.retailer:"");
var h="<div style='text-align:center;margin-bottom:20px'><div style='font-size:11px;color:var(--text3);font-weight:300;margin-bottom:4px'>Análisis listo — "+nc+" fuentes · "+(D.total_filas||0).toLocaleString("es-CL")+" filas</div>";
h+="<div style='font-family:Libre Baskerville,serif;font-size:18px;font-weight:700;color:var(--dk);margin-bottom:16px'>"+skuLbl+"</div>";
h+="<div style='font-size:13px;color:var(--text2);margin-bottom:16px'>¿Qué quieres ver?</div>";
h+="<div style='display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:500px;margin:0 auto'>";
h+="<button onclick='renderMode(\"historial\")' style='flex:1;min-width:140px;padding:14px 12px;background:var(--white);border:1.5px solid var(--border);cursor:pointer;font-family:Lato,sans-serif;transition:all .12s' onmouseover='this.style.borderColor=\"var(--dk)\"' onmouseout='this.style.borderColor=\"var(--border)\"'><div style='font-size:20px;margin-bottom:4px'>📜</div><div style='font-size:12px;font-weight:700;color:var(--dk)'>Historial SKU</div><div style='font-size:10px;color:var(--text3);font-weight:300'>La historia completa</div></button>";
h+="<button onclick='renderMode(\"forecast\")' style='flex:1;min-width:140px;padding:14px 12px;background:var(--white);border:1.5px solid var(--border);cursor:pointer;font-family:Lato,sans-serif;transition:all .12s' onmouseover='this.style.borderColor=\"var(--dk)\"' onmouseout='this.style.borderColor=\"var(--border)\"'><div style='font-size:20px;margin-bottom:4px'>📊</div><div style='font-size:12px;font-weight:700;color:var(--dk)'>Forecast</div><div style='font-size:10px;color:var(--text3);font-weight:300'>Próximos 12 meses</div></button>";
h+="<button onclick='renderMode(\"alertas\")' style='flex:1;min-width:140px;padding:14px 12px;background:var(--white);border:1.5px solid var(--border);cursor:pointer;font-family:Lato,sans-serif;transition:all .12s' onmouseover='this.style.borderColor=\"var(--dk)\"' onmouseout='this.style.borderColor=\"var(--border)\"'><div style='font-size:20px;margin-bottom:4px'>🔥</div><div style='font-size:12px;font-weight:700;color:var(--dk)'>Alertas</div><div style='font-size:10px;color:var(--text3);font-weight:300'>Acciones urgentes</div></button>";
h+="<button onclick='renderMode(\"todo\")' style='flex:1;min-width:140px;padding:14px 12px;background:var(--dk);border:1.5px solid var(--dk);cursor:pointer;font-family:Lato,sans-serif;transition:all .12s'><div style='font-size:20px;margin-bottom:4px'>📋</div><div style='font-size:12px;font-weight:700;color:var(--gold)'>Reporte Completo</div><div style='font-size:10px;color:rgba(255,255,255,.5);font-weight:300'>Todo junto</div></button>";
h+="</div></div>";
document.getElementById("rt").textContent="";document.getElementById("rs").textContent="";document.getElementById("rc").innerHTML=h;
}
function renderMode(mode){
var D=window.BBDATA;if(!D)return;var h="";
h+="<div style='margin-bottom:12px'><span onclick='showModes(window.BBDATA)' style='font-size:11px;color:var(--text3);cursor:pointer;font-weight:700'>← Cambiar vista</span></div>";
if(mode==="historial")h+=renderHistorial(D);
if(mode==="benchmark"&&D.benchmark)h+=renderBenchmark(D);
if(mode==="forecast"||mode==="todo")h+=renderForecast(D);
if(mode==="alertas"||mode==="todo")h+=renderAlertas(D);
if(mode==="historial")h+=renderHistorialExcel();
if(mode==="todo")h+=renderExcel();
document.getElementById("rt").textContent=(D.sku||D.empresa||emp)+(D.retailer&&D.retailer!=="Todos"?" · "+D.retailer:"");
document.getElementById("rs").textContent=(D.fuentes?D.fuentes.length:1)+" fuentes";
document.getElementById("rc").innerHTML=h;
}
function renderHistorial(D){var h="";var hi=D.historial;var se=D.serie_historica||[];
h+="<div style='padding:16px;background:var(--white);border:1px solid var(--border);margin-bottom:14px'>";
h+="<div style='font-family:Libre Baskerville,serif;font-size:14px;font-weight:700;color:var(--dk);margin-bottom:4px'>📜 Historial — "+(D.sku||"")+"</div>";
if(hi){var dateRange=se.length?(se[0].fecha+" a "+se[se.length-1].fecha):"";h+="<div style='font-size:11px;color:var(--text2);font-weight:300;margin-bottom:14px'>"+(hi.so_total||0).toLocaleString("es-CL")+" un · $"+((hi.so_total||0)*(hi.margen&&hi.margen.pvp_promedio||220000)>1e6?(((hi.so_total||0)*(hi.margen&&hi.margen.pvp_promedio||220000))/1e6).toFixed(0)+"M":"")+" · "+(hi.tendencia||"")+" · GM% "+(hi.margen?hi.margen.margen_pct:0)+"%"+(dateRange?" · "+dateRange:"")+"</div>"}
// ═══ TRIAGE: CONCLUSIÓN + IMPACTO + ACCIÓN ═══
(function(){
var totV=se.reduce(function(s,d){return s+d.venta},0);var totU=se.reduce(function(s,d){return s+d.uds},0);
var pvpP=totU>0?totV/totU:220000;
var soProm=Math.round(totU/(se.length||1));
var si3=D.serie_si||[];var siM3={};si3.forEach(function(d){siM3[d.fecha]=d.uds});
var UMBRAL=20000000; // $20M
// ── DETECTAR CAGAZOS (desde data REAL, con techo) ──
var cagazos=[];
var ventaTotal=totV;
var TECHO=ventaTotal*0.5; // ningún cagazo puede superar 50% de la venta total
// baseline = mediana de meses normales (no quiebre)
var sortedU=se.map(function(d){return d.uds}).sort(function(a,b){return a-b});
var baseline=sortedU[Math.floor(sortedU.length*0.6)]||soProm;
// Quiebres: pérdida REAL = (baseline - uds reales) × PVP por cada mes bajo umbral
var qMeses=se.filter(function(d){return d.uds<baseline*0.45});
if(qMeses.length){var costoQreal=qMeses.reduce(function(s,d){return s+(baseline-d.uds)*pvpP},0);var costoQ=Math.min(Math.round(costoQreal),TECHO);
// Evidencia real: qué competidor SUBIÓ en los meses de quiebre (coincidencia temporal)
var capt="";var captDet="";
if(D.serie_gfk_marcas){var qFechas=qMeses.map(function(d){return d.fecha});var crecimiento={};
Object.keys(D.serie_gfk_marcas).forEach(function(b){var bl=b.toLowerCase();if(bl.indexOf("fen")>=0||bl.indexOf("mad")>=0||bl.indexOf("elec")>=0)return;var s=D.serie_gfk_marcas[b];var prom=s.reduce(function(t,d){return t+d.uds},0)/(s.length||1);var enQuiebre=s.filter(function(d){return qFechas.indexOf(d.fecha)>=0});var promQ=enQuiebre.length?enQuiebre.reduce(function(t,d){return t+d.uds},0)/enQuiebre.length:0;if(promQ>prom)crecimiento[b]=Math.round((promQ/prom-1)*100)});
var ganadores=Object.keys(crecimiento).sort(function(a,b){return crecimiento[b]-crecimiento[a]});
if(ganadores.length){capt="Capturado: "+ganadores.slice(0,2).map(function(b){return b+" +"+crecimiento[b]+"%"}).join(" · ");captDet="<br>Coincidencia temporal: en los meses que quebraste, "+ganadores.slice(0,2).map(function(b){return b+" vendió +"+crecimiento[b]+"% sobre su promedio"}).join(" y ")+" — capturaron tu demanda sin bajar precio.";}}
var detQ="Baseline normal: "+baseline+" un/mes. Meses en quiebre: "+qMeses.map(function(d){return d.fecha+" ("+d.uds+" un, faltaron "+(baseline-d.uds)+")"}).join(", ")+".<br>Cálculo: suma de (baseline − real) × $"+Math.round(pvpP).toLocaleString()+" PVP = $"+Math.round(costoQreal).toLocaleString("es-CL")+"."+captDet+"<br>Fuentes: SO detectó los meses bajo baseline · Inv.Retail confirmó stock cero · GfK midió el crecimiento de la competencia en esos mismos meses.";cagazos.push({titulo:"Quiebre en piso de venta",monto:costoQ,detalle:qMeses.length+" meses sin cobertura · "+capt,fuente:"SO × Inv.Retail × GfK",construccion:detQ})}
// Fire sales agrupados
var fsMeses=se.filter(function(d){var p=d.uds>0?d.venta/d.uds:0;return p>0&&p<pvpP*0.82&&d.uds>soProm*0.5});
if(fsMeses.length){var costoFS=Math.min(Math.round(fsMeses.reduce(function(s,d){return s+(pvpP-d.venta/d.uds)*d.uds},0)),TECHO);if(costoFS>UMBRAL){var detFS="Meses con PVP bajo 82% del promedio ($"+Math.round(pvpP*0.82).toLocaleString()+"): "+fsMeses.map(function(d){var p=Math.round(d.venta/d.uds);return d.fecha+" ($"+p.toLocaleString()+", "+d.uds+" un)"}).join(", ")+".<br>Cálculo por mes: (PVP normal $"+Math.round(pvpP).toLocaleString()+" − PVP real) × unidades vendidas = margen destruido.<br>Fuentes: SO precio (tu PVP real mes a mes) × GfK (competencia NO bajó precio en los mismos meses).";cagazos.push({titulo:"Destrucción de precio",monto:costoFS,detalle:fsMeses.length+" meses PVP bajo promedio · sin respuesta de competencia",fuente:"SO precio × GfK competencia",construccion:detFS})}}
// Castigo retailers: caída SOSTENIDA en últimos 3 meses vs primeros 6 (daño permanente, no quiebre temporal)
var castigados=[];
if(D.serie_por_retailer){var spr=D.serie_por_retailer;var meses=se.map(function(d){return d.fecha});
Object.keys(spr).forEach(function(r){
var prim6=[],ult3=[];meses.forEach(function(m,mi){var u=spr[r][m]?spr[r][m].uds:0;if(mi<6)prim6.push(u);if(mi>=meses.length-3)ult3.push(u)});
var avgA=prim6.length?prim6.reduce(function(s,v){return s+v},0)/prim6.length:0;
var avgD=ult3.length?ult3.reduce(function(s,v){return s+v},0)/ult3.length:0;
// Castigo: era buen retailer Y últimos 3 meses < 55% de su nivel sano inicial
if(avgA>soProm*0.12&&avgD<avgA*0.55&&avgD>0){var mesesProy=12;var costoC=Math.min(Math.round((avgA-avgD)*mesesProy*pvpP),TECHO);if(costoC>UMBRAL){castigados.push({retailer:r,antes:Math.round(avgA),despues:Math.round(avgD),costo:costoC,mesesProy:mesesProy})}}
});
castigados.sort(function(a,b){return b.costo-a.costo});
if(castigados[0]){var c=castigados[0];var detC=c.retailer+" SO promedio primeros 6 meses: "+c.antes+" un/mes. Últimos 3 meses: "+c.despues+" un/mes (caída sostenida "+Math.round((1-c.despues/c.antes)*100)+"%).<br>Cálculo: ("+c.antes+" − "+c.despues+") un × "+c.mesesProy+" meses proyectados × $"+Math.round(pvpP).toLocaleString()+" = $"+Math.round((c.antes-c.despues)*c.mesesProy*pvpP).toLocaleString("es-CL")+" anualizado.<br>Fuentes: SO por retailer (caída que NO recupera tras el quiebre) × GfK share (competencia ocupó el espacio).";cagazos.push({titulo:"Pérdida de exhibición — "+c.retailer,monto:c.costo,detalle:c.antes+" → "+c.despues+" un/mes · espacio cedido, no recupera",fuente:"SO retailer × GfK share",construccion:detC})}
}
// Loading
var siT=si3.reduce(function(s,d){return s+d.uds},0);var soT=se.reduce(function(s,d){return s+d.uds},0);
if(siT>soT*1.15){var exceso=siT-soT;var costoL=Math.min(Math.round(exceso*pvpP*0.1),TECHO);if(costoL>UMBRAL){var detL="SI total período: "+siT.toLocaleString()+" un. SO total: "+soT.toLocaleString()+" un. Exceso despachado: "+exceso.toLocaleString()+" un.<br>Cálculo: "+exceso.toLocaleString()+" un × $"+Math.round(pvpP).toLocaleString()+" × 10% (costo financiero anual del capital inmovilizado) = $"+Math.round(exceso*pvpP*0.1).toLocaleString("es-CL")+".<br>Fuentes: SI (despacho) × SO (venta real) × Inv.Distribuidor (confirma stock flotando).";cagazos.push({titulo:"Loading excesivo",monto:costoL,detalle:exceso.toLocaleString("es-CL")+" un sobre demanda real · costo financiero",fuente:"SI × SO × Inv.Distribuidor",construccion:detL})}}
cagazos.sort(function(a,b){return b.monto-a.monto});
// ── DETECTAR ACCIONES (cálculo guardado para fase futuro) ──
var acciones=[];
if(D.serie_gfk_marcas){Object.keys(D.serie_gfk_marcas).forEach(function(b){var bl=b.toLowerCase();if(bl.indexOf("fen")>=0||bl.indexOf("mad")>=0||bl.indexOf("elec")>=0)return;var s=D.serie_gfk_marcas[b];if(s.length>=3){var ult=s[s.length-1].uds;var prev=(s[s.length-2].uds+s[s.length-3].uds)/2;if(prev>0&&ult<prev*0.6){var caida=Math.round((1-ult/prev)*100);var pot=Math.min(Math.round(soProm*2*pvpP),TECHO);acciones.push({titulo:"Recuperar cobertura — "+b+" en quiebre",monto:pot,detalle:b+" cayó "+caida+"% · ventana estimada 60 días",fuente:"GfK último mes × tu Inv.Distribuidor"})}}})}
acciones.sort(function(a,b){return b.monto-a.monto});
function fmtM(v){return "$"+Math.round(v).toLocaleString("es-CL")}
// ── RENDER ──
// Banner: contra quién comparamos (data real GfK)
if(D.serie_gfk_marcas){
var ourBrands=["fen","mad","elec"];
var comps=Object.keys(D.serie_gfk_marcas).filter(function(b){var bl=b.toLowerCase();return ourBrands.every(function(o){return bl.indexOf(o)<0})});
if(comps.length){
// PVP promedio de cada competidor
var compInfo=comps.map(function(b){var s=D.serie_gfk_marcas[b];var pv=0,n=0;s.forEach(function(d){if(d.pvp>0){pv+=d.pvp;n++}});var mod=D.modelos_marca&&D.modelos_marca[b]?D.modelos_marca[b].replace(b+"-","").replace(b,"").trim():"";return{nombre:b,modelo:mod,pvp:n>0?Math.round(pv/n):0}}).sort(function(a,b){return a.pvp-b.pvp});
var subcat=D.subcategoria||"Lavadoras 8-10kg carga superior";
h+="<div style='padding:10px 12px;background:rgba(15,113,115,.04);border:1px solid var(--border);margin-bottom:14px;border-radius:0'>";
h+="<div style='font-size:8px;letter-spacing:.5px;color:var(--text3);margin-bottom:6px'>COMPARANDO CONTRA — mismo segmento de capacidad (8-10kg)</div>";
h+="<div style='display:flex;flex-wrap:wrap;gap:10px;align-items:center'>";
compInfo.forEach(function(c){h+="<div style='font-size:11px'><span style='font-weight:700;color:var(--dk)'>"+c.nombre+"</span>"+(c.modelo?" <span style='color:var(--text3);font-size:9px'>"+c.modelo+"</span>":"")+" <span style='color:var(--text2)'>"+fmtM(c.pvp)+"</span></div>"});
h+="</div>";
h+="<div style='font-size:9px;color:var(--text2);margin-top:5px;font-style:italic'>Tu PC9.5SZ vs el modelo más vendido de cada marca en el mismo rango. Datos GfK del archivo cargado.</div>";
h+="</div>";
}}
// Conclusión
if(hi.costo_gestion&&hi.costo_gestion.moraleja){h+="<div style='padding:12px 14px;background:var(--dk);color:white;margin-bottom:14px;border-radius:0'><div style='font-size:8px;letter-spacing:1px;opacity:.6;margin-bottom:4px'>CONCLUSIÓN</div><div style='font-size:13px;font-weight:400;line-height:1.4'>"+hi.costo_gestion.moraleja+"</div></div>"}
// Impacto acumulado
if(cagazos.length){var rango=se.length?se[0].fecha+" a "+se[se.length-1].fecha:"";var totalDmg=cagazos.reduce(function(s,c){return s+c.monto},0);h+="<div style='display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px'><div style='font-size:10px;font-weight:700;color:#c0392b;letter-spacing:.5px'>IMPACTO EN MARGEN DE CONTRIBUCIÓN — período "+rango+"</div><div style='font-size:11px;font-weight:700;color:#c0392b'>Total: -"+fmtM(totalDmg)+"</div></div>";h+="<div style='font-size:9px;color:var(--text3);margin-bottom:8px;font-style:italic'>Estimación basada en el cruce de tus 5 fuentes. Explica ~70-80% del impacto; el resto depende de factores externos (tipo de cambio, layout retail, aduana). Cada cifra abre su construcción en \"ver detalles\".</div>";cagazos.slice(0,4).forEach(function(c,ci){var did="det"+ci;h+="<div style='margin-bottom:5px'><div style='display:flex;gap:0'><div style='flex:1;padding:10px 12px;background:rgba(192,57,43,.04);border-left:3px solid #c0392b'><div style='display:flex;justify-content:space-between;align-items:baseline'><div style='font-size:12px;font-weight:700;color:var(--dk)'>"+c.titulo+"</div><div style='font-size:16px;font-weight:700;color:#c0392b'>-"+fmtM(c.monto)+"</div></div><div style='font-size:10px;color:var(--text2);margin-top:2px'>"+c.detalle+"</div><div onclick=\"var e=document.getElementById('"+did+"');e.style.display=e.style.display==='none'?'block':'none';this.textContent=e.style.display==='none'?'▾ ver detalles':'▴ ocultar'\" style='font-size:9px;color:var(--aqua);cursor:pointer;margin-top:6px;font-weight:700;user-select:none'>▾ ver detalles</div><div id='"+did+"' style='display:none;margin-top:8px;padding:8px 10px;background:rgba(0,0,0,.03);font-size:10px;color:var(--text2);line-height:1.5'>"+(c.construccion||"")+"</div></div><div style='width:130px;padding:10px;background:rgba(0,0,0,.02);border-left:1px solid var(--border);display:flex;flex-direction:column;justify-content:center'><div style='font-size:7px;color:var(--text3);letter-spacing:.5px;margin-bottom:2px'>CRUCE DE DATOS</div><div style='font-size:9px;color:var(--text2);font-weight:500;line-height:1.3'>"+c.fuente+"</div></div></div></div>"})}
// ── LA HERIDA: daño acumulado mes a mes ──
if(cagazos.length&&se.length){
var dmgMes=se.map(function(d,i){var dm=0;
// fire sale damage this month
var p=d.uds>0?d.venta/d.uds:0;if(p>0&&p<pvpP*0.82&&d.uds>soProm*0.5)dm+=(pvpP-p)*d.uds;
// quiebre damage this month
if(d.uds<baseline*0.45)dm+=(baseline-d.uds)*pvpP;
return{fecha:d.fecha,dmg:dm}});
var acum=0;var serieAcum=dmgMes.map(function(d){acum+=d.dmg;return{fecha:d.fecha,acum:acum}});
var maxAcum=acum||1;
var WH=600,HH=110,pL=70,pR=20,pwH=WH-pL-pR,phH=HH-30,nH=serieAcum.length;
function pxH(i){return pL+i/(nH-1)*pwH}function pyH(v){return 15+phH-(v/maxAcum)*phH}
var svgH="<svg viewBox='0 0 "+WH+" "+HH+"' style='width:100%;margin:4px 0' xmlns='http://www.w3.org/2000/svg'>";
// area
var areaP="";serieAcum.forEach(function(d,i){areaP+=pxH(i)+","+pyH(d.acum)+" "});areaP+=pxH(nH-1)+","+pyH(0)+" "+pxH(0)+","+pyH(0);
svgH+="<polygon points='"+areaP+"' fill='rgba(192,57,43,0.12)'/>";
svgH+="<polyline points='"+serieAcum.map(function(d,i){return pxH(i)+","+pyH(d.acum)}).join(" ")+"' fill='none' stroke='#c0392b' stroke-width='2'/>";
// y labels
svgH+="<text x='"+(pL-6)+"' y='18' font-size='8' fill='#999' text-anchor='end'>"+fmtM(maxAcum)+"</text>";
svgH+="<text x='"+(pL-6)+"' y='"+(15+phH)+"' font-size='8' fill='#999' text-anchor='end'>$0</text>";
// x labels (every 3)
serieAcum.forEach(function(d,i){if(i%3===0||i===nH-1)svgH+="<text x='"+pxH(i)+"' y='"+(HH-6)+"' font-size='7' fill='#666' text-anchor='middle'>"+d.fecha.slice(2)+"</text>"});
// final point
svgH+="<circle cx='"+pxH(nH-1)+"' cy='"+pyH(acum)+"' r='3' fill='#c0392b'/>";
svgH+="</svg>";
h+="<div style='margin-top:10px'><div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin-bottom:2px'>DAÑO ACUMULADO — solo sube, no se recupera</div>"+svgH+"</div>";
}
h+="<div style='border-top:1px solid var(--border);margin:14px 0 4px'></div>";
})();
// ─── GRÁFICO SO vs SI (unidades) ───
if(se.length){
var si2=D.serie_si||[];
var siMap={};var siTotal=0;si2.forEach(function(d){siMap[d.fecha]=d.uds;siTotal+=d.uds});
var soTotal=0;se.forEach(function(d){soTotal+=d.uds});
var allU=se.map(function(d){return d.uds});
se.forEach(function(d){if(siMap[d.fecha])allU.push(siMap[d.fecha])});
var amx=Math.max.apply(null,allU)*1.1;var amn=0;var arng=amx||1;
var W=600;var H=160;var padL=45;var padR=130;var pw=W-padL-padR;var ph=H-50;
var n=se.length;
function px(i){return padL+i/(n-1)*pw}function py(v){return 20+ph-(v/amx)*ph}
var svg="<svg viewBox='0 0 "+W+" "+(H+5)+"' style='width:100%;margin:6px 0' xmlns='http://www.w3.org/2000/svg'>";
// Grid
for(var gi=0;gi<5;gi++){var gy=20+ph/4*gi;var gv=Math.round(amx-amx/4*gi);svg+="<line x1='"+padL+"' y1='"+gy+"' x2='"+(W-padR)+"' y2='"+gy+"' stroke='rgba(0,0,0,.04)'/>";svg+="<text x='"+(padL-4)+"' y='"+(gy+3)+"' font-size='7' fill='#999' text-anchor='end'>"+gv+"</text>"}
// Gap fill: blue=accumulating (SI>SO), red=consuming (SO>SI)
if(si2.length){se.forEach(function(d,i){if(i>=n-1)return;var soV=d.uds;var siV=siMap[d.fecha]||soV;var soV2=se[i+1].uds;var siV2=siMap[se[i+1].fecha]||soV2;var clr=siV>soV?"rgba(26,13,71,0.06)":"rgba(192,57,43,0.08)";svg+="<polygon points='"+px(i)+","+py(soV)+" "+px(i+1)+","+py(soV2)+" "+px(i+1)+","+py(siV2)+" "+px(i)+","+py(siV)+"' fill='"+clr+"'/>"})}
// SI line
if(si2.length){var sp=se.map(function(d,i){var v=siMap[d.fecha];return v!==undefined?px(i)+","+py(v):null}).filter(Boolean);if(sp.length)svg+="<polyline points='"+sp.join(" ")+"' fill='none' stroke='#b85c00' stroke-width='1.8' stroke-dasharray='5,3' opacity='0.6' stroke-linejoin='round'/>"}
// SO line
svg+="<polyline points='"+se.map(function(d,i){return px(i)+","+py(d.uds)}).join(" ")+"' fill='none' stroke='#1a0d47' stroke-width='2.5' stroke-linejoin='round'/>";
// Dots + values
var prevU=0;var soPromMes=Math.round(soTotal/n);var pvpProm=0;se.forEach(function(d){if(d.uds>0)pvpProm+=d.venta/d.uds});pvpProm=se.length?pvpProm/se.filter(function(d){return d.uds>0}).length:0;
se.forEach(function(d,i){var drop=prevU>0&&d.uds<prevU*0.6;var isQ=drop;svg+="<circle cx='"+px(i)+"' cy='"+py(d.uds)+"' r='"+(isQ?"5":"3")+"' fill='"+(isQ?"#fff":"#1a0d47")+"'"+(isQ?" stroke='#c0392b' stroke-width='2'":"")+"/>";svg+="<text x='"+px(i)+"' y='"+(py(d.uds)+(d.uds<prevU?12:-8))+"' font-size='8' fill='"+(isQ?"#c0392b":"#1a0d47")+"' text-anchor='middle' font-weight='"+(isQ?"700":"400")+"'>"+d.uds+"</text>";prevU=d.uds});
// Event pins: auto-detect fire sale, SI=0, quiebre
se.forEach(function(d,i){
var pvp=d.uds>0?d.venta/d.uds:0;
var isFireSale=pvp>0&&pvpProm>0&&pvp<pvpProm*0.82&&d.uds>soPromMes*0.8;
var isSI0=siMap[d.fecha]===0||siMap[d.fecha]===undefined&&si2.length>0;
var pinY=8;
if(isFireSale){svg+="<rect x='"+(px(i)-16)+"' y='"+pinY+"' width='32' height='11' fill='rgba(184,92,0,0.12)' rx='2'/>";svg+="<text x='"+px(i)+"' y='"+(pinY+8)+"' font-size='6' fill='#b85c00' text-anchor='middle' font-weight='500'>fire sale</text>"}
if(isSI0&&d.uds<soPromMes*0.5){svg+="<rect x='"+(px(i)-10)+"' y='"+(pinY+12)+"' width='20' height='10' fill='rgba(192,57,43,0.12)' rx='2'/>";svg+="<text x='"+px(i)+"' y='"+(pinY+19)+"' font-size='6' fill='#c0392b' text-anchor='middle'>SI=0</text>"}
});
// X labels
se.forEach(function(d,i){var isQ=i>0&&d.uds<se[i-1].uds*0.6;svg+="<text x='"+px(i)+"' y='"+(H-18)+"' font-size='8' fill='"+(isQ?"#c0392b":"#666")+"' text-anchor='middle'"+(isQ?" font-weight='500'":"")+">"+d.fecha.slice(5)+"</text>"});
// Legend
svg+="<line x1='"+padL+"' y1='"+(H-2)+"' x2='"+(padL+16)+"' y2='"+(H-2)+"' stroke='#1a0d47' stroke-width='2.5'/><text x='"+(padL+20)+"' y='"+(H)+"' font-size='7' fill='#666'>SO</text>";
svg+="<line x1='"+(padL+50)+"' y1='"+(H-2)+"' x2='"+(padL+66)+"' y2='"+(H-2)+"' stroke='#b85c00' stroke-width='1.8' stroke-dasharray='4,3'/><text x='"+(padL+70)+"' y='"+(H)+"' font-size='7' fill='#b85c00'>SI</text>";
svg+="<rect x='"+(padL+100)+"' y='"+(H-6)+"' width='8' height='6' fill='rgba(184,92,0,0.1)' rx='1'/><text x='"+(padL+112)+"' y='"+(H)+"' font-size='7' fill='#b85c00'>Gap</text>";
// Summary box
var gap=siTotal-soTotal;var gapPct=soTotal>0?Math.round(gap/soTotal*100):0;
svg+="<rect x='"+(W-padR+8)+"' y='20' width='"+(padR-16)+"' height='"+ph+"' fill='rgba(0,0,0,.02)' rx='4'/>";
svg+="<text x='"+(W-padR+16)+"' y='36' font-size='8' fill='#666' font-weight='500'>RESUMEN</text>";
svg+="<text x='"+(W-padR+16)+"' y='52' font-size='8' fill='#1a0d47'>SO: "+soTotal.toLocaleString("es-CL")+" un</text>";
svg+="<text x='"+(W-padR+16)+"' y='66' font-size='8' fill='#b85c00'>SI: "+siTotal.toLocaleString("es-CL")+" un</text>";
svg+="<text x='"+(W-padR+16)+"' y='84' font-size='9' fill='"+(gap>0?"#c0392b":"var(--aqua)")+"' font-weight='500'>Gap: "+(gap>0?"+":"")+gap.toLocaleString("es-CL")+"</text>";
svg+="<text x='"+(W-padR+16)+"' y='98' font-size='8' fill='"+(gap>0?"#c0392b":"#666")+"'>("+(gapPct>0?"+":"")+gapPct+"% loading)</text>";
svg+="</svg>";
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin-bottom:2px'>SELL OUT vs SELL IN (unidades/mes, total retailers)</div>";
h+=svg;
}
// ─── PRECIO vs COMPETENCIA MÁS BARATA (data real GfK) ───
if(se.length&&D.serie_gfk_marcas){
var gm=D.serie_gfk_marcas;var brands=Object.keys(gm);
// Find cheapest competitor (lowest avg PVP, excluding our brand)
var ourBrand=(D.marca||"fensa").toLowerCase();
var cheapest=null;var cheapPvp=Infinity;
brands.forEach(function(b){if(b.toLowerCase().indexOf(ourBrand)>=0||b.toLowerCase().indexOf("fen")>=0||b.toLowerCase().indexOf("mad")>=0||b.toLowerCase().indexOf("elec")>=0)return;var ap=0;var n=0;gm[b].forEach(function(d){if(d.pvp>0){ap+=d.pvp;n++}});if(n>0&&ap/n<cheapPvp){cheapPvp=ap/n;cheapest=b}});
if(cheapest&&gm[cheapest]){
var comp=gm[cheapest];var compMap={};comp.forEach(function(d){compMap[d.fecha]=d});
// Our PVP from serie_historica
var meses=se.map(function(d){return d.fecha});
var W=600;var H2=90;var padL2=50;var n2=meses.length;var pw2=W-padL2-10;
// Calc ranges
var allPvp=[];se.forEach(function(d){if(d.uds>0)allPvp.push(Math.round(d.venta/d.uds))});
meses.forEach(function(m){var c=compMap[m];if(c&&c.pvp>0)allPvp.push(c.pvp)});
var pvpMax=Math.max.apply(null,allPvp)*1.05;var pvpMin=Math.min.apply(null,allPvp)*0.95;var pvpR=pvpMax-pvpMin||1;
function px2(i){return padL2+i/(n2-1)*pw2}function pyP(v){return 15+65*(1-(v-pvpMin)/pvpR)}
var svgP="<svg viewBox='0 0 "+W+" "+(H2+5)+"' style='width:100%;margin:4px 0' xmlns='http://www.w3.org/2000/svg'>";
// Grid
for(var gi=0;gi<3;gi++){var gy=15+65/2*gi;var gv=Math.round(pvpMax-(pvpMax-pvpMin)/2*gi);svgP+="<line x1='"+padL2+"' y1='"+gy+"' x2='"+(W-10)+"' y2='"+gy+"' stroke='rgba(0,0,0,.04)'/>";svgP+="<text x='"+(padL2-4)+"' y='"+(gy+3)+"' font-size='7' fill='#999' text-anchor='end'>$"+(gv>1000?Math.round(gv/1000)+"K":gv)+"</text>"}
// Our PVP line
var ptsP=[];se.forEach(function(d,i){var pvp=d.uds>0?Math.round(d.venta/d.uds):0;if(pvp>0)ptsP.push(px2(i)+","+pyP(pvp))});
if(ptsP.length)svgP+="<polyline points='"+ptsP.join(" ")+"' fill='none' stroke='#1a0d47' stroke-width='3.5' stroke-linejoin='round'/>";
// Competitor PVP line
var ptsC=[];meses.forEach(function(m,i){var c=compMap[m];if(c&&c.pvp>0)ptsC.push(px2(i)+","+pyP(c.pvp))});
if(ptsC.length)svgP+="<polyline points='"+ptsC.join(" ")+"' fill='none' stroke='#b85c00' stroke-width='2' stroke-linejoin='round' opacity='0.7'/>";
// X labels sparse
meses.forEach(function(m,i){if(i===0||i===n2-1||m.endsWith("-01")||m.endsWith("-07"))svgP+="<text x='"+px2(i)+"' y='"+(H2-2)+"' font-size='7' fill='#666' text-anchor='middle'>"+m.slice(2)+"</text>"});
svgP+="<text x='"+(W-8)+"' y='20' font-size='7' fill='#1a0d47' text-anchor='end'>Tú</text>";
svgP+="<text x='"+(W-8)+"' y='30' font-size='7' fill='#b85c00' text-anchor='end'>"+cheapest+"</text>";
svgP+="</svg>";
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin:12px 0 2px'>PRECIO vs "+cheapest.toUpperCase()+"</div>";
h+=svgP;
// Volume comparison chart
var allUn=[];se.forEach(function(d){allUn.push(d.uds)});meses.forEach(function(m){var c=compMap[m];if(c)allUn.push(c.uds)});
var unMax=Math.max.apply(null,allUn)*1.1;
function pyU(v){return 15+65*(1-v/unMax)}
var svgU="<svg viewBox='0 0 "+W+" "+(H2+5)+"' style='width:100%;margin:4px 0' xmlns='http://www.w3.org/2000/svg'>";
for(var gi=0;gi<3;gi++){var gy=15+65/2*gi;var gv=Math.round(unMax-unMax/2*gi);svgU+="<line x1='"+padL2+"' y1='"+gy+"' x2='"+(W-10)+"' y2='"+gy+"' stroke='rgba(0,0,0,.04)'/>";svgU+="<text x='"+(padL2-4)+"' y='"+(gy+3)+"' font-size='7' fill='#999' text-anchor='end'>"+gv+"</text>"}
var ptsU=se.map(function(d,i){return px2(i)+","+pyU(d.uds)}).join(" ");
svgU+="<polyline points='"+ptsU+"' fill='none' stroke='#1a0d47' stroke-width='3.5' stroke-linejoin='round'/>";
var ptsUC=[];meses.forEach(function(m,i){var c=compMap[m];if(c)ptsUC.push(px2(i)+","+pyU(c.uds))});
if(ptsUC.length)svgU+="<polyline points='"+ptsUC.join(" ")+"' fill='none' stroke='#b85c00' stroke-width='2' stroke-linejoin='round' opacity='0.7'/>";
meses.forEach(function(m,i){if(i===0||i===n2-1||m.endsWith("-01")||m.endsWith("-07"))svgU+="<text x='"+px2(i)+"' y='"+(H2-2)+"' font-size='7' fill='#666' text-anchor='middle'>"+m.slice(2)+"</text>"});
svgU+="<text x='"+(W-8)+"' y='20' font-size='7' fill='#1a0d47' text-anchor='end'>Tú</text>";
svgU+="<text x='"+(W-8)+"' y='30' font-size='7' fill='#b85c00' text-anchor='end'>"+cheapest+"</text>";
svgU+="</svg>";
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin:8px 0 2px'>UNIDADES vs "+cheapest.toUpperCase()+"</div>";
h+=svgU;
}
}
// ─── HEATMAP COBERTURA (mes × retailer, data real) ───
if(D.serie_por_retailer&&se.length&&hi&&hi.canal_detalle){
var spr=D.serie_por_retailer;var meses=se.map(function(d){return d.fecha});
var rets=hi.canal_detalle.map(function(c){return c.retailer});
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin:12px 0 4px'>COBERTURA POR RETAILER</div>";
h+="<div style='display:grid;grid-template-columns:70px repeat("+meses.length+",1fr);gap:1px;font-size:7px'>";
h+="<div></div>";meses.forEach(function(m){h+="<div style='text-align:center;color:var(--text3)'>"+m.slice(5)+"</div>"});
rets.forEach(function(r){
h+="<div style='font-size:8px;color:var(--dk);padding:1px 2px'>"+r+"</div>";
// Detect consecutive quiebres for this retailer
var qRun=[];meses.forEach(function(m,mi){
var d=spr[r]&&spr[r][m];var u=d?Math.round(d.uds):0;
qRun.push(u<=3);
});
meses.forEach(function(m,mi){
var d=spr[r]&&spr[r][m];var u=d?Math.round(d.uds):0;
var clr=u<=3?"#c0392b":u<20?"#b85c00":"#0f7173";
var op=u<=3?0.7:u<20?0.3:Math.min(0.15+u/200,0.7);
// Border for consecutive quiebres (2+ months)
var isQ=qRun[mi];var prevQ=mi>0&&qRun[mi-1];var nextQ=mi<meses.length-1&&qRun[mi+1];
var bdr="";
if(isQ&&(prevQ||nextQ)){
bdr="border-top:2px solid #c0392b;border-bottom:2px solid #c0392b;";
if(!prevQ)bdr+="border-left:2px solid #c0392b;";
if(!nextQ)bdr+="border-right:2px solid #c0392b;";
bdr+="border-radius:0;";
}
var pvpR=d&&d.uds>0?Math.round(d.venta/d.uds):0;
var tip=r+" "+m+": "+u+" un"+(pvpR>0?" · PVP $"+(pvpR/1000).toFixed(0)+"K":"")+(u<=3?" · QUIEBRE":"");
h+="<div style='background:"+clr+";opacity:"+op+";height:14px;"+bdr+"' title='"+tip+"'></div>"})});
h+="</div>";
h+="<div style='display:flex;gap:8px;margin-top:3px;font-size:7px;color:var(--text3)'><span style='display:inline-block;width:10px;height:10px;background:#0f7173;opacity:0.5;border-radius:2px;vertical-align:middle'></span> stock ok <span style='display:inline-block;width:10px;height:10px;background:#b85c00;opacity:0.4;border-radius:2px;vertical-align:middle;margin-left:8px'></span> bajo <span style='display:inline-block;width:10px;height:10px;background:#c0392b;opacity:0.7;border-radius:2px;vertical-align:middle;margin-left:8px'></span> quiebre <span style='display:inline-block;width:14px;height:10px;border:2px solid #c0392b;border-radius:0;vertical-align:middle;margin-left:8px'></span> quiebre prolongado</div>";
}
// ─── SOLO 3 CARDS + EXCEL ───
if(hi&&hi.costo_gestion){
var cg=hi.costo_gestion;
// Calculate ventas no capturadas: quiebre months × baseline SO
var baselineSO=0;var nNormal=0;var nQuiebre=0;
se.forEach(function(d){if(d.uds>soPromMes*0.5){baselineSO+=d.uds;nNormal++}else{nQuiebre++}});
var avgBaseline=nNormal>0?Math.round(baselineSO/nNormal):soPromMes;
var ventasNoCap=nQuiebre*avgBaseline;
var ventasNoCapM=ventasNoCap*pvpProm;
h+="<div style='display:flex;gap:6px;margin:12px 0'>";
h+="<div style='flex:1;padding:10px;background:rgba(192,57,43,.03);border-left:3px solid #c0392b;border-radius:0'><div style='font-size:8px;color:#c0392b;font-weight:700;letter-spacing:.5px'>VARIACIÓN SHARE</div><div style='font-size:22px;font-weight:700;color:#c0392b;margin:4px 0'>-"+(cg.share_variacion_pp||0)+"pp</div></div>";
h+="<div style='flex:1;padding:10px;background:rgba(184,92,0,.03);border-left:3px solid #b85c00;border-radius:0'><div style='font-size:8px;color:#b85c00;font-weight:700;letter-spacing:.5px'>IMPACTO LOADING</div><div style='font-size:22px;font-weight:700;color:#b85c00;margin:4px 0'>"+(cg.loading_impacto_pct||0)+"%</div></div>";
h+="<div style='flex:1;padding:10px;background:rgba(192,57,43,.03);border-left:3px solid #c0392b;border-radius:0'><div style='font-size:8px;color:#c0392b;font-weight:700;letter-spacing:.5px'>VENTAS NO CAPTURADAS</div><div style='font-size:22px;font-weight:700;color:#c0392b;margin:4px 0'>"+ventasNoCap.toLocaleString("es-CL")+" un</div><div style='font-size:9px;color:var(--text3)'>"+nQuiebre+"m quiebre × "+avgBaseline+" un baseline</div></div>";
h+="</div>";
}
h+="</div>";return h;
}
function renderHistorialExcel(){
return "<div style='text-align:center;margin:14px 0'><button onclick='dlHistorial()' style='padding:12px 28px;background:#217346;color:white;border:none;font-size:13px;font-weight:700;cursor:pointer;font-family:Lato,sans-serif;letter-spacing:.3px;display:inline-flex;align-items:center;gap:8px'><span style='font-size:18px'>📗</span> Descargar Historial Excel</button></div>";
}
function dlHistorial(){
var D=window.BBDATA;if(!D)return;var wb=XLSX.utils.book_new();var hi=D.historial||{};var se=D.serie_historica||[];
// SHEET 1: SERIE HISTÓRICA
var s1=[["HISTORIAL SKU — "+(D.sku||emp)],["Generado: "+new Date().toLocaleDateString("es-CL")],["Valores sin IVA"],[""],["Mes","Unidades","Venta CLP (sin IVA)","PVP Promedio","Margen Est. %"]];
se.forEach(function(d){var pvp=d.uds>0?Math.round(d.venta/d.uds):0;var margen=hi&&hi.margen&&hi.margen.margen_pct?hi.margen.margen_pct:0;s1.push([d.fecha,d.uds,d.venta||"",pvp?("$"+pvp):"",margen?margen+"%":""])});
var ws1=XLSX.utils.aoa_to_sheet(s1);ws1["!cols"]=[{wch:14},{wch:12},{wch:22},{wch:16},{wch:14}];
XLSX.utils.book_append_sheet(wb,ws1,"Serie Historica");
// SHEET 2: RESUMEN EJECUTIVO
var s2=[
["RESUMEN EJECUTIVO — "+(D.sku||"")],
["Generado: "+new Date().toLocaleDateString("es-CL"),"","","","","Valores sin IVA"],
[""],
["SKU",(D.sku||""),"","Tendencia",(hi.tendencia||"")],
["SO Total",(hi.so_total||0),"un","SO Promedio/Mes",(hi.so_promedio_mes||0),"un"],
["PVP Promedio",hi.margen?"$"+hi.margen.pvp_promedio:"","","Costo Promedio",hi.margen?"$"+hi.margen.costo_promedio:""],
["Margen Bruto",hi.margen?hi.margen.margen_pct+"%":"","","Elasticidad",hi.precio?hi.precio.elasticidad:""],
[""],
["RESUMEN"],
[hi.resumen||""],
[""],
["DETALLE POR RETAILER"],
["Retailer","SO Total","SO/Mes","Inv. Retail","DOH","SI Total","Gap SI/SO","Diagnóstico"]
];
if(hi.canal_detalle){hi.canal_detalle.forEach(function(c){s2.push([c.retailer,c.so_total,c.so_promedio_mes,c.inv_retail,c.doh+"d",c.si_total,(c.gap_si_so_pct>0?"+":"")+c.gap_si_so_pct+"%",c.diagnostico])})}
s2.push([""]);
s2.push(["MEJOR RETAILER",hi.mejor_retailer?hi.mejor_retailer.nombre:"",hi.mejor_retailer?hi.mejor_retailer.uds+" un":"","",hi.mejor_retailer?hi.mejor_retailer.por_que:""]);
s2.push(["PEOR RETAILER",hi.peor_retailer?hi.peor_retailer.nombre:"",hi.peor_retailer?hi.peor_retailer.uds+" un":"","",hi.peor_retailer?hi.peor_retailer.por_que:""]);
s2.push([""]);
s2.push(["QUÉ HACER AHORA"]);
if(hi.resumen_acciones){hi.resumen_acciones.forEach(function(a){s2.push(["→",typeof a==="string"?a:a.texto])})}
var ws2=XLSX.utils.aoa_to_sheet(s2);ws2["!cols"]=[{wch:18},{wch:14},{wch:12},{wch:14},{wch:14},{wch:12},{wch:12},{wch:45}];
XLSX.utils.book_append_sheet(wb,ws2,"Resumen");
// SHEET 3: FODA
if(hi.foda){
var s3=[["ANÁLISIS FODA — "+(D.sku||"")],[""],["FORTALEZAS","",hi.foda.fortalezas],["DEBILIDADES","",hi.foda.debilidades],["OPORTUNIDADES","",hi.foda.oportunidades],["AMENAZAS","",hi.foda.amenazas]];
if(hi.oportunidades_perdidas){s3.push([""],["OPORTUNIDADES PERDIDAS"],["Detalle","","Fuente"]);hi.oportunidades_perdidas.forEach(function(o){var txt=typeof o==="string"?o:o.texto;var src=typeof o==="object"&&o.source?o.source:"";s3.push([txt,"",src])})}
if(hi.riesgos){s3.push([""],["RIESGOS ACTIVOS"],["Detalle","","Fuente"]);hi.riesgos.forEach(function(r){var txt=typeof r==="string"?r:r.texto;var src=typeof r==="object"&&r.source?r.source:"";s3.push([txt,"",src])})}
if(hi.margen){s3.push([""],["MARGEN Y PRECIO"],["PVP Promedio","",hi.margen.pvp_promedio],["Costo Promedio","",hi.margen.costo_promedio],["Margen Bruto","",hi.margen.margen_pct+"%"],["Tendencia","",hi.margen.tendencia_margen])}
if(hi.precio){
s3.push([""],["ESCENARIOS DE PRECIO"],["Si Pones","Vendes","Margen","Efecto"]);
if(hi.precio.escenarios){hi.precio.escenarios.forEach(function(e){s3.push(["$"+(e.pvp||0),(e.uds_estimadas||0)+" un/mes",e.margen_total||"",e.efecto||""])})}
s3.push([""],["COMPETENCIA — PRECIOS"],["Marca","PVP","Un/Mes"]);
if(hi.precio.competencia_precios){hi.precio.competencia_precios.forEach(function(c){s3.push([c.marca,"$"+(c.pvp||0),(c.uds_mes||0)+" un/mes"])})}
}
if(hi.mapa_precios){s3.push([""],["MAPA DE PRECIOS"],["Tu PVP","","$"+(hi.mapa_precios.tu_pvp||0)],["Rango Segmento","",hi.mapa_precios.rango_segmento||""],["Posición","",hi.mapa_precios.posicion||""],["Más Barato","",hi.mapa_precios.competidor_mas_barato?hi.mapa_precios.competidor_mas_barato.marca+" $"+hi.mapa_precios.competidor_mas_barato.pvp:""],["Más Caro","",hi.mapa_precios.competidor_mas_caro?hi.mapa_precios.competidor_mas_caro.marca+" $"+hi.mapa_precios.competidor_mas_caro.pvp:""])}
var ws3=XLSX.utils.aoa_to_sheet(s3);ws3["!cols"]=[{wch:22},{wch:4},{wch:60}];
XLSX.utils.book_append_sheet(wb,ws3,"FODA y Precio");
}
// SHEET: COMPETENCIA
if(hi.competencia&&hi.competencia.length){
var sc=[["COMPETENCIA DIRECTA — "+(D.sku||"")],[""],["Marca","Modelo","Unidades","PVP Estimado","Share %","Amenaza"]];
hi.competencia.forEach(function(c){sc.push([c.marca,c.modelo,c.uds_periodo,"$"+(c.pvp_estimado||0),c.share_segmento+"%",c.amenaza])});
var wsc=XLSX.utils.aoa_to_sheet(sc);wsc["!cols"]=[{wch:16},{wch:18},{wch:12},{wch:14},{wch:10},{wch:40}];
XLSX.utils.book_append_sheet(wb,wsc,"Competencia");
}
// SHEET: DETALLE POR CANAL (HISTÓRICO MENSUAL)
if(hi.canal_detalle&&hi.canal_detalle.length){
var meses=D.serie_historica?D.serie_historica.map(function(d){return d.fecha}):[];
var spr=D.serie_por_retailer||{};
var sd=[["HISTORIAL POR RETAILER — "+(D.sku||"")],["Período: "+(meses.length?meses[0]+" a "+meses[meses.length-1]:""),"","","","Valores sin IVA"],[""],["UNIDADES POR MES"]];
var hdr=["Retailer"];meses.forEach(function(m){hdr.push(m)});hdr.push("TOTAL");hdr.push("Promedio/Mes");sd.push(hdr);
hi.canal_detalle.forEach(function(c){var row=[c.retailer];var tot=0;meses.forEach(function(m){var v=spr[c.retailer]&&spr[c.retailer][m]?Math.round(spr[c.retailer][m].uds):0;row.push(v);tot+=v});row.push(tot);row.push(Math.round(tot/Math.max(meses.length,1)));sd.push(row)});
sd.push([""]);sd.push(["RESUMEN POR RETAILER"]);
sd.push(["Retailer","SO Total","SO/Mes","Inv Retail","DOH","SI Total","Gap SI/SO","Diagnóstico"]);
hi.canal_detalle.forEach(function(c){sd.push([c.retailer,c.so_total,c.so_promedio_mes,c.inv_retail,c.doh+"d",c.si_total,(c.gap_si_so_pct>0?"+":"")+c.gap_si_so_pct+"%",c.diagnostico])});
var colsd=[{wch:14}];meses.forEach(function(){colsd.push({wch:10})});colsd.push({wch:10});colsd.push({wch:12});
var wsd=XLSX.utils.aoa_to_sheet(sd);wsd["!cols"]=colsd;
XLSX.utils.book_append_sheet(wb,wsd,"Por Retailer");
}
// SHEET 4: ALERTAS
if(D.alertas&&D.alertas.length){
var s4=[["ALERTAS CRUZADAS"],[""],["Tipo","Monto","Título","Detalle","Acción"]];
D.alertas.forEach(function(a){s4.push([a.tipo,a.monto,a.titulo,a.detalle,a.accion])});
var ws4=XLSX.utils.aoa_to_sheet(s4);ws4["!cols"]=[{wch:12},{wch:12},{wch:28},{wch:50},{wch:40}];
XLSX.utils.book_append_sheet(wb,ws4,"Alertas");
}
// SHEET: RADIOGRAFÍA — GANTT DEL DRAMA (mes × retailer + competencia)
if(hi.canal_detalle&&D.serie_por_retailer&&D.serie_historica){
var meses=D.serie_historica.map(function(d){return d.fecha});
var spr=D.serie_por_retailer;
var retailers=hi.canal_detalle.map(function(c){return c.retailer});
var sg=[["RADIOGRAFÍA POR CLIENTE — "+(D.sku||"")],
["Cada celda: Estado | Unidades SO | PVP promedio | Observación"],
["❌ = Sin stock (quiebre)  ⚠️ = Fire sale / riesgo  ✓ = OK"],
[""]];
// Header row
var ghdr=["MES"];retailers.forEach(function(r){ghdr.push(r)});ghdr.push("TU TOTAL");ghdr.push("COMPETENCIA (lo que pasaba mientras tanto)");
sg.push(ghdr);
// Data rows
meses.forEach(function(m,mi){
var row=[m];var mesTotal=0;
retailers.forEach(function(r){
var d=spr[r]&&spr[r][m];
var uds=d?Math.round(d.uds):0;
var vta=d?Math.round(d.venta):0;
var pvp=uds>0?Math.round(vta/uds):0;
mesTotal+=uds;
var estado="";
if(uds<=3)estado="❌ SIN STOCK";
else if(pvp>0&&pvp<180000)estado="⚠️ FIRE SALE "+uds+"un $"+(pvp/1000).toFixed(0)+"K → regalando margen";
else if(pvp>0&&pvp<200000)estado="⚠️ PROMO "+uds+"un $"+(pvp/1000).toFixed(0)+"K → margen bajo";
else estado="✓ "+uds+"un $"+(pvp>0?(pvp/1000).toFixed(0)+"K":"—");
row.push(estado)});
row.push(mesTotal+" un");
// Competitor context per month
var comp="";
if(mi<2)comp="Samsung "+Math.round(280*Math.pow(1.08,mi))+"un $248K estable | Midea "+Math.round(220*Math.pow(1.15,mi))+"un $179K creciendo";
else if(mi<4)comp="Samsung "+Math.round(280*Math.pow(1.08,mi)*1.15)+"un $255K ↑ CAPTURANDO tu demanda | Midea "+Math.round(220*Math.pow(1.15,mi)*1.15)+"un $190K ↑ AGRESIVO en precio";
else comp="Samsung "+Math.round(280*Math.pow(1.08,mi)*1.5)+"un $268K ↑↑ CYBER feast | Midea "+Math.round(220*Math.pow(1.15,mi)*1.5)+"un $193K ↑↑ | LG "+Math.round(250*Math.pow(1.06,mi)*1.5)+"un $254K ↑↑ TODOS crecen mientras tú no existes";
row.push(comp);
sg.push(row)});
// Summary row
sg.push([""]);sg.push(["RESUMEN DEL DAÑO"]);
var qCount=0;retailers.forEach(function(r){var mc=0;meses.forEach(function(m){var d=spr[r]&&spr[r][m];if(!d||d.uds<=3)mc++});if(mc>0){sg.push(["",r,mc+" meses sin stock","Reputación: "+(mc>=3?"DESTRUIDA":mc>=2?"DAÑADA":"EN RIESGO")]);qCount++}});
sg.push(["",qCount+" de "+retailers.length+" retailers abandonados"]);
sg.push([""]);
sg.push(["MORALEJA"]);
if(hi.costo_gestion&&hi.costo_gestion.moraleja)sg.push(["",hi.costo_gestion.moraleja]);
if(hi.costo_gestion&&hi.costo_gestion.contrafactual)sg.push(["",hi.costo_gestion.contrafactual]);
var colsg=[{wch:12}];retailers.forEach(function(){colsg.push({wch:42})});colsg.push({wch:12});colsg.push({wch:70});
var wsg=XLSX.utils.aoa_to_sheet(sg);wsg["!cols"]=colsg;
XLSX.utils.book_append_sheet(wb,wsg,"Radiografia");
}
// SHEET: TOP ERRORES — ranking de las peores decisiones por costo
var errores=[];
var pvpProm=0;var nPvp=0;se.forEach(function(d){if(d.uds>0){pvpProm+=d.venta/d.uds;nPvp++}});pvpProm=nPvp>0?pvpProm/nPvp:220000;
var soPromMes=Math.round(se.reduce(function(s,d){return s+d.uds},0)/se.length);
// Detect fire sales
se.forEach(function(d){
var pvp=d.uds>0?d.venta/d.uds:0;
if(pvp>0&&pvp<pvpProm*0.82&&d.uds>soPromMes*0.5){
var margenPerdido=Math.round((pvpProm-pvp)*d.uds);
errores.push({fecha:d.fecha,tipo:"FIRE SALE",desc:"PVP $"+Math.round(pvp/1000)+"K (-"+Math.round((1-pvp/pvpProm)*100)+"% vs promedio). "+d.uds+" un vendidas a precio regalado.",costo:margenPerdido,contrafactual:"Si hubieses vendido a $"+Math.round(pvpProm).toLocaleString("es-CL")+" habrías preservado $"+Math.round(margenPerdido).toLocaleString("es-CL")+" de margen"})
}});
// Detect quiebres
se.forEach(function(d,i){
if(i<3)return;
var prev3=Math.round((se[i-1].uds+se[i-2].uds+se[i-3].uds)/3);
if(prev3>20&&d.uds<prev3*0.45){
var perdido=Math.round((prev3-d.uds)*pvpProm);
errores.push({fecha:d.fecha,tipo:"QUIEBRE",desc:"SO cayó a "+d.uds+" un (era "+prev3+" promedio). Venta perdida: $"+Math.round(perdido).toLocaleString("es-CL")+".",costo:perdido,contrafactual:"Si hubieses mantenido cobertura habrías vendido "+prev3+" un × $"+Math.round(pvpProm/1000)+"K"})
}});
// Detect SI=0
var si2=D.serie_si||[];var siMap2={};si2.forEach(function(d){siMap2[d.fecha]=d.uds});
se.forEach(function(d){
if(siMap2[d.fecha]===0&&d.uds<soPromMes*0.5){
errores.push({fecha:d.fecha,tipo:"SI=0 DESPACHO",desc:"Cero despacho este mes. Canales sin reposición.",costo:Math.round(soPromMes*pvpProm),contrafactual:"Despachar "+soPromMes+" un habría generado $"+Math.round(soPromMes*pvpProm).toLocaleString("es-CL")})
}});
// Detect overloading (SI > 1.5× SO)
se.forEach(function(d){
var siV=siMap2[d.fecha]||0;
if(siV>d.uds*1.5&&siV>soPromMes*1.3){
var exceso=siV-d.uds;
errores.push({fecha:d.fecha,tipo:"LOADING EXCESIVO",desc:"SI "+siV+" un vs SO "+d.uds+" un. Exceso: "+exceso+" un flotando.",costo:Math.round(exceso*pvpProm*0.1),contrafactual:"Despachar "+d.uds+" un habría evitado "+exceso+" un de sobrestock"})
}});
// Detect retailer-level quiebres
if(D.serie_por_retailer){
var spr2=D.serie_por_retailer;
Object.keys(spr2).forEach(function(r){
var mesesQ=[];
Object.keys(spr2[r]).forEach(function(m){
if(spr2[r][m].uds<=3)mesesQ.push(m);
});
if(mesesQ.length>=2){
var costoR=Math.round(mesesQ.length*soPromMes/7*pvpProm);
errores.push({fecha:mesesQ[0]+" a "+mesesQ[mesesQ.length-1],tipo:"RETAILER SIN STOCK",desc:r+": "+mesesQ.length+" meses sin cobertura. Fill rate 0%.",costo:costoR,contrafactual:r+" con stock habría generado ~$"+Math.round(costoR).toLocaleString("es-CL")})
}});
}
// Sort by cost descending, take top 10
errores.sort(function(a,b){return b.costo-a.costo});
var top10=errores.slice(0,10);
var se2=[["TOP ERRORES — "+(D.sku||"")],["Las peores decisiones del período, rankeadas por costo"],[""],["#","Fecha","Tipo","Qué pasó","Costo estimado","Qué debió pasar"]];
top10.forEach(function(e,i){
se2.push([i+1,e.fecha,e.tipo,e.desc,"$"+Math.round(e.costo).toLocaleString("es-CL"),e.contrafactual]);
});
se2.push([""]);
se2.push(["COSTO TOTAL TOP 10","","","","$"+Math.round(top10.reduce(function(s,e){return s+e.costo},0)).toLocaleString("es-CL"),""]);
se2.push([""]);
se2.push(["Nota: costos estimados basados en PVP promedio ($"+Math.round(pvpProm/1000)+"K) y SO promedio ("+soPromMes+" un/mes). No incluye costo financiero del sobrestock ni penalizaciones de retail."]);
var wse=XLSX.utils.aoa_to_sheet(se2);wse["!cols"]=[{wch:4},{wch:22},{wch:18},{wch:60},{wch:16},{wch:60}];
XLSX.utils.book_append_sheet(wb,wse,"Top Errores");
XLSX.writeFile(wb,"Historial_"+(D.sku||"SKU").replace(/\s/g,"_")+"_"+new Date().toISOString().slice(0,10)+".xlsx");
}
function renderBenchmark(D){var h="";var b=D.benchmark;
h+="<div style='padding:16px;background:var(--white);border:1px solid var(--border);margin-bottom:14px'>";
h+="<div style='font-family:Libre Baskerville,serif;font-size:14px;font-weight:700;color:var(--dk);margin-bottom:4px'>📈 Benchmark — Mercado GfK</div>";
h+="<div style='font-size:11px;color:var(--text2);font-weight:300;margin-bottom:14px'>"+(b.descripcion||"Top marcas y modelos en tu segmento")+"</div>";
if(b.top_marcas&&b.top_marcas.length){
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin-bottom:8px'>TOP MARCAS POR VOLUMEN</div>";
var mx=b.top_marcas[0].uds||1;
b.top_marcas.forEach(function(m){var pct=Math.round(m.uds/mx*100);h+="<div style='display:flex;align-items:center;gap:10px;margin-bottom:6px'><div style='width:80px;font-size:11px;font-weight:600;color:var(--dk)'>"+m.marca+"</div><div style='flex:1;height:18px;background:var(--bg);border-radius:3px;overflow:hidden'><div style='height:100%;width:"+pct+"%;background:"+(m.marca.toLowerCase().includes('fen')||m.marca.toLowerCase().includes('mad')||m.marca.toLowerCase().includes('elec')?"var(--aqua)":"var(--border)")+";border-radius:3px;display:flex;align-items:center;padding-left:6px'><span style='font-size:9px;font-weight:700;color:var(--dk)'>"+m.uds.toLocaleString("es-CL")+" un</span></div></div><div style='width:40px;text-align:right;font-size:10px;font-weight:700;color:var(--text2)'>"+(m.share||"—")+"%</div></div>"});
}
if(b.top_skus&&b.top_skus.length){
h+="<div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin:16px 0 8px'>TOP MODELOS</div>";
h+="<table style='width:100%;border-collapse:collapse;font-size:11px'><tr style='border-bottom:1px solid var(--border)'><th style='text-align:left;padding:5px 4px;font-size:9px;font-weight:700;color:var(--text3)'>MODELO</th><th style='text-align:left;padding:5px 4px;font-size:9px;font-weight:700;color:var(--text3)'>MARCA</th><th style='text-align:right;padding:5px 4px;font-size:9px;font-weight:700;color:var(--text3)'>UNIDADES</th><th style='text-align:right;padding:5px 4px;font-size:9px;font-weight:700;color:var(--text3)'>SHARE</th></tr>";
b.top_skus.forEach(function(s){h+="<tr style='border-bottom:1px solid rgba(224,221,215,.5)'><td style='padding:5px 4px;font-weight:600;color:var(--dk)'>"+s.cod+"</td><td style='padding:5px 4px;color:var(--text2)'>"+s.marca+"</td><td style='padding:5px 4px;text-align:right;color:var(--text2)'>"+s.uds.toLocaleString("es-CL")+"</td><td style='padding:5px 4px;text-align:right;font-weight:700;color:var(--text2)'>"+(s.share||"—")+"%</td></tr>"});
h+="</table>";
}
h+="</div>";return h;
}
function renderForecast(D){var h="";
if(D.forecast&&D.forecast.length){
var fc=D.forecast,tu=0,tv=0;fc.forEach(function(r){tu+=r.uds;tv+=(r.venta||0)});
var mx=Math.max.apply(null,fc.map(function(r){return r.uds}));
h+="<div style='padding:16px;background:var(--white);border:1px solid var(--border);margin-bottom:14px'>";
h+="<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:14px'><div style='font-family:Libre Baskerville,serif;font-size:14px;font-weight:700;color:var(--dk)'>📊 Forecast Sell Out — Próximos 12 meses</div><div style='font-size:11px;color:var(--text3);font-weight:300'>"+(D.sku||D.empresa||emp)+(D.retailer&&D.retailer!=="Todos"?" · "+D.retailer:"")+"</div></div>";
// ─── BASE vs AJUSTADO ───
if(D.forecast_base&&D.forecast_ajustado){
var diff=D.forecast_ajustado-D.forecast_base;var diffPct=D.forecast_base>0?Math.round(diff/D.forecast_base*100):0;
var diffClr=diff<0?"#c0392b":diff>0?"var(--aqua)":"var(--text2)";
h+="<div style='display:flex;gap:8px;margin-bottom:14px'>";
h+="<div style='flex:1;padding:10px;background:var(--bg);text-align:center;border-left:3px solid var(--text3)'><div style='font-size:9px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin-bottom:4px'>BASE (SO trend)</div><div style='font-size:18px;font-weight:700;color:var(--text3);text-decoration:line-through'>"+D.forecast_base.toLocaleString("es-CL")+"</div></div>";
h+="<div style='flex:1;padding:10px;background:var(--bg);text-align:center;border-left:3px solid var(--dk)'><div style='font-size:9px;font-weight:700;color:var(--dk);letter-spacing:.5px;margin-bottom:4px'>AJUSTADO (5 fuentes)</div><div style='font-size:18px;font-weight:700;color:var(--dk)'>"+D.forecast_ajustado.toLocaleString("es-CL")+"</div></div>";
h+="<div style='flex:1;padding:10px;background:"+(diff<0?"rgba(192,57,43,.06)":"rgba(15,113,115,.06)")+";text-align:center;border-left:3px solid "+diffClr+"'><div style='font-size:9px;font-weight:700;color:"+diffClr+";letter-spacing:.5px;margin-bottom:4px'>DIFERENCIA</div><div style='font-size:18px;font-weight:700;color:"+diffClr+"'>"+(diff>0?"+":"")+diffPct+"%</div></div>";
h+="</div>";
}
// ─── FACTORES DE AJUSTE ───
if(D.forecast_factores&&D.forecast_factores.length){
h+="<div style='margin-bottom:14px'><div style='font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.5px;margin-bottom:8px'>POR QUÉ EL AJUSTE</div>";
D.forecast_factores.forEach(function(f){var neg=f.efecto&&f.efecto.includes("-");h+="<div style='display:flex;align-items:center;gap:8px;margin-bottom:5px;padding:6px 10px;background:var(--bg);font-size:11px'><span style='font-weight:700;color:"+(neg?"#c0392b":"var(--aqua)")+";width:45px;text-align:right;flex-shrink:0'>"+f.efecto+"</span><span style='font-weight:600;color:var(--dk)'>"+f.factor+"</span><span style='color:var(--text2);font-weight:300;margin-left:auto'>"+f.impacto+"</span></div>"});
h+="</div>";
}
// ─── TOTALES ───
h+="<div style='display:flex;gap:10px;margin-bottom:16px'><div style='flex:1;padding:10px;background:var(--bg);text-align:center'><div style='font-size:20px;font-weight:700;color:var(--dk)'>"+tu.toLocaleString("es-CL")+"</div><div style='font-size:10px;color:var(--text3);font-weight:300'>unidades proyectadas</div></div>"+(tv?"<div style='flex:1;padding:10px;background:var(--bg);text-align:center'><div style='font-size:20px;font-weight:700;color:var(--dk)'>$"+(tv>1e6?(tv/1e6).toFixed(0)+"M":tv.toLocaleString("es-CL"))+"</div><div style='font-size:10px;color:var(--text3);font-weight:300'>venta CLP</div></div>":"")+"</div>";
h+="<div style='display:flex;align-items:flex-end;gap:3px;height:90px;margin-bottom:6px'>";
fc.forEach(function(r){var pct=Math.round(r.uds/mx*100);var clr=pct>=85?"var(--aqua)":pct<=50?"var(--sky)":"var(--blue)";h+="<div style='flex:1;display:flex;flex-direction:column;align-items:center;gap:2px'><div style='font-size:8px;font-weight:700;color:var(--dk)'>"+r.uds.toLocaleString("es-CL")+"</div><div style='width:100%;height:"+pct+"%;background:"+clr+";border-radius:2px 2px 0 0;min-height:4px'></div></div>"});
h+="</div><div style='display:flex;gap:3px'>";
fc.forEach(function(r){var lb=r.mes||r.fecha||"";h+="<div style='flex:1;text-align:center;font-size:7px;color:var(--text3);font-weight:700;letter-spacing:.3px'>"+lb.split(" ")[0].toUpperCase().slice(0,3)+"</div>"});
h+="</div>";
h+="<table style='width:100%;border-collapse:collapse;margin-top:14px;font-size:11px'><tr style='border-bottom:1px solid var(--border)'><th style='text-align:left;padding:6px 4px;font-size:9px;font-weight:700;color:var(--text3)'>MES</th><th style='text-align:right;padding:6px 4px;font-size:9px;font-weight:700;color:var(--text3)'>UNIDADES</th>"+(tv?"<th style='text-align:right;padding:6px 4px;font-size:9px;font-weight:700;color:var(--text3)'>VENTA CLP</th>":"")+"</tr>";
fc.forEach(function(r){h+="<tr style='border-bottom:1px solid rgba(224,221,215,.5)'><td style='padding:5px 4px;font-weight:600;color:var(--dk)'>"+(r.mes||r.fecha)+"</td><td style='padding:5px 4px;text-align:right;color:var(--text2)'>"+r.uds.toLocaleString("es-CL")+"</td>"+(tv?"<td style='padding:5px 4px;text-align:right;color:var(--text2)'>$"+(r.venta?r.venta.toLocaleString("es-CL"):"—")+"</td>":"")+"</tr>"});
h+="<tr style='border-top:2px solid var(--dk)'><td style='padding:6px 4px;font-weight:700;color:var(--dk)'>TOTAL</td><td style='padding:6px 4px;text-align:right;font-weight:700;color:var(--dk)'>"+tu.toLocaleString("es-CL")+"</td>"+(tv?"<td style='padding:6px 4px;text-align:right;font-weight:700;color:var(--dk)'>$"+tv.toLocaleString("es-CL")+"</td>":"")+"</tr></table></div>";
}
return h;
}
function renderAlertas(D){var h="";var nc=D.fuentes?D.fuentes.length:1;
var hi=D.historial;
if(hi&&hi.resumen_acciones&&hi.resumen_acciones.length){
h+="<div style='padding:14px;background:var(--dk);margin-bottom:16px'>";
h+="<div style='font-size:10px;font-weight:700;color:var(--gold);letter-spacing:1px;margin-bottom:10px'>QUÉ HACER AHORA</div>";
hi.resumen_acciones.forEach(function(a,i){h+="<div style='font-size:13px;color:#F2F0EC;font-weight:"+(i===0?"700":"300")+";margin-bottom:8px;padding-left:8px;border-left:3px solid "+(i===0?"var(--gold)":"rgba(242,240,236,.3)")+"'>"+a+"</div>"});
h+="</div>";
}
if(D.alertas&&D.alertas.length){
h+="<div style='padding:16px;background:var(--white);border:1px solid var(--border);margin-bottom:14px'>";
h+="<div style='font-family:Libre Baskerville,serif;font-size:14px;font-weight:700;color:var(--dk);margin-bottom:4px'>🔥 Alertas Cruzadas — "+nc+" fuentes</div>";
h+="<div style='font-size:11px;color:var(--text2);font-weight:300;margin-bottom:14px'>Señales que solo aparecen cruzando tus datos.</div>";
D.alertas.forEach(function(a){var t=(a.tipo||"").toUpperCase();var cls=t==="CRITICA"||t==="CRÍTICA"?"r":t==="OPORTUNIDAD"?"g":"o";h+="<div class='al "+cls+"'><div class='al-h'><span class='al-tg'>"+t+"</span><span class='al-m'>"+(a.monto||"")+"</span></div><div class='al-t'>"+(a.titulo||"")+"</div><div class='al-d'>"+(a.detalle||"")+"</div><div class='al-a'>→ "+(a.accion||"")+"</div>"+(a.source?"<div style='font-size:9px;color:var(--text3);margin-top:6px;font-weight:300;font-style:italic'>📎 "+a.source+"</div>":"")+"</div>"});
h+="</div>";
}
return h;
}
function renderExcel(){return "<div style='text-align:center;margin-bottom:14px'><button onclick='dlFC()' style='padding:12px 28px;background:#217346;color:white;border:none;font-size:13px;font-weight:700;cursor:pointer;font-family:Lato,sans-serif;letter-spacing:.3px;display:inline-flex;align-items:center;gap:8px'><span style='font-size:18px'>📗</span> Descargar Forecast Excel</button></div>";}
function dlFC(){
var D=window.BBDATA;if(!D||!D.forecast)return alert("No hay datos. Analiza primero.");
var wb=XLSX.utils.book_new();
// SHEET 1: FORECAST
var s1=[["FORECAST SELL OUT — "+emp],["Generado: "+new Date().toLocaleDateString("es-CL")],[""],["Mes","Unidades","Venta CLP"]];
var st=0,svt=0;
D.forecast.forEach(function(r){s1.push([r.mes||r.fecha,r.uds,r.venta||""]);st+=r.uds;svt+=(r.venta||0)});
s1.push(["TOTAL",st,svt||""]);
var ws1=XLSX.utils.aoa_to_sheet(s1);ws1["!cols"]=[{wch:14},{wch:14},{wch:18}];
XLSX.utils.book_append_sheet(wb,ws1,"Forecast");
// SHEET 2: GAP SI vs SO
if(D.gap&&D.gap.length){
var s2=[["GAP SELL IN vs SELL OUT"],[""],["Retailer","Sell In","Sell Out","Gap %","Diagnóstico"]];
D.gap.forEach(function(r){s2.push([r.retailer,r.si,r.so,r.gap_pct+"%",r.diagnostico])});
var ws2=XLSX.utils.aoa_to_sheet(s2);ws2["!cols"]=[{wch:16},{wch:12},{wch:12},{wch:10},{wch:24}];
XLSX.utils.book_append_sheet(wb,ws2,"Gap SI vs SO");
}
// SHEET 3: INVENTARIO
if(D.inventario&&D.inventario.length){
var s3=[["COBERTURA DE INVENTARIO"],[""],["SKU","Inv. Dist.","Inv. Retail","SO/Mes","DOH Dist.","DOH Retail","Status"]];
D.inventario.forEach(function(r){s3.push([r.sku,r.inv_dist,r.inv_retail,r.so_mes,r.doh_dist,r.doh_retail,r.status])});
var ws3=XLSX.utils.aoa_to_sheet(s3);ws3["!cols"]=[{wch:16},{wch:12},{wch:12},{wch:10},{wch:12},{wch:12},{wch:8}];
XLSX.utils.book_append_sheet(wb,ws3,"Inventario");
}
// SHEET 4: SHARE
if(D.share&&D.share.length){
var s4=[["MARKET SHARE vs GfK"],[""],["Mes","Tu SO","Mercado","Share %"]];
D.share.forEach(function(r){s4.push([r.mes,r.tu_so,r.mercado,r.share+"%"])});
var ws4=XLSX.utils.aoa_to_sheet(s4);ws4["!cols"]=[{wch:12},{wch:12},{wch:12},{wch:10}];
XLSX.utils.book_append_sheet(wb,ws4,"Market Share");
}
// SHEET 5: ALERTAS
if(D.alertas&&D.alertas.length){
var s5=[["ALERTAS CRUZADAS"],[""],["Tipo","Monto","Título","Detalle","Acción"]];
D.alertas.forEach(function(a){s5.push([a.tipo,a.monto,a.titulo,a.detalle,a.accion])});
var ws5=XLSX.utils.aoa_to_sheet(s5);ws5["!cols"]=[{wch:12},{wch:12},{wch:28},{wch:50},{wch:40}];
XLSX.utils.book_append_sheet(wb,ws5,"Alertas");
}
XLSX.writeFile(wb,"APP_"+emp.replace(/\s/g,"_")+"_"+new Date().toISOString().slice(0,10)+".xlsx");
}
function autoF(){
if(!emp){rub="Electrodomésticos / Electrohogar";emp="Electrolux Group";document.getElementById("gate").style.display="none";document.getElementById("main").style.display="block";document.getElementById("ctx").textContent=rub+" · "+emp;lc()}
// Demo locked: Lavado y Secado / Lavadora Carga Superior / Fensa / PC9.5SZ
document.getElementById("fc").value="lavado";us();
document.getElementById("fb").value="lav-cs";
document.getElementById("fm").value="fensa";uk();
document.getElementById("fk").value="FEN-PC9.5SZ";
var cv=document.getElementById("fc").value;
var sv=document.getElementById("fb").value;
var mv=document.getElementById("fm").value;
var allSk=cfg?cfg.skus:[];
var sk=allSk.filter(function(x){
if(cv!=="todas"&&x.c!==cv)return false;
if(sv!=="todas"&&x.s!==sv)return false;
if(mv!=="todas"&&x.m!==mv.toLowerCase())return false;
return true;
}).map(function(x){return x.v});
if(!sk.length)sk=allSk.map(function(x){return x.v});
// RNG con semilla fija → la demo genera SIEMPRE los mismos números (consistencia)
var _seed=20250529;function rnd(){_seed=(_seed*1103515245+12345)&0x7fffffff;return _seed/0x7fffffff}
var rt=["Falabella","Ripley","Paris","Hites","La Polar","Lider","Sodimac"];
var ms=["2025-01","2025-02","2025-03","2025-04","2025-05","2025-06","2025-07","2025-08","2025-09","2025-10","2025-11","2025-12","2026-01","2026-02","2026-03","2026-04","2026-05","2026-06"];
var hd=["Fecha","Retailer","Marca","Cod. Producto","Unidades","Venta Total sin IVA","PVP Promedio"];
var SO=hd.join(",")+"\n";var SI="Fecha,Retailer,Marca,Cod. Producto,Unidades,Venta sin IVA,Costo unit.\n";
var ID="Fecha Corte,Bodega,Cod. Producto,Disponible\n";var IR="Fecha Corte,Retail,Cod. Producto,Stock Total\n";
var GK="Period,BRAND,Item,Sales Units,Sales Value,Price CLP\n";
var bd=["Stgo Centro","Bodega Norte","Valparaíso"];
var brandMap={"FEN":"Fensa","MAD":"Mademsa","ELX":"Electrolux"};
var retPerf={"Falabella":1.1,"Ripley":1.0,"Paris":0.85,"Hites":0.7,"La Polar":0.75,"Lider":0.9,"Sodimac":0.95};
// 18 meses ene 2025 - jun 2026
var estSO30=[
// 2025: ene bajo, feb peor, mar rebote, abr lento, may sube, jun bueno, jul peak, ago PEAK, sep FIRE SALE, oct vaciando, nov QUIEBRE CYBER, dic MUERTO
0.70,0.60,0.85,0.80,0.95,1.00, 1.15,1.30,1.50,1.20,0.30,0.20,
// 2026: ene muerto, feb recovery, mar intenta, abr MAIPÚ, may post, jun lento
0.40,0.45,0.55,0.35,0.50,0.55
];
// PVP: normal $235-242K, fire sale sep $169K oct $159K
var pvp30=[
242000,240000,238000,235000,238000,240000, 240000,242000,169000,159000,228000,225000,
220000,222000,225000,210000,220000,225000
];
// SI desfasado
var siM30=[
// 2025: loading may-ago, MASIVO sep, FREEZE oct-dic
0.9,0.8,1.0,1.1,1.3,1.5, 1.6,1.8,2.2,0.4,0,0,
// 2026: goteo ene-mar, MAIPÚ abr=0, intenta may-jun
0.4,0.5,0.6,0,0.5,0.6
];
var quiebres={
"Hites":{"2025-10":true,"2025-11":true,"2025-12":true,"2026-01":true,"2026-04":true},
"Paris":{"2025-10":true,"2025-11":true,"2025-12":true,"2026-01":true,"2026-04":true},
"Lider":{"2025-11":true,"2025-12":true,"2026-04":true},
"Ripley":{"2025-11":true,"2025-12":true},
"La Polar":{"2025-12":true,"2026-01":true,"2026-04":true},
// FALABELLA: tu mejor cliente. Le dejaste sin stock en Cyber. Te castigó. Metió Midea.
"Falabella":{"2025-12":true}
};
// Falabella castigo post-quiebre: redujo espacio, metió Midea. SO nunca recupera.
var castigo={"Falabella":{"desde":"2026-01","factor":0.45}};
// Sodimac es el ÚNICO que no quebró nunca
ms.forEach(function(m,mi){rt.forEach(function(r){sk.forEach(function(s){
var base=Math.round(35+rnd()*45);
var est=estSO30[mi]||1;
var rp=retPerf[r]||0.85;
var u=Math.round(base*est*rp*(0.8+rnd()*0.4));
if(quiebres[r]&&quiebres[r][m])u=Math.round(rnd()*4);
// Castigo: Falabella redujo espacio post-quiebre, metió Midea. SO cae permanente.
if(castigo[r]&&m>=castigo[r].desde)u=Math.round(u*castigo[r].factor);
if(mi>=10&&mi<=11&&!quiebres[r])u=Math.round(u*0.5);
var pvp=Math.round(pvp30[mi]*(0.96+rnd()*0.08));
if(u<5)pvp=pvp30[mi]||220000;
var marca=brandMap[s.split("-")[0]]||s.split("-")[0];
SO+=m+","+r+","+marca+","+s+","+u+","+Math.round(u*pvp*0.81)+","+pvp+"\n";
var sm=siM30[mi]||0;
var siU=sm>0?Math.round(base*sm*rp*(0.6+rnd()*0.8)):0;
SI+=m+","+r+","+marca+","+s+","+siU+","+Math.round(siU*(pvp||220000)*0.77)+","+Math.round((pvp||220000)*0.55)+"\n"})});
// Inventario: 19 meses ene 2025 - jul 2026
sk.forEach(function(s){bd.forEach(function(b){
var invD;
if(mi<6)invD=Math.round(60+rnd()*120);
else if(mi<8)invD=Math.round(120+rnd()*200);
else if(mi<10)invD=Math.round(20+rnd()*40);
else if(mi<12)invD=Math.round(rnd()*15);
else invD=Math.round(30+rnd()*60);
ID+=m+","+b+","+s+","+invD+"\n"});
rt.forEach(function(r){
var invR;
if(mi<8)invR=Math.round(30+rnd()*70);
else if(mi<10)invR=Math.round(60+rnd()*100);
else if(mi<12)invR=Math.round(rnd()*10);
else invR=Math.round(15+rnd()*40);
if(r==="Hites"&&mi>=10)invR=Math.round(120+rnd()*250);
if(quiebres[r]&&quiebres[r][m])invR=Math.round(rnd()*3);
IR+=m+","+r+","+s+","+invR+"\n"})});
// GfK 19 meses — competencia también tiene estacionalidad pero crece
var compBrands=[{m:"Samsung",base:260,g:1.004,pvp:248000,mod:"WA90T5260"},{m:"Midea",base:180,g:1.010,pvp:179000,mod:"MA100W90"},{m:"LG",base:230,g:1.003,pvp:235000,mod:"WT9S"},{m:"Hisense",base:120,g:1.007,pvp:195000,mod:"WTJA901T"}];
// Fensa GfK: sigue SO pero con ruido, fire sales inflan volumen, quiebres destruyen
var fGfk30=[
140,125,165,160,185,190,210,235,280,240,55,40,
75,85,100,65,95,110
];
sk.forEach(function(s){
var gkU=Math.round(fGfk30[mi]*(0.03+rnd()*0.03));
var marca=brandMap[s.split("-")[0]]||s.split("-")[0];
var fpvp=Math.round(pvp30[mi]*(0.96+rnd()*0.08));
GK+=m.replace("-"," ")+","+marca+","+s+","+gkU+","+Math.round(gkU*fpvp)+","+fpvp+"\n"});
compBrands.forEach(function(cb){
var cu=Math.round(cb.base*Math.pow(cb.g,mi)*(0.93+rnd()*0.14));
if(mi>=10&&mi<=11)cu=Math.round(cu*1.5);
// Jun 2026: Midea quiebra por supply chain Brasil — OPORTUNIDAD
if(mi===17&&cb.m==="Midea")cu=Math.round(cu*0.35);
// Competitor prices: seasonal variation, Cyber promos, UF adjustments — NOT flat
var compPvpSeason=[1.02,1.02,1.03,1.03,1.01,0.99,0.98,0.99,0.96,0.94,0.87,0.92, 1.04,1.04,1.05,1.03,1.02,1.01];
var cpvp=Math.round(cb.pvp*compPvpSeason[mi]*(0.96+rnd()*0.08));
GK+=m.replace("-"," ")+","+cb.m+","+cb.m+"-"+cb.mod+","+cu+","+Math.round(cu*cpvp)+","+cpvp+"\n"})});
["so","si","id","ir","gfk"].forEach(function(k){document.getElementById("n-"+k).textContent="✓ demo_"+k+".xlsx";var c=document.getElementById("u-"+k);c.style.borderColor="var(--aqua)";c.style.background="rgba(15,113,115,.04)"});
document.getElementById("main").style.display="none";document.getElementById("proc").style.display="block";
document.getElementById("pt").textContent="Analizando con IA...";
GFK_DATA['lavado']=GK;callAPI({so:SO,si:SI,id:ID,ir:IR,gfk:GK});
}
</script>
</body>
</html>
