w3IncludeHTML();
document.write('<script type="text/javascript" src="./js/file-inject.js"></script>');
var num=[];
var fnum = 6;
function lightUp(i){
  
  i.style.fontsize = "xx-large";
  return i.style.color = "red";
}

function validateForm() {
    var x = document.forms["test2"]["nm"].value;
    if (x != "The Sun") {
      alert("Its 'The Sun'. Good Grief.");
      return false;
    }
  }

document.getElementById("test").addEventListener("submit",(e)=> {
    var input = document.test.nm.value; 
    if(input != "chicken"){alert("Spell it correctly, try again"); }

   else{ lightUp(document.getElementById("Trick"));}
    e.preventDefault();
   
});

function guess() {
   

    if(num.length <= 3){
        var x = document.forms["test3"]["nm"].value;
if(x>10){alert("What did I just finished telling you, lower that 10 right?");return false;}
        for(let i=0;i<num.length;i++){
            if(num[i]==x){alert("You already said that dummy"); return false;}
            
        }
        num.push(x);


    if (x != "6") {
        


        if(x < 6){
            alert("Go higher"); return false;
        }
        else{alert("Go lower..");  return false;
    }
}
    else{
   show_image();
    }
}
  else{alert("Its over, time to just be Jules");}
}

function show_image() {
    var img = document.createElement("img");
    img.src = "./img/holdon.jpg";
    img.width = 500;
    img.height = 700;
    img.alt= "Suppose to be pictures of hitmen";
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}