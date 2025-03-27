//constructor functions
//conversion fo naming it;
function UserData(name, age, id,isAdmin)
//before writing anything you should make it a constructor function

//the "this" keyword it represents the object you'll create in the future
//inside here,that should make it, construction function
this.name =bim
this.age =age
this.id =id
this.isAdmin = isAdmin
this.play = function() {
    console.log('my name is $(this name)')
}

const user1=new UserData9=("bim",12,1,true)
const date = new Date()
const audio=new  Audio()
//get te drums
const myDrums =document.querySelectorAll(".drum")
console.log(myDrums);
//MOUSE CLICK
//const drum=myDrums.length[0,1,2,3,4,5,6]
for(var i=0; i< myDrums.length;i++){
   const drum = myDrums[i]
   drum.addEventListener("click", function (){
    console.log(this.innerHTML);
    //Var drumclicked = thus.innerhtml
    //makeSound(drumClicked)
    //spark(drumClicked)
   })
}