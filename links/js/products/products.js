// Sample Products data
const products = [];
let filteredProducts = [...products];

// Display products
function displayProducts(productsToShow = filteredProducts) {
    const grid = document.getElementById('productsGrid');

    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div style="text-align: center; grid-column: 1/-1; padding: 2rem;">
                <h3>No Products found matching your criteria</h3>
                <p>Try adjusting your search filters</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productsToShow.map(Product => `
    <div class="Products-card" id="Product-${Product.id}" onclick="showProductDetails(${Product.id})">
        <div class="Product-image">
            ${Product.listingType === 'best' || Product.listingType === 'special' 
                ? `<div class="Product-badge">
                     ${Product.listingType === 'best' ? 'Best Seller' : 'Special Offer'}
                   </div>` 
                : ''
            }
            <img src="${Product.image}" alt="${Product.title}">
        </div>
        <div class="Product-content">
            <div class="Product-price">
                ${Product.price.toLocaleString()}${Product.listingType === 'special' ? ' EGP/خصم' : ' EGP'} 
            </div>
            <h3 class="Product-title">${Product.title}</h3>
            <div class="Product-details">
                ${Product.pile > 0 ? `<span class="Product-detail"><i class="fa-solid fa-ruler-vertical" style="color:#0ea5a4; font-size:20px;"></i>Height  ${Product.pile} MM</span>` : ''}
                ${Product.stitches > 0 ? `<span class="Product-detail"><i class="fa-solid fa-grip-lines" style="color:#0ea5a4; font-size:20px;"></i> ${Product.stitches} stitches</span>` : ''}
                ${Product.detex > 0 ? `<span class="Product-detail">🧵 ${Product.detex} Detex</span>` : ''}
                ${Product.gauge > "" ? `<span class="Product-detail">📐 ${Product.gauge} Gauge</span>` : ''}
                ${Product.feaOne > "" ? `<span class="Product-detail">${Product.feaOne}</span>` : ''}
                ${Product.feaTwo > "" ? `<span class="Product-detail">${Product.feaTwo}</span>` : ''}
                ${Product.feaThree > "" ? `<span class="Product-detail">${Product.feaThree}</span>` : ''}
                ${Product.feaFour > "" ? `<span class="Product-detail">${Product.feaFour}</span>` : ''}
            </div>
            <div class="Product-category">
                ${Product.categoryCard} 
                ${Product.unit > "" ? `<span class="Product-bad">${Product.unit}</span>` : ''}
            </div>
            <div class="Product-actions">
                <button class="btn btn-secondary" onclick="event.stopPropagation(); contactAgent(${Product.id})">
                    <i class="fab fa-whatsapp"></i> Shop Now
                </button> 
            </div>
        </div>
    </div>
    `).join('');
}

