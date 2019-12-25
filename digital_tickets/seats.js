let countForSeats = 1;

function chooseSeat() {
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('seats-to').style.display = 'block';

    document.getElementById('info-to').innerHTML = '<p class="info-towns">' + Namespace.townFrom + ' > ' + Namespace.townTo + '</p>\n' +
        '            <p class="info-date-time">' + Namespace.date + ' ' + Namespace.timeForward + '</p>\n' +
        '            <p class="info-price">' + Namespace.priceForward + '</p>\n' +
        '            <p class="info-name">' + Namespace.pass.passSurname + ' ' + Namespace.pass.passName + ' ' + Namespace.pass.passSecondName + '</p>';

    $('.free').attr('onclick', 'chooseThisOne(this.innerText)');
}

function chooseThisOne(e) {
    if (countForSeats === 1) {
        Namespace.seatNumber = e;
        countForSeats++;
        checkIfReturn();
    }
    else if (countForSeats === 2) {
        Namespace.seatNumberBack = e;
        console.log('To: ' + Namespace.seatNumber);
        console.log('From: ' + Namespace.seatNumberBack);
        payForRide();
    }
}

function checkIfReturn() {
    if (document.getElementById('one-way-trip').checked === true) {
        payForRide();
    }
    else {
        document.getElementById('seats-to').style.display = 'none';
        document.getElementById('seats-from').style.display = 'block';

        document.getElementById('info-from').innerHTML = '<p class="info-towns">' + Namespace.townTo + ' > ' + Namespace.townFrom + '</p>\n' +
            '            <p class="info-date-time">' + Namespace.dateBack + ' ' + Namespace.timeBack + '</p>\n' +
            '            <p class="info-price">' + Namespace.priceBack + '</p>\n' +
            '            <p class="info-name">' + Namespace.pass.passSurname + ' ' + Namespace.pass.passName + ' ' + Namespace.pass.passSecondName + '</p>';
    }
}