let items = [
    { id: 1, name: "Classic Brown Leather Belt", category: "Accessories", price: 1800, qty: 25, imgLocation: "assets/img/belt1.png" },
    { id: 2, name: "Woven Texture Belt", category: "Accessories", price: 1600, qty: 22, imgLocation: "assets/img/belt2.png" },
    { id: 3, name: "Midnight Blue Leather Belt", category: "Accessories", price: 2000, qty: 20, imgLocation: "assets/img/belt3.png" },
    { id: 4, name: "Vintage Buckle Belt", category: "Accessories", price: 2200, qty: 18, imgLocation: "assets/img/belt4.png" },

    { id: 5, name: "Ladies Elegant Sky Blue Bag", category: "Bags", price: 5300, qty: 12, imgLocation: "assets/img/LadiesBag1.png" },
    { id: 6, name: "Ladies Premium Red Handbag", category: "Bags", price: 5600, qty: 10, imgLocation: "assets/img/LadiesBag2.png" },
    { id: 7, name: "Ladies Black Luxe Bag", category: "Bags", price: 5800, qty: 14, imgLocation: "assets/img/LadiesBag3.png" },
    { id: 8, name: "Ladies Brown Designer Bag", category: "Bags", price: 6000, qty: 12, imgLocation: "assets/img/LadiesBag4.png" },
    { id: 9, name: "Ladies White Fashion Bag", category: "Bags", price: 4800, qty: 9, imgLocation: "assets/img/LadiesBag5.png" },

    { id: 10, name: "Men's Leather Messenger Bag", category: "Bags", price: 5400, qty: 18, imgLocation: "assets/img/mensBag1.png" },
    { id: 11, name: "Men's Urban Travel Bag", category: "Bags", price: 5000, qty: 16, imgLocation: "assets/img/mensBag2.png" },
    { id: 12, name: "Men's Black Carry Bag", category: "Bags", price: 5200, qty: 14, imgLocation: "assets/img/mensBag3.png" },
    { id: 13, name: "Men's Brown Crossbody Bag", category: "Bags", price: 4800, qty: 20, imgLocation: "assets/img/mensBag4.png" },

    { id: 14, name: "Ladies Light Denim Jeans", category: "Pants", price: 4500, qty: 15, imgLocation: "assets/img/pant1.png" },
    { id: 15, name: "Rust Orange Cargo Pants", category: "Pants", price: 4800, qty: 12, imgLocation: "assets/img/pant2.png" },
    { id: 16, name: "Men's Slim Denim Jeans", category: "Pants", price: 5200, qty: 14, imgLocation: "assets/img/pant3.png" },
    { id: 17, name: "Men's Black Tapered Pants", category: "Pants", price: 4000, qty: 10, imgLocation: "assets/img/pant4.png" },
    { id: 18, name: "Ladies Black Soft Shorts", category: "Pants", price: 3200, qty: 18, imgLocation: "assets/img/pant6.png" },
    { id: 19, name: "Men's Dark Blue Jeans", category: "Pants", price: 5500, qty: 8, imgLocation: "assets/img/pant7.png" },
    { id: 20, name: "Men's Khaki Jogger Pants", category: "Pants", price: 3800, qty: 16, imgLocation: "assets/img/pant8.png" },
    { id: 21, name: "Beige Linen Chino Pants", category: "Pants", price: 4300, qty: 10, imgLocation: "assets/img/linen denim.png" },

    { id: 22, name: "Minimalist White Tee", category: "Tops", price: 2500, qty: 20, imgLocation: "assets/img/shirt.png" },
    { id: 23, name: "Women's Casual White Tee", category: "Tops", price: 2300, qty: 20, imgLocation: "assets/img/shirt1.png" },
    { id: 24, name: "Black Graphic Street Tee", category: "Tops", price: 3000, qty: 18, imgLocation: "assets/img/shirt2.png" },
    { id: 25, name: "Navy Modern Outfit Shirt", category: "Tops", price: 4200, qty: 12, imgLocation: "assets/img/shirt3.png" },
    { id: 26, name: "Sky Blue Formal Shirt", category: "Tops", price: 4600, qty: 10, imgLocation: "assets/img/shirt4.png" },
    { id: 27, name: "White Office Shirt", category: "Tops", price: 3900, qty: 14, imgLocation: "assets/img/shirt5.png" },
    { id: 28, name: "Premium White Polo Shirt", category: "Tops", price: 3500, qty: 20, imgLocation: "assets/img/shirt6.png" },
    { id: 29, name: "Urban Beige Overshirt", category: "Tops", price: 4100, qty: 22, imgLocation: "assets/img/shirt7.png" },
    { id: 30, name: "Classic Blue Linen Shirt", category: "Tops", price: 4800, qty: 8, imgLocation: "assets/img/shirt8.png" },
    { id: 31, name: "Men's Casual Pack Shirt", category: "Tops", price: 4500, qty: 10, imgLocation: "assets/img/shirt9.png" },
    { id: 32, name: "Royal Blue Printed Tee", category: "Tops", price: 2900, qty: 18, imgLocation: "assets/img/shirt10.png" },
    { id: 33, name: "Classic Denim Jacket", category: "Tops", price: 5000, qty: 8, imgLocation: "assets/img/denim jacket.png" },

    { id: 34, name: "Sport Runner Shoes", category: "Shoes", price: 9000, qty: 15, imgLocation: "assets/img/shoe1.png" },
    { id: 35, name: "Grey Urban Sneakers", category: "Shoes", price: 9500, qty: 13, imgLocation: "assets/img/shoe2.png" },
    { id: 36, name: "Blue White Lifestyle Shoes", category: "Shoes", price: 8800, qty: 12, imgLocation: "assets/img/shoe3.png" },
    { id: 37, name: "Premium Silver Sneakers", category: "Shoes", price: 10500, qty: 10, imgLocation: "assets/img/shoe4.png" },
    { id: 38, name: "Black Sport Edition Shoes", category: "Shoes", price: 11000, qty: 14, imgLocation: "assets/img/shoe5.png" },
    { id: 39, name: "Black Classic Sneakers", category: "Shoes", price: 9400, qty: 16, imgLocation: "assets/img/shoe6.png" },
    { id: 40, name: "Brown Runner Sneakers", category: "Shoes", price: 9600, qty: 18, imgLocation: "assets/img/shoe7.png" },
    { id: 41, name: "Volt Green Running Shoes", category: "Shoes", price: 9800, qty: 20, imgLocation: "assets/img/shoe8.png" },
    { id: 42, name: "White Lightweight Shoes", category: "Shoes", price: 9000, qty: 20, imgLocation: "assets/img/shoe9.png" },
    { id: 43, name: "Red Canvas Shoes", category: "Shoes", price: 8500, qty: 20, imgLocation: "assets/img/shoe10.png" },
    { id: 44, name: "Red Performance Sneakers", category: "Shoes", price: 11500, qty: 18, imgLocation: "assets/img/shoe11.png" },

    { id: 45, name: "Classic Brown Frame Sunglasses", category: "Accessories", price: 3000, qty: 25, imgLocation: "assets/img/sunglass1.png" },
    { id: 46, name: "Retro Blue Sunglasses", category: "Accessories", price: 3200, qty: 20, imgLocation: "assets/img/sunglass2.png" },
    { id: 47, name: "Premium Black Shades", category: "Accessories", price: 3500, qty: 22, imgLocation: "assets/img/sunglass3.png" },

    { id: 48, name: "Brown Premium Wallet", category: "Accessories", price: 2400, qty: 30, imgLocation: "assets/img/wallet1.png" },
    { id: 49, name: "Black Slim Wallet", category: "Accessories", price: 2600, qty: 28, imgLocation: "assets/img/wallet2.png" },
    { id: 50, name: "Tan Leather Wallet", category: "Accessories", price: 2000, qty: 24, imgLocation: "assets/img/wallet3.png" },
    { id: 51, name: "Blue Soft Wallet", category: "Accessories", price: 2200, qty: 18, imgLocation: "assets/img/wallet4.png" },
    { id: 52, name: "Minimalist Fold Wallet", category: "Accessories", price: 1900, qty: 26, imgLocation: "assets/img/wallet5.png" },
    { id: 53, name: "Dark Brown Luxury Wallet", category: "Accessories", price: 3000, qty: 15, imgLocation: "assets/img/wallet6.png" },

    { id: 54, name: "Classic Black Steel Watch", category: "Accessories", price: 4000, qty: 12, imgLocation: "assets/img/watch1.png" },
    { id: 55, name: "Premium Gold Watch", category: "Accessories", price: 3800, qty: 10, imgLocation: "assets/img/watch2.png" },
    { id: 56, name: "Dual Tone Modern Watch", category: "Accessories", price: 3500, qty: 9, imgLocation: "assets/img/watch3.png" },
    { id: 57, name: "Sport Pro Wristwatch", category: "Accessories", price: 3600, qty: 14, imgLocation: "assets/img/watch4.png" },
    { id: 58, name: "Leather Strap Vintage Watch", category: "Accessories", price: 3900, qty: 16, imgLocation: "assets/img/watch5.png" },
    { id: 59, name: "Minimalist Silver Watch", category: "Accessories", price: 3000, qty: 20, imgLocation: "assets/img/watch6.png" },
    { id: 60, name: "Chrono Edition Watch", category: "Accessories", price: 4000, qty: 8, imgLocation: "assets/img/watch7.png" }
];