// Search products
function searchproducts() {
    const category = document.getElementById('category').value.toLowerCase();
    const ProductType = document.getElementById('ProductType').value;
    const listingType = document.getElementById('listingType').value;

    filteredProducts = products.filter(Product => {
        const matchescategory = !category || Product.category.toLowerCase().includes(category);
        const matchesType = !ProductType || Product.type === ProductType;
        const matchesListingType = !listingType || Product.listingType === listingType;

        return matchescategory && matchesType && matchesListingType;
    });

    displayProducts(filteredProducts, true);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Show Product details
function showProductDetails(ProductId) {
    const Product = products.find(p => p.id === ProductId);
    if (!Product) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${Product.title}</h2>
        <div class="Product-image">
            ${Product.listingType === 'best' || Product.listingType === 'special' 
                ? `<div class="Product-badge">
                     ${Product.listingType === 'best' ? 'Best Seller' : 'Special Offer'}
                   </div>` 
                : ''
            }
            <img src="${Product.image}" alt="${Product.title}">
        </div>
        <div class="Product-price" style="font-size: 2.5rem; margin: 1rem 0;">
            ${Product.price.toLocaleString()}${Product.listingType === 'special' ? ' EGP/خصم' : ' EGP'}
        </div>
        <div class="Product-category" style="font-size: 1.2rem; margin-bottom: 1rem;">
            ${Product.categoryCard}
            ${Product.unit > "" ? `<span class="Product-bad">${Product.unit}</span>` : ''}
            </div>
        <div class="Product-details" style="margin-bottom: 2rem; gap: 2rem;">
            ${Product.pile > 0 ? `<span class="Product-detail" style="font-size: 1.1rem;"><i class="fa-solid fa-ruler-vertical" style="color:#0ea5a4; font-size:20px;"></i>Height  ${Product.pile}MM</span>` : ''}
            ${Product.stitches > 0 ? `<span class="Product-detail" style="font-size: 1.1rem;"><i class="fa-solid fa-grip-lines" style="color:#0ea5a4; font-size:20px;"></i> ${Product.stitches}stitches</span>` : ''}
            ${Product.detex > 0 ? `<span class="Product-detail">🧵 ${Product.detex} Detex</span>` : ''}
            ${Product.gauge > "" ? `<span class="Product-detail">📐 ${Product.gauge} Gauge</span>` : ''}
            ${Product.feaOne > "" ? `<span class="Product-detail">${Product.feaOne}</span>` : ''}
            ${Product.feaTwo > "" ? `<span class="Product-detail">${Product.feaTwo}</span>` : ''}
            ${Product.feaThree > "" ? `<span class="Product-detail">${Product.feaThree}</span>` : ''}
            ${Product.feaFour > "" ? `<span class="Product-detail">${Product.feaFour}</span>` : ''}
        </div>

        <div style="margin-bottom: 2rem;">
            <h3>Description</h3>
            <p style="line-height: 1.6; color: #666;">${Product.description}</p>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3>Features And Usage</h3>
            <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
                ${Product.features.map(feature => `<li style="padding: 0.5rem; background: #f8f9fa; border-radius: 5px;">✅ ${feature}</li>`).join('')}
            </ul>
        </div>

        <div class="Product-actions" style="gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-secondary" style="flex: 1;" onclick="contactAgent(${Product.id})">
                <i class="fab fa-whatsapp"></i> Shop Now
            </button>
        </div>
    `;

    document.getElementById('ProductModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('ProductModal').style.display = 'none';
}

// Contact agent
function contactAgent(ProductId) {
  const Product = products.find(p => p.id === ProductId);
  if (!Product) {
    alert("المنتج غير موجود 🚫");
    return;
  }

  const phone = Product.whatsapp.replace(/\D/g, ""); // نتأكد انه رقم بس  

  // نجيب الباث الحالي (سواء الصفحة الرئيسية أو صفحة منتجات)
  const currentPath = window.location.pathname;

  let ProductUrl;

  // لو في الصفحة الرئيسية
  if (currentPath === "/" || currentPath === "/index.html") {
    ProductUrl = `${window.location.origin}/#Product-${ProductId}`;
  } 
  // لو في أي صفحة تحت /links/products/
  else if (currentPath.startsWith("/links/products/")) {
    const currentPage = currentPath.split("/").pop(); // page2 أو page3
    ProductUrl = `${window.location.origin}/links/products/${currentPage}#Product-${ProductId}`;
  } 
  // fallback
  else {
    ProductUrl = `${window.location.origin}/#Product-${ProductId}`;
  }

  const message = `Hello 👋
أنا مهتم بالمنتج:
"${Product.title}"

📂 Category: ${Product.category}
🧵 Detex: ${Product.detex || '-'}
📏 Pile: ${Product.pile || '-'} MM / #️⃣ ${Product.stitches?.toLocaleString() || '-'} stit
🏷️ كود المنتج: ${Product.id}
💰 السعر: ${Product.price.toLocaleString()} ج.م

🖼️ صورة المنتج:
${window.location.origin}/${Product.image}

🌐 رابط المنتج:
${ProductUrl}`;

  // فتح واتساب
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/*
// Contact agent
function contactAgent(ProductId) {
  const Product = products.find(p => p.id === ProductId);
  if (!Product) {
    alert("المنتج غير موجود 🚫");
    return;
  }

  const phone = Product.whatsapp.replace(/\D/g, ""); // نتأكد انه رقم بس  

  // نجيب الباث الحالي
  const currentPath = window.location.pathname;

  let ProductUrl;

  // لو المستخدم في صفحة products.html
  if (currentPath.includes("products.html")) {
    ProductUrl = `${window.location.origin}/links/products.html#Product-${ProductId}`;
  } 
  // لو المستخدم في أي صفحة داخل /pages/
  else if (currentPath.includes("/pages/")) {
    const currentPage = currentPath.split("/").pop(); // يجيب اسم الصفحة زي page1.html
    ProductUrl = `${window.location.origin}/links/pages/${currentPage}#Product-${ProductId}`;
  } 
  // fallback (لو في أي مكان تاني)
  else {
    ProductUrl = `${window.location.origin}/links/products.html#Product-${ProductId}`;
  }

  const message = `Hello 👋
أنا مهتم بالمنتج:
"${Product.title}"

📂 Category: ${Product.category}
🧵 Detex: ${Product.detex || '-'}
📏 Pile: ${Product.pile || '-'} MM / #️⃣ ${Product.stitches?.toLocaleString() || '-'} stit
🏷️ كود المنتج: ${Product.id}
💰 السعر: ${Product.price.toLocaleString()} ج.م

🖼️ صورة المنتج:
${window.location.origin}/${Product.image}

🌐 رابط المنتج:
${ProductUrl}`;

  // فتح واتساب
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
*/
/*
// Contact agent
function contactAgent(ProductId) {
  const Product = products.find(p => p.id === ProductId);
  if (!Product) {
    alert("المنتج غير موجود 🚫");
    return;
  }

  const phone = Product.whatsapp.replace(/\D/g, ""); // نتأكد انه رقم بس  

  // رابط صفحة الإعلان (ممكن يتعدل حسب مكان الملف)
  const ProductUrl = `${window.category.origin}/links/products.html#Product-${ProductId}`;

  const message = `Hello 👋
أنا مهتم بالمنتج:
"${Product.title}"

 category: ${Product.category}
🧵 detex: ${Product.detex} detex
📏 pile: ${Product.pile} MM / #️⃣ ${Product.stitches.toLocaleString()} stit
🏷️ كود المنتج: ${Product.id}
💰 السعر: ${Product.price.toLocaleString()} ج.م

🖼️ صورة المنتج:
${window.category.origin}/${Product.image}

🌐 رابط الإعلان:
${ProductUrl}`;

  // فتح واتساب
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}        
     */
// Save Product
function saveProduct(ProductId) {
    const Product = products.find(p => p.id === ProductId);
    alert(`Product "${Product.title}" has been saved to your favorites!\n\nYou can view your saved products in your account dashboard.`);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('ProductModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    searchproducts();
});

// Animate numbers in stats
function animateNumber(element) {
    const target = element.textContent;
    const number = parseInt(target.replace(/[^\d]/g, ''));
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + (target.includes('+') ? '+' : '') + (target.includes('/') ? '/7' : '');
        }
    }, 16);
}

