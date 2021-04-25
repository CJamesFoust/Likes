var x = [0, 0, 0]
var countLikes = [document.querySelector("#likes0"), document.querySelector("#likes1"), document.querySelector("#likes2")]

function increaseLikes0 () {
    x[0]++;
    countLikes[0].innerText = x[0] + " like(s)";
}

function increaseLikes1 () {
    x[1]++;
    countLikes[1].innerText = x[1] + " like(s)";
}

function increaseLikes2 () {
    x[2]++;
    countLikes[2].innerText = x[2] + " like(s)";
}