let finalPrice;
let cardDiscount;
let overallPrice;

function payForRide() {
    document.getElementById('seats-to').style.display = 'none';
    document.getElementById('seats-from').style.display = 'none';
    document.getElementById('payments').style.display = 'block';

    let count = 1;
    let priceForward = parseInt(Namespace.priceForward);
    let priceBack = parseInt(Namespace.priceBack);

    if (document.getElementById('one-way-trip').checked === true) {
        priceBack = parseInt(0);
    }

    console.log(priceForward);

    if (Namespace.promocode === '1000') {
        Namespace.promocodeDiscount = parseInt(-100); // размер скидки по промокоду
    }
    else {
        Namespace.promocodeDiscount = 0;
    }

    cardDiscount = Math.floor((1 - Namespace.discount) * 100);

    overallPrice = priceForward + priceBack;
    finalPrice = overallPrice * Namespace.discount + Namespace.promocodeDiscount;

    document.getElementById('bill').innerHTML = '<p>Сумма до скидок: ' + overallPrice + '&#8381;</p>\n' +
        '            <p>Скидка по промокоду: ' + Namespace.promocodeDiscount + '&#8381;</p>\n' +
        '            <p>Скидка по карте лояльности: ' + cardDiscount + '%</p>\n' +
        '            <p>Итоговая сумма: ' + finalPrice + '&#8381;</p>';
}

// Abstract Factory

class PaymentSystemFactory {
    bankSystem() {
        return new Bank();
    }

    mobileSystem() {
        return new Mobile();
    }

    yandexSystem() {
        return new Yandex();
    }

    /*paypalSystem() {
        return new Paypal();
    }*/
}

class Bank {
    getUserInfo() {
        let cardNum = document.getElementById('card-number').value;
        let cardDate = document.getElementById('card-date').value;
        let cardCode = document.getElementById('card-code').value;
        let cardUser = document.getElementById('card-user').value;
    }

    payTheBill() {
        // здесь данные передаются в банк и получается ответ
        document.getElementById('payments-bank').style.display = 'none';
        printTicket();
    }

    /*sendTicket() {
        document.getElementById('result').innerHTML = '<p>Заказ оплачен.</p>\n' +
            '        <p>Электронный билет отправлен на почту ' + Namespace.pass.passEmail + '.</p>\n' +
            '        <p>Также вы можете скачать билет: </p>';
        let ticketData = [
            Namespace.pass.passSurname,
            Namespace.pass.passName,
            Namespace.pass.passSecondName,
            Namespace.pass.passEmail,
            Namespace.pass.passPhone,
            Namespace.townFrom + ' > ' + Namespace.townTo,
            Namespace.date,
            Namespace.
        ];
        download(ticketData,'Zakaz','pdf');
    }*/
}

class Mobile {
    getUserInfo() {
        let phoneNum = document.getElementById('phone-number').value;
    }

    payTheBill() {
        // здесь данные передаются оператору связи и получается ответ
        document.getElementById('payments-mobile-1').style.display = 'none';
        printTicket();
    }
}

class Yandex {
    getUserInfo() {
        let yandexNum = document.getElementById('yandex-number').value;
    }

    payTheBill() {
        // здесь данные передаются в Яндекс.Деньги и получается ответ
        document.getElementById('payments-internet').style.display = 'none';
        printTicket();
    }
}

/*class Paypal {
    getUserInfo() {
        let paypalEmail = document.getElementById('paypal-email').value;
    }

    payTheBill() {
        // здесь данные передаются в PayPal и получается ответ
        document.getElementById('payments-internet').style.display = 'none';
    }
}*/

paymentSystemFactory = new PaymentSystemFactory();

bank = paymentSystemFactory.bankSystem();
mobile = paymentSystemFactory.mobileSystem();
yandex = paymentSystemFactory.yandexSystem();
// paypal = paymentSystemFactory.paypalSystem();

function openBank() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-bank').style.display = 'block';
}

function payByBank() {
    bank.getUserInfo();
    bank.payTheBill();
}

function openMobile() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-mobile-1').style.display = 'block';
}

function payByMobile() {
    mobile.getUserInfo();
    mobile.payTheBill();
}