let cartItemsArray = [];
let ordersArray = [];
let orderId = 0;
let subTot = 0;
let netPrice = 0;
let total = 0;


loadCollection();
function loadCollection() {
    let allProductCardGenerate = document.getElementById("allProductCardGenerate");
    allProductCardGenerate.innerHTML = "";

    for (let index = 0; index < items.length; index++) {

        allProductCardGenerate.innerHTML += `
            <div class="col-lg-3 mt-lg-4 col-sm-6">
                <div class="productCard">
                    <div>
                        <img class="productCardImages" src="${items[index].imgLocation}" alt="">
                    </div>
                    <div class="productAddBtnToCart">
                        <button onclick="addCartItem(${index})" class="btn btn-primary rounded-circle add-btn d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="mt-lg-4 mx-3">
                        <h6 class="fw-bold product-name">${items[index].name}</h6>
                        <p class="text-muted">Rs.${items[index].price}.00</p>
                        <p class="leftItemP">more left : ${items[index].qty}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function addCartItem(arrayIndex) {
    console.log("index eka : ", arrayIndex);

    cartItemsArray.push(items[arrayIndex]);
    setCartStructure();
}

function setCartStructure() {
    let cartItemsCountEle = document.getElementById("cartItemsCount");
    let cartItemsCount = cartItemsCountEle.innerText;
    let newCount = cartItemsCount;
    cartItemsCountEle.innerText = ++newCount;

    let rightMainDiv = document.getElementById("rightMainDiv");

    rightMainDiv.innerHTML = "";
    rightMainDiv.innerHTML = `
                        <div class="row mt-lg-4 d-flex justify-content-start border-bottom">
                            <div class="col-lg-9 d-flex">
                                <h3 class="currentOrderHeadCart">Current Order</h3>
                            </div>
                            <div class="col-lg-3 d-flex">

                                <button class="clearAllBtnCart" onclick="clearAllItemsInCart()">
                                    Clear All
                                </button>
                                <svg class="rightSideCartClearAllBtnSvg" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path
                                        d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" />
                                </svg>
                            </div>

                        </div>
    `;

    for (let index = 0; index < cartItemsArray.length; index++) {
        rightMainDiv.innerHTML += `
                        <div class="row mt-lg-4 addedProductCard">
                            <div class="col-3 mt-lg-0">
                                <img class="addedProductCardImg mt-lg-3" src="${cartItemsArray[index].imgLocation}" alt="">
                            </div>

                            <div class="col-3 d-grid justify-content-start">
                                <h6 class="cartCardItemName mt-lg-3">${cartItemsArray[index].name}</h6>
                                <p class="cartCardPTag mt-1" id="card${index}SizeBtn">Size : Select</p>
                                <p class="cartCardPTag mt-1" id="setSelectedSizeCorrect${index}" style="display: none;">0</p>
                                <div class="d-flex ">
                                    <p class="cartCardPTag" id="card${index}ColorBtn">Colour : </p>
                                    <button class="selectedColur mx-lg-2" id="selectedColur${index}"></button>
                                    <p class="cartCardPTag mt-1" id="setSelectedColorCorrect${index}" style="display: none;">0</p>
                                </div>
                                <p class="cartCardPTag">Rs.${cartItemsArray[index].price}</p>
                            </div>

                            <div class="col-lg-6 gap-2 ">

                                <div class="row d-flex mt-lg-3">
                                    <div class="col-lg-12 gap-2 d-flex">
                                        <h6 class="sizesTitle mt-lg-1">Sizes</h6>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'XS')">XS</button>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'S')">S</button>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'M')">M</button>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'L')">L</button>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'XL')">XL</button>
                                        <button class="rightSizesBtns" onclick="setSize(${index},'XXl')">XXL</button>
                                    </div>
                                </div>

                                <div class="row mt-lg-3">
                                    <div class="col-lg-12 gap-2 d-flex">
                                        <h6 class="sizesTitle">Color</h6>
                                        <button class="rightColorBtns1" onclick="setColor(${index},'Black')"></button>
                                        <button class="rightColorBtns2" onclick="setColor(${index},'White')"></button>
                                        <button class="rightColorBtns3" onclick="setColor(${index},'Red')"></button>
                                        <button class="rightColorBtns4" onclick="setColor(${index},'Yellow')"></button>
                                        <button class="rightColorBtns5" onclick="setColor(${index},'Aqua')"></button>
                                        <button class="rightColorBtns6" onclick="setColor(${index},'DarkBlue')"></button>
                                    </div>
                                </div>

                                <div class="row mt-lg-1 mb-lg-4">
                                    <div class="col-lg-6 d-flex increaseDeDiv gap-3">
                                        <button class="decreaseItemCountBtn" onclick="decreaseItm(${index})" id="decreaseItmCount${index}">
                                            <svg class="increaseItemCountSvg" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 640">
                                                <path
                                                    d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                                            </svg>
                                        </button>
                                        <p class="itemCount mt-lg-2" id="itemCountCard${index}">1</p>
                                        <button class="increaseItemCountBtn" onclick="increaseItm(${index})" id="increaseItemCount${index}">
                                            <svg class="increaseItemCountSvg" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 640">
                                                <path
                                                    d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="d-flex mt-lg-2 align-middle gap-2">
                                            <h6 class="mt-lg-1" id="setPriceCard${index}">Rs.${cartItemsArray[index].price}</h6>

                                            <button class="itemCancelBtn" onclick="cancelItemBtn(${index})" >X</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div> 
    
        `;
    }
    calculateTotal();
}


function calculateTotal() {
    total = 0;
    subTot = 0;
    for (let index = 0; index < cartItemsArray.length; index++) {
        let cardElement = document.getElementById(`itemCountCard${index}`)
        let cardElementValue = cardElement.innerText;

        total += cartItemsArray[index].price * cardElementValue;
        console.log(total);

    }
    document.getElementById("rightTotalValue").innerText = "Rs." + total + ".00";
    document.getElementById("cashOnDeliveryValue").innerText = "Rs.350.00";

    subTot += total;
    subTot += 350;//Cod price

    setTaxToTotal(total);
}

function setTaxToTotal(total) {
    let tax = total * 0.02;
    subTot += tax;

    document.getElementById("TaxValueP").innerText = "Rs." + tax + ".00";
    document.getElementById("subtotalValueInRight").innerText = "Rs." + subTot + ".00";

    setDiscount();
}

function setDiscount() {
    let discountPrice = 0;
    let discountPercentage = 0;
    if (subTot > 0 && subTot <= 1500) {
        discountPrice = subTot * 0.03;
        discountPercentage = 3;
    } else if (subTot > 1500 && subTot <= 3500) {
        discountPrice = subTot * 0.04;
        discountPercentage = 4;
    } else if (subTot > 3500 && subTot <= 5500) {
        discountPrice = subTot * 0.06;
        discountPercentage = 6;
    } else if (subTot > 5500 && subTot <= 7500) {
        discountPrice = subTot * 0.07;
        discountPercentage = 7;
    } else if (subTot > 7500 && subTot <= 10000) {
        discountPrice = subTot * 0.09;
        discountPercentage = 9;
    } else if (subTot > 10000 && subTot <= 15000) {
        discountPrice = subTot * 0.10;
        discountPercentage = 10;
    } else if (subTot > 15000 && subTot <= 20000) {
        discountPrice = subTot * 0.12;
        discountPercentage = 12;
    } else if (subTot > 20000) {
        discountPrice = subTot * 0.15;
        discountPercentage = 15;
    }

    netPrice = subTot - discountPrice;

    document.getElementById("appliedDiscount").innerText = ` Applied ( ${discountPercentage}% )   : `;
    document.getElementById("discountedValue").innerText = "Rs." + discountPrice + "";
    document.getElementById("rightNetPrice").innerText = "Rs." + netPrice + "";
}

function increaseItm(index) {
    let cardElement = document.getElementById(`itemCountCard${index}`)
    let cardElementValue = cardElement.innerText;

    if (cardElementValue < cartItemsArray[index].qty) {
        cardElement.innerText = ++cardElementValue;

        cardElementValue = cardElement.innerText;
        let itemTotal = cartItemsArray[index].price * cardElementValue;

        document.getElementById(`setPriceCard${index}`).innerText = "Rs." + itemTotal + ".00";

        calculateTotal();
    } else {
        Swal.fire("No more items available you added maximum items to your cart..");
    }
}

function decreaseItm(index) {
    let cardElement = document.getElementById(`itemCountCard${index}`)
    let cardElementValue = cardElement.innerText;
    if (cardElementValue > 1) {
        cardElement.innerText = --cardElementValue;

        cardElementValue = cardElement.innerText;
        let itemTotal = cartItemsArray[index].price * cardElementValue;

        document.getElementById(`setPriceCard${index}`).innerText = "Rs." + itemTotal + ".00";

        calculateTotal();
    } else {
        Swal.fire("Please delete Item From Cart..");
    }
}

function cancelItemBtn(index) {
    cartItemsArray.splice(index, 1);
    console.log("remove : ", index);

    setCartStructure();

    if (cartItemsArray.length == 0) {
        let rightMainDiv = document.getElementById("rightMainDiv");
        rightMainDiv.innerHTML = `
                        <div class="row mt-lg-4 d-flex justify-content-start border-bottom">
                            <div class="col-lg-9 d-flex">
                                <h3 class="currentOrderHeadCart">Current Order</h3>
                            </div>
                            <div class="col-lg-3 d-flex">

                                <button class="clearAllBtnCart" onclick="clearAllItemsInCart()">
                                    Clear All
                                </button>
                                <svg class="rightSideCartClearAllBtnSvg" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path
                                        d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" />
                                </svg>
                            </div>

                             <div class="row mt-5">
                            <div class="col-lg-12 mt-3">
                                <h2 class="noitmCartH">NoItems In Cart </h2>
                            </div>
                            <div class="col-lg-12 mt-3">
                                <img src="assets/img/empty-cart.png" class="emptyCart" alt="">
                            </div>
                        </div>

                        </div>
    `;
    }


    document.getElementById("cashOnDeliveryValue").innerText = "Rs.0.00";
    document.getElementById("subtotalValueInRight").innerText = "Rs.0.00";
    document.getElementById("appliedDiscount").innerText = "";
    document.getElementById("discountedValue").innerText = "Rs.0.00";
    document.getElementById("rightNetPrice").innerText = "Rs.0.00";
}

function clearAllItemsInCart() {
    if (cartItemsArray.length == 0) {
        Swal.fire({
            icon: "warning",
            title: "No Items In Cart..",
            text: ``
        });
    }

    cartItemsArray = [];

    let rightMainDiv = document.getElementById("rightMainDiv");
    rightMainDiv.innerHTML = `
                        <div class="row mt-lg-4 d-flex justify-content-start border-bottom">
                            <div class="col-lg-9 d-flex">
                                <h3 class="currentOrderHeadCart">Current Order</h3>
                            </div>
                            <div class="col-lg-3 d-flex">

                                <button class="clearAllBtnCart" onclick="clearAllItemsInCart()">
                                    Clear All
                                </button>
                                <svg class="rightSideCartClearAllBtnSvg" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path
                                        d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" />
                                </svg>
                            </div>

                             <div class="row mt-5">
                            <div class="col-lg-12 mt-3">
                                <h2 class="noitmCartH">NoItems In Cart </h2>
                            </div>
                            <div class="col-lg-12 mt-3">
                                <img src="assets/img/empty-cart.png" class="emptyCart" alt="">
                            </div>
                        </div>

                        </div>
    `;

    document.getElementById("rightTotalValue").innerText = "Rs.0.00";
    document.getElementById("cashOnDeliveryValue").innerText = "Rs.0.00";
    document.getElementById("TaxValueP").innerText = "Rs.0.00";
    document.getElementById("subtotalValueInRight").innerText = "Rs.0.00";
    document.getElementById("appliedDiscount").innerText = "";
    document.getElementById("discountedValue").innerText = "Rs.0.00";
    document.getElementById("rightNetPrice").innerText = "Rs.0.00";
}

function setSize(index, size) {
    console.log(index + "   :   " + size);
    document.getElementById(`card${index}SizeBtn`).innerText = "Size : " + size;
    document.getElementById(`setSelectedSizeCorrect${index}`).innerText = "1";
}

function setColor(index, color) {
    console.log(index + "   :   " + color);
    document.getElementById(`selectedColur${index}`).style.background = color;
    document.getElementById(`setSelectedColorCorrect${index}`).innerText = "1";
}

function showDiscountField() {
    document.getElementById("addDiscountBtn").style.display = "none";
    document.getElementById("addDiscountTxt").style.display = "grid";
}

function openCartItem() {
    let cartEle = document.getElementById("cartMsg");
    let cartMsg = cartEle.innerText;

    if (cartMsg === "closed") {
        document.getElementById("leftSideDivProductCard").classList = "col-lg-7 col-sm-2";
        cartEle.innerText = "opened";
        console.log("awa  : ", cartMsg);

        let rightMainDiv = document.getElementById("rightMainDiv");



        document.getElementById("rightMainDiv").style.display = "grid";
        document.getElementById("addedItemsTot2").style.display = "grid";

    } else {
        document.getElementById("leftSideDivProductCard").classList = "col-lg-12 col-sm-8";
        cartEle.innerText = "closed";
        console.log("na");
        document.getElementById("rightMainDiv").style.display = "none";
        document.getElementById("addedItemsTot2").style.display = "none";
    }

}



function orderItemsBtn() {
    if (cartItemsArray.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Oops.. Cart is empty!!",
            text: "Please add some items before ordering!!"
        });
        return
    }

    for (let index = 0; index < cartItemsArray.length; index++) {

        let eleSize = document.getElementById(`setSelectedSizeCorrect${index}`);
        let eleColor = document.getElementById(`setSelectedColorCorrect${index}`);

        let sizeValue = eleSize.innerText.trim();
        let colorValue = eleColor.innerText.trim();

        if (sizeValue === "0") {
            Swal.fire({
                icon: "warning",
                title: "Size Required",
                text: `Please select a SIZE for ${cartItemsArray[index].name} item !`
            });
            return;
        }
        if (colorValue === "0") {
            Swal.fire({
                icon: "warning",
                title: "Color Required",
                text: `Please select a COLOR for ${cartItemsArray[index].name} item !`
            });
            return;
        }
    }

    let orderModal = new bootstrap.Modal(document.getElementById("popupDisplayCusDetails"))
    orderModal.show();

}
////////////////////////////////////////



function addOrder() {
    let name = document.getElementById("customerName").value.trim();
    let phone1 = document.getElementById("phone1").value.trim();
    let phone2 = document.getElementById("phone2").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || phone1 === "" || address === "") {
        Swal.fire({
            icon: "error",
            title: "Missing Information",
            text: "Name, phone number and address are required."
        });
        return;
    }

    if (!/^07\d{8}$/.test(phone1)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Please enter a valid Sri Lankan mobile number (07XXXXXXXX)."
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "Your order has been successfully submitted.\nIf You Want You Can Canceled Your Order Within 24h",
        confirmButtonText: "OK"
    });

    let taxValue = total * 0.02;
    let discountPrice = 0;
    let discountPercentage = 0;
    if (subTot > 0 && subTot <= 1500) {
        discountPrice = subTot * 0.03;
        discountPercentage = 3;
    } else if (subTot > 1500 && subTot <= 3500) {
        discountPrice = subTot * 0.04;
        discountPercentage = 4;
    } else if (subTot > 3500 && subTot <= 5500) {
        discountPrice = subTot * 0.06;
        discountPercentage = 6;
    } else if (subTot > 5500 && subTot <= 7500) {
        discountPrice = subTot * 0.07;
        discountPercentage = 7;
    } else if (subTot > 7500 && subTot <= 10000) {
        discountPrice = subTot * 0.09;
        discountPercentage = 9;
    } else if (subTot > 10000 && subTot <= 15000) {
        discountPrice = subTot * 0.10;
        discountPercentage = 10;
    } else if (subTot > 15000 && subTot <= 20000) {
        discountPrice = subTot * 0.12;
        discountPercentage = 12;
    } else if (subTot > 20000) {
        discountPrice = subTot * 0.15;
        discountPercentage = 15;
    }

    let newOrder = {
        orderId: `Or#ID0${++orderId}`,
        customerName: name,
        phoneNumber1: phone1,
        phoneNumber2: phone2,
        address: address,
        cartItems: cartItemsArray,
        totalPrice: netPrice,
        taxPrice: taxValue,
        discountPercentage: discountPercentage,
        discountPrice: discountPrice,
        cod: 350.0,
        orderStatus: "Pending",
        orderTime: new Date().toLocaleString()
    };
    ordersArray.push(newOrder);
    console.log(ordersArray);


    let modal = bootstrap.Modal.getInstance(document.getElementById("popupDisplayCusDetails"));
    modal.hide();

    clearAllItemsInCart();
}

