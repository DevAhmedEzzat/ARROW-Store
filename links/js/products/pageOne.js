// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add more sample products for demonstration
    const additionalproducts = [
    {
        id: 161,
        title: "Artificial Turf 12MM",
        price: 520,
        type: "multi-sport-turf",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🥎 Multi-Sport Turf",
        unit: "1 Meter",
        pile: 12,
        stitches: 63000,
        detex: 3000,
        gauge: "5/8",
        description: `نجيل بادل تركي مصنوع من خامات البولي ايثلين مخصص لاستخدامات البادل تنس طبقا لمواصفات الاتحاد الدولي ومواصفات اتحاد محترقي البادل`,
        features: ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي"],
        image: "media/photo/landscape/padele12mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 162,
        title: "Artificial Turf 20MM",
        price: 215,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 20,
        stitches: 12000,
        detex: 7000,
        gauge: "3/8",
        description: "أول خطوة في عالم اللاندسكيب الحقيقي، بيقدملك منظر طبيعي مع إحساس بسيط بالملمس",
        features:  ["أسطح", "سهل التنظيف والتركيب", "شرفات ", "حدائق خفيفة"],
        image: "media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 163,
        title: "Artificial Turf 30MM",
        price: 250,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 30,
        stitches: 12000,
        detex: 7000,
        gauge: "3/8",
        description: "التوازن المثالي بين الشكل الطبيعي والتحمّل، مناسب للجلسات العائلية والمساحات المفتوحة",
        features:  ["رؤف", "سهل التنظيف والتركيب", "شرفات ", "مناطق لعب أطفال"],
        image: "media/photo/landscape/landscape30mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 164,
        title: "Artificial Turf 40MM",
        price: 270,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 40,
        stitches: 12000,
        detex: 7000,
        gauge: "3/8",
        description: "الأكثر استخدامًا في مصر، هو خيار الناس اللي بتحب التوازن: شكل + نعومة + تحمّل",
        features:  ["رؤف", "شرفات ", "حدائق فلل", "كمبوندات", "حدائق راقية", "منظر طبيعي ", "ملمس ناعم ", "مقاوم للشمس"],
        image: "media/photo/landscape/landscape40mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 165,
        title: "Artificial Turf 50MM",
        price: 295,
        type: "landscape",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 7000,
        gauge: "3/8",
        description: "أعلى درجات النعومة والشكل الطبيعي، لو عايز حديقة تحس كأنك في غابة خضرة",
        features:  ["جلسات فاخرة", "حدائق كبيرة", "حدائق فلل", "كمبوندات", "حدائق راقية", "مظهر فاخر", "منتجعات"],
        image: "media/photo/landscape/landscape50mm.png",
        whatsapp: "201094732106"
    },
    // football: 40MM, detex: 12000,  gauge: 5/8
    {
        id: 166,
        title: "Artificial Turf 40MM",
        price: 329,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 18000,
        detex: 12000,
        gauge: "5/8",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground40mm.jpg",
        whatsapp: "201094732106"
    },
    //footballTurf: 50MM, detex: 8000,  gauge: 3/4
    {
        id: 167,
        title: "Artificial Turf 50MM",
        price: 255,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 8000,
        gauge: "3/4",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 168,
        title: "Artificial Turf 50MM",
        price: 265,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 8000,
        gauge: "3/4",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    //footballTurf: 50MM, detex: 8000,  gauge: 5/8
    {
        id: 169,
        title: "Artificial Turf 50MM",
        price: 265,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 8000,
        gauge: "5/8",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 170,
        title: "Artificial Turf 50MM",
        price: 280,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 8000,
        gauge: "5/8",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 10000, gauge: "3/4",
    {
        id: 171,
        title: "Artificial Turf 50MM",
        price: 270,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 10000,
        gauge: "3/4",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 172,
        title: "Artificial Turf 50MM",
        price: 286,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 10000,
        gauge: "3/4",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 10000, gauge: 5/8
    {
        id: 173,
        title: "Artificial Turf 50MM",
        price: 290,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 10000,
        gauge: "5/8",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 174,
        title: "Artificial Turf 50MM",
        price: 309,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 10000,
        gauge: "5/8",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 12000, gauge: 3/4
    {
        id: 175,
        title: "Artificial Turf 50MM",
        price: 275,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 12000,
        gauge: "3/4",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 176,
        title: "Artificial Turf 50MM",
        price: 290,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 12000,
        gauge: "3/4",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 12000, gauge: 5/8
    {
        id: 177,
        title: "Artificial Turf 50MM",
        price: 295,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 12000,
        gauge: "5/8",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 178,
        title: "Artificial Turf 50MM",
        price: 310,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 12000,
        gauge: "5/8",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    // footballTurf: 50MM, detex: 7000, gauge: 5/8
    {
        id: 179,
        title: "Artificial Turf 50MM",
        price: 280,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 12000,
        detex: 7000,
        gauge: "5/8",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm3.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 180,
        title: "Artificial Turf 50MM",
        price: 290,
        type: "football",
        listingType: "",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 14000,
        detex: 7000,
        gauge: "5/8",
        description: "خيار اقتصادي مناسب للملاعب التدريبية والمدارس، يوفر أداء مقبول وسعر مميز مع مظهر طبيعي",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm3.jpg",
        whatsapp: "201094732106"
    },
    // LED FLOOD LIGHT:
    {
        id: 181,
        title: "Led Flood Light 50W",
        price: 350,
        category: "sports-supplies",
        type: "supplies",
        listingType: "",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "6000Lm",
        feaTwo: "120ْ ",
        feaThree: "246*110*40mm",
        feaFour: "0.5Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight50W.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 182,
        title: "Led Flood Light 100W",
        price: 600,
        category: "sports-supplies",
        type: "supplies",
        listingType: "",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "12000Lm",
        feaTwo: "120ْ ",
        feaThree: "415*110*40mm",
        feaFour: "0.8Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight100W.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 183,
        title: "Led Flood Light 150W",
        price: 950,
        category: "sports-supplies",
        type: "supplies",
        listingType: "",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "24000Lm",
        feaTwo: "120ْ  - 180ْ ",
        feaThree: "415*220*40mm",
        feaFour: "1.5Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight150W.jpg",
        whatsapp: "201094732106"
    },
    // PVC Tiles:
    {
        id: 184,
        title: "Rubber Tiles 1.5Cm",
        price: 430,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 1.5Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 1.5سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlack.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 185,
        title: "Rubber Tiles 2.5Cm",
        price: 480,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2.5Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2.5سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlack.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 186,
        title: "Rubber Tiles 2.5Cm",
        price: 520,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2.5Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2.5سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRed.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 187,
        title: "Rubber Tiles 2.5Cm",
        price: 575,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2.5Cm",
        feaTwo: "Color: Blue",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2.5سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlue.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 188,
        title: "Rubber Tiles 2.5Cm",
        price: 510,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2.5Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Puzzles",
        description: `بلاطات مطاطية عالية الكثافة مصممة خصيصًا للمراكز الرياضية، الجيم، ساحات اللعب، ومناطق الألعاب الآمنة للأطفال. توفر امتصاص ممتاز للصدمات ومقاومة عالية للتآكل`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlackPuzzles.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 189,
        title: "Rubber Tiles 2.5Cm",
        price: 570,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2.5Cm",
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
