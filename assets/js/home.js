let items = [
    { id: 1, name: "Classic White Shirt", category: "shirts", price: "Rs. 2500", qty: 10, imgLocation: "assets/img/shirt1.png" },
    { id: 2, name: "Slim Fit Black Shirt", category: "shirts", price: "Rs. 2900", qty: 12, imgLocation: "assets/img/shirt2.png" },
    { id: 3, name: "Blue Denim Shirt", category: "shirts", price: "Rs. 3200", qty: 8, imgLocation: "assets/img/shirt3.png" },
    { id: 4, name: "Casual Green Shirt", category: "shirts", price: "Rs. 2300", qty: 15, imgLocation: "assets/img/shirt4.png" },
    { id: 5, name: "Printed Summer Shirt", category: "shirts", price: "Rs. 2600", qty: 20, imgLocation: "assets/img/shirt5.png" },

    { id: 6, name: "Dark Blue Jeans", category: "pants", price: "Rs. 3500", qty: 10, imgLocation: "assets/img/pant4.png" },
    { id: 7, name: "Slim Fit Black Jeans", category: "pants", price: "Rs. 3800", qty: 12, imgLocation: "assets/img/pant1.png" },
    { id: 8, name: "Grey Joggers", category: "pants", price: "Rs. 2200", qty: 18, imgLocation: "assets/img/pant2.png" },
    { id: 9, name: "Khaki Chinos", category: "pants", price: "Rs. 3000", qty: 14, imgLocation: "assets/img/pant3.png" },
    { id: 10, name: "Black Cargo Pants", category: "pants", price: "Rs. 3400", qty: 9, imgLocation: "assets/img/linen denim.png" },

    { id: 11, name: "Leather Belt", category: "accessories", price: "Rs. 1200", qty: 25, imgLocation: "assets/img/shirt6.png" },
    { id: 12, name: "Stylish Cap", category: "accessories", price: "Rs. 1100", qty: 30, imgLocation: "assets/img/shirt7.png" },
    { id: 13, name: "Wrist Watch", category: "accessories", price: "Rs. 4500", qty: 5, imgLocation: "assets/img/shirt8.png" },
    { id: 14, name: "Black Sunglasses", category: "accessories", price: "Rs. 1800", qty: 20, imgLocation: "assets/img/shirt9.png" },
    { id: 15, name: "Canvas Backpack", category: "accessories", price: "Rs. 3200", qty: 10, imgLocation: "assets/img/shirt10.png" },

    { id: 16, name: "Formal White Shirt", category: "shirts", price: "Rs. 2700", qty: 16, imgLocation: "assets/img/belt1.png" },
    { id: 17, name: "Light Blue Casual Shirt", category: "shirts", price: "Rs. 2400", qty: 22, imgLocation: "assets/img/belt2.png" },
    { id: 18, name: "Black Dress Pants", category: "pants", price: "Rs. 3600", qty: 11, imgLocation: "assets/img/belt3.png" },
    { id: 19, name: "Grey Office Pants", category: "pants", price: "Rs. 3300", qty: 13, imgLocation: "assets/img/belt4.png" },
    { id: 20, name: "Fashion Bracelet", category: "accessories", price: "Rs. 900", qty: 40, imgLocation: "assets/img/belt5.png" },

    { id: 21, name: "Striped Polo Shirt", category: "shirts", price: "Rs. 2100", qty: 18, imgLocation: "assets/img/denim jacket.png" },
    { id: 22, name: "Graphic Tee", category: "shirts", price: "Rs. 1500", qty: 35, imgLocation: "assets/img/pant6.png" },
    { id: 23, name: "Ripped Jeans", category: "pants", price: "Rs. 4000", qty: 9, imgLocation: "assets/img/pant7.png" },
    { id: 24, name: "Jogger Shorts", category: "pants", price: "Rs. 1900", qty: 20, imgLocation: "assets/img/pant8.png" },
    { id: 25, name: "Silver Chain", category: "accessories", price: "Rs. 1500", qty: 15, imgLocation: "assets/img/shirt.png" }
];

