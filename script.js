let number = 59;
if (number > 0 && number <= 15) {
    console.log('первая четверть часа');
} else if (number > 15 && number <= 30){
    console.log('вторая четверть часа')
} else if (number > 30 && number <= 45){
    console.log('третья четверть часа')
} else if (number > 45 && number <= 59){
    console.log('четвертая четверть часа')
};

let lang = 'ru', arr;
if (lang === 'ru') {
    arr=['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
else {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr)

let input, count, type;

input = prompt('Введите ваше число:');

if(Number(input) > 0){
    type = 'положительное';
    if(input.length > 0 && input.length < 1){
        count = 'однозначное';
    }
    else if(input.length >= 2 && input.length < 3){
        count = 'двузначное';
    }
    else{
        count = 'трехзначное или больше';
    };
}

else{
    type = 'отрицательное';
    if(input.length > 0 && input.length <= 2){
        count = 'однозначное';
    }
    else if(input.length > 2 && input.length <= 3){
        count = 'двузначное';
    }

    else{
        count = 'трехзначное или больше';
    };
};
console.log(`Число ${input} ${type} ${count}`);


let colorRed = 'no', colorYellow = 'no', colorGreen;

if(colorRed === 'no' && colorYellow === 'no'){
    colorGreen = 'yes';
}

else{
    colorGreen = 'no';
};

if(colorGreen === 'yes'){
    console.log(`Горит зелёный свет светофора, можно переходить дорогу`);
};


let num1to12 = 0;
while(num1to12 < 12){
    num1to12++;
    console.log(`${num1to12}`);
};

let num5to13 = 4;

while(num5to13 >= 4 && num5to13 < 13){
    num5to13++;
    console.log(`${num5to13}`);
};


let evenNum = 0;

while(evenNum >= 0 && evenNum <= 16){
    if(evenNum % 2 === 0){
        console.log(`Чётные числа на промежутке от 0 до 16: ${evenNum}`);
    }
    evenNum++;
};

let sumOfArray = 0, array = [2, 5, 8, 3, 6];

for(let i = 0; i < array.length; i++){
    sumOfArray = sumOfArray + array[i];
};

console.log(`Сумма чисел ${array} = ${sumOfArray}`);
