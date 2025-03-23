//alert ("connected......")
const getStarted = document.getElementById("getstartedBtn")
const popup =document.getElementById("popupContainer")
const closeBtn = document.getElementById("close")
console.log(getStarted)

//What happens when i carry out a particular action
getStarted.addEventListener('click', function(){
    popup.style.display="flex"
})