# Imágenes generadas con IA (Higgsfield)

Generadas por la tienda con Higgsfield (modelo `gpt_image_2_5`), con los prompts de `research/prompts-higgsfield.md`.
Reglas: sin logos ni textos de Tesla ni de ninguna marca. En la tienda llevan la leyenda **"Imagen ilustrativa generada con IA"**. Se reemplazan por fotos reales cuando existan. Nunca se usan para adaptadores NEMA ni para la tarjeta llave.
Los PNG originales viven en `originales/` y no se publican; `npm run` → `node tools/build-ia-images.js` crea los WebP.

| Archivo | Uso | Fecha | Job Higgsfield | Revisión |
|---|---|---|---|---|
| parasol-techo-model-y-juniper | Ficha del parasol (producto doblado + estuche) | 2026-10-11 | 7a83128b | Sin logos ni texto |
| tapetes-model-y-juniper | Ficha de tapetes (forma genérica, no es el molde exacto del Juniper) | 2026-10-11 | 9bf515b3 | Sin logos ni texto |
| hero-garaje-medellin (+ -m vertical) | Hero de carga en casa: SUV eléctrico genérico en garaje de Medellín al atardecer con cargador de pared genérico. 2K | 2026-10-11 | a16feb3f / e5be0c46 | Sin logos ni texto, placa vacía |
| amb-carretera-eje-cafetero (+ -m) | Panel Model 3 / viajes: sedán eléctrico gris genérico en carretera del Eje Cafetero. 2K | 2026-10-11 | 2a9c2bba / c8568cc4 | Sin emblemas ni texto (la silueta recuerda a un sedán eléctrico moderno, sin marca) |
| amb-bogota-noche (+ -m) | Panel Model Y / ciudad: SUV eléctrico genérico en calle de Bogotá de noche con lluvia. 2K | 2026-10-11 | 3f368c1e / d6d61d3a | Sin logos ni texto, placa vacía |

## Fotos de producto (R2.3, 2026-10-11, gpt_image_2_5 calidad high, 1K)
parasol-techo-model-3-highland, tapetes-model-3-highland, forro-frunk-model-y, forro-pozo-trasero-model-y, guardabarros-model-y-juniper, guardabarros-model-3-highland, protector-pantalla-highland-juniper, organizador-consola-juniper, soporte-celular-magnetico, organizador-detras-pantalla, compartimentos-baul-model-y, funda-tarjeta-llave, liquido-limpiaparabrisas, kit-recibe-tu-tesla (más parasol-techo-model-y-juniper y tapetes-model-y-juniper de la prueba R2.1).
Revisadas en hoja de contacto: sin logos, sin texto y etiquetas en blanco. **Regeneradas** por representar mal el producto: compartimentos-baul-model-y (la primera mostraba cajas sueltas, no los compartimentos laterales) y kit-recibe-tu-tesla (la primera incluía un cable USB-C que no hace parte del kit).
No hay imágenes IA de adaptadores NEMA, bundle, combo ni tarjeta llave: siguen con ilustración técnica.

- 2026-10-23 · `tapetes-model-y-juniper` reemplazada: juego completo en flat lay (antes 3 piezas de cabina; el original anterior queda en `originales/tapetes-model-y-juniper.cabina-3pz.png`). Higgsfield gpt_image_2_5, 1:1, ~1,5 créditos. Sin logos ni texto.