// Add Product (for demo purposes - would connect to backend in real app)
function addProduct() {
    alert('Add Product feature would connect to a Product submission form and admin panel in a real application.');
}

// Advanced search toggle
function toggleAdvancedSearch() {
    const filterSection = document.querySelector('.filter-section');
    if (filterSection.style.display === 'none') {
        filterSection.style.display = 'block';
        filterSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        filterSection.style.display = 'none';
    }
}

// Product comparison feature
let comparisonList = [];

function addToComparison(ProductId) {
    if (comparisonList.length >= 3) {
        alert('You can compare up to 3 products at a time.');
        return;
    }
    
    if (!comparisonList.includes(ProductId)) {
        comparisonList.push(ProductId);
        alert(`Product added to comparison (${comparisonList.length}/3)`);
    }
}

function showComparison() {
    if (comparisonList.length < 2) {
        alert('Please add at least 2 products to compare.');
        return;
    }
    
    const compareproducts = products.filter(p => comparisonList.includes(p.id));
    let comparisonHTML = '<h2>Product Comparison</h2><div style="overflow-x: auto;"><table style="width: 100%; border-collapse: collapse; margin: 1rem 0;"><thead><tr><th style="padding: 1rem; border: 1px solid #ddd; background: #f8f9fa;">Feature</th>';
    
    compareproducts.forEach(Product => {
        comparisonHTML += `<th style="padding: 1rem; border: 1px solid #ddd; background: #f8f9fa;">${Product.title}</th>`;
    });
    
    comparisonHTML += '</tr></thead><tbody>';
    
    const features = ['price', 'type', 'category', 'pile', 'stitches', 'detex'];
    features.forEach(feature => {
        comparisonHTML += `<tr><td style="padding: 1rem; border: 1px solid #ddd; font-weight: bold;">${feature.charAt(0).toUpperCase() + feature.slice(1)}</td>`;
        compareproducts.forEach(Product => {
            let value = Product[feature];
            if (feature === 'price') {
                value = `${value.toLocaleString()}${Product.listingType === 'rent' ? '/mo' : ''}`;
            } else if (feature === 'detex') {
                value = `${value} sqft`;
            }
            comparisonHTML += `<td style="padding: 1rem; border: 1px solid #ddd;">${value}</td>`;
        });
        comparisonHTML += '</tr>';
    });
    
    comparisonHTML += '</tbody></table></div><button class="btn btn-primary" onclick="closeModal(); comparisonList = [];">Clear Comparison</button>';
    
    document.getElementById('modalContent').innerHTML = comparisonHTML;
    document.getElementById('ProductModal').style.display = 'block';
}

