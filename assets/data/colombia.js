// Copia de data/colombia.json para el navegador (la genera tools/build-demo-catalog.js).
window.CO = {
  "_meta": {
    "descripcion": "Datos de Colombia para las calculadoras interactivas. Todo valor tiene fuente y fecha. Actualizar cada mes (tarifas y gasolina).",
    "actualizado": "2026-10-06",
    "perdidas_carga": 0.10
  },
  "operadores": {
    "enel": { "nombre": "Enel", "tarifa": 864, "mes": "agosto 2026", "fuente": "https://www.opscolombia.com/tarifas-energia" },
    "epm": { "nombre": "EPM", "tarifa": 960, "mes": "agosto 2026", "fuente": "https://www.opscolombia.com/tarifas-energia" },
    "celsia": { "nombre": "Celsia", "tarifa": 984, "mes": "agosto 2026", "fuente": "https://www.opscolombia.com/tarifas-energia" },
    "aire": { "nombre": "Air-e", "tarifa": 890, "mes": "agosto 2026", "fuente": "https://www.opscolombia.com/tarifas-energia" },
    "afinia": { "nombre": "Afinia", "tarifa": 879, "mes": "enero 2026", "fuente": "https://www.opscolombia.com/tarifas-energia", "nota": "Dato de enero de 2026: revisa tu factura." }
  },
  "ciudades": [
    { "id": "bogota", "nombre": "Bogotá", "operador": "enel", "gasolina": 16377, "alta": true },
    { "id": "medellin", "nombre": "Medellín", "operador": "epm", "gasolina": 16297, "alta": true },
    { "id": "cali", "nombre": "Cali", "operador": null, "operador_nombre": "EMCALI", "gasolina": 16386, "alta": false },
    { "id": "barranquilla", "nombre": "Barranquilla", "operador": "aire", "gasolina": 16010, "alta": false },
    { "id": "cartagena", "nombre": "Cartagena", "operador": "afinia", "gasolina": 15967, "alta": false },
    { "id": "bucaramanga", "nombre": "Bucaramanga", "operador": null, "operador_nombre": "ESSA", "gasolina": 16135, "alta": false },
    { "id": "pereira", "nombre": "Pereira", "operador": null, "operador_nombre": "Energía de Pereira", "gasolina": 16322, "alta": true },
    { "id": "manizales", "nombre": "Manizales", "operador": null, "operador_nombre": "CHEC", "gasolina": 16350, "alta": true },
    { "id": "ibague", "nombre": "Ibagué", "operador": "celsia", "gasolina": 16291, "alta": true },
    { "id": "villavicencio", "nombre": "Villavicencio", "operador": null, "operador_nombre": "EMSA", "gasolina": 16477, "alta": false },
    { "id": "monteria", "nombre": "Montería", "operador": "afinia", "gasolina": 16217, "alta": false },
    { "id": "cucuta", "nombre": "Cúcuta", "operador": null, "operador_nombre": "CENS", "gasolina": 14328, "alta": false },
    { "id": "pasto", "nombre": "Pasto", "operador": null, "operador_nombre": "CEDENAR", "gasolina": 13966, "alta": true }
  ],
  "_nota_alta": "alta = municipio a más de 1.000 m s. n. m. (consumo de subsistencia 130 kWh/mes); si no, 173 kWh/mes. Valores de altitud aproximados por ciudad capital.",
  "gasolina_mes": "octubre 2026",
  "gasolina_fuente": "https://www.vanguardia.com/colombia/2026/10/01/la-gasolina-subio-en-colombia-este-es-el-nuevo-precio-del-galon-y-las-ciudades-donde-es-mas-cara/",
  "estratos": {
    "regla": "La energía que agrega el carro queda por encima del consumo de subsistencia, así que se paga a tarifa plena (estratos 1 a 4). Los estratos 5 y 6 pagan además una contribución de solidaridad.",
    "contribucion_5_6": 0.20,
    "subsistencia_alta_kwh": 130,
    "subsistencia_baja_kwh": 173,
    "fuente": "Ley 142 de 1994 (régimen de subsidios y contribuciones); consumo de subsistencia según altitud del municipio"
  },
  "modelos": {
    "model-y": { "nombre": "Model Y", "wltp": 14.2, "real": 18, "fuente_wltp": "https://www.auto-data.net/en/tesla-model-y-juniper-facelift-2025-long-range-79-kwh-299hp-53838" },
    "model-3": { "nombre": "Model 3", "wltp": 13.2, "real": 16, "fuente_wltp": "https://www.evspecs.org/tech-specs/tesla/model-3/rwd" }
  },
  "_nota_real": "El valor 'real' es un escenario conservador propio (subidas, aire acondicionado, tráfico), no un dato oficial. Se muestra como supuesto editable.",
  "gasolina_rendimiento_default_km_gal": 35,
  "creg_101_120": {
    "nombre": "Resolución CREG 101 120 de 2026",
    "inicio": "2026-08-15",
    "fin": "2027-02-14",
    "umbral": 1.10,
    "recargo": { "1-3": 0.30, "4-6": 0.50 },
    "meta_default_kwh": 250,
    "texto": "Programa temporal por el fenómeno de El Niño: cada usuario tiene una meta de consumo según su historial de los últimos 12 meses. Si consume más del 110 % de su meta, paga un recargo solo sobre el exceso: 30 % en estratos 1 a 3 y 50 % en estratos 4 a 6. Quien consume menos del 90 % recibe un incentivo.",
    "fuente": "https://gestornormativo.creg.gov.co/gestor/entorno/docs/originales/Resoluci%C3%B3n_CREG_101_120_2026/",
    "fuente_2": "https://www.epm.com.co/clientesyusuarios/resolucion-creg-101-120-2026/",
    "_nota": "meta_default_kwh es un valor de ejemplo editable por el usuario (está en su factura), no un dato oficial."
  },
  "beneficios": {
    "fuente": "https://normograma.supersalud.gov.co/compilacion/docs/ley_1964_2019.htm",
    "ley": "Ley 1964 de 2019",
    "items": [
      { "id": "pico", "icono": "car", "titulo": "Sin pico y placa ni día sin carro", "dato": "Exento", "texto": "Los vehículos eléctricos están exentos de las medidas de restricción a la circulación (pico y placa, día sin carro y restricciones ambientales), salvo las que se dicten por razones de seguridad.", "articulo": "Art. 6" },
      { "id": "impuesto", "icono": "bank", "titulo": "Impuesto vehicular máximo del 1 %", "dato": "≤ 1 %", "texto": "La tarifa del impuesto sobre vehículos automotores para eléctricos no puede superar el 1 % del valor comercial del vehículo. Algunas ciudades ofrecen descuentos adicionales.", "articulo": "Art. 3" },
      { "id": "soat", "icono": "shield", "titulo": "10 % de descuento en el SOAT", "dato": "−10 %", "texto": "Las aseguradoras deben dar un descuento del 10 % en la prima del SOAT para vehículos eléctricos.", "articulo": "Art. 4" },
      { "id": "rtm", "icono": "check", "titulo": "Descuento en la revisión técnico-mecánica", "dato": "Descuento", "texto": "La ley ordena un descuento en la revisión técnico-mecánica y de emisiones para eléctricos, cuyo valor fija la reglamentación. Pregunta el porcentaje vigente en tu centro de diagnóstico.", "articulo": "Art. 4" },
      { "id": "parqueo", "icono": "store", "titulo": "Parqueaderos preferenciales", "dato": "2 %", "texto": "Entidades públicas y establecimientos comerciales en municipios de categoría especial, primera y segunda deben destinar mínimo el 2 % de sus plazas de parqueo a vehículos eléctricos.", "articulo": "Art. 7" },
      { "id": "locales", "icono": "building", "titulo": "Incentivos de tu ciudad", "dato": "Varía", "texto": "Las ciudades pueden dar descuentos en el registro o el impuesto vehicular, tarifas diferenciadas de parqueadero y exenciones tributarias. Consulta la secretaría de hacienda o de movilidad de tu ciudad.", "articulo": "Art. 5" }
    ],
    "precios_referencia": [
      { "modelo": "Model 3 RWD", "precio": 109990000 },
      { "modelo": "Model Y RWD", "precio": 119990000 },
      { "modelo": "Model 3 Long Range AWD", "precio": 139990000 },
      { "modelo": "Model Y Long Range AWD", "precio": 144990000 },
      { "modelo": "Model 3 Performance", "precio": 164990000 }
    ],
    "precios_fuente": "https://www.xataka.com.co/vehiculos/oficial-tesla-llego-a-colombia-esto-todo-que-debes-saber-sus-nuevas-tiendas-bogota-medellin-modelos-disponibles-precios",
    "_nota_precios": "Precios de lanzamiento (nov. 2025). El impuesto se liquida sobre el avalúo comercial que fija el Ministerio de Transporte cada año, no sobre el precio de compra."
  }
};
