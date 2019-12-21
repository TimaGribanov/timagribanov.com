function loadInfo() {
    let cities = [
        'Санкт-Петербург',
        'Москва',
        'Великий Новгород',
        'Псков'
    ];

    for(let i = 0;i < cities.length;i++){
        let j = i + 1;
        document.getElementById('town-from-1').innerHTML += '<option value="' + j + '">'+ cities[i] + '</option>';
        document.getElementById('town-to-1').innerHTML += '<option value="' + j + '">'+ cities[i] + '</option>';
    }
}