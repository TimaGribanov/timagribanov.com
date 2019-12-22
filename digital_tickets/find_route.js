function getTripInfo() {
    let townFromValue = document.getElementById('town-from-1').value;
    let townToValue = document.getElementById('town-to-1').value;
    let date = document.getElementById('date-from-1').value;
    let dateBack = document.getElementById('date-to-1').value;
    let people = document.getElementById('people').value;
    let promocode = document.getElementById('promocode').value;

    // let townFrom;
    let townTo;

    switch (townFromValue){
        case '1': {
            let townFrom = 'Санкт-Петербург';
            console.log(townFrom);
            break;
        }
        case '2': {
            let townFrom = 'Москва';
            console.log(townFrom);
            break;
        }
        case '3': {
            let townFrom = 'Великий Новогород';
            break;
        }
        case '4': {
            let townFrom = 'Псков';
            break;
        }
    }

    switch (townToValue) {
        case 1:
            townTo = 'Санкт-Петербург';
            console.log(townTo);
            break;
        case 2:
            townTo = 'Москва';
            console.log(townTo);
            break;
        case 3:
            townTo = 'Великий Новогород';
            break;
        case 4:
            townTo = 'Псков';
            break;
    }


    let oneWayTripsID = [];
    if (document.getElementById('one-way-trip').checked === true) {
        // Один билет

        alasql.promise('SELECT ID INTO ? FROM CSV("database/routes.csv", {headers:true, separator:";"}) WHERE TOWN_FROM = ? AND TOWN_TO = ?', [oneWayTripsID, townFrom, townTo])
            .then(function(data) {
                alert(oneWayTripsID);
            }).catch(function(error) {
                console.log(error);
        });

    }
    else {
        // Два билета
    }
}
