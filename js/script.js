'use strict'
const age = prompt('Скільки вам років?');
const conditionage = age !== null && age.trim().length && !isNaN(+age);

const city = prompt('Де ви проживаєте?');
const conditioncity = city !== null && city.trim().length;

const sport = prompt('Який ваш улюблений вид спорту?');
const conditionsport = sport !== null && sport.trim().length;

if (conditionage){
    alert(age);
}
else {
    alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження');
}
if (!conditioncity){
    alert('Шкода, що Ви не захотіли ввести свіє місто');
}else if (city==='Київ'||city==='Вашингтон'||city==='Лондон'){
    alert('Ти живеш у столиці '+city);
}else if (city===isNaN(+city)){
    alert('Ти живеш у місті '+city);
}
if (!conditionsport) {
    alert('Шкода, що Ви не захотіли ввести свій спорт');
}
if (sport === 'футбол') {
    alert('Круто! Хочеш стати як Кріштіану Роналду');
} else if (sport === 'бокс') {
    alert('Круто! Хочеш стати як Майк Тайсон');
} else if (sport === 'теніс') {
    alert('Круто! Хочеш стати як Джон Пий Боланд');
} else if(sport===isNaN(+sport)){
    alert('Крутий вид спорту');
}