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
    document.getElementById('age').innerText = age;
};