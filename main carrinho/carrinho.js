

let selectedItems = new Set();
let totalCost = 0;

function toggleItem(itemId, itemPrice) {
    if (selectedItems.has(itemId)) {
        selectedItems.delete(itemId);
        totalCost -= itemPrice;
    } else {
        selectedItems.add(itemId);
        totalCost += itemPrice;
    }
    updateCart();
}

function updateCart() {
    document.getElementById('itensEscolhidos').textContent = selectedItems.size;
    document.getElementById('custoTotal').textContent = totalCost.toFixed(2);
}

