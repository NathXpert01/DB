function validateForm() {
    const name1 = document.getElementById("name1").value.trim();
    const passwort1 = document.getElementById("passwort1").value.trim();
    const einsatz1 = document.getElementById("einsatz1").value.trim();

    if (!name1 || !passwort1 || !einsatz1) {
        alert("Alle Felder müssen ausgefüllt werden!");
        return;
    }

    if (isNaN(einsatz1)) {
        alert("Einsatz muss eine Zahl sein!");
        return;
    }

    const msg = document.getElementById("confirmationMessage");
    msg.classList.remove("hidden");

    setTimeout(() => {
        msg.classList.add("hidden");
    }, 3000);

    document.getElementById("displayName").textContent = name1;
    document.getElementById("displayPasswort").textContent = passwort1;
    document.getElementById("displayEinsatz").textContent = einsatz1;

    document.getElementById("dataDisplay").classList.remove("hidden");

    document.getElementById("myForm3").reset();
}
