let countForSeats = 1;

function chooseSeat() {
    document.getElementById('seats-to').style.display = 'block';
    let freeSeats = document.getElementsByClassName('.free');
    freeSeats.setAttribute(onclick, chooseThisOne());

    // Не совсем верно, надо пересмотреть
    function chooseThisOne() {
        Namespace.seatNumber = this.innerText;
        if (document.getElementById('one-way-ticket').checked === true) {
            document.getElementById('seats-to').style.display = 'none';
            payForRide();
        }
        else {
            document.getElementById('seats-from').style.display = 'block';
            Namespace.seatNumberBack = this.innerText;
            payForRide();
        }
    }
}