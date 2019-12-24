let finalPrice;

function payForRide() {
    document.getElementById('seats-to').style.display = 'none';
    document.getElementById('seats-from').style.display = 'none';
    document.getElementById('payments').style.display = 'block';

    let count = 1;
    let priceForward = Namespace.priceForward;
    let priceBack = Namespace.priceBack;

    console.log('To: ' + priceForward);
    console.log('Back: ' + priceBack);

    if (Namespace.promocode === '1000') {
        Namespace.promocodeDiscount = 100; // размер скидки по промокоду
    }
    else {
        Namespace.promocodeDiscount = 0;
    }

    finalPrice = (priceForward + priceBack) * Namespace.discount - Namespace.promocodeDiscount;
}

// Chain of Responsibility

let PaymentSystem = function (billSize) {
    this.billSize = billSize;
    this.next = null;
};

PaymentSystem.prototype = {
    pay: function(amount) {
        this._payTheBill(finalPrice);
    },

    _payTheBill: function (finalPrice) {
        sendTicket();
    }
};

function payByBank() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-bank').style.display = 'block';
}

function payByMobile() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-mobile-1').style.display = 'block';
}

function payByInternet () {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-internet').style.display = 'block';
}