let done = false;
let id = 0;
function a(){
    let potentials = document.querySelectorAll("span");
    for (let i = 0; i < potentials.length; i++){
        if (potentials[i].textContent == "Merge pull request"){
            potentials[i].innerHTML = "Fugithubboutit!!!!"; // 🤌🤌🤌"; emojis break the page when injected this way? :(
            clearInterval(id);
            return;
        }
    }
}

a();
id = setInterval(a, 500);
