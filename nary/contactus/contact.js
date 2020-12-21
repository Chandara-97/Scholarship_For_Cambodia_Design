const GTInput=document.querySelectorAll(".gt-input");

for (let i=0; i< GTInput.length ; i++){
   
    let currentlabel = GTInput[i].parentElement.firstElementChild;

    GTInput[i].addEventListener("focus",function(){
        currentlabel.classList.add("move-up");
        })

        GTInput[i].addEventListener("blur",function(){
            if( GTInput[i].value == ""){
            currentlabel.classList.remove("move-up");
            }
            })


}