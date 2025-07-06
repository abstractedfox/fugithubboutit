let id = 0;
function a(){
    let potentials = document.querySelectorAll("span");
    for (let i = 0; i < potentials.length; i++){
        if (potentials[i].textContent == "Merge pull request"){
            for (let j = 0; j < potentials[i].classList.length; j++){
                potentials[i].classList.remove(potentials[i].classList[j]); //necessary for emoji to work. doesn't appear to affect layout?
            }
            potentials[i].innerHTML = "Fugithubboutit!!!!🤌🤌🤌"; 
            //clearInterval(id);
            return;
        }
    }
}

a();
id = setInterval(a, 500);
