w3IncludeHTML();
document.write('<script type="text/javascript" src="./js/file-inject.js"></script>');

function lightUp(i){
   let id=i;
    id.style.pulse = "2s infinite";
}

document.getElementById("test").addEventListener("submit",()=> {
    this.querySelector('button[type="submit"]').innerHTML = lightUp(document.getElementById("Trick"));
   
});