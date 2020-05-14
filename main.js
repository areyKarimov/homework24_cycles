const INPUT = document.querySelectorAll('.task__value');
const BTN = document.querySelectorAll('.task__trigger');
const ANSWERAREA = document.querySelectorAll('.task__answer');
const SELECT = document.querySelector('select');
const ASK = document.querySelector('.current-condition');



const VALIDATOR = (value) => {
    return !isNaN(+value) && value.length > 0 ? true : false;
}

const task1 = (value1, value2) => {
    if (VALIDATOR(value1) && VALIDATOR(value2)){
        let res = 0
        if (value1 - value2 === 0){
            return [...ANSWERAREA][0].innerHTML = "Диапазон пуст";
        }
        if (+value1 > +value2) {
            for (let i = +value1; +value2 <= i; i--){
                res += i;
            }
            return [...ANSWERAREA][0].innerHTML = "Сумма чисел в диапазоне равна " + res;
        } else {
            for (let i = +value2; +value1 <= i; i--){
                res += i;
            }
            return [...ANSWERAREA][0].innerHTML = "Сумма чисел в диапазоне равна " + res;
        }
    } else{
        alert('Введите пожалуйста числа');
    } 
}

const task2 = (value1, value2) => {
    if (VALIDATOR(value1) && VALIDATOR(value2)){
        let gcd = function(a, b) {  
            if (!b) {  
                return a;  
            }  
            return gcd(b, a % b);  
         }; 
         return [...ANSWERAREA][1].innerHTML = "Найбольший общий делитерь равен = " + gcd(value1, value2);
    } else{
        alert('Введите пожалуйста числа');
    } 
}

const task3 = (value) => {
    if (VALIDATOR(value)){
        let arrOfDivisors = (number) => {
            let res = [];
            let i = Math.round(number / 2)
            for (i ; i > 1; i--) {
                if (number % i === 0){
                    res.push(i);
                }
            }
            return res;
        }
        return [...ANSWERAREA][2].innerHTML = "Делители указаного числа = " + arrOfDivisors(value).join(', ');
    } else{
        alert('Введите пожалуйста числа');
    } 
}

const task4 = (value) => {
    if (VALIDATOR(value)){
        return [...ANSWERAREA][3].innerHTML = "Количество цифер в Вашем числе равно = " + value.length;
    } else{
        alert('Введите пожалуйста числа');
    } 
}

const task5 = (value) => {
    let arrOfValue = value.split(' ');
    let zeros = 0;
    let negNum = 0;
    let posNum = 0;
    let even = 0;
    let odd = 0;
    let filteredArrOfValue = arrOfValue.filter(num => !isNaN(num));
    if (filteredArrOfValue.length !== 10) {
        alert('Введите пожалуйста 10 чисел');
    }
    filteredArrOfValue.forEach(num => {
        if (num == 0) {
            zeros++;
        } else if (num < 0) {
            negNum++;
        } else {
            posNum++;
        }
        if (num % 2 === 0 && num != 0) {
            even++;
        } else if (num % 2 !== 0){
            odd++;
        }
    })
    return [...ANSWERAREA][4].innerHTML = "Количество положительных, отрицательных, нулей, четных, нечетных = " + posNum + ", "  + negNum + ", "  + zeros + ", "  + even + ", "  + odd;
}

const task6 = (value) => {
    let arrOfValue = value.split(' ');
    let res = 0;
    const OPERATORS = ['*', '/', '+', '-']
    if (arrOfValue.length !== 3 || isNaN(arrOfValue[0]) || isNaN(arrOfValue[2]) || !OPERATORS.includes(arrOfValue[1])) {
        alert('Введите пожалуйста формуло согласно формату "число оператор (*, /, +, -) число"');
    }
    switch (arrOfValue[1]){
        case ('*') :
            res = +arrOfValue[0] * +arrOfValue[2];
            break;
        case ('/') :
            res = +arrOfValue[0] / +arrOfValue[2];
            break;
        case ('+') :
            res = +arrOfValue[0] + +arrOfValue[2];
            break;
        case ('-') :
            res = +arrOfValue[0] - +arrOfValue[2];
            break;
    }
    return [...ANSWERAREA][5].innerHTML = "Результат = " + res;
}

