const timeGet = new Date();
const month = timeGet.getUTCMonth() + 1;
const day = timeGet.getUTCDate();
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
    const newDetails = prompt("How did you win this award?");
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

let signatureGet = document.getElementById("signature");

function changeSignature() {
    const newSignature = prompt("Who is giving this award?");
    if (!newSignature) {
        changeSignature();
    } else {
        localStorage.setItem("signature", newSignature);
        signatureGet.textContent = `${newSignature}`;
    }
}
if (!localStorage.getItem("signature")) {
    changeSignature();
} else {
    const storedSignature = localStorage.getItem("signature");
    signatureGet.textContent = `${storedSignature}`;
}

let actGet = document.getElementById("act");

function changeAct() {
    const newAct = prompt("What are you winning?");
    if (!newAct) {
        changeAct();
    } else {
        localStorage.setItem("act", newAct);
        actGet.textContent = `${newAct}`;
    }
}
if (!localStorage.getItem("act")) {
    changeAct();
} else {
    const storedAct = localStorage.getItem("act");
    actGet.textContent = `${storedAct}`;
}

window.addEventListener("load", function() {
    document.getElementById("f-badge").addEventListener("change", function() {
        if (this.files && this.files[0]) {
            let img = document.getElementById("badge");
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0]);
        }
    })
});
window.addEventListener("load", function() {
    document.getElementById("f-logo").addEventListener("change", function() {
        if (this.files && this.files[0]) {
            let img = document.getElementById("logo");
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0]);
        }
    })
});