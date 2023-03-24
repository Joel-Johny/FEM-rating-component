function submit(){
    const card1=document.getElementById("card-1")
    const card2=document.getElementById("card-2")
    card1.classList.add("hide")
    card1.classList.remove("show")
    card2.classList.add("show")
    card2.classList.remove("hide")

}
function rateAgain(){
    const card1=document.getElementById("card-1")
    const card2=document.getElementById("card-2")
    card1.classList.add("show")
    card1.classList.remove("hide")
    card2.classList.add("hide")
    card2.classList.remove("show")

}
const buttons = document.querySelectorAll('.btn');
const rating=document.getElementById("f-rate")
console.log(rating)
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        rating.innerHTML=button.value
        button.classList.add("selected")
        deselected(button.value)
    })
})

function deselected(value){
    buttons.forEach((button)=>{
        if(button.value!=value)
            button.classList.remove("selected")
    })
}
