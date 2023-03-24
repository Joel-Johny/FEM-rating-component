function submit(){
    const card1=document.getElementById("card-1")
    const card2=document.getElementById("card-2")
    card1.classList.add("hide")
    card1.classList.remove("show")
    card2.classList.add("show")
    card2.classList.remove("hide")
    console.log(card1,card2)

}
function rateAgain(){
    const card1=document.getElementById("card-1")
    const card2=document.getElementById("card-2")
    card1.classList.add("show")
    card1.classList.remove("hide")
    card2.classList.add("hide")
    card2.classList.remove("show")
    console.log(card1,card2)

}
const buttons=[...document.querySelectorAll(".btn")]

