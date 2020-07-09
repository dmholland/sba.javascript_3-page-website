w3IncludeHTML();
document.write('<script type="text/javascript" src="./js/file-inject.js"></script>');

function lightUp(i){
  
  i.style.fontsize = "xx-large";
  return i.style.color = "red";
}

document.getElementById("test").addEventListener("submit",(e)=> {
    var input = document.test.nm.value; 
    if(input != "chicken"){alert("Spell it correctly, try again"); }

   else{ lightUp(document.getElementById("Trick"));}
    e.preventDefault();
   
});