
//assisgnment operators---- =
let s=10;
console.log(s)

//arthamatic operators------ +-*/
let num1=10;
let num2=30;
console.log(`sum:${num1+num2}`);
console.log(`sub:${num1-num2}`);
console.log(`mul:${num1*num2}`);
console.log(`div:${num1/num2}`);

//short hand opertors----  +=,-=,*=,/=
let a=20;
let b=30;
let add=10;
add=add+(a+b);//10+(20+30)=60
add+=a+b;//60+20+30=110
console.log(add)

let c=20;
let d=30;
let sub=10;
sub=sub-(c+d);//10-(10+30)
sub-=c+d;//-30-(20+30)=-90
console.log(sub)

let e=20;
let f=30;
let mul=10;
mul=mul*(e+f);//10*(20+30)
mul*=e+f;//500*(20+30)=25000
console.log(mul)

let g=20;
let h=30;
let div=10;
div=div/(g+h);//10/(20+30)=0.5
div/=g+h;//0.5/(20+30)=0.004
console.log(div)

//conditional operators---- <,>,<=,>=,!==

let marks=56;
if(marks<=35){
    console.log('student failed in exam')
}
else{
    console.log("student passed in exam")
}
let l=20;
let q=60;
console.log(l===q)

//unary operators
let x=100;
x=x+1,
x+=1,//102
//x++,//102
console.log(x)

let y=200;
y=y-1,
y-=1,//198
//y--,//198
console.log(y)

//logiacl operators---- &&,||,^
let inrelation=true;
let parentsagreed=true;
if(inrelation && parentsagreed){
console.log("gat married")
}
else{
    console.log("wait for the parents conformation")
}

let goa=false;
let vizag=false;
if(goa||vizag){
    console.log("goa is good and big toursim place")
}
else{
    console.log("vizag is looking a excellent seashore toursiom spot")
}

let salary=true;
let employee=false;
if(salary^employee){
    console.log("salary is hiked upto 40%")
}
else{
    console.log("employee is promote to next level of position")
}


//ternary opertaors--- ?:

 let score=65;
let message;
score <=35 ? (message = 'you failed in exam'):(message='you cleared the exam');
console.log(message);
/*
let age = 18;
let message;

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);

let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);
*/
 

// eqality operators--- ==,===

 let k=20;
 let m=90;
if(k===m){
    consloe.log('both are equal');
}
else{
    console.log('both are not equal');
}