const task7 = (value1, value2) => {
    if (VALIDATOR(value1) && VALIDATOR(value2)){
        let num = [...value1];
        let res = [];
        if (value2 >= value1.length){
            value2 = value2 - value1.length;
        }
        res.push(...num.slice(value2));
        res.push(...num.slice(0, value2));
        return [...ANSWERAREA][6].innerHTML = "Ваше число со сдвигом = " + res.join('');
    } else{
        alert('Введите пожалуйста целые числа');
    } 
}


let nextDate = 0;
const task8 = (value) => {
    if (nextDate === 0) {
        let parsedDate = Date.parse(value);
        let parsedNextDay = (parsedDate + (60*60*24*1000));
        let nextDay = String(new Date(parsedNextDay)).split(' ');
        nextDate = parsedNextDay;
        [...INPUT][10].value = new Date(parsedNextDay);
        nextDay.length = 4;
        [...ANSWERAREA][7].innerHTML = "Ваше число со сдвигом = " + nextDay;
        return nextDate;
    }
    else{
        let parsedNextDay = (nextDate + (60*60*24*1000));
        nextDate = parsedNextDay;
        let nextDay = String(new Date(parsedNextDay)).split(' ');
        nextDay.length = 4;
        [...ANSWERAREA][7].innerHTML = "Ваше число со сдвигом = " + nextDay;
        return nextDate;
    }
}

const task9 = () => {
    let start = 1;
    let end = 9
    let i = start;
    let table = [];
    for (i; i <= 9; i++){
        let row = [];
        for (let y = 1; y <= 10; y++){
            row.push(`<td>${y * i}</td>`);
        }
        table.push(`<tr>${row.join('')}</tr>`);
    }
    [...ANSWERAREA][8].innerHTML = table.join('');
    [...ANSWERAREA][8].style.marginTop = 20 + 'px';
}


let maxValue = 100 - 2;
const task10 = (value, maxValue) => {
    if (maxValue < 2) {
        [...ANSWERAREA][9].innerHTML = "Вы загадали " + ASK.querySelector('span').innerHTML;
    }
    console.log(maxValue)
    switch (value){
        case 'equal':
            [...ANSWERAREA][9].innerHTML = "Вы загадали " + ASK.querySelector('span').innerHTML;
            break;
        case 'smaller':
            ASK.querySelector('span').innerHTML = +ASK.querySelector('span').innerHTML - Math.round(maxValue / 4);
            break;
        case 'bigger':
            ASK.querySelector('span').innerHTML = +ASK.querySelector('span').innerHTML + Math.round(maxValue / 4);
            break;
    }
}





window.document.addEventListener('click', event => {
    switch (event.target) {
        case [...BTN][0]: 
            task1([...INPUT][0].value, [...INPUT][1].value);
            break;
        case [...BTN][1]: 
            task2([...INPUT][2].value, [...INPUT][3].value);
            break;
        case [...BTN][2]: 
            task3([...INPUT][4].value);
            break;
        case [...BTN][3]: 
            task4([...INPUT][5].value);
            break;
        case [...BTN][4]: 
            task5([...INPUT][6].value);
            break;
        case [...BTN][5]: 
            task6([...INPUT][7].value);
            break;
        case [...BTN][6]: 
            task7([...INPUT][8].value, [...INPUT][9].value);
            break;
        case [...BTN][7]: 
            task8([...INPUT][10].value);
            break;
        case [...BTN][8]: 
            task9();
            break;
        case [...BTN][9]: 
            task10(SELECT.value, maxValue);
            return maxValue = Math.round(maxValue / 2);
    }
});