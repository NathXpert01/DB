function validateForm() {
    const name = document.getElementById("name").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const alter = document.getElementById("alter").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonnr = document.getElementById("Telefonnr").value.trim();
    const problem = document.getElementById("Problem").value.trim();
    if (name == "") {
        alert("Name muss ausgefüllt werden");
        return false;
    }
    if (adresse == "") {
        alert("Adresse muss ausgefüllt werden");
        return false;
    }
    if (alter == "") {
        alert("Alter muss ausgefüllt werden");
        return false;
    }
    if (isNaN(alter)) {
        alert("Alter muss eine Zahl sein");
        return false;
    }
    if (mail == "") {
        alert("Mail muss ausgefüllt werden");
        return false;
    }
    if (!emailRegex.test(mail)) {
        alert("Bitte gib eine gültige E-Mail-Adresse ein");
        return false;
    }
    if (telefonnr == "") {
        alert("Telefonnr muss ausgefüllt werden");
        return false;
    }
    if (isNaN(telefonnr)) {
        alert("Telefonnr muss eine Zahl sein");
        return false;
    }
    if (problem == "") {
        alert("Problem muss ausgefüllt werden");
        return false;
    }

    const msg = document.getElementById("confirmationMessage");
    msg.classList.remove("hidden");

    setTimeout(() => {
        msg.classList.add("hidden");
    }, 3000);

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAdresse").textContent = adresse;
    document.getElementById("displayAlter").textContent = alter;
    document.getElementById("displayMail").textContent = mail;
    document.getElementById("displayTelefonnr").textContent = telefonnr;
    document.getElementById("displayProblem").textContent = problem;

    document.getElementById("dataDisplay").classList.remove("hidden");

    document.getElementById("myForm3").reset();
}
