// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add more sample products for demonstration
    const additionalproducts = [
    {
        id: 261,
        title: "Artificial Turf 12MM",
        price: 770,
        listingType: "",
        category: "artificial-turf",
        type: "multi-sport-turf",
        categoryCard: "🥎 Multi-Sport Turf",
        unit: "1 Meter",
        pile: 12,
        stitches: 58000,
        detex: 42000,
        gauge: "5/8",
        description: `نجيل بادل تركي مصنوع من خامات البولي ايثلين مخصص لاستخدامات البادل تنس طبقا لمواصفات الاتحاد الدولي ومواصفات اتحاد محترقي البادل`,
        features: ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي"],
        image: "media/photo/landscape/padele12mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 262,
        title: "Artificial Turf 20MM",
        price: 265,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 20,
        stitches: 24000,
        detex: 7000,
        gauge: "3/8",
        description: "حل ممتاز للديكور والمشي الخفيف، بيجمع بين المظهر الطبيعي والراحة",
        features:  ["جلسات خارجية", "سهل التنظيف والتركيب", "شرفات ", "حدائق منزلية "],
        image: "media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 263,
        title: "Artificial Turf 30MM",
        price: 320,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 30,
        stitches: 24000,
        detex: 7000,
        gauge: "3/8",
        description: "الشكل الطبيعي الحقيقي، بيخلي الجنينه أو البلكونة تحس كأنك في حديقة طبيعية",
        features:  ["رؤف", "شرفات ", "فلل", "كافيهات ", "حدائق راقية", "منظر طبيعي ", "ملمس ناعم "],
        image: "media/photo/landscape/landscape30mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 264,
        title: "Artificial Turf 40MM",
        price: 375,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 40,
        stitches: 24000,
        detex: 7000,
        gauge: "3/8",
        description: "لو بتدور على فخامة المنظر، مناسب للي عايز جنينة ناعمة وراقية",
        features:  ["جلسات فاخرة", "حمامات سباحة", "حدائق فلل", "كمبوندات", "حدائق راقية", "منظر طبيعي", "ملمس ناعم "],
        image: "media/photo/landscape/landscape40mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 265,
        title: "Artificial Turf 50MM",
        price: 430,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 24000,
        detex: 7000,
        gauge: "3/8",
        description: "أعلى درجات النعومة والشكل الطبيعي، ديكور فاخر... شكله جميل جدًا، ومناسب للمناطق اللي فيها حركة بسيطة كأنك في غابة خضرة",
        features:  ["جلسات فاخرة", "حدائق كبيرة", "حدائق فلل", "كمبوندات", "حدائق راقية", "مظهر فاخر", "منتجعات"],
        image: "media/photo/landscape/landscape50mm.png",
        whatsapp: "201094732106"
    },
    //footballTurf: 50MM, detex: 8000,  gauge: 3/4
    {
        id: 266,
        title: "Artificial Turf 50MM",
        price: 285,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 8000,
        gauge: "3/4",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    //footballTurf: 50MM, detex: 8000,  gauge: 5/8
    {
        id: 267,
        title: "Artificial Turf 50MM",
        price: 305,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 8000,
        gauge: "5/8",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 10000, gauge: "3/4",
    {
        id: 268,
        title: "Artificial Turf 50MM",
        price: 317,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 10000,
        gauge: "3/4",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 10000, gauge: 5/8
    {
        id: 269,
        title: "Artificial Turf 50MM",
        price: 346,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 10000,
        gauge: "5/8",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 12000, gauge: 3/4
    {
        id: 270,
        title: "Artificial Turf 50MM",
        price: 325,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 12000,
        gauge: "3/4",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 12000, gauge: 5/8
    {
        id: 271,
        title: "Artificial Turf 50MM",
        price: 350,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 12000,
        gauge: "5/8",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 7000, gauge: 5/8
    {
        id: 272,
        title: "Artificial Turf 50MM",
        price: 315,
        category: "artificial-turf",
        type: "football",
        listingType: "",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 7000,
        gauge: "5/8",
        description: "أعلى مستوى من الجودة والمتانة، عمر افتراضي أطول، أداء احترافي، ومظهر طبيعي ممتاز",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm3.jpg",
        whatsapp: "201094732106"
    },
    // LED FLOOD LIGHT:
    {
        id: 273,
        title: "Led Flood Light 300W",
        price: 1750,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "36000Lm",
        feaTwo: "120ْ  - 180ْ ",
        feaThree: "415*330*40mm",
        feaFour: "2.3Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight300W.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 274,
        title: "Led Flood Light 400W",
        price: 2200,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "48000Lm",
        feaTwo: "120ْ  - 180ْ ",
        feaThree: "415*440*40mm",
        feaFour: "3Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight400W.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 275,
        title: "Led Flood Light 600W",
        price: 3600,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "72000Lm",
        feaTwo: "120ْ ",
        feaThree: "415*660*40mm",
        feaFour: "5.2Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight600W.jpg",
        whatsapp: "201094732106"
    },
    // PVC Tiles:
    {
        id: 276,
        title: "Rubber Tiles 1.5Cm",
        price: 460,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 1.5Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRed.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 277,
        title: "Rubber Tiles 3Cm",
        price: 560,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 3Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 3سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlack.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 278,
        title: "Rubber Tiles 3Cm",
        price: 580,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 3Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 3سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRed.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 279,
        title: "Rubber Tiles 3Cm",
        price: 635,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 3Cm",
        feaTwo: "Color: Blue",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 3سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlue.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 280,
        title: "Rubber Tiles 3Cm",
        price: 570,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 3Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Puzzles",
        description: `بلاطات مطاطية عالية الكثافة مصممة خصيصًا للمراكز الرياضية، الجيم، ساحات اللعب، ومناطق الألعاب الآمنة للأطفال. توفر امتصاص ممتاز للصدمات ومقاومة عالية للتآكل`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlackPuzzles.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 281,
        title: "Rubber Tiles 3Cm",
        price: 630,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 3Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Interlock",
        description: `بلاطات مطاطية عالية الكثافة مصممة خصيصًا للمراكز الرياضية، الجيم، ساحات اللعب، ومناطق الألعاب الآمنة للأطفال. توفر امتصاص ممتاز للصدمات ومقاومة عالية للتآكل`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRedInterlock.jpg",
        whatsapp: "201094732106"
    }
];

    // Add to existing products
    products.push(...additionalproducts);
    filteredProducts = [...products];
    
    displayProducts(filteredProducts, true);
    
    // Add animation to stats when they come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(statNumber => {
                    animateNumber(statNumber);
                });
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});
