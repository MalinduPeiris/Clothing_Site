let items = [
    { id: 1, name: "Basic White T-Shirt", category: "shirts", price: 1800, qty: 15, imgLocation: "assets/img/shirt.png" },
    { id: 2, name: "Girl's Casual White Tee", category: "shirts", price: 1700, qty: 20, imgLocation: "assets/img/shirt1.png" },
    { id: 3, name: "Black Graphic Tee", category: "shirts", price: 2200, qty: 18, imgLocation: "assets/img/shirt2.png" },
    { id: 4, name: "Navy Printed Shirt", category: "shirts", price: 3500, qty: 12, imgLocation: "assets/img/shirt3.png" },
    { id: 5, name: "Light Blue Formal Shirt", category: "shirts", price: 3600, qty: 10, imgLocation: "assets/img/shirt4.png" },
    { id: 6, name: "Men's Office Shirt", category: "shirts", price: 3800, qty: 14, imgLocation: "assets/img/shirt5.png" },
    { id: 7, name: "White Polo Shirt", category: "shirts", price: 2500, qty: 20, imgLocation: "assets/img/shirt6.png" },
    { id: 8, name: "Casual Oversized Tees", category: "shirts", price: 2900, qty: 22, imgLocation: "assets/img/shirt7.png" },
    { id: 9, name: "Blue Linen Shirt", category: "shirts", price: 4200, qty: 8, imgLocation: "assets/img/shirt8.png" },
    { id: 10, name: "Men's Casual Pack Shirts", category: "shirts", price: 4500, qty: 10, imgLocation: "assets/img/shirt9.png" },
    { id: 11, name: "Beige Printed Tee", category: "shirts", price: 2000, qty: 18, imgLocation: "assets/img/shirt10.png" },

    { id: 12, name: "Ladies Denim Jeans", category: "pants", price: 4200, qty: 14, imgLocation: "assets/img/pant1.png" },
    { id: 13, name: "Orange Cargo Pants", category: "pants", price: 3800, qty: 12, imgLocation: "assets/img/pant2.png" },
    { id: 14, name: "Men's Slim Fit Jeans", category: "pants", price: 3500, qty: 15, imgLocation: "assets/img/pant3.png" },
    { id: 15, name: "Black Formal Pants", category: "pants", price: 3200, qty: 20, imgLocation: "assets/img/pant4.png" },
    { id: 16, name: "Black Skinny Jeans", category: "pants", price: 3900, qty: 10, imgLocation: "assets/img/pant6.png" },
    { id: 17, name: "Blue Slim Fit Jeans", category: "pants", price: 4100, qty: 9, imgLocation: "assets/img/pant7.png" },
    { id: 18, name: "Khaki Jogger Pants", category: "pants", price: 2800, qty: 16, imgLocation: "assets/img/pant8.png" },
    { id: 19, name: "Beige Chino Pants", category: "pants", price: 3000, qty: 10, imgLocation: "assets/img/linen denim.png" },

    { id: 20, name: "Classic Denim Jacket", category: "shirts", price: 5500, qty: 8, imgLocation: "assets/img/denim jacket.png" },

    { id: 21, name: "Brown Leather Belt", category: "accessories", price: 1500, qty: 30, imgLocation: "assets/img/belt1.png" },
    { id: 22, name: "Woven Fabric Belt", category: "accessories", price: 1400, qty: 25, imgLocation: "assets/img/belt2.png" },
    { id: 23, name: "Blue Leather Belt", category: "accessories", price: 1600, qty: 20, imgLocation: "assets/img/belt3.png" },
    { id: 24, name: "Dual Layer Leather Belt", category: "accessories", price: 1800, qty: 12, imgLocation: "assets/img/belt4.png" },
    { id: 25, name: "Vintage Brown Belt", category: "accessories", price: 1700, qty: 18, imgLocation: "assets/img/belt5.png" }
];


let cartItemsArray=[];


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