function filterBy(category) {
    let allProductCardGenerate = document.getElementById("allProductCardGenerate");
    allProductCardGenerate.innerHTML = "";

    if (category === "All") {
        loadCollection();
        return;
    }

    if (category === "New") {
        let start = items.length / 2;
        console.log("awaaaaaaa ");

        for (let index = 0; index < items.length; index++) {
            allProductCardGenerate.innerHTML += `
                <div class="col-lg-3 mt-lg-4 col-sm-6">
                    <div class="productCard">
                        <div>
                            <img class="productCardImages" src="${items[index].imgLocation}" alt="">
                        </div>
                        <div class="productAddBtnToCart">
                            <button onclick="addCartItem(${index})" class="btn btn-primary rounded-circle add-btn d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-lg-4 mx-3">
                            <h6 class="fw-bold product-name">${items[index].name}</h6>
                            <p class="text-muted">Rs.${items[index].price}.00</p>
                            <p class="leftItemP">more left : ${items[index].qty}</p>
                        </div>
                    </div>
                </div>
            `;
            return;
        }
    }


    for (let index = 0; index < items.length; index++) {
        console.log(category + "    :    " + items[index].category + " - " + items[index].name);

        if (category.trim() === items[index].category.trim()) {
            allProductCardGenerate.innerHTML += `
                <div class="col-lg-3 mt-lg-4 col-sm-6">
                    <div class="productCard">
                        <div>
                            <img class="productCardImages" src="${items[index].imgLocation}" alt="">
                        </div>
                        <div class="productAddBtnToCart">
                            <button onclick="addCartItem(${index})" class="btn btn-primary rounded-circle add-btn d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-lg-4 mx-3">
                            <h6 class="fw-bold product-name">${items[index].name}</h6>
                            <p class="text-muted">Rs.${items[index].price}.00</p>
                            <p class="leftItemP">more left : ${items[index].qty}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////My Orders Page//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function openMyOrdersPage() {
    document.getElementById("myOrdersPageDiv").style.display = "grid";
    document.getElementById("homePageDiv").style.display = "none";
    document.getElementById("navMyOrdersBtn").style.display = "none";
    loadAllMyOrdersInOrdersPage();

}

function loadHomePageFromMyOrders() {
    document.getElementById("myOrdersPageDiv").style.display = "none";
    document.getElementById("homePageDiv").style.display = "grid";
    document.getElementById("navMyOrdersBtn").style.display = "grid";
}

function loadAllMyOrdersInOrdersPage() {
    let structure = document.getElementById("ordersCardStructure");
    structure.innerHTML = "";
    if (ordersArray.length == 0) {
        structure.innerHTML = `
            <div class="container mt-lg-5" id="noOrdersMsg">
                <div class="row mt-lg-5" style="margin-top:50%;">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6 d-flex justify-content-center">
                        <h1 style="color: rgb(111, 112, 112); font-weight: 800;">No Orders</h1>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <img style="width: 20%;" src="assets/img/empty-cart.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        for (let index = 0; index < ordersArray.length; index++) {

            structure.innerHTML += `
                <div class="row mt-lg-5 myOrdersCards">
                    <div class="row mt-lg-4">
                        <div class="col-lg-6">
                            <p class="orderCardId">Order : ${ordersArray[index].orderId}</p>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-end">
                            <p class="orderCardId">Total : Rs.${ordersArray[index].totalPrice}.00</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <p class="orderCardDate">Date :${ordersArray[index].orderTime}</p>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-end">
                            <p class="orderCardStatus">${ordersArray[index].orderStatus}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <hr>
                        </div>
                    </div>

                    <div class="row mb-lg-3">
                        <div class="col-lg-7">
                            <div class="d-flex gap-2" id="cardImagesIf"  style="height: 100%;">
                                <img class="ordersCardImages1" id="image1Item${index}" src="assets/img/belt2.png" alt="">
                                <img class="ordersCardImages2" id="image2Item${index}" src="assets/img/denim jacket.png" alt="">
                                <img class="ordersCardImages3" id="image3Item${index}" src="assets/img/mensBag1.png" alt="">
                                <div class="card1MoreDivImg d-flex" id="set1ItemImg${index}">
                                    <p class="onemoreDivPTag mt-lg-3" id="set1ItemPTag${index}">+1 more</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 d-flex justify-content-end mt-lg-3">
                            <button class="viewDetailsBtn">View Details</button>
                        </div>
                    </div>
                </div>
            `;

            let cartItemLen = ordersArray[index].cartItems.length;
            if (cartItemLen == 1) {
                document.getElementById(`set1ItemImg${index}`).style.backgroundColor = "transparent";
                document.getElementById(`set1ItemImg${index}`).style.boxShadow = "none";
                document.getElementById(`set1ItemPTag${index}`).style.color = "transparent";//hide div eka
                document.getElementById(`image2Item${index}`).style.display = "none";//image 2 hide
                document.getElementById(`image3Item${index}`).style.display = "none";//image3 hide
                document.getElementById(`image1Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image1Item${index}`).src = ordersArray[index].cartItems[0].imgLocation;

            } else if (cartItemLen == 2) {
                document.getElementById(`set1ItemImg${index}`).style.backgroundColor = "transparent";
                document.getElementById(`set1ItemImg${index}`).style.boxShadow = "none";
                document.getElementById(`set1ItemPTag${index}`).style.color = "transparent";//hide div eka
                document.getElementById(`image2Item${index}`).style.display = "none";//image 2 hide
                document.getElementById(`image3Item${index}`).style.display = "none";//image3 hide
                document.getElementById(`image1Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image1Item${index}`).src = ordersArray[index].cartItems[0].imgLocation;
                document.getElementById(`image2Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image2Item${index}`).src = ordersArray[index].cartItems[1].imgLocation;

            } else if (cartItemLen == 3) {
                document.getElementById(`set1ItemImg${index}`).style.backgroundColor = "transparent";
                document.getElementById(`set1ItemImg${index}`).style.boxShadow = "none";
                document.getElementById(`set1ItemPTag${index}`).style.display = "none";//hide div eka
                document.getElementById(`image2Item${index}`).style.display = "none";//image 2 hide
                document.getElementById(`image3Item${index}`).style.display = "none";//image3 hide
                document.getElementById(`image1Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image1Item${index}`).src = ordersArray[index].cartItems[0].imgLocation;
                document.getElementById(`image2Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image2Item${index}`).src = ordersArray[index].cartItems[1].imgLocation;
                document.getElementById(`image3Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image3Item${index}`).src = ordersArray[index].cartItems[2].imgLocation;
            } else {
                document.getElementById(`set1ItemImg${index}`).style.backgroundColor = "rgb(199, 199, 199)";
                document.getElementById(`set1ItemImg${index}`).style.boxShadow = "grid";
                document.getElementById(`set1ItemPTag${index}`).style.display = "grid"; //show
                document.getElementById(`image2Item${index}`).style.display = "none";//image 2 hide
                document.getElementById(`image3Item${index}`).style.display = "none";//image3 hide
                document.getElementById(`image1Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image1Item${index}`).src = ordersArray[index].cartItems[0].imgLocation;
                document.getElementById(`image2Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image2Item${index}`).src = ordersArray[index].cartItems[1].imgLocation;
                document.getElementById(`image3Item${index}`).style.display = "grid";//show image 1
                document.getElementById(`image3Item${index}`).src = ordersArray[index].cartItems[2].imgLocation;

            }



        }
    }
}


// orderId:`Or#ID0${++orderId}`,
//         customerName: name,
//         phoneNumber1: phone1,
//         phoneNumber2: phone2,
//         address: address,
//         cartItems: cartItemsArray,
//         totalPrice: netPrice,
//         taxPrice:taxValue,
//         discountPercentage:discountPercentage,
//         discountPrice:discountPrice,
//         cod:350.0,
//         orderStatus:"Pending",
//         orderTime: new Date().toLocaleString()