loadCollection();
function loadCollection() {
    let allProductCardGenerate = document.getElementById("allProductCardGenerate");
    allProductCardGenerate.innerHTML = "";  // clear first

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
                        <p class="text-muted">${items[index].price}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function addCartItem(arrayIndex) {
    console.log("index eka : ", arrayIndex);

    let cartItemsCountEle = document.getElementById("cartItemsCount");
    let cartItemsCount = cartItemsCountEle.innerText;
    let newCount = cartItemsCount;
    cartItemsCountEle.innerText = ++newCount;

    let rightMainDiv = document.getElementById("rightMainDiv");
    rightMainDiv.innerHTML += `
                        <div class="row mt-lg-4 addedProductCard">
                            <div class="col-3 mt-lg-0">
                                <img class="addedProductCardImg mt-lg-3" src="${items[arrayIndex].imgLocation}" alt="">
                            </div>

                            <div class="col-3 d-grid justify-content-start">
                                <h6 class="cartCardItemName mt-lg-3">${items[arrayIndex].name}</h6>
                                <p class="cartCardPTag mt-1" id="card${arrayIndex}SizeBtn">Size : Select</p>
                                <div class="d-flex ">
                                    <p class="cartCardPTag" id="card${arrayIndex}ColorBtn">Colour : </p>
                                    <button class="selectedColur mx-lg-2" id="selectedColur${arrayIndex}"></button>
                                </div>
                                <p class="cartCardPTag">${items[arrayIndex].price}</p>
                            </div>

                            <div class="col-lg-6 gap-2 ">

                                <div class="row d-flex mt-lg-3">
                                    <div class="col-lg-12 gap-2 d-flex">
                                        <h6 class="sizesTitle mt-lg-1">Sizes</h6>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'XS')">XS</button>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'S')">S</button>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'M')">M</button>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'L')">L</button>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'XL')">XL</button>
                                        <button class="rightSizesBtns" onclick="setSize(${arrayIndex},'XXl')">XXL</button>
                                    </div>
                                </div>

                                <div class="row mt-lg-3">
                                    <div class="col-lg-12 gap-2 d-flex">
                                        <h6 class="sizesTitle">Color</h6>
                                        <button class="rightColorBtns1" onclick="setColor(${arrayIndex},'Black')"></button>
                                        <button class="rightColorBtns2" onclick="setColor(${arrayIndex},'White')"></button>
                                        <button class="rightColorBtns3" onclick="setColor(${arrayIndex},'Red')"></button>
                                        <button class="rightColorBtns4" onclick="setColor(${arrayIndex},'Yellow')"></button>
                                        <button class="rightColorBtns5" onclick="setColor(${arrayIndex},'Aqua')"></button>
                                        <button class="rightColorBtns6" onclick="setColor(${arrayIndex},'DarkBlue')"></button>
                                    </div>
                                </div>

                                <div class="row mt-lg-1 mb-lg-4">
                                    <div class="col-lg-6 d-flex increaseDeDiv gap-3">
                                        <button class="decreaseItemCountBtn" onclick="decreaseItm(arrayIndex)" id="decreaseItmCount">
                                            <svg class="increaseItemCountSvg" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 640">
                                                <path
                                                    d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                                            </svg>
                                        </button>
                                        <p class="itemCount mt-lg-2" id="itemCountCard${arrayIndex}">1</p>
                                        <button class="increaseItemCountBtn" onclick="increaseItm(arrayIndex)" id="increaseItemCount">
                                            <svg class="increaseItemCountSvg" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 640">
                                                <path
                                                    d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="d-flex mt-lg-2 align-middle gap-2">
                                            <h6 class="mt-lg-1" id="setPriceCard${arrayIndex}"></h6>

                                            <button class="itemCancelBtn" >X</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
    
    `;

}

function setSize(index, size) {
    console.log(index + "   :   " + size);
    document.getElementById(`card${index}SizeBtn`).innerText = "Size : " + size;
}

function setColor(index, color) {
    console.log(index + "   :   " + color); 
    document.getElementById(`selectedColur${index}`).style.background = color;
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