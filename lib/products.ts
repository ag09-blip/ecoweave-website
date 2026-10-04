/**
 * Products — abhi ke liye yahin hardcoded hain.
 *
 * Sirf rugs bechne ke liye hain (shower curtains / table linen hata diye gaye).
 * Prices abhi decide nahi hui — `priceInPaise: 0` ka matlab "Price on request"
 * hai. Asli price pata chalne par yahan paise mein daalo (399900 -> "₹3,999").
 * Paisa hamesha integer mein rakho, string mein nahi.
 */
export type Category = 'rugs'

export type Product = {
  id: string
  name: string
  desc: string
  priceInPaise: number
  unit: string
  img: string
  icon: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  rugs: 'Handmade Rugs',
}

/** 399900 -> "₹3,999"; 0 -> "Price on request" */
export function formatPrice(paise: number): string {
  if (paise <= 0) return 'Price on request'
  return '₹' + (paise / 100).toLocaleString('en-IN')
}

const rug = (
  id: string,
  name: string,
  desc: string,
  file: string
): Product => ({
  id: `rug-${id}`,
  name,
  desc,
  priceInPaise: 0,
  unit: 'Rug',
  img: `/images/rug-${file}.jpeg`,
  icon: '🏠',
})

export const PRODUCTS: Record<Category, Product[]> = {
  rugs: [
    rug('leheriya', 'Leheriya', 'Wavy leheriya stripes in sage and sand. Panja dhurrie, flat weave.', 'leheriya'),
    rug('stepwells', 'Stepwells', 'Stepped, stepwell-inspired blocks in earthy browns. Kilim style, flat weave.', 'stepwells'),
    rug('aravalli-contours', 'Aravalli Contours', 'Flowing contour lines, like the Aravalli hills seen from above. Panja dhurrie, flat weave.', 'aravalli-contours'),
    rug('woven-arrows', 'Woven Arrows', 'Rows of woven arrow motifs on a natural ground. Panja dhurrie, flat weave.', 'woven-arrows'),
    rug('block-print-geometry', 'Block Print Geometry', 'Block-print flower motifs with a patterned border. Flat weave, cotton.', 'block-print-geometry'),
    rug('blue-pottery-geometry', 'Blue Pottery Geometry', 'Octagon and flower pattern inspired by Jaipur blue pottery. Hand tufted, wool.', 'blue-pottery-geometry'),
    rug('desert-dunes', 'Desert Dunes', 'Layered dune curves in warm desert tones. Hand knotted, wool and bamboo silk.', 'desert-dunes'),
    rug('hawa-mahal-blue-pottery', 'Hawa Mahal × Blue Pottery', 'Hawa Mahal jharokha arches mixed with blue pottery flowers.', 'hawa-mahal-blue-pottery'),
    rug('block-print-blue-pottery', 'Block Print × Blue Pottery', 'Block-print borders with a blue pottery octagon field.', 'block-print-blue-pottery'),
    rug('city-grid-bloom', 'City Grid Bloom', 'A Jaipur city-grid layout with flower motifs in navy on cream.', 'city-grid-bloom'),
    rug('forest-dune-flow', 'Forest Dune Flow', 'Soft flowing bands of forest green, sand and olive.', 'forest-dune-flow'),
    rug('mustard-jacquard', 'Mustard Jacquard', 'Mustard ground with a fine floral jacquard pattern and border.', 'mustard-jacquard'),
    rug('ivory-textured-weave', 'Ivory Textured Weave', 'Ivory rug with raised arches and lines for texture.', 'ivory-textured-weave'),
    rug('terracotta-terrain', 'Terracotta Terrain', 'Terracotta and cream blocks with a map-like line texture.', 'terracotta-terrain'),
    rug('navy-stripe-blackout', 'Navy Stripe — Blackout', 'Fine navy stripes with a solid dark panel on one side.', 'navy-stripe-blackout'),
  ],
}
