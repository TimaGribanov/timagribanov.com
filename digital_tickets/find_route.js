let Namespace = {};
let count = 0;

function getTripInfo() {
    let townFromValue = document.getElementById('town-from-1').value;
    let townToValue = document.getElementById('town-to-1').value;
    Namespace.date = document.getElementById('date-from-1').value;
    Namespace.dateBack = document.getElementById('date-to-1').value;
    // let people = document.getElementById('people').value;
    Namespace.promocode = document.getElementById('promocode').value;

    // Namespace.townFrom;
    // let townTo;

    switch (townFromValue) {
        case '1':
            Namespace.townFrom = 'Санкт-Петербург';
            break;
        case '2':
            Namespace.townFrom = 'Москва';
            break;
        case '3':
            Namespace.townFrom = 'Великий Новгород';
            break;
        case '4':
            Namespace.townFrom = 'Псков';
            break;
    }

    switch (townToValue) {
        case '1':
            Namespace.townTo = 'Санкт-Петербург';
            break;
        case '2':
            Namespace.townTo = 'Москва';
            break;
        case '3':
            Namespace.townTo = 'Великий Новгород';
            break;
        case '4':
            Namespace.townTo = 'Псков';
            break;
    }

    selectTrips(Namespace.townFrom, Namespace.townTo, Namespace.date);
}

function selectTrips(townFrom, townTo, date) {
    let oneWayTrips = [];
    $('#route-block').remove();
    alasql('SELECT * INTO ? FROM CSV("database/routes.csv", {headers:true, separator:";"}) WHERE TOWN_FROM = ? AND TOWN_TO = ? AND DATE_DEP = ?', [oneWayTrips, townFrom, townTo, date], function(data) {
        console.log(oneWayTrips);
        for (let i = 0;i < oneWayTrips.length;i++) {
            document.getElementById('route-info').innerHTML += '<div class="route-block">\n' +
                '            <div class="row">\n' +
                '                <span class="town" id="route-town-from-' + i + '"></span>\n' +
                '                <span class="time" id="route-time-from-' + i + '"></span>\n' +
                '                <span class="date" id="route-date-from-' + i + '"></span>\n' +
                '            </div>\n' +
                '            <div class="row">\n' +
                '                <span class="arrow">&darr;</span>\n' +
                '                <span class="price" id="price-' + i + '"> &#8381;</span>\n' +
                '                <span class="route-id" id="route-id-' + i + '"></span>\n' +
                '                <span class="route-button" onclick="sendTripData(' + i + ')">Выбрать</span>\n' +
                '            </div>\n' +
                '            <div class="row">\n' +
                '                <span class="town" id="route-town-to-' + i + '"></span>\n' +
                '                <span class="time" id="route-time-to-' + i + '"></span>\n' +
                '                <span class="date" id="route-date-to-' + i + '"></span>\n' +
                '            </div>\n' +
                '        </div>';
            document.getElementById('route-town-from-' + i).innerText = oneWayTrips[i].TOWN_FROM;
            document.getElementById('route-town-to-' + i).innerText = oneWayTrips[i].TOWN_TO;
            document.getElementById('route-time-from-' + i).innerText = oneWayTrips[i].TIME_DEP;
            document.getElementById('route-time-to-' + i).innerText = oneWayTrips[i].TIME_ARR;
            document.getElementById('route-date-from-' + i).innerText = oneWayTrips[i].DATE_DEP;
            document.getElementById('route-date-to-' + i).innerText = oneWayTrips[i].DATE_ARR;
            document.getElementById('price-' + i).innerHTML = oneWayTrips[i].PRICE + '&#8381;';
            document.getElementById('route-id-' + i).innerText = oneWayTrips[i].ID;
        }
    });

    count++;
}

function sendTripData(num) {
    if (document.getElementById('one-way-trip').checked === true) {
        let routeForward = document.getElementById('route-id-' + num).innerText;
        console.log(routeForward);
        insertPassInfo();
    }
    else {
        if (count === 2) {
            let routeBack = document.getElementById('route-id-' + num).innerText;
            console.log(routeBack);
            insertPassInfo();
        }
        else if (count === 1) {
            let routeForward = document.getElementById('route-id-' + num).innerText;
            console.log(routeForward);
            selectTrips(Namespace.townTo, Namespace.townFrom, Namespace.dateBack);
        }
    }
}
