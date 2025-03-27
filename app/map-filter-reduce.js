//map-filter-reduce//
map = [1,2,3,4,5,].map(function(n){
    return n * 2;
});
console.log("[].map");
console.log(map);

console.log("[].filter");
var filter = [1, 2 ,3, 4, 5, 10, 29, 100].filter(function(n){
  return n % 2 == 0;
});
console.log(filter);

//Callbacks//
function callbackExample(name, callback){
    console.log(callback(name));
}
callbackExample("Dickmu bimin",function(name){
    return "hello" + name;
});

