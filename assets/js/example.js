// ======================================================
//  FASHIONRACK POS – MAIN JS
// ======================================================

// Cart Array
let cart = [];

// Tax Rate (10%)
const TAX_RATE = 0.10;

// ======================================================
//  ADD ITEM TO CART
// ======================================================
function addToCart(name, price, img, size = "M", color = "Default") {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            name,
            price,
            img,
            qty: 1,
            size,
            color
        });
    }

    updateCartUI();
    updateTotals();
}

// ======================================================
//  REMOVE ITEM
// ======================================================
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartUI();
    updateTotals();
}

// ======================================================
//  CHANGE QTY
// ======================================================
function changeQty(name, action) {
    const item = cart.find(i => i.name === name);

    if (!item) return;

    if (action === "increase") {
        item.qty++;
    } else if (action === "decrease" && item.qty > 1) {
        item.qty--;
    }

    updateCartUI();
    updateTotals();
}

// ======================================================
//  CLEAR CART
// ======================================================
function clearCart() {
    cart = [];
    updateCartUI();
    updateTotals();
}

// ======================================================
//  UPDATE TOTALS
// ======================================================
function updateTotals() {
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    document.getElementById("subtotalTxt").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("taxTxt").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("totalTxt").innerText = `$${total.toFixed(2)}`;
}

// ======================================================
//  UPDATE CART UI
// ======================================================
function updateCartUI() {
    const container = document.getElementById("orderItems");
    container.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "order-item d-flex align-items-center p-3 mb-3 rounded shadow-sm";
        div.innerHTML = `
            <img src="${item.img}" class="order-item-img">

            <div class="ms-3 flex-grow-1">
                <h6 class="fw-semibold m-0">${item.name}</h6>
                <p class="text-muted small m-0">Size: ${item.size}, Color: ${item.color}</p>
                <p class="text-muted small mt-1">$${item.price.toFixed(2)}</p>
            </div>

            <div class="d-flex align-items-center gap-2">
                <button class="qty-btn" onclick="changeQty('${item.name}', 'decrease')">-</button>
                <span class="fw-bold">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty('${item.name}', 'increase')">+</button>
            </div>

            <p class="fw-bold ms-3">$${(item.price * item.qty).toFixed(2)}</p>

            <button class="btn p-0 ms-2 text-danger" onclick="removeItem('${item.name}')">
                <span class="material-symbols-outlined">close</span>
            </button>
        `;
        container.appendChild(div);
    });
}

// ======================================================
//  PAYMENT HANDLER
// ======================================================
function processPayment() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    alert("Payment successful!");
}

// ======================================================
//  PREVIEW RECEIPT
// ======================================================
function previewReceipt() {
    if (cart.length === 0) {
        alert("No items to preview!");
        return;
    }

    let receipt = "------ RECEIPT ------\n\n";

    cart.forEach(item => {
        receipt += `${item.name} (x${item.qty}) - $${(item.qty * item.price).toFixed(2)}\n`;
    });

    receipt += `\nSubtotal: ${document.getElementById("subtotalTxt").innerText}`;
    receipt += `\nTax: ${document.getElementById("taxTxt").innerText}`;
    receipt += `\nTotal: ${document.getElementById("totalTxt").innerText}`;
    alert(receipt);
}
