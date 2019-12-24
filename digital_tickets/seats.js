let countForSeats = 1;

function chooseSeat() {
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('seats-to').style.display = 'block';
    $('.free').attr('onclick', 'chooseThisOne(this.innerText)');
    // let freeSeat = document.getElementsByClassName('free');
    // freeSeat.addEventListener('onclick', 'chooseThisOne', false);

    /*let freeSeat = document.querySelectorAll('.categories li');
    freeSeat.forEach(function(el) {
        el.addEventListener('click', chooseThisOne, false);
    })*/
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
    }
}