// Newsletter signup
function subscribeNewsletter() {
    const email = prompt('Enter your email address to receive Product updates:');
    if (email && email.includes('@')) {
        alert(`Thank you! You've been subscribed to our newsletter at ${email}`);
    } else if (email) {
        alert('Please enter a valid email address.');
    }
}

// Mortgage calculator
function openMortgageCalculator(ProductPrice = null) {
    const price = ProductPrice || prompt('Enter Product price ($):');
    if (!price) return;
    
    const downPayment = prompt('Enter down payment percentage (e.g., 20):') || 20;
    const interestRate = prompt('Enter interest rate percentage (e.g., 3.5):') || 3.5;
    const loanTerm = prompt('Enter loan term in years (e.g., 30):') || 30;
    
    const principal = price * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const calculatorHTML = `
        <h2>Mortgage Calculator</h2>
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
            <p><strong>Product Price:</strong> ${parseInt(price).toLocaleString()}</p>
            <p><strong>Down Payment:</strong> ${downPayment}% (${(price * downPayment / 100).toLocaleString()})</p>
            <p><strong>Loan Amount:</strong> ${principal.toLocaleString()}</p>
            <p><strong>Interest Rate:</strong> ${interestRate}%</p>
            <p><strong>Loan Term:</strong> ${loanTerm} years</p>
        </div>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 10px; text-align: center;">
            <h3>Monthly Payment: ${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</h3>
        </div>
        <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
            *This is an estimate. Actual payments may vary based on taxes, insurance, and other factors.
        </p>
    `;
    
    document.getElementById('modalContent').innerHTML = calculatorHTML;
    document.getElementById('ProductModal').style.display = 'block';
}

/*
// كائن لتتبع عدد الضغطات على الأزرار لكل منتج
const clickTracker = {};

// دالة استدعاء عند الضغط على زر المنتج
function contactAgent(productId) {
    // لو المنتج لسه مش موجود في الكائن، نهيّأه بـ 0
    if (!clickTracker[productId]) {
        clickTracker[productId] = 0;
    }
    // نزود العداد
    clickTracker[productId]++;

    // 🔽 هنا تقدر تنفذ أي أكشن إضافي (فتح واتساب مثلًا)
    const product = products.find(p => p.id === productId);
    if (product && product.whatsapp) {
        const whatsappUrl = `https://wa.me/${product.whatsapp}?text=Hello, I'm interested in ${product.title}`;
        window.open(whatsappUrl, '_blank');
    }

    // Console للتجربة فقط
    console.log(`Product ${productId} clicked ${clickTracker[productId]} times`);
}
    */