function openYandex() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-internet').style.display = 'block';
}

function payByYandex() {
    yandex.getUserInfo();
    yandex.payTheBill();
}

/*function payByPayPal() {
    document.getElementById('payments').style.display = 'none';
    document.getElementById('payments-internet').style.display = 'block';

    paypal.getUserInfo();
    paypal.payTheBill()
}*/

function printTicket() {
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = '<p>Заказ оплачен.</p>\n' +
        '        <p>Электронный билет отправлен на почту ' + Namespace.pass.passEmail + '.</p>\n' +
        '<div id="ticket"></div>';

    if (document.getElementById('one-way-trip').checked === true) {
        document.getElementById('ticket').innerHTML = '<h2>Автобусный билет</h2>\n' +
            '<div id="ticket-forward">\n' +
            '    <p>' + Namespace.townFrom + ' > ' + Namespace.townTo + '</p>\n' +
            '    <p>' + Namespace.date + ' ' + Namespace.timeForward + '</p>\n' +
            '    <p>Место: ' + Namespace.seatNumber + '</p>\n' +
            '    <p>Информация о пассажире:</p>\n' +
            '    <p>' + Namespace.pass.passSurname + ' ' + Namespace.pass.passName + ' ' + Namespace.pass.passSecondName + '</p>\n' +
            '    <p>контактный телефон: ' + Namespace.pass.passPhone + '</p>\n' +
            '    <p>e-mail: ' + Namespace.pass.passEmail + '</p>\n' +
            '</div>\n' +
            '<hr/>\n' +
            '<p>Сумма до скидок: ' + overallPrice + '&#8381;</p>\n' +
            '<p>Скидка по промокоду: ' + Namespace.promocodeDiscount + '&#8381;</p>\n' +
            '<p>Скидка по карте лояльности: ' + cardDiscount + '%</p>\n' +
            '<p>Итого: ' + finalPrice + '&#8381;</p>';
    }
    else {
        document.getElementById('ticket').innerHTML = '<h2>Автобусный билет</h2>\n' +
            '<div id="ticket-forward">\n' +
            '    <p>' + Namespace.townFrom + ' > ' + Namespace.townTo + '</p>\n' +
            '    <p>' + Namespace.date + ' ' + Namespace.timeForward + '</p>\n' +
            '    <p>Место: ' + Namespace.seatNumber + '</p>\n' +
            '    <p>Информация о пассажире:</p>\n' +
            '    <p>' + Namespace.pass.passSurname + ' ' + Namespace.pass.passName + ' ' + Namespace.pass.passSecondName + '</p>\n' +
            '    <p>контактный телефон: ' + Namespace.pass.passPhone + '</p>\n' +
            '    <p>e-mail: ' + Namespace.pass.passEmail + '</p>\n' +
            '</div>\n' +
            '<hr/>\n' +
            '<div id="ticket-back">\n' +
            '    <p>' + Namespace.townTo + ' > ' + Namespace.townFrom + '</p>\n' +
            '    <p>' + Namespace.dateBack + ' ' + Namespace.timeBack + '</p>\n' +
            '    <p>Место: ' + Namespace.seatNumberBack + '</p>\n' +
            '    <p>Информация о пассажире:</p>\n' +
            '    <p>' + Namespace.pass.passSurname + ' ' + Namespace.pass.passName + ' ' + Namespace.pass.passSecondName + '</p>\n' +
            '    <p>контактный телефон: ' + Namespace.pass.passPhone + '</p>\n' +
            '    <p>e-mail: ' + Namespace.pass.passEmail + '</p>\n' +
            '</div>\n' +
            '<hr/>\n' +
            '<p>Сумма до скидок: ' + overallPrice + '&#8381;</p>\n' +
            '<p>Скидка по промокоду: ' + Namespace.promocodeDiscount + '&#8381;</p>\n' +
            '<p>Скидка по карте лояльности: ' + cardDiscount + '%</p>\n' +
            '<p>Итого: ' + finalPrice + '&#8381;</p>';
    }

    let ticketData = document.getElementById('ticket').innerText;
    download(ticketData,'Zakaz','pdf');
}

function download(data, filename, type) {
   let file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}