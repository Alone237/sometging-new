
var names = "alex";
var names = ["Alex", "steph", "ana",];
console.log (names);
console.log(names[1]);
console.log(names.length);
for (var n of names){
    console.log("n");
}
    
names.forEach(function name(n, index) {
    console.log(index + "-" + n);
})

var addition = 2 + 2;
var subtraction = 3 - 90;
var division = 10 / 5;
var remainder = 5 % 2;
console.log(addition);
console.log(remainder);
console.log("bimin".toUpperCase());
for (var i =0; i < 10; i++){
    console.log(i);
}

var number= 0;
while(number < 5){
    number ++;
   console.log(number)
   if(number < 5){
       continue;
   }
    console.number ++;
}
