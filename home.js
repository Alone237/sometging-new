//alert ("connected......")
const getStarted = document.getElementById("getstartedBtn")
const popup =document.getElementById("popupContainer")
const closeBtn = document.getElementById("close")
constbformContainer = document.getElementById("formContainer")
const paragraph = document.getElementsByTagName("p")
console.log(paragraph)
console.log(getStarted)

//What happens when i carry out a particular action
getStarted.addEventListener('click', function(){
    popup.style.display="flex"
})
//to make the page to close when we log in we need the close ,icon and the popuo
//events are what happens when you click  a close btn
closeBtn.addEventListener('click',function() {
    //console.log("you clicked me.....")
popup.style.display ="none"
})
   // 
Form.addEventListener('submit',function(){
    //perform action when we submigt form
    //we need the password value and the confirm password
    const password=document.getElementById('password').value
    const confirmpassword=document.getElementById('confirm-password').value
    //console.log("this is my password" password)
if(password!==confirmpassword){
    alert("password does not match")
    return;
}
})