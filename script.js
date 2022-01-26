let display=document.getElementById("input");

let buttons=Array.from(document.getElementsByTagName("button"));
console.log(buttons);

buttons.map(button=>{
    button.addEventListener("click",(e) => {
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch(e.target.innerText){

            case "AC":
                display.innerText="";
                break;
            
            case "←":
                if(display.innerText)
                {
                    display.innerText=display.innerText.slice(0,-1);
                }
                break;

            case "=":
                try{
                    display.innerText=eval(display.innerText);
                }
                catch{
                    display.innerText="Invalid Input !";
                } 
                break;
            default:
                display.innerText+=e.target.innerText;
        }

    })
});



