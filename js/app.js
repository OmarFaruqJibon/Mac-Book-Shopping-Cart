// set memory cost
function memmoryCost(inputId){
    const memoryPrice = document.getElementById('memory-price');
    if(inputId == 'primary-memory'){
        memoryPrice.innerText = 0;
        getTotalPrice();
        getDiscountPrice();
    }else{
        memoryPrice.innerText = 180;
        getTotalPrice();
        getDiscountPrice();
    }
}

// set storage cost
function storageCost(inputId){
    if(inputId == 'primary-storage'){
        const storagePrice = document.getElementById('storage-price');
        storagePrice.innerText = 0;
        getTotalPrice();
        getDiscountPrice();
    }
    else if(inputId == 'medium-storage'){
        const storagePrice = document.getElementById('storage-price');
        storagePrice.innerText = 100;
        getTotalPrice();
        getDiscountPrice();
    }
    else if(inputId == 'max-storage'){
        const storagePrice = document.getElementById('storage-price');
        storagePrice.innerText = 180;
        getTotalPrice();
        getDiscountPrice();
    }
}
// set delivery charge
function deleveryCosts(inputId) {

    if(inputId == 'primary-delivery'){
        const deleveryCharge = document.getElementById('delivery-charge');
        deleveryCharge.innerText = 0;
        getTotalPrice();
        getDiscountPrice();
    }else{
        const deleveryCharge = document.getElementById('delivery-charge');
        deleveryCharge.innerText = 20;
        getTotalPrice();
        getDiscountPrice();
    }
}

// calculate total cost
function getTotalPrice(){
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-price');
    const storagePrice = document.getElementById('storage-price');
    const deleveryCharge = document.getElementById('delivery-charge');

    const totalPrice = document.getElementById('total-price');
    
    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deleveryCharge.innerText);
}

// calculate discount price
function getDiscountPrice(){
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-price');
    const storagePrice = document.getElementById('storage-price');
    const deleveryCharge = document.getElementById('delivery-charge');

    const discountPrice = document.getElementById('discount-price');
    
    discountPrice.innerText = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deleveryCharge.innerText);
}


// Handle primary memory cost
document.getElementById('primary-memory').addEventListener('click', function(){
     memmoryCost('primary-memory');
});

// Handle extra memory cost
document.getElementById('extra-memory').addEventListener('click', function(){
    memmoryCost('extra-memory');
});

// Handle primary storage cost
document.getElementById('primary-storage').addEventListener('click', function(){
    storageCost('primary-storage');
});

// Handle medium storage cost
document.getElementById('medium-storage').addEventListener('click', function(){
    storageCost('medium-storage');
});

// Handle high storage cost
document.getElementById('max-storage').addEventListener('click', function(){
    storageCost('max-storage');
});

// Handle primary delevery charge
document.getElementById('primary-delivery').addEventListener('click', function(){
    deleveryCosts('primary-delivery');
});

// Handle fast delevery charge
document.getElementById('fast-delivery').addEventListener('click', function(){
    deleveryCosts('fast-delivery');
});

//Handle promo code 
document.getElementById('promo-code-btn').addEventListener('click', function(){
    const inputField = document.getElementById('code-input-field');
    const discountPrice = document.getElementById('discount-price');
    const promoCode = 'stevekaku';
    if(inputField.value == promoCode){
        const discount = (discountPrice.innerText * 20)/100;
        discountPrice.innerText = discountPrice.innerText - discount;
        inputField.value = '';
        document.getElementById('promo-code-btn').disabled=true;
    }else{
        alert('Wrong Promo Code. Please try again..');
    }
});