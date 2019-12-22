function getTripInfo() {
    let townFromValue = document.getElementById('town-from-1').value;
    let townToValue = document.getElementById('town-to-1').value;
    let date = document.getElementById('date-from-1').value;
    let dateBack = document.getElementById('date-to-1').value;
    let people = document.getElementById('people').value;
    let promocode = document.getElementById('promocode').value;

    let townFrom;
    let townTo;

    switch (townFromValue){
        case '1':
            townFrom = 'Санкт-Петербург';
            break;
        case '2':
            townFrom = 'Москва';
            break;
        case '3':
            townFrom = 'Великий Новогород';
            break;
        case '4':
            townFrom = 'Псков';
            break;
    }

    switch (townToValue) {
        case '1':
            townTo = 'Санкт-Петербург';
            break;
        case '2':
            townTo = 'Москва';
            break;
        case '3':
            townTo = 'Великий Новогород';
            break;
        case '4':
            townTo = 'Псков';
            break;
    }

    if (document.getElementById('one-way-trip').checked === true) {
        // Один билет
        townFrom = '%' + townFrom +'%';
        townTo = '%' + townTo + '%';
        
        let oneWayTripsID = [];
        alasql('SELECT ID INTO ? FROM CSV("database/routes.csv", {headers:true, separator:";"}) WHERE TOWN_FROM = ? AND TOWN_TO = ?', [oneWayTripsID, townFrom, townTo]);
        alert(oneWayTripsID);
    }
    else {
        // Два билета
    }
}
