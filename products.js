/* =========================================
   CraveRush — PRODUCT DATA
   141 products · 8 categories
   Images added separately later (image: '')
========================================= */

const categories = {
    desserts: [
        { id: 'cakes',            name: 'Cakes',              image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop' },
        { id: 'pastries',         name: 'Pastries',           image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop' },
        { id: 'pancakes',         name: 'Pancakes',           image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop' },
        { id: 'waffles',          name: 'Waffles',            image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=400&auto=format&fit=crop' },
        { id: 'indian-sweets',    name: 'Indian Sweets',      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop' },
        { id: 'donuts',           name: 'Donuts',             image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop' },
        { id: 'cookies-brownies', name: 'Cookies & Brownies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop' }
    ],
    icecreams: [
        { id: 'ice-creams', name: 'Ice Creams', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop' }
    ]
};

/* Store lists (reused across products) */
const SHOPS_CAKE      = ['Monginis', 'Theobroma', '7th Heaven', 'Ribbons & Balloons', 'O-Cakes', 'Merwans'];
const SHOPS_PANCAKE   = ['99 Pancakes'];
const SHOPS_WAFFLE    = ['Belgium waffle', '99 pancakes', 'waffle nation'];
const SHOPS_INDIAN    = ['Prashant Corner', 'Chedda', 'Haldiram', 'Tip Top'];
const SHOPS_DONUT     = ['Mad Over Donuts'];
const SHOPS_COOKIE_CO = ['the cookie co'];
const SHOPS_SWEETISH  = ['sweetish house mafia'];
const SHOPS_THEOBROMA = ['theobroma'];
const SHOPS_ICE       = ['Naturals', 'NIC', 'Apsara', 'Baskin Robbins', 'Baba Falooda'];

/* Reference images per category — temporary placeholders.
   Replace with your own local images later (assets/images/…).
   Multiple images per category rotate by product ID for variety. */
const CATEGORY_IMAGES = {
    'cakes': [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop'
    ],
    'pastries': [
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop'
    ],
    'pancakes': [
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=400&auto=format&fit=crop'
    ],
    'waffles': [
        'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=400&auto=format&fit=crop'
    ],
    'indian-sweets': [
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=400&auto=format&fit=crop'
    ],
    'donuts': [
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533910534207-90f31029a78e?q=80&w=400&auto=format&fit=crop'
    ],
    'cookies-brownies': [
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop'
    ],
    'ice-creams': [
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=400&auto=format&fit=crop'
    ]
};
window.CATEGORY_IMAGES = CATEGORY_IMAGES;

/* Compact product factory — produces the exact same object shape */
function P(id, name, category, parent, calories, caloriesDisplay, alternative, locations, subcategory) {
    const p = { id, name, category, parent, calories, caloriesDisplay, alternative,
                image: '', /* add image paths later */
                locations };
    if (subcategory) p.subcategory = subcategory;
    return p;
}

const products = [
    /* ==================== 1. CAKES (1–12) ==================== */
    P(1,  'Chocolate Truffle',  'cakes', 'desserts', 1650, '1650–1800 kcal', 'Black Forest Cake (Lighter cream & cherries)', SHOPS_CAKE),
    P(2,  'Red Velvet',         'cakes', 'desserts', 1600, '1600–1750 kcal', 'Strawberry Cake (Fruit-based sponge, less dense)', SHOPS_CAKE),
    P(3,  'Butterscotch',       'cakes', 'desserts', 1550, '1550–1700 kcal', 'Pineapple Cake (Light whipped cream, less heavy syrup)', SHOPS_CAKE),
    P(4,  'Pineapple',          'cakes', 'desserts', 1250, '1250–1400 kcal', '— Lowest calorie option in its category', SHOPS_CAKE),
    P(5,  'Strawberry',         'cakes', 'desserts', 1300, '1300–1450 kcal', 'Pineapple Cake (Marginally lower fats)', SHOPS_CAKE),
    P(6,  'Ferrero Rocher',     'cakes', 'desserts', 1900, '1900–2100 kcal', 'Chocolate Truffle (Fewer calorie-dense nuts/praline)', SHOPS_CAKE),
    P(7,  'Black Forest',       'cakes', 'desserts', 1400, '1400–1550 kcal', 'Pineapple Cake (Lighter overall crumb structure)', SHOPS_CAKE),
    P(8,  'White Forest',       'cakes', 'desserts', 1450, '1450–1600 kcal', 'Black Forest (Dark chocolate flakes have slightly less sugar than white)', SHOPS_CAKE),
    P(9,  'Dutch Chocolate',    'cakes', 'desserts', 1700, '1700–1850 kcal', 'Black Forest Cake (Significantly lower chocolate density)', SHOPS_CAKE),
    P(10, 'Belgium Chocolate',  'cakes', 'desserts', 1800, '1800–1950 kcal', 'Dutch Chocolate (Marginally less rich cocoa butter fat)', SHOPS_CAKE),
    P(11, 'Mix Fruit',          'cakes', 'desserts', 1350, '1350–1500 kcal', 'Pineapple Cake (Lower variety of calorie-heavy glaze toppings)', SHOPS_CAKE),
    P(12, 'Rasmalai',           'cakes', 'desserts', 1650, '1650–1800 kcal', 'Pineapple Cake (Avoids dense milk-solid reductions)', SHOPS_CAKE),

    /* ==================== 2. PASTRIES (13–24) ==================== */
    P(13, 'Dutch Truffle Chocolate', 'pastries', 'desserts', 380, '380–440 kcal', 'Black Forest Pastry (Lighter whipped cream)', SHOPS_CAKE),
    P(14, 'Dark Chocolate',          'pastries', 'desserts', 360, '360–420 kcal', 'Black Forest Pastry (Lower cocoa-butter fat percentage)', SHOPS_CAKE),
    P(15, 'Tiramisu',                'pastries', 'desserts', 340, '340–390 kcal', 'Pineapple Pastry (Avoids high-fat mascarpone cheese)', SHOPS_CAKE),
    P(16, 'Choco Hazelnut',          'pastries', 'desserts', 420, '420–480 kcal', 'Dark Chocolate Pastry (Eliminates calorie-dense nut pastes)', SHOPS_CAKE),
    P(17, 'Almond Honey',            'pastries', 'desserts', 350, '350–410 kcal', 'Pineapple Pastry (Ditches oil-rich almonds and dense honey)', SHOPS_CAKE),
    P(18, 'Black Forest',            'pastries', 'desserts', 280, '280–330 kcal', 'Pineapple Pastry (Lower sugar profile in comparison)', SHOPS_CAKE),
    P(19, 'Red Velvet',              'pastries', 'desserts', 340, '340–400 kcal', 'Black Forest Pastry (Standard frosting is lighter than cream cheese)', SHOPS_CAKE),
    P(20, 'Blueberry Cheesecake',    'pastries', 'desserts', 380, '380–440 kcal', 'New York Cheese Cake (Lacks the heavy, sugary fruit glaze topping)', SHOPS_CAKE),
    P(21, 'New York Cheese Cake',    'pastries', 'desserts', 350, '350–400 kcal', 'Black Forest Pastry (Sponge bases are lower calorie than cream cheese density)', SHOPS_CAKE),
    P(22, 'Pineapple',               'pastries', 'desserts', 240, '240–290 kcal', '— Lowest calorie option in its category', SHOPS_CAKE),
    P(23, 'Khunafa Chocolate',       'pastries', 'desserts', 500, '500–560 kcal', 'Dutch Truffle Pastry (Skips fried kataifi pastry and butter loads)', SHOPS_CAKE),
    P(24, 'Butterscotch',            'pastries', 'desserts', 320, '320–370 kcal', 'Pineapple Pastry (Saves calories by bypassing praline sugar nuts)', SHOPS_CAKE),

    /* ==================== 3. PANCAKES (25–44) ==================== */
    P(25, 'Classic Buttermilk',  'pancakes', 'desserts', 350, '350 kcal', 'Belgian Pancake', SHOPS_PANCAKE),
    P(26, 'Belgian Pancake',     'pancakes', 'desserts', 390, '390 kcal', 'Classic Buttermilk', SHOPS_PANCAKE),
    P(27, 'Blueberry',           'pancakes', 'desserts', 410, '410 kcal', 'Apple Cinnamon', SHOPS_PANCAKE),
    P(28, 'Strawberry Cream',    'pancakes', 'desserts', 430, '430 kcal', 'Blueberry', SHOPS_PANCAKE),
    P(29, 'Nutella',             'pancakes', 'desserts', 520, '520 kcal', 'Chocolate Chip', SHOPS_PANCAKE),
    P(30, 'Chocolate Chip',      'pancakes', 'desserts', 480, '480 kcal', 'Tiramisu', SHOPS_PANCAKE),
    P(31, 'Oreo Crunch',         'pancakes', 'desserts', 510, '510 kcal', 'Chocolate Chip', SHOPS_PANCAKE),
    P(32, 'Red Velvet',          'pancakes', 'desserts', 540, '540 kcal', 'Strawberry Cream', SHOPS_PANCAKE),
    P(33, 'Tiramisu',            'pancakes', 'desserts', 390, '390 kcal', 'Matcha', SHOPS_PANCAKE),
    P(34, 'Banoffee',            'pancakes', 'desserts', 550, '550 kcal', 'Apple Cinnamon', SHOPS_PANCAKE),
    P(35, 'Lotus Biscoff',       'pancakes', 'desserts', 580, '580 kcal', 'Caramel Pecan', SHOPS_PANCAKE),
    P(36, 'Ferrero Rocher',      'pancakes', 'desserts', 640, '640 kcal', 'Nutella', SHOPS_PANCAKE),
    P(37, 'Matcha',              'pancakes', 'desserts', 420, '420 kcal', 'Coconut', SHOPS_PANCAKE),
    P(38, 'Mango Cheesecake',    'pancakes', 'desserts', 530, '530 kcal', 'Strawberry Cream', SHOPS_PANCAKE),
    P(39, 'Caramel Pecan',       'pancakes', 'desserts', 570, '570 kcal', 'Peanut Butter', SHOPS_PANCAKE),
    P(40, 'Apple Cinnamon',      'pancakes', 'desserts', 390, '390 kcal', 'Classic Buttermilk', SHOPS_PANCAKE),
    P(41, 'Coconut',             'pancakes', 'desserts', 450, '450 kcal', 'Blueberry', SHOPS_PANCAKE),
    P(42, 'Peanut Butter',       'pancakes', 'desserts', 510, '510 kcal', 'Coconut', SHOPS_PANCAKE),
    P(43, "S'mores",             'pancakes', 'desserts', 620, '620 kcal', 'Oreo Crunch', SHOPS_PANCAKE),
    P(44, 'Rainbow Sprinkle',    'pancakes', 'desserts', 500, '500 kcal', 'Strawberry Cream', SHOPS_PANCAKE),

    /* ==================== 4. WAFFLES (45–59) ==================== */
    P(45, 'Classic Belgian Waffle', 'waffles', 'desserts', 240, '240–320 kcal', 'Whole-Wheat Oat Waffle with Fresh Fruits', SHOPS_WAFFLE),
    P(46, 'Nutella Waffle',         'waffles', 'desserts', 400, '400–480 kcal', 'Peanut Butter & Banana Oat Waffle', SHOPS_WAFFLE),
    P(47, 'Milk Chocolate Waffle',  'waffles', 'desserts', 350, '350–430 kcal', 'Dark Chocolate & Strawberry Waffle', SHOPS_WAFFLE),
    P(48, 'Dark Chocolate Waffle',  'waffles', 'desserts', 350, '350–450 kcal', '70% Dark Chocolate & Berry Waffle', SHOPS_WAFFLE),
    P(49, 'Oreo Waffle',            'waffles', 'desserts', 390, '390–480 kcal', 'Cocoa Oat Waffle with Greek Yogurt & Cocoa Nibs', SHOPS_WAFFLE),
    P(50, 'Lotus Biscoff Waffle',   'waffles', 'desserts', 400, '400–500 kcal', 'Almond Butter & Cinnamon Waffle', SHOPS_WAFFLE),
    P(51, 'Triple Chocolate Waffle','waffles', 'desserts', 450, '450–550 kcal', 'Cocoa Oat Waffle with Dark Chocolate & Banana', SHOPS_WAFFLE),
    P(52, 'KitKat Waffle',          'waffles', 'desserts', 400, '400–500 kcal', 'Dark Chocolate & Roasted Almond Waffle', SHOPS_WAFFLE),
    P(53, 'Strawberry Waffle',      'waffles', 'desserts', 320, '320–400 kcal', 'Strawberry & Greek Yogurt Waffle', SHOPS_WAFFLE),
    P(54, 'Banana Caramel Waffle',  'waffles', 'desserts', 350, '350–450 kcal', 'Banana & Cinnamon Waffle with a Little Honey', SHOPS_WAFFLE),
    P(55, 'Peanut Butter Waffle',   'waffles', 'desserts', 450, '450–520 kcal', 'Natural Peanut Butter & Banana Protein Waffle', SHOPS_WAFFLE),
    P(56, 'Ferrero Rocher Waffle',  'waffles', 'desserts', 450, '450–550 kcal', 'Hazelnut & Dark Chocolate Protein Waffle', SHOPS_WAFFLE),
    P(57, 'Red Velvet Waffle',      'waffles', 'desserts', 350, '350–450 kcal', 'Beetroot Cocoa Oat Waffle with Greek Yogurt', SHOPS_WAFFLE),
    P(58, 'Butterscotch Waffle',    'waffles', 'desserts', 380, '380–470 kcal', 'Apple Cinnamon & Walnut Waffle', SHOPS_WAFFLE),
    P(59, 'Coffee Mocha Waffle',    'waffles', 'desserts', 380, '380–470 kcal', 'Coffee Cocoa Protein Waffle with Dark Chocolate', SHOPS_WAFFLE),

    /* ==================== 5. INDIAN SWEETS (60–75) ==================== */
    P(60, 'Gulab Jamun',      'indian-sweets', 'desserts', 140, '140–180 kcal/piece', 'Baked Gulab Jamun', SHOPS_INDIAN),
    P(61, 'Rasgulla',         'indian-sweets', 'desserts', 100, '100–140 kcal/piece', 'Low-Sugar Rasgulla', SHOPS_INDIAN),
    P(62, 'Jalebi',           'indian-sweets', 'desserts', 130, '130–180 kcal/serving', 'Baked Jalebi with Less Sugar', SHOPS_INDIAN),
    P(63, 'Rasmalai',         'indian-sweets', 'desserts', 150, '150–220 kcal/piece', 'Low-Sugar Rasmalai with Low-Fat Milk', SHOPS_INDIAN),
    P(64, 'Cham Cham',        'indian-sweets', 'desserts', 150, '150–220 kcal/piece', 'LOW CREAM CHAM CHAM', SHOPS_INDIAN),
    P(65, 'Kaju Katli',       'indian-sweets', 'desserts', 110, '110–150 kcal/piece', 'Date & Almond Katli', SHOPS_INDIAN),
    P(66, 'Motichoor Ladoo',  'indian-sweets', 'desserts', 170, '170–220 kcal/piece', 'Oats & Dates Ladoo', SHOPS_INDIAN),
    P(67, 'Besan Ladoo',      'indian-sweets', 'desserts', 150, '150–200 kcal/piece', 'Besan & Jaggery Ladoo', SHOPS_INDIAN),
    P(68, 'Burfi',            'indian-sweets', 'desserts', 130, '130–180 kcal/piece', 'Coconut & Date Barfi', SHOPS_INDIAN),
    P(69, 'Peda',             'indian-sweets', 'desserts', 100, '100–150 kcal/piece', 'Low-Sugar Milk Peda', SHOPS_INDIAN),
    P(70, 'Modak',            'indian-sweets', 'desserts', 110, '110–160 kcal/piece', 'Steamed Coconut-Jaggery Modak', SHOPS_INDIAN),
    P(71, 'Shrikhand',        'indian-sweets', 'desserts', 180, '180–250 kcal/100 g', 'Greek Yogurt & Fruit Shrikhand', SHOPS_INDIAN),
    P(72, 'Sandesh',          'indian-sweets', 'desserts', 80,  '80–120 kcal/piece', 'Low-Sugar Paneer & Fruit Sandesh', SHOPS_INDIAN),
    P(73, 'Mysore Pak',       'indian-sweets', 'desserts', 170, '170–220 kcal/piece', 'Almond-Oat Mysore Pak', SHOPS_INDIAN),
    P(74, 'Kalakand',         'indian-sweets', 'desserts', 150, '150–220 kcal/piece', 'Low-Sugar Paneer Kalakand', SHOPS_INDIAN),
    P(75, 'Soan Papdi',       'indian-sweets', 'desserts', 100, '100–150 kcal/piece', 'Oats & Dry-Fruit Soan Papdi', SHOPS_INDIAN),

    /* ==================== 6. DONUTS (76–95) ==================== */
    P(76,  'Original Glazed',    'donuts', 'desserts', 260, '260 kcal', 'Baked Golden Glaze', SHOPS_DONUT),
    P(77,  'Chocolate Glazed',   'donuts', 'desserts', 310, '310 kcal', 'Baked Cocoa Ring', SHOPS_DONUT),
    P(78,  'Double Chocolate',   'donuts', 'desserts', 360, '360 kcal', 'Protein Cocoa Bite', SHOPS_DONUT),
    P(79,  'Strawberry Sprinkle', 'donuts', 'desserts', 300, '300 kcal', 'Berry Yogurt Ring', SHOPS_DONUT),
    P(80,  'Boston Cream',       'donuts', 'desserts', 340, '340 kcal', 'Vanilla Wheat Cream', SHOPS_DONUT),
    P(81,  'Jelly Filled',       'donuts', 'desserts', 290, '290 kcal', 'Berry Chia Filled', SHOPS_DONUT),
    P(82,  'Cinnamon Sugar',     'donuts', 'desserts', 280, '280 kcal', 'Baked Cinnamon Oat', SHOPS_DONUT),
    P(83,  'Cookies & Cream',    'donuts', 'desserts', 380, '380 kcal', 'Oat Cookie Crumble', SHOPS_DONUT),
    P(84,  'Nutella Filled',     'donuts', 'desserts', 410, '410 kcal', 'Dark Choc Hazelnut', SHOPS_DONUT),
    P(85,  'Caramel Filled',     'donuts', 'desserts', 360, '360 kcal', 'Date Caramel Swirl', SHOPS_DONUT),
    P(86,  'Lotus Biscoff',      'donuts', 'desserts', 400, '400 kcal', 'Almond Butter Biscoff', SHOPS_DONUT),
    P(87,  'Red Velvet',         'donuts', 'desserts', 350, '350 kcal', 'Baked Beet Velvet', SHOPS_DONUT),
    P(88,  'Matcha White Choc',  'donuts', 'desserts', 380, '380 kcal', 'Matcha Oat Glaze', SHOPS_DONUT),
    P(89,  'Lemon Glaze',        'donuts', 'desserts', 270, '270 kcal', 'Lemon Yogurt Zest', SHOPS_DONUT),
    P(90,  'Coffee Mocha',       'donuts', 'desserts', 320, '320 kcal', 'Baked Espresso Mocha', SHOPS_DONUT),
    P(91,  'Peanut Butter',      'donuts', 'desserts', 370, '370 kcal', 'PB Protein Ring', SHOPS_DONUT),
    P(92,  "S'mores",            'donuts', 'desserts', 420, '420 kcal', 'Baked Cocoa S\'mores', SHOPS_DONUT),
    P(93,  'Coconut',            'donuts', 'desserts', 300, '300 kcal', 'Coconut Oat Ring', SHOPS_DONUT),
    P(94,  'Pistachio',          'donuts', 'desserts', 340, '340 kcal', 'Pistachio Wheat Crunch', SHOPS_DONUT),
    P(95,  'Rainbow Party',      'donuts', 'desserts', 330, '330 kcal', 'Fresh Fruit Glaze', SHOPS_DONUT),

    /* ==================== 7A. COOKIES (96–110) ==================== */
    P(96,  'NYC Chocolate Chunk',             'cookies-brownies', 'desserts', 360, '≈360 kcal', 'Stepout Oatmeal Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(97,  'Belgian Dark Chocolate Chunk',    'cookies-brownies', 'desserts', 350, '≈350 kcal', 'Stepout Jowar Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(98,  'Biscoff Cookie',                  'cookies-brownies', 'desserts', 365, '≈365 kcal', 'Punjabi Chandu Halwai Bajra Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(99,  'Cadbury Gems White Chocolate',    'cookies-brownies', 'desserts', 390, '≈390 kcal', 'Stepout Amaranth Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(100, 'Chocochip & Walnut',              'cookies-brownies', 'desserts', 380, '≈380 kcal', 'Stepout Ginger Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(101, 'Chocolate Orange',                'cookies-brownies', 'desserts', 350, '≈350 kcal', 'Cookie Dough Cafe Ragi & Jaggery Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(102, 'Chocolate Quinoa',                'cookies-brownies', 'desserts', 335, '≈335 kcal', 'Stepout Jowar Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(103, 'Espresso Lava',                   'cookies-brownies', 'desserts', 370, '≈370 kcal', 'Stepout Oatmeal Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(104, 'Funfetti',                        'cookies-brownies', 'desserts', 340, '≈340 kcal', 'Punjabi Chandu Halwai Ragi Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(105, 'Galaxy – Strawberry',             'cookies-brownies', 'desserts', 350, '≈350 kcal', 'Cookie Dough Cafe Oats & Honey Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(106, 'Lemon Butter Cookie',             'cookies-brownies', 'desserts', 330, '≈330 kcal', 'Stepout Butter Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(107, 'Nutella Burst',                   'cookies-brownies', 'desserts', 400, '≈400 kcal', 'Stepout Peanut Butter Cookie', SHOPS_COOKIE_CO, 'cookies'),
    P(108, 'Chocolate Chip Cookie',           'cookies-brownies', 'desserts', 330, '≈330 kcal', 'Sweetish Oatmeal Cranberry Cookie', SHOPS_SWEETISH, 'cookies'),
    P(109, 'Double Chocolate Chip Cookie',    'cookies-brownies', 'desserts', 350, '≈350 kcal', 'Stepout Oatmeal Cookie', SHOPS_SWEETISH, 'cookies'),
    P(110, 'Oatmeal Cranberry Cookie',        'cookies-brownies', 'desserts', 300, '≈300 kcal', 'Stepout Jowar Cookie', SHOPS_SWEETISH, 'cookies'),

    /* ==================== 7B. BROWNIES (111–124) ==================== */
    P(111, 'Eggless Cookie Brownie',               'cookies-brownies', 'desserts', 450, '≈450 kcal', 'Tiramisu Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(112, 'Eggless Millionaire Brownie',          'cookies-brownies', 'desserts', 470, '≈470 kcal', 'Chocolate Overload Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(113, 'Eggless Outrageous Chocolate Brownie', 'cookies-brownies', 'desserts', 390, '≈390 kcal', 'Chocolate Overload Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(114, 'Eggless Walnut Brownie',               'cookies-brownies', 'desserts', 430, '≈430 kcal', 'Tiramisu Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(115, 'Eggless Choco Chip Brownie',           'cookies-brownies', 'desserts', 440, '≈440 kcal', 'Salted Caramel Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(116, 'Eggless Red Velvet Brownie — Theobroma','cookies-brownies','desserts', 400, '≈400 kcal', 'Tiramisu Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(117, 'Eggless Coconut Brownie',              'cookies-brownies', 'desserts', 410, '≈410 kcal', 'Tiramisu Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(118, 'Eggless Nutella Brownie',              'cookies-brownies', 'desserts', 470, '≈470 kcal', 'Chocolate Overload Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(119, 'Triple Choco Chip Brownie',            'cookies-brownies', 'desserts', 480, '≈480 kcal', 'Chocolate Overload Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(120, 'Mocha Coffee Brownie',                 'cookies-brownies', 'desserts', 450, '≈450 kcal', 'Salted Caramel Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(121, 'Cheesecake Brownie',                   'cookies-brownies', 'desserts', 380, '≈380 kcal', 'Tiramisu Brownie', SHOPS_THEOBROMA, 'brownies'),
    P(122, 'Choco Fudge Brownie',                  'cookies-brownies', 'desserts', 390, '≈390 kcal', 'Chocolate Overload Brownie', SHOPS_COOKIE_CO, 'brownies'),
    P(123, 'Nutella Brownie',                      'cookies-brownies', 'desserts', 430, '≈430 kcal', 'Salted Caramel Brownie', SHOPS_COOKIE_CO, 'brownies'),
    P(124, 'Walnut Fudge Brownie',                 'cookies-brownies', 'desserts', 370, '≈370 kcal', 'Chocolate Overload Brownie', SHOPS_COOKIE_CO, 'brownies'),

    /* ==================== 8. ICE CREAMS (125–141) ==================== */
    P(125, 'Chocolate',                     'ice-creams', 'icecreams', 120, '120–150 kcal', 'Belgian Bite (Zero added sugar)', SHOPS_ICE),
    P(126, 'Vanilla',                       'ice-creams', 'icecreams', 100, '100–130 kcal', 'Vanilla vibes (Zero added sugar)', SHOPS_ICE),
    P(127, 'Butterscotch',                  'ice-creams', 'icecreams', 120, '120–160 kcal', 'Kesar pista (Zero added sugar)', SHOPS_ICE),
    P(128, 'Choco Chip',                    'ice-creams', 'icecreams', 130, '130–170 kcal', 'Dark chocolate sorbet (Zero added sugar, dairy free)', SHOPS_ICE),
    P(129, 'Strawberry',                    'ice-creams', 'icecreams', 90,  '90–120 kcal', 'Strawberry (Zero added sugar)', SHOPS_ICE),
    P(130, 'Tender Coconut',                'ice-creams', 'icecreams', 100, '100–140 kcal', 'Tender coconut (Zero added sugar)', SHOPS_ICE),
    P(131, 'Black Currant',                 'ice-creams', 'icecreams', 100, '100–140 kcal', 'Berry-based sorbet', SHOPS_ICE),
    P(132, 'American Dry Fruit',            'ice-creams', 'icecreams', 150, '150–200 kcal', 'Roasted Almond (Zero added sugar)', SHOPS_ICE),
    P(133, 'Cookies & Cream',               'ice-creams', 'icecreams', 150, '150–190 kcal', 'Vanilla Sugar free', SHOPS_ICE),
    P(134, 'Coffee Walnut',                 'ice-creams', 'icecreams', 140, '140–180 kcal', 'Roasted Almond (Zero added sugar)', SHOPS_ICE),
    P(135, 'Malai Kulfi',                   'ice-creams', 'icecreams', 150, '150–200 kcal', 'Malai Kulfi (Zero added sugar)', SHOPS_ICE),
    P(136, 'Brownie Sundae',                'ice-creams', 'icecreams', 400, '400–600 kcal', 'Mixed fruit sundae', SHOPS_ICE),
    P(137, 'Chocolate Sundae',              'ice-creams', 'icecreams', 300, '300–500 kcal', 'Belgian bite (Zero added sugar)', SHOPS_ICE),
    P(138, 'Ice Cream Sandwich',            'ice-creams', 'icecreams', 300, '300–500 kcal', 'Coffee walnut Ice cream sandwich', SHOPS_ICE),
    P(139, 'Sizzling Brownie + Ice Cream',  'ice-creams', 'icecreams', 400, '400–600 kcal', 'Mixed fruit Sundae', SHOPS_ICE),
    P(140, 'Falooda',                       'ice-creams', 'icecreams', 400, '400–550 kcal', 'Mango Aamras sorbet', SHOPS_ICE),
    P(141, 'Kesar Kulfi',                   'ice-creams', 'icecreams', 150, '150–200 kcal', 'Kesar Pistachio (Zero added sugar)', SHOPS_ICE)
];

window.categories = categories;
window.products = products;