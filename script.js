window.onload = function calcAge() {
    const birthday = new Date(1997,4,22);
    let today = new Date();
    let age;
    let ageY = today.getFullYear() - birthday.getFullYear();
    let ageM = today.getMonth() - birthday.getMonth();
    let ageD = today.getDate() - birthday.getDate();
    if(ageM >= 0 && ageD >= 0) {
        age = ageY;
    } else {
        age = ageY - 1;
    }
    document.getElementsByClassName('age').innerText = age;
};

const langEn = document.getElementById('lang-en');
const langRu = document.getElementById('lang-ru');
const langFi = document.getElementById('lang-fi');

function changeLang(targetLang) {
    const mainEn = document.getElementById('english');
    const mainRu = document.getElementById('russian');
    const mainFi = document.getElementById('finnish');

    const footerEn = document.getElementById('footer-en');
    const footerRu = document.getElementById('footer-ru');

    if (targetLang === 'en') {
        mainRu.style.display = 'none';
        mainEn.style.display = 'block';
        mainFi.style.display = 'none';

        footerRu.style.display = 'none';
        footerEn.style.display = 'block';

        langRu.style.textDecoration = 'none';
        langEn.style.textDecoration = 'underline';
        langFi.style.textDecoration = 'none';
    } else if (targetLang === 'ru') {
        mainRu.style.display = 'block';
        mainEn.style.display = 'none';
        mainFi.style.display = 'none';

        footerRu.style.display = 'block';
        footerEn.style.display = 'none';

        langRu.style.textDecoration = 'underline';
        langEn.style.textDecoration = 'none';
        langFi.style.textDecoration = 'none';
    } else {
        mainRu.style.display = 'none';
        mainEn.style.display = 'none';
        mainFi.style.display = 'block';

        footerRu.style.display = 'none';
        footerEn.style.display = 'block';

        langRu.style.textDecoration = 'none';
        langEn.style.textDecoration = 'none';
        langFi.style.textDecoration = 'underline';
    }
}

langEn.onclick = function() {changeLang('en')}
langRu.onclick = function() {changeLang('ru')}
langFi.onclick = function() {changeLang('fi')}
