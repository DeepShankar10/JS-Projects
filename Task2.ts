//Q-1
var n:number=11
if(n%2==0){
console.log("Even")
}else{
console.log("Odd")
}

//Q-2
var a:number=20
var b:number=10
if(a>b){
console.log("Largest:",a)
}else{
console.log("Largest:",b)
}

//Q-3
var a:number=20
var b:number=30
var c:number=25
if(a>b && a>c){
console.log("Largest:",a)
}else if(b>c){
console.log("Largest:",b)
}else{
console.log("Largest:",c)
}

//Q-4
var n:number=-7
if(n>0){
console.log("Positive")
}else if(n<0){
console.log("Negative")
}else{
console.log("Zero")
}

//Q-5
var age:number=67
if(age>=18){
console.log("Eligible for Vote")
}else{
console.log("Not Eligible for Vote")
}

//Q-6
var marks:number=90
if(marks>=90){
console.log("Grade: A")
}else if(marks>=75){
console.log("Grade: B")
}else if(marks>=60){
console.log("Grade: C")
}else if(marks>=40){
console.log("Grade: D")
}else{
console.log("Grade: Fail")
}

//Q-7
var year:number=2024
if((year%400==0) || (year%4==0 && year%100!=0)){
console.log("Leap Year")
}else{
console.log("Not Leap Year")
}

//Q-8
var n:number=55
if(n%5==0 && n%11==0){
console.log("Divisible by 5 and 11")
}else{
console.log("Not Divisible by 5 and 11")
}

//Q-9
var ch:string="A"
if(ch>="A" && ch<="Z"){
console.log("Uppercase")
}else if(ch>="a" && ch<="z"){
console.log("Lowercase")
}else if(ch>="0" && ch<="9"){
console.log("Digit")
}else{
console.log("Special Character")
}

//Q-10
var d:number=5
switch(d){
case 1:{
console.log("Sunday")
break;
}
case 2:{
console.log("Monday")
break;
}
case 3:{
console.log("Tuesday")
break;
}
case 4:{
console.log("Wednesday")
break;
}
case 5:{
console.log("Thursday")
break;
}
case 6:{
console.log("Friday")
break;
}
case 7:{
console.log("Saturday")
break;
}
default:{
console.log("Invalid")
}
}

//Q-11
var m:number=9
switch(m){
case 1:{
console.log("31 Days")
break;
}
case 2:{
console.log("28 or 29 Days")
break;
}
case 3:{
console.log("31 Days")
break;
}
case 4:{
console.log("30 Days")
break;
}
case 5:{
console.log("31 Days")
break;
}
case 6:{
console.log("30 Days")
break;
}
case 7:{
console.log("31 Days")
break;
}
case 8:{
console.log("31 Days")
break;
}
case 9:{
console.log("30 Days")
break;
}
case 10:{
console.log("31 Days")
break;
}
case 11:{
console.log("30 Days")
break;
}
case 12:{
console.log("31 Days")
break;
}
default:{
console.log("Invalid")
}
}

//Q-12
var a:number=20
var b:number=10
var op:string="+"
switch(op){
case "+":{
console.log("Addition:",a+b)
break;
}
case "-":{
console.log("Subtraction:",a-b)
break;
}
case "*":{
console.log("Multiply:",a*b)
break;
}
case "/":{
console.log("Division:",a/b)
break;
}
default:{
console.log("Invalid")
}
}

//Q-13
var marks:number=39
if(marks>=40){
console.log("Pass")
}else{
console.log("Fail")
}

//Q-14
var amt:number=6000
if(amt>=5000){
console.log("Discount:",amt*0.1)
}else{
console.log("Discount:",amt*0.05)
}

//Q-15
var ch:string="e"
if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
console.log("Vowel")
}else{
console.log("Consonant")
}

//Q-16
var n:number=56
if(n>=1 && n<=100){
console.log("In Range")
}else{
console.log("Not in Range")
}

//Q-17
var amt:number=1200
if(amt%100==0){
console.log("Can withdraw")
}else{
console.log("Cannot withdraw")
}

//Q-18
var a:number=5
var b:number=5
var c:number=5
if(a==b && b==c){
console.log("Equilateral")
}else if(a==b || b==c || a==c){
console.log("Isosceles")
}else{
console.log("Scalene")
}

//Q-19
var t:number=30
if(t>=35){
console.log("Hot")
}else if(t>=25){
console.log("Warm")
}else if(t>=15){
console.log("Cool")
}else{
console.log("Cold")
}

//Q-20
var u:number=350
var bill:number=0
if(u<=100){
bill=u*5
}else if(u<=300){
bill=100*5+(u-100)*7
}else{
bill=100*5+200*7+(u-300)*10
}
console.log("Bill:",bill)

//Q-21
var sum:number=0
for(var i=0;i<=10;i++){
    sum+=i
}
console.log("Sum :",sum);

//Q-22
var n:number=5
var ans:number=undefined
for(var i=1;i<=10;i++){
    ans=n*i
    console.log(`${n}*${i}=${ans}`);
}

//Q-23
var n:number=5
var fact:number=1
for(i=1;i<=5;i++){
    fact=fact*n
    n--
}
console.log(`Factorial :`,fact);

//Q-24
var sumo:number=0
var sume:number=0
for(var i=0;i<=10;i++){
    if(i%2==0){
        sume+=i
    }else{
        sumo+=i
    }
}
console.log(`Even sum :`,sume);
console.log(`Odd sum :`,sumo);

//Q-25
var n:number=123
var rem:number
var count:number=0
while(n>0){
    rem=n % 10          
    count++     
    n=(n-rem)/10   
}
console.log("count:", count)

//Q-26
var n:number=1234
var rem:number
var first:number=0
var last:number=0
last=n%10 
while(n>0){
    rem=n%10
    first=rem
    n=(n-rem)/10
}
console.log("Sum of first and last digit :",first+last)

//Q-27
var a:number=0
var b:number=1
var c:number
console.log(a)
console.log(b)
for(var i=3;i<=8;i++){
    c=a+b
    console.log(c)
    a=b
    b=c
}

//Q-28
var n:number=153
var temp:number=n
var rem:number
var sum:number=0
while(n>0){
rem=n%10
sum=sum+rem*rem*rem
n=(n-rem)/10
}
if(sum==temp){
console.log(`${temp} is Armstrong Number`)
}else{
console.log(`${temp} is not Armstrong Number`)
}

//Q-29
var n:number=12321
var temp:number=n
var rem:number
var rev:number=0
while(n>0){
rem=n%10
rev=rev*10+rem
n=(n-rem)/10
}
if(rev==temp){
console.log(`${temp} is Palindrome Number`)
}else{
console.log(`${temp} is not Palindrome Number`)
}

//Q-30
var n:number=1234
console.log(`Factors :`);
for(var i=1;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}

