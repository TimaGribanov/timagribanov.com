// Façade

class System {
    getTripInfo() {
        getTripInfo()
    }

    sendTripData(e) {
        sendTripData(e)
    }

    insertPassInfo() {
        let passSurname = document.getElementById('pass-surname').value;
        let passName = document.getElementById('pass-name').value;
        let passEmail = document.getElementById('pass-email').value;
        let passPhone = document.getElementById('pass-phone').value;
        let passBirthdate = document.getElementById('pass-birthdate').value;
        let passSex = document.getElementById('pass-sex').value;
        let passCitizenship = document.getElementById('pass-citizenship').value;
        let passDocType = document.getElementById('pass-doc-type').value;
        let passDocNum = document.getElementById('pass-doc-num').value;
        if (passSurname && passName && passPhone && passEmail && passBirthdate && passCitizenship && passDocNum && passDocType && passSex) {
            insertPassInfo()
        }
        else {
            alert('Введите все необходимые данные!');
        }
    }

    openBank() {
        openBank()
    }

    openMobile() {
        openMobile()
    }

    openYandex() {
        openYandex()
    }

    payByBank() {
        let cardNum = document.getElementById('card-number').value;
        let cardDate = document.getElementById('card-date').value;
        let cardCode = document.getElementById('card-code').value;
        let cardUser = document.getElementById('card-user').value;
        if (cardNum && cardDate && cardCode && cardUser) {
            payByBank()
        }
        else {
            alert('Введите все необходимые данные!');
        }
    }

    payByMobile() {
        let phoneNum = document.getElementById('phone-number').value;
        if (phoneNum) {
            payByMobile()
        }
        else {
            alert('Введите номер телефона!');
        }
    }

    payByYandex() {
        let yandexNum = document.getElementById('yandex-number').value;
        if (yandexNum) {
            payByYandex()
        }
        else {
            alert('Введите номер кошелька!');
        }
    }
}

class SystemFacade {
    constructor(system) {
        this.system = system
    }

    getTripInfoFacade() {
        this.system.getTripInfo()
    }

    sendTripDataFacade(e) {
        this.system.sendTripData(e)
    }

    insertPassInfoFacade() {
        this.system.insertPassInfo()
    }

    openBankFacade() {
        this.system.openBank()
    }

    openMobileFacade() {
        this.system.openMobile()
    }

    openYandexFacade() {
        this.system.openYandex()
    }

    payByBankFacade() {
        this.system.payByBank()
    }

    payByMobileFacade() {
        this.system.payByMobile()
    }

    payByYandexFacade() {
        this.system.payByYandex()
    }
}

const system = new SystemFacade(new System());