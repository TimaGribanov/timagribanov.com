function insertPassInfo() {
    /*
    let passCard = document.getElementById('pass-card').value;
    let passSurname = document.getElementById('pass-surname').value;
    let passName = document.getElementById('passName').value;
    let passSecondName = document.getElementById('pas-second-name').value;
    let passEmail = document.getElementById('pass-email');
    let passPhone = document.getElementById('pass-phone');
    let passBirthdate = document.getElementById('pass-birthdate');
    let passSex = document.getElementById('pass-sex');
    let passCitizenship = document.getElementById('pass-citizenship');
    let passDocType = document.getElementById('pass-doc-type');
    let passDocNum = document.getElementById('pass-doc-num');
    */

    // Singleton
    const Passenger = {
        passCard: document.getElementById('pass-card').value,
        passSurname: document.getElementById('pass-surname').value,
        passName: document.getElementById('passName').value,
        passSecondName: document.getElementById('pas-second-name').value,
        passEmail: document.getElementById('pass-email').value,
        passPhone: document.getElementById('pass-phone').value,
        passBirthdate: document.getElementById('pass-birthdate').value,
        passSex: document.getElementById('pass-sex').value,
        passCitizenship: document.getElementById('pass-citizenship').value,
        passDocType: document.getElementById('pass-doc-type').value,
        passDocNum: document.getElementById('pass-doc-num').value,
        getPassenger() { return this }
    };

    Namespace.pass = Passenger.getPassenger();

    if (Namespace.pass.passCard === '0001') {
        Namespace.discount = 0.7; // часть цены со скидкой по карте
    }
    else {
        Namespace.discount = 1;
    }

    chooseSeat();
}