function setCartStructure(){
    let cartItemsCountEle = document.getElementById("cartItemsCount");
    let cartItemsCount = cartItemsCountEle.innerText;
    let newCount = cartItemsCount;
    cartItemsCountEle.innerText = ++newCount;

    let rightMainDiv = document.getElementById("rightMainDiv"); 
    
    rightMainDiv.innerHTML="";
    rightMainDiv.innerHTML=`
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
                                <div class="d-flex ">
                                    <p class="cartCardPTag" id="card${index}ColorBtn">Colour : </p>
                                    <button class="selectedColur mx-lg-2" id="selectedColur${index}"></button>
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

let subTot=0;
let netPrice=0;
function calculateTotal(){
    let total=0;
    subTot=0;
    for (let index = 0; index < cartItemsArray.length; index++) {
        let cardElement=document.getElementById(`itemCountCard${index}`)
        let cardElementValue=cardElement.innerText;

        total+=cartItemsArray[index].price*cardElementValue;
        console.log(total);
        
    }
    document.getElementById("rightTotalValue").innerText="Rs."+total+".00";
    document.getElementById("cashOnDeliveryValue").innerText="Rs.350.00";

    subTot+=total;
    subTot+=350;//Cod price

    setTaxToTotal(total);
}

function setTaxToTotal(total){
    let tax=total*0.02;
    subTot+=tax;
    
    document.getElementById("TaxValueP").innerText="Rs."+tax+".00";
    document.getElementById("subtotalValueInRight").innerText="Rs."+subTot+".00";

    setDiscount();
}

function setDiscount(){
    let discountPrice=0;
    let discountPercentage=0;
    if(subTot>0 && subTot<=1500){
        discountPrice=subTot*0.03;
        discountPercentage=3;
    }else if(subTot>1500 && subTot<=3500){
        discountPrice=subTot*0.04;
        discountPercentage=4;
    }else if(subTot>3500 && subTot<=5500){
        discountPrice=subTot*0.06;
        discountPercentage=6;
    }else if(subTot>5500 && subTot<=7500){
        discountPrice=subTot*0.07;
        discountPercentage=7;
    }else if(subTot>7500 && subTot<=10000){
        discountPrice=subTot*0.09;
        discountPercentage=9;
    }else if(subTot>10000 && subTot<=15000){
        discountPrice=subTot*0.10;
        discountPercentage=10;
    }else if(subTot>15000 && subTot<=20000){
        discountPrice=subTot*0.12;
        discountPercentage=12;
    }else if(subTot>20000){
        discountPrice=subTot*0.15;
        discountPercentage=15;
    }

    netPrice=subTot-discountPrice;

    document.getElementById("appliedDiscount").innerText=` Applied ( ${discountPercentage}% )   : `;
    document.getElementById("discountedValue").innerText="Rs."+discountPrice+"";
    document.getElementById("rightNetPrice").innerText="Rs."+netPrice+"";
}

function increaseItm(index){
    let cardElement=document.getElementById(`itemCountCard${index}`)
    let cardElementValue=cardElement.innerText;
    cardElement.innerText=++cardElementValue;

    cardElementValue=cardElement.innerText;
    let itemTotal=cartItemsArray[index].price*cardElementValue;


    // subTot+=cartItemsArray[index].price;

    document.getElementById(`setPriceCard${index}`).innerText="Rs."+itemTotal+".00";

    calculateTotal();
    
}

function decreaseItm(index){
    let cardElement=document.getElementById(`itemCountCard${index}`)
    let cardElementValue=cardElement.innerText;
    cardElement.innerText=--cardElementValue;

    cardElementValue=cardElement.innerText;
    let itemTotal=cartItemsArray[index].price*cardElementValue;

    document.getElementById(`setPriceCard${index}`).innerText="Rs."+itemTotal+".00";

    calculateTotal();
}

function cancelItemBtn(index){
    cartItemsArray.splice(index,1);
    console.log("awa : ",index);
    setCartStructure();
 
    document.getElementById("cashOnDeliveryValue").innerText="Rs.0.00";
    document.getElementById("subtotalValueInRight").innerText="Rs.0.00";
    document.getElementById("appliedDiscount").innerText="";
    document.getElementById("discountedValue").innerText="Rs.0.00";
    document.getElementById("rightNetPrice").innerText="Rs.0.00";
}

function clearAllItemsInCart(){
    cartItemsArray=[];

    let rightMainDiv = document.getElementById("rightMainDiv");  
    rightMainDiv.innerHTML=`
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

    document.getElementById("rightTotalValue").innerText="Rs.0.00";
    document.getElementById("cashOnDeliveryValue").innerText="Rs.0.00";
    document.getElementById("TaxValueP").innerText="Rs.0.00";
    document.getElementById("subtotalValueInRight").innerText="Rs.0.00";
    document.getElementById("appliedDiscount").innerText="";
    document.getElementById("discountedValue").innerText="Rs.0.00";
    document.getElementById("rightNetPrice").innerText="Rs.0.00";
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

let orderModal = new bootstrap.Modal(document.getElementById("orderPopupModal"))
 
function orderItemsBtn(){
    if(cartItemsArray.length>0){
        let orderModal = new bootstrap.Modal(document.getElementById("orderPopupModal"));
        orderModal.show();


    }else{
        console.log("order No.......");
        
        Swal.fire({
            icon: "warning",
            title: "Oops.. Cart is empty!!",
            text: "Please add some items before ordering!!",
            footer: '<a href="index.html">Select Items</a>'
        });
    }
}
////////////////////////////////////////

let ordersArray=[];

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

    let newOrder = {
        customerName: name,
        phoneNumber1: phone1,
        phoneNumber2: phone2,
        address: address,
        cartItems: cartItemsArray,
        totalPrice: netPrice,
        orderTime: new Date().toLocaleString()
    };
    ordersArray.push(newOrder);
    
    console.log(ordersArray);
    
}







