const products = [
    { img: "assets/images/AudiR8.jpg", title: "Audi R8", desc: "High-performance, V10 luxury sports car, with a  sleek design, and advanced quattro all-wheel drive", price: "$230,000" },
    { img: "assets/images/AudiTT.jpg", title: "Audi TT", desc: "Stylish and sporty 2.0T compact coupe", price: "$55,000" },
    { img: "assets/images/BMWM3.jpg", title: "BMW M3", desc: "Precise handling and aggressive styling, twin-turbo inline-six", price: "$90,000" },
    { img: "assets/images/BMWM5.jpg", title: "BMW M5", desc: "Twin-turbo V8 engine, advanced all-wheel drive, and a refined yet aggressive design", price: "$120,000" },
    { img: "assets/images/MERCGT.jpg", title: "MERCEDES-AMG GT", desc: "Handcrafted twin-turbo V8 engine, striking design, and track-ready dynamics", price: "$300,000" },
    { img: "assets/images/MERCCLS.jpg", title: "MERCEDES-AMG CLS", desc: "Sleek four-door coupe that combines a powerful turbocharged engine, luxurious interior, and dynamic performance", price: "$90,000." },
    { img: "assets/images/PORCHE911.jpg", title: "PORSCHE 911", desc: "Legendary sports car known for its iconic design, rear-engine layout, and exceptional performance", price: "$120,000" },
    { img: "assets/images/MACAN.jpg", title: "PORSCHE MACAN", desc: "Compact luxury SUV that delivers sporty performance, a refined interior, and cutting-edge technology", price: "$85,000" },
    { img: "assets/images/COROLLA.jpg", title: "99' TOYOTA COROLLA", desc: "Reliable and fuel-efficient compact sedan, known for its durability, practicality, and easy maintenance", price: "$4,000" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4", "mb-4");
    productCard.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.desc}</p>
                <p class="card-price">${product.price}</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(productCard);
});
