// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add more sample products for demonstration
    const additionalproducts = [
    {
        id: 1,
        title: `Artificial Turf 6MM`,
        price: 150,
        type: "landscape",
        listingType: "special",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 6,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "هل محتاج لمسة خضار بسيطة؟ الحل الأمثل ديكورات داخلية أو تصميمات مؤقتة",
        features: ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي"],
        image: "media/photo/landscape/landscape6mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 2,
        title: "Artificial Turf 9MM",
        price: 170,
        type: "landscape",
        listingType: "special",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 9,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "مناسب للديكور الداخلي والبلكونات الخفيفة، يوفر مظهر ناعم بلمسة بسيطة ومن غير تكلفة عالية",
        features:  ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي", "ممرات", "خلفيات تصوير"],
        image: "media/photo/landscape/landscape9mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 3,
        title: "Artificial Turf 11MM",
        price: 190,
        type: "landscape",
        listingType: "special",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 11,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "النجيل الصناعي اللي بيوازن بين الشكل والسعر، مثالي للناس اللي بتدور على خيار ديكوري اقتصادي",
        features:  ["سهل التنظيف والتركيب", "ديكور داخلي", "ممرات", "خلفيات تصوير", "مناطق عرض", "مداخل داخلية"],
        image: "media/photo/landscape/landscape11mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 61,
        title: "Artificial Turf 12MM",
        price: 595,
        category: "artificial-turf",
        type: "multi-sport-turf",
        listingType: "best",
        categoryCard: "🥎 Multi-Sport Turf",
        unit: "1 Meter",
        pile: 12,
        stitches: 42000,
        detex: 7000,
        gauge: "5/8",
        description: `نجيل بادل تركي مصنوع من خامات البولي ايثلين مخصص لاستخدامات البادل تنس طبقا لمواصفات الاتحاد الدولي ومواصفات اتحاد محترقي البادل`,
        features: ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي"],
        image: "media/photo/landscape/padele12mm.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 62,
        title: "Artificial Turf 20MM",
        price: 235,
        type: "landscape",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 20,
        stitches: 16000,
        detex: 7000,
        gauge: "3/8",
        description: "أول خطوة في عالم اللاندسكيب الحقيقي، بيقدملك منظر طبيعي مع إحساس بسيط بالملمس",
        features:  ["أسطح", "سهل التنظيف والتركيب", "شرفات ", "حدائق خفيفة"],
        image: "media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 63,
        title: "Artificial Turf 30MM",
        price: 270,
        type: "landscape",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 30,
        stitches: 16000,
        detex: 7000,
        gauge: "3/8",
        description: "التوازن المثالي بين الشكل الطبيعي والتحمّل، مناسب للجلسات العائلية والمساحات المفتوحة",
        features:  ["رؤف", "سهل التنظيف والتركيب", "شرفات ", "مناطق لعب أطفال"],
        image: "media/photo/landscape/landscape30mm.jpeg",
        whatsapp: "201094732106"
    },  
    {
        id: 64,
        title: "Artificial Turf 40MM",
        price: 305,
        type: "landscape",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",       
        unit: "1 Meter",
        pile: 40,
        stitches: 16000,
        detex: 7000,
        gauge: "3/8",
        description: "الأكثر استخدامًا في مصر، هو خيار الناس اللي بتحب التوازن: شكل + نعومة + تحمّل",
        features:  ["رؤف", "شرفات ", "حدائق فلل", "كمبوندات", "حدائق راقية", "منظر طبيعي ", "ملمس ناعم ", "مقاوم للشمس"],
        image: "media/photo/landscape/landscape40mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 65,
        title: "Artificial Turf 50MM",
        price: 335,
        type: "landscape",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "🍃 Landscape Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 7000,
        gauge: "3/8",
        description: "أعلى درجات النعومة والشكل الطبيعي، لو عايز حديقة تحس كأنك في غابة خضرة",
        features:  ["جلسات فاخرة", "حدائق كبيرة", "حدائق فلل", "كمبوندات", "حدائق راقية", "مظهر فاخر", "منتجعات"],
        image: "media/photo/landscape/landscape50mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 66,
        title: "Artificial Turf 40MM",
        price: 309,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 12000,
        gauge: "3/4",
        description: "خيار ذكي واقتصادي للملاعب الرياضية سعر مناسب وجودة جيدة للاستخدام في الأماكن ذات الكثافة السكانية المتوسطة",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground40mm.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 67,
        title: "Artificial Turf 50MM",
        price: 275,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 8000,
        gauge: "3/4",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 68,
        title: "Artificial Turf 50MM",
        price: 290,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 8000,
        gauge: "5/8",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 69,
        title: "Artificial Turf 50MM",
        unit: "1Meter",
        price: 301,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 10000,
        gauge: "3/4",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 70,
        title: "Artificial Turf 50MM",
        price: 327,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 10000,
        gauge: "5/8",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm1.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 71,
        title: "Artificial Turf 50MM",
        price: 305,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 12000,
        gauge: "3/4",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 72,
        title: "Artificial Turf 50MM",
        price: 325,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 12000,
        gauge: "5/8",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm2.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 73,
        title: "Artificial Turf 50MM",
        price: 300,
        type: "football",
        listingType: "best",
        category: "artificial-turf",
        categoryCard: "⚽ Football Turf",
        unit: "1 Meter",
        pile: 50,
        stitches: 16000,
        detex: 7000,
        gauge: "5/8",
        description: "توازن مثالي بين الجودة والسعر، قوة تحمل جيدة مع إحساس طبيعي ومناسب للملاعب شبه الاحترافية",
        features:  ["عالي الجودة", "مقاوم للعوامل الجوية", "عالي الكثافة", "امتصاص عالي للصدمات", "سهولة في الصيانة"],
        image: "media/photo/playground/playground50mm3.jpg",
        whatsapp: "201094732106"
    },
    // Football Goal Posts 5-a-side fields:
    {
        id: 74,
        title: "Football Goal",
        price: 9000,
        type: "supplies",
        listingType: "best",
        category: "sports-supplies",
        categoryCard: "🧩 Supplies",
        unit: "2 Piece",
        feaOne: "4 Inch",
        feaTwo: "Height 200Cm",
        feaThree: "Weight 300Cm",
        feaFour: "Made Of Iron",
        description: "اهداف مرمى الملعب الخماسي مصنوعة وفق المعايير المهنية، ومجهزة بشبكات ذات رؤية عالية",
        features:  ["منتج عالي الجودة", "دهان باللون الابيض"],
        image: "media/photo/sportsSupplies/footballGoal5.jpg",
        whatsapp: "201094732106"
    },
    // Lighting Systems:
    {
        id: 75,
        title: "Led Flood Light 200W",
        price: 1300,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "24000Lm",
        feaTwo: "120ْ  - 180ْ ",
        feaThree: "415*220*40mm",
        feaFour: "1.5Kg",
        description: "مصباح اضاءة قوي يستخدم في ملاعب كرة القدم الصغيرة والمناطق المفتوحة ، ويتميز بتقنية لتوفير طاقة عالية واضاءة ساطعة ومتساوية",
        features:  ["منتج عالي الجودة", "متانة الهيكل", "ضد الماء", "استهلاك اقل للطاقة", "زجاج مقاوم للحرارة"],
        image: "media/photo/sportsSupplies/ledFloodLight200W.jpg",
        whatsapp: "201094732106"
    },
    // Playground Net Systems:
    {
        id: 76,
        title: "Playground Goal Net",
        price: 900,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "2 Piece",
        feaOne: "Size: 3m x 2m",
        feaTwo: "Material: HDPE",
        feaThree: "Mesh: 12cm x 12cm",
        feaFour: "Weather Resistant",
        description: "شبكة مرمى عالية الجودة للملعب الخماسي، مصنوعة من خامات متينة مقاومة للعوامل الجوية ومناسبة للاستخدام الداخلي والخارجي",
        features: ["مقاس رسمي للملاعب الخماسية", "خامة عالية الكثافة بدون عقد", "مقاومة للأشعة فوق البنفسجية", "عمر افتراضي طويل", "سهل الفك والتركيب"],
        image: "media/photo/sportsSupplies/playgroundGoalNet.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 77,
        title: "Playground Side Net",
        price: 10,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Meter",
        feaOne: "Height: 1Meter",
        feaTwo: "Length: 1Meter (per side)",
        feaThree: "Material: HDPE",
        feaFour: "UV & Weather Resistant",
        description: "شبكة أجناب وسقف للملعب الخماسي، مصممة لتغطية جوانب الملعب بالكامل ومنع خروج الكرة. خامة عالية الجودة مقاومة للشمس والعوامل الجوية، تضمن أمان اللعب والمتانة الطويلة.",
        features: ["خامة بدون عقد عالية الكثافة", "مقاومة للأشعة فوق البنفسجية", "مقاومة للتآكل والطقس الخارجي", "تثبيت قوي وسهل التركيب"],
        image: "media/photo/sportsSupplies/playgroundSideNet.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 78,
        title: "Padel Net",
        price: 8000,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "Height: 88CM",
        feaTwo: "Metal Cable",
        feaThree: "Length: 10Meter",
        feaFour: "PVC",
        description: "شبكة ملعب البادل العالية الجودة مصنوعة من الياف صناعية دقيقة تمنع مرور الكرة من خلالها، مزودة بأجهزة شد سريعة ويتم تعليق الشكبة بواسطة كابل معدني مما يحافظ علي شد الشبكة",
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "مزودة بكابل معدني"],
        image: "media/photo/sportsSupplies/padelNet.png",
        whatsapp: "201094732106"
    },
    // Protection Net Posts
    {
        id: 79,
        title: "Protection Net Posts",
        price: 2000,
        type: "supplies",
        listingType: "best",
        category: "sports-supplies",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "Height: 9Meter",
        feaTwo: "Material: Iron",
        feaThree: "Diameter: 3 Inch",
        feaFour: "Color: White",
        description: "أعمدة تثبيت لشبكة أجناب الملعب الخماسي مصنوعة من الصلب المطلي كهربيًا لمقاومة الصدأ والتآكل، تضمن ثبات الشبكة لفترات طويلة في مختلف الظروف الجوية",
        features: ["ارتفاع 9 أمتار لتغطية جانبي الملعب بالكامل", "مصنوعة من صلب عالي المتانة", "مقاومة للصدأ والعوامل الجوية", "سهلة التركيب", "تشطيب طلاء للحماية الإضافية"],
        image: "media/photo/sportsSupplies/protectionNetPosts.png",
        whatsapp: "201094732106"
    },
    // PVC Tiles:
    {
        id: 80,
        title: "Rubber Tiles 2Cm",
        price: 460,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlack.jpeg",
        whatsapp: "201094732106"
    },
    {
        id: 81,
        title: "Rubber Tiles 2Cm",
        price: 480,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRed.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 82,
        title: "Rubber Tiles 2Cm",
        price: 515,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2Cm",
        feaTwo: "Color: Blue",
        feaThree: "Made in Egypt",
        feaFour: "Square",
        description: `بلاطات مربعات محلي الصنع سمك 2سم بالالوان <br> (اسود/احمر/رمادي/اخضر/ازرق/اصفر)`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlue.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 83,
        title: "Rubber Tiles 2Cm",
        price: 490,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2Cm",
        feaTwo: "Color: Black",
        feaThree: "Made in Egypt",
        feaFour: "Puzzles",
        description: `بلاطات مطاطية عالية الكثافة مصممة خصيصًا للمراكز الرياضية، الجيم، ساحات اللعب، ومناطق الألعاب الآمنة للأطفال. توفر امتصاص ممتاز للصدمات ومقاومة عالية للتآكل`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesBlackPuzzles.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 84,
        title: "Rubber Tiles 2Cm",
        price: 530,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Meter",
        feaOne: "Thickness: 2Cm",
        feaTwo: "Color: Red",
        feaThree: "Made in Egypt",
        feaFour: "Interlock",
        description: `بلاطات مطاطية عالية الكثافة مصممة خصيصًا للمراكز الرياضية، الجيم، ساحات اللعب، ومناطق الألعاب الآمنة للأطفال. توفر امتصاص ممتاز للصدمات ومقاومة عالية للتآكل`,
        features:  ["منتج عالي الجودة", "معالج ضد عوامل التعرية", "امتصاص الصدمات", "مقاومة الانزلاق", "سهولة التركيب"],
        image: "media/photo/sportsFlooring/rubberTilesRedInterlock.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 85,
        title: "Acrylic Sports Paint",
        price: 80,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Kg",
        feaOne: "Color: Green/Red/Blue",
        feaTwo: "Water-based Acrylic",
        feaThree: "Coverage: 4-5 m²/L",
        feaFour: "UV & Weather Resistant",
        description: "دهانات أكريليك مخصصة للملاعب الرياضية مثل التنس، كرة السلة، تتميز بمقاومة عالية للعوامل الجوية والأشعة فوق البنفسجية مع ألوان زاهية تدوم طويلاً.",
        features: ["مقاومة للأشعة فوق البنفسجية", "سطح غير قابل للانزلاق", "ألوان متعددة زاهية", "سهل التطبيق والصيانة"],
        image: "media/photo/sportsFlooring/acrylicPaint.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 86,
        title: "Primer Paint",
        price: 65,
        category: "sports-flooring",
        type: "multipurpose-sports-flooring",
        listingType: "best",
        categoryCard: "🏃‍♂️ Sports Flooring",
        unit: "1 Kg",
        feaOne: "Water-based Primer",
        feaTwo: "Coverage: 6-8 m²/L",
        feaThree: "Fast Drying",
        feaFour: "Strong Adhesion",
        description: "برايمر أكريليك مائي يستخدم كطبقة أساسية لتحضير أرضيات الملاعب قبل تطبيق دهانات الأكريليك النهائية. يعزز التصاق الطلاء، ويزيد من عمر السطح، ويضمن تشطيب متجانس عالي الجودة.",
        features: ["مقاومة ممتازة للرطوبة", "تجفيف سريع وسهل التطبيق", "مناسب لمختلف الأرضيات الرياضية", "إطالة عمر الطلاء النهائي"],
        image: "media/photo/sportsFlooring/primerPaint.jpg",
        whatsapp: "201094732106"
    },
    // Artificial Turf Glued Two-component:
    {
        id: 87,
        title: "Artificial Turf Glued",
        price: 2000,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "20 Kg",
        feaOne: "20Kg",
        feaTwo: "Ployurethane Glue",
        feaThree: "Two-component",
        feaFour: "30–45 minutes",
        description: `(Two-Component) <br> لاصق صناعي ثنائي المكوّن  مخصص لتركيب النجيل الصناعي. يوفر قوة التصاق عالية، مقاوم للعوامل الجوية، ومناسب للملاعب والأماكن الخارجية`,
        features:  ["منتج عالي الجودة", "سهولة الاستخدام", "مقاوم للعوامل البيئية المختلفة", "رابط قوي"],
        image: "media/photo/sportsSupplies/twoComponent20Kg.jpeg",
        whatsapp: "201094732106"
    },
    // Artificial Turf Tape:
    {
        id: 88,
        title: "Artificial Turf Tape 15Cm",
        price: 600,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "Length: 50Meter",
        feaTwo: "Width: 15Cm",
        feaThree: "تجميع",
        feaFour: "Made in Egypt",
        description: "شريط لحام عالي الجودة بعرض 15 سم يُستخدم مع لاصق النجيل الصناعي لربط وتثبيت اللفائف بشكل متين ودقيق. مثالي للملاعب الاحترافية والمشروعات الكبيرة.",
        features:  ["منتج عالي الجودة", "سهولة الاستخدام", "مقاوم للعوامل البيئية المختلفة", "لفات باطوال مختلفة"],
        image: "media/photo/sportsSupplies/artificialTurfTape.jpg",
        whatsapp: "201094732106"
    },
    {
        id: 89,
        title: "Artificial Turf Tape 30Cm",
        price: 1000,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "Length: 50Meter",
        feaTwo: "Width: 30Cm",
        feaThree: "تخطيط",
        feaFour: "Made in Egypt",
        description: "شريط تخطيط العشب الصناعي عبارة عن شريط من البولي بروبيلين يستخدم لتثبيت وصلات قطعتي العشب الصناعي معا",
        features:  ["منتج عالي الجودة", "سهولة الاستخدام", "مقاوم للعوامل البيئية المختلفة", "لفات باطوال مختلفة"],
        image: "media/photo/sportsSupplies/artificialTurfTape.jpg",
        whatsapp: "201094732106"
    },
    // Artificial Turf Brush:
    {
        id: 90,
        title: "Artificial Turf Brush",
        price: 2500,
        category: "sports-supplies",
        type: "supplies",
        listingType: "best",
        categoryCard: "🧩 Supplies",
        unit: "1 Piece",
        feaOne: "Length: 1Meter",
        feaTwo: "Width: 1Meter",
        feaThree: "Made Of Iron",
        feaFour: "Made in Egypt",
        description: "فرشاة تمشيط العشب الصناعي هي اداة مصممة لرفع الياف العشب الصناعي المتساقطة والمضغوطة مما يحافظ علي مظهره الطبيعي ",
        features:  ["منتج عالي الجودة", "سهولة الاستخدام", "الحفاظ علي المظهر", "اطالة العمر التشغيلي", "تحسين الاداء"],
        image: "media/photo/sportsSupplies/turfBrush.png",
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
