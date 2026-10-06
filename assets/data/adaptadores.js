// Copia de data/adaptadores.json para el navegador (la genera tools/build-demo-catalog.js).
window.ADAPTERS = {
  "_meta": {
    "descripcion": "Datos de la herramienta '¿Qué adaptador necesito?'. km/h según la tabla oficial de Tesla (shop.tesla.com/es_co y tesla.com/es_pr/support/charging/mobile-connector), calculados a 240 V.",
    "verificado": "2026-10-06",
    "factor_208v": 0.866,
    "nota_208v": "En edificios con red 120/208 V la potencia y los km/h bajan alrededor de un 13 %.",
    "fuentes": [
      "https://shop.tesla.com/es_co/product/adaptadores-nema-generacion-2",
      "https://shop.tesla.com/es_co/product/bundle-de-adaptadores-nema",
      "https://www.tesla.com/es_pr/support/charging/mobile-connector"
    ]
  },
  "adaptadores": [
    {
      "id": "nema-5-15", "nombre": "NEMA 5-15", "voltaje": 120, "disyuntor": 15, "amperios": 12, "kw": 1.4,
      "kmh": { "model-3": 4.8, "model-y": 4.8 },
      "tomacorriente": "Toma común de la casa: dos ranuras verticales y un orificio redondo de tierra.",
      "donde": "Cualquier pared de la casa o del parqueadero.",
      "incluido_de_serie": true, "tesla_precio_cop": 160000, "requiere_electricista": false
    },
    {
      "id": "nema-5-20", "nombre": "NEMA 5-20", "voltaje": 120, "disyuntor": 20, "amperios": 16, "kw": 1.9,
      "kmh": { "model-3": 6.4, "model-y": 6.4 },
      "tomacorriente": "Como la toma común, pero una de las ranuras tiene forma de T acostada.",
      "donde": "Cocinas, garajes y locales comerciales.",
      "incluido_de_serie": false, "tesla_precio_cop": 160000, "requiere_electricista": false
    },
    {
      "id": "nema-6-15", "nombre": "NEMA 6-15", "voltaje": 240, "disyuntor": 15, "amperios": 12, "kw": 2.9,
      "kmh": { "model-3": 17.7, "model-y": 16.1 },
      "tomacorriente": "Dos ranuras horizontales (una al lado de la otra) y tierra redonda.",
      "donde": "Aires acondicionados pequeños de 220 V.",
      "incluido_de_serie": false, "tesla_precio_cop": 160000, "requiere_electricista": false
    },
    {
      "id": "nema-6-20", "nombre": "NEMA 6-20", "voltaje": 240, "disyuntor": 20, "amperios": 16, "kw": 3.8,
      "kmh": { "model-3": 24.1, "model-y": 22.5 },
      "tomacorriente": "Dos ranuras horizontales, una con forma de T, y tierra redonda.",
      "donde": "Aires acondicionados y herramientas de 220 V.",
      "incluido_de_serie": false, "tesla_precio_cop": 160000, "requiere_electricista": false
    },
    {
      "id": "nema-10-30", "nombre": "NEMA 10-30", "voltaje": 240, "disyuntor": 30, "amperios": 24, "kw": 5.8,
      "kmh": { "model-3": 35.4, "model-y": 33.8 },
      "tomacorriente": "Tres patas sin tierra: dos inclinadas y una en forma de L.",
      "donde": "Secadoras antiguas.",
      "incluido_de_serie": false, "tesla_precio_cop": null, "nota_precio": "Tesla Colombia solo lo vende dentro del bundle de $1.110.000.", "requiere_electricista": false
    },
    {
      "id": "nema-14-30", "nombre": "NEMA 14-30", "voltaje": 240, "disyuntor": 30, "amperios": 24, "kw": 5.8,
      "kmh": { "model-3": 35.4, "model-y": 33.8 },
      "tomacorriente": "Cuatro orificios: dos verticales, uno en L y uno redondo (tierra).",
      "donde": "Secadoras modernas.",
      "incluido_de_serie": false, "tesla_precio_cop": 200000, "requiere_electricista": false
    },
    {
      "id": "nema-14-50", "nombre": "NEMA 14-50", "voltaje": 240, "disyuntor": 50, "amperios": 32, "kw": 7.7,
      "kmh": { "model-3": 48.2, "model-y": 46.7 },
      "tomacorriente": "Cuatro orificios grandes: dos verticales, uno recto abajo (neutro) y uno redondo (tierra).",
      "donde": "Estufas eléctricas. Es el más instalado para cargar vehículos eléctricos en casa.",
      "incluido_de_serie": false, "tesla_precio_cop": 200000, "recomendado": true, "requiere_electricista": true
    },
    {
      "id": "nema-6-50", "nombre": "NEMA 6-50", "voltaje": 240, "disyuntor": 50, "amperios": 32, "kw": 7.7,
      "kmh": { "model-3": 48.3, "model-y": 46.7 },
      "tomacorriente": "Tres orificios grandes: dos horizontales y uno de tierra.",
      "donde": "Soldadores y talleres. También se usa mucho para cargar vehículos eléctricos (no necesita cable neutro).",
      "incluido_de_serie": false, "tesla_precio_cop": 200000, "recomendado": true, "requiere_electricista": true
    }
  ],
  "escenarios": [
    { "id": "diario-ciudad", "texto": "Uso diario en ciudad", "km": 40 },
    { "id": "semana", "texto": "Una semana de ciudad", "km": 280 },
    { "id": "viaje", "texto": "Viaje Bogotá–Medellín (aprox.)", "km": 415 }
  ],
  "formula": "horas = km_necesarios / (kmh_modelo * (voltaje_real / voltaje_tabla))",
  "pendiente_verificar": [
    "km/h para Model S, Model X y Cybertruck en Colombia (no se venden oficialmente todavía).",
    "Distancia Bogotá–Medellín usada en el escenario 'viaje' (valor aproximado).",
    "Tu stock: cuáles de estos adaptadores tienes (originales y genéricos) y a qué precio."
  ]
};
