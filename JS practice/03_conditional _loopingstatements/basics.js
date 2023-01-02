
/*
 let time=10;
 let wishmessage;
 if('time >=0 && time<=12'){
    console.log('goodmorning');
 }
 else if('time>=12 && time<=17'){
    console.log('goodafternoon');
 }
 else if('time>=17 && time<=23'){
    console.log('goodevening');
}
else{
    console.log('enter proper time');
}

let score=50;
let status;
if('score==0 && score<=0'){
    console.log('batsman goint to duck out in this match');
}
else if ('score>=30 && score<=50'){
    console.log('batsman got good score in this match');
}
else if('score>=50 && score<=99'){
    console.log('batsman got fifty in this match');
}
else if ('score==100 && score>=100'){
    console.log('batsman got century in this match');
}
else{
    console.log('batsman not come in bat');
}
*/




let day=new date().gatday();
 let today;
switch (day){
    case 0:
        today='sunday';
        break;
        case 1:
            today='moday';
        break;
        case 2:
            today='tuesday';
            break;
            case 3:
                today='wadnesday';
                break;
                case 4:
                    today='thursday';
                    break;
                    case 5:
                        today='friday';
                        break;
                        case 6:
                            today='saturday';
                            break;
}
console.log(`today is ${today}`);


// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}