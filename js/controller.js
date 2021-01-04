function test(){

    var cardInner = document.querySelector(".flip-card-inner");

    if(cardInner.style.transform == ""){
        console.log("primera rotación")
        console.log(cardInner);
        cardInner.style.transform = "rotateY(180deg)";
    }else{
        console.log("segunda rotación")
        console.log(cardInner);
        cardInner.style.transform = "";
    }

}