let button = document.querySelectorAll('.buttons');
let hey ='';
let inp = document.getElementById("inp")
var ary = Array.from(button).forEach((valuu)=>{
    valuu.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            hey = eval(hey)
            inp.value = hey;
        }
        else if(e.target.innerHTML =="C"){
            hey=''
            inp.value = hey;
        }
        else if(e.target.innerHTML == "x"){
            let aryy = Array.from(inp.value);
           let c= aryy.pop(); 
             let a = toString(aryy)
            inp.value = c;
        
        }
        else{
            hey = hey + e.target.innerHTML;
            inp.value = hey;
        }

    })
})
function del() {
    let inp = document.getElementById("inp")
    inp.value = inp.value.substring(0, inp.value.length - 1);
  }
