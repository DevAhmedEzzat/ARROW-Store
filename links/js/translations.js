 // Translation data
const translations = {
    en: {
        // lang button
        'lang-text': 'AR'
    },
    ar: {
        //hero
        'hero-title': "أرضيات رياضية عالية الجودة",
        'hero-desc': "نحول المساحات إلى بيئات رياضية عالية الأداء باستخدام أحدث أنواع العشب الاصطناعي، ومعدات رياضية احترافية، وأنظمة أرضيات متخصصة",
        // about
        'about-title': "حلول متكاملة للأرضيات الرياضية والأسطح العشبية الصناعية في مصر",
        'about-desc1': "نؤمن بإمكانية تحويل أي مساحة إلى مكان آمن وجميل ومريح. نقدم أنواعًا مميزة من العشب الصناعي وأرضيات رياضية عالية الجودة، تتميز بمقاومتها للاستخدام المكثف، بالإضافة إلى مظهرها الطبيعي وسهولة صيانتها، مما يجعلها مثالية للأندية والمدارس والحدائق والمشاريع السكنية",
        'about-desc2': "أول متجر إلكتروني متخصص في بيع العشب الصناعي وأرضيات الملاعب الرياضية، يقدمه لكم شركة السهم الرياضي للانشاءات الرياضية ، إحدى أكبر وأهم الشركات المتخصصة في المجال الرياضي، تقوم الشركة ببناء جميع أنواع الملاعب الرياضية وتجهيز الأندية الرياضية بأحدث المعدات والمواد عالية الجودة، وذلك تحت إشراف فريق عمل متميز ومتكامل.",
        // contact
        'cta-desc':"تواصل مع فريقنا اليوم للحصول على استشارة متخصصة حول احتياجاتك من العشب الصناعي، والمعدات الرياضية، وأرضيات المنشآت الرياضية",
        // lang button
        'lang-text': 'EN'
    }
};
        let currentLang = 'en';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            
            // Update HTML attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            // Toggle RTL class on body
            document.body.classList.toggle('rtl', currentLang === 'ar');
          
            // Update all text content
            const currentTranslations = translations[currentLang];
            
            Object.keys(currentTranslations).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (key === 'hours-text') {
                        element.innerHTML = currentTranslations[key];
                    } else {
                        element.textContent = currentTranslations[key];
                    }
                }
            });
            // Add fade animation to content
            const container = document.querySelector('.container');
            container.style.opacity = '0';
            setTimeout(() => {
                container.style.opacity = '1';
            }, 150);
            // غيّر ID حسب الزر عندك
            const langBtn = document.getElementById('lang-btn'); 
                if (langBtn) {
                langBtn.style.display = 'none';
            }
        }

        /*
         // Translation data
const translations = {
    en: {
     
        'hero-title': "Premium Sports Flooring",
        'lang-text': 'AR'
    },
    ar: {
        //hero
        'hero-title': "أرضيات رياضية عالية الجودة",
        'lang-text': 'EN'
    }
};
        let currentLang = 'en';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            
            // Update HTML attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            // Toggle RTL class on body
            document.body.classList.toggle('rtl', currentLang === 'ar');
          
            // Update all text content
            const currentTranslations = translations[currentLang];
            
            Object.keys(currentTranslations).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (key === 'hours-text') {
                        element.innerHTML = currentTranslations[key];
                    } else {
                        element.textContent = currentTranslations[key];
                    }
                }
            });
            // Add fade animation to content
            const container = document.querySelector('.container');
            container.style.opacity = '0';
            setTimeout(() => {
                container.style.opacity = '1';
            }, 150);
        }
        
        */