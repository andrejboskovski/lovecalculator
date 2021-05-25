

var name = document.getElementById('name').value;

var loveName = document.getElementById('loveName').value;






function click(){

var random = Math.floor(Math.random()*100);

if (random<30){
    document.getElementById("answer").innerHTML = random + "% :(";
}else if (random >= 30 && random <=70){
    document.getElementById("answer").innerHTML = random + "%";
}else {
     document.getElementById("answer").innerHTML = random + "% :)";
}


document.getElementById("btn").onclick = click();

}

document.querySelector("#btn").addEventListener("click", click);