/*
// Sample Products data
const products = [
    {
        id: 1,
        title: "Artificial Turf 6MM",
        price: 150,
        type: "landscape",
        listingType: "best",
        category: "🌿 Artificial Turf",
        pile: 6,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "هل محتاج لمسة خضار بسيطة؟ الحل الأمثل ديكورات داخلية أو تصميمات مؤقتة.",
        features:  ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي"],
        image: "links/media/photo/landscape/landscape6mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 2,
        title: "Artificial Turf 9MM",
        price: 170,
        type: "landscape",
        listingType: "special",
        category: "🌿 Artificial Turf",
        pile: 9,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "مناسب للديكور الداخلي والبلكونات الخفيفة، يوفر مظهر ناعم بلمسة بسيطة ومن غير تكلفة عالية",
        features:  ["شكل جمالي بدون تكلفة", "سهل التنظيف والتركيب", "ديكور داخلي", "ممرات", "خلفيات تصوير"],
        image: "links/media/photo/landscape/landscape6mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 3,
        title: "Artificial Turf 11MM",
        price: 190,
        type: "landscape",
        listingType: "best",
        category: "🌿 Artificial Turf",
        pile: 11,
        stitches: 25000,
        detex: 8000,
        gauge: "3/16",
        description: "النجيل الصناعي اللي بيوازن بين الشكل والسعر، مثالي للناس اللي بتدور على خيار ديكوري اقتصادي",
        features:  ["سهل التنظيف والتركيب", "ديكور داخلي", "ممرات", "خلفيات تصوير", "مناطق عرض", "مداخل داخلية"],
        image: "links/media/photo/landscape/landscape6mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 4,
        title: "Artificial Turf 20MM",
        price: 200,
        type: "landscape",
        listingType: "best",
        category: "🌿 Artificial Turf",
        pile: 20,
        stitches: 12000,
        detex: 7000,
        gauge: "3/8",
        description: "أول خطوة في عالم اللاندسكيب الحقيقي، بيقدملك منظر طبيعي مع إحساس بسيط بالملمس",
        features:  ["أسطح", "سهل التنظيف والتركيب", "شرفات ", "حدائق خفيفة"],
        image: "links/media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 5,
        title: "Artificial Turf 20MM",
        price: 220,
        type: "landscape",
        listingType: "best",
        category: "🌿 Artificial Turf",
        pile: 20,
        stitches: 16000,
        detex: 7000,
        gauge: "3/8",
        description: "أول خطوة في عالم اللاندسكيب الحقيقي، بيقدملك منظر طبيعي مع إحساس بسيط بالملمس",
        features:  ["أسطح", "سهل التنظيف والتركيب", "شرفات ", "حدائق خفيفة"],
        image: "links/media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    },
    {
        id: 6,
        title: "Artificial Turf 20MM",
        price: 250,
        type: "football",
        listingType: "best",
        category: "🌿 Artificial Turf",
        pile: 20,
        stitches: 24000,
        detex: 7000,
        gauge: "3/8",
        description: "أول خطوة في عالم اللاندسكيب الحقيقي، بيقدملك منظر طبيعي مع إحساس بسيط بالملمس",
        features:  ["أسطح", "سهل التنظيف والتركيب", "شرفات ", "حدائق خفيفة"],
        image: "links/media/photo/landscape/landscape20mm.png",
        whatsapp: "201094732106"
    }
];

let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 50;

// Display products with pagination
function displayProducts(productsToShow = filteredProducts, reset = false) {
    const grid = document.getElementById('productsGrid');
    
    if (reset) {
        currentPage = 1;
        grid.innerHTML = '';
    }
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<div style="text-align: center; grid-column: 1/-1; padding: 2rem;"><h3>No Products found matching your criteria</h3><p>Try adjusting your search filters</p></div>';
        hideShowMoreButton();
        return;
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentproducts = productsToShow.slice(0, endIndex);

    grid.innerHTML = currentproducts.map(Product => `
        <div class="Products-card" id="Product-${Product.id}" onclick="showProductDetails(${Product.id})">
            <div class="Product-image">
                <div class="Product-badge">${Product.listingType === 'best' ? 'Best Seller' : "" }</div>
                <img src="${Product.image}" alt="${Product.title}">
            </div>
            <div class="Product-content">
                <div class="Product-price">
                    ${Product.price.toLocaleString()}${Product.listingType === 'special' ? ' EGP/خصم' : 'EGP'} 
                </div>
                <h3 class="Product-title">${Product.title}</h3>
                <div class="Product-details">
                    ${Product.pile > 0 ? `<span class="Product-detail"><i class="fa-solid fa-ruler-vertical" style="color:#0ea5a4; font-size:20px;"></i> ${Product.pile} MM</span>` : ''}
                    ${Product.stitches > 0 ? `<span class="Product-detail"><i class="fa-solid fa-grip-lines" style="color:#0ea5a4; font-size:20px;"></i> ${Product.stitches} Stit</span>` : ''}
                    <span class="Product-detail">🧵 ${Product.detex} Detex</span>
                    <span class="Product-detail">📐 ${Product.gauge} Gauge</span>
                </div>
                <div class="Product-category">${Product.category}</div>
                <div class="Product-actions">
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); contactAgent(${Product.id})">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Show or hide "Show More" button
    if (endIndex >= productsToShow.length) {
        hideShowMoreButton();
    } else {
        showShowMoreButton();
    }
}
*/
/*
// Apply filters
function applyFilters() {
    const pile = parseInt(document.getElementById('pile').value) || 0;
    const stitches = parseInt(document.getElementById('stitches').value) || 0;
    const detex = parseFloat(document.getElementById('detex').value) || 0;
    const gauge = parseFloat(document.getElementById('gauge').value) || 0;

    // Filter
    let filtered = filteredProducts.filter(Product => {
        const matchespile = pile === 0 || Product.pile >= pile;
        const matchesstitches = stitches === 0 || Product.stitches >= stitches;
        const matchesDetex = detex === 0 || Product.detex >= detex;
        const matchesGauge = gauge === 0 || Product.gauge >= gauge;

        return matchespile && matchesstitches && matchesDetex && matchesGauge;
    });

    filteredProducts = filtered;
    displayProducts(filteredProducts, true);
}
*/
