const timeGet = new Date();
const month = timeGet.getUTCMonth() + 1
const day = timeGet.getUTCDay();
const year = timeGet.getUTCFullYear();

document.getElementById("time").innerHTML = month + " - " + day + " - " + year;

let nameGet = document.getElementById("name");

function changeName() {
    const newName = prompt("Enter your First and Last name.");
    if (!newName) {
        changeName();
    } else {
        localStorage.setItem("name", newName);
        nameGet.textContent = `${newName}`;
    }
}
if (!localStorage.getItem("name")) {
    changeName();
} else {
    const storedName = localStorage.getItem("name");
    nameGet.textContent = `${storedName}`;
}

let detailsGet = document.getElementById("details");

function changeDetails() {
    const newDetails = prompt("What do you want to be awarded for?");
    if (!newDetails) {
        changeDetails();
    } else {
        localStorage.setItem("details", newDetails);
        detailsGet.textContent = `${newDetails}`;
    }
}
if (!localStorage.getItem("details")) {
    changeDetails();
} else {
    const storedDetails = localStorage.getItem("details");
    detailsGet.textContent = `${storedDetails}`;
}