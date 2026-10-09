"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Eliza Hadlowska
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

form.addEventListener("submit", onSubmit)
clearButton.addEventListener("click", clearForm)
deleteHistoryButton.addEventListener("click", deleteHistory)

// Array som används för felmeddelanden
let errors = [];

//Eventlyssnaren för formuläret
function onSubmit(event) {
    event.preventDefault();

    //Läsa in värden som skrivs in i fälten
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    //Om formuläret inte fyllts i korrekt ska felmeddelanden visas
    //annars skapas studentkortet och formuläret rensas
    if(!validateForm(fullname, email, phone)) {
        displayErrors();
    } else {
        createStudentCard(fullname, email, phone);
        clearForm();
    }
    };

//Validera formuläret
function validateForm(fullname, email, phone) {
    
    //Rensa tidigare felmeddelanden och arrayen
    errors = [];
    errorList.innerHTML = "";
    
    //Variabel som kolla efter fel
    let validate = true;

    //Validera de tre olika fälten
    if (fullname === "") {
        errors.push("Du måste ange ditt fullständiga namn");
        validate = false;
    } 

    if (email === "") {
        errors.push("Du måste ange din e-postadress");
        validate = false;
    }

    if (phone === "") {
        errors.push("Du måste ange ditt telefonnummer");
        validate = false;
    }

    // Returnera resultatet av valideringen
    return validate;
}

//Visar felmeddelanden på sidan
function displayErrors() {

    //För varje felmeddelande skapas ett li-element
    if (errors.length > 0) {
        for(let i = 0; i < errors.length; i++) {
            const liEl = document.createElement("li");
            liEl.innerHTML = errors[i];
        
        //li elementet kommer att ingå i ul errorList i HTML-filen
        errorList.appendChild(liEl);
        }
    }
}

//Skapar ett studentkort och visar det på sidan
function createStudentCard(fullname, email, phone) {

    //Läsa in font-värdet
    const font = fontSelect.value;

    //Uppdatera studentkortet
    previewFullname.innerHTML = `Namn: ${fullname}`
    previewEmail.innerHTML = `E-post: ${email}`
    previewPhone.innerHTML = `Telefon: ${phone}`

    //Lägga in style på preview-elementen
    previewFullname.style.fontFamily = font;
    previewEmail.style.fontFamily = font;
    previewPhone.style.fontFamily = font;

    //Studentkort som ett objekt som ska läggas in i historiken
    const studentCard = {
        fullname: fullname,
        email: email,
        phone: phone,
        font: font
    }

    //Array som används för historiken
    let history = [];

    history.unshift(studentCard);

    saveHistory();

    loadHistory();
}

//Sparar historiken i localStorage.
function saveHistory(history) {
    // Spara historik i localStorage
    const studentsJson = JSON.stringify(history);
    localStorage.setItem("students", studentsJson);
}



//Läser in tidigare historik från localStorage.
function loadHistory(history) {
    // Hämta eventuell sparad historik
    const localStorageData = localStorage.getItem("students");
    
    //Hämta data från localStorage
    const history = JSON.parse(localStorageData);
    
    //Om data inte finns, gör en ny array
    if(history === null) {
        history = [];
    }

    renderHistory();
}

// Visar historiken på sidan.
function renderHistory() {
    // Rensa tidigare visad historik
    historySection.innerHTML = "";

    // Uppdatera historik
    for(let i = 0; i < history.length; i++) {
        const sectionEl = document.createElement("section");

        const pEl = document.createElement("p");
        pEl.innerHTML = `Namn: ${history[i].fullname}
        <br>
        E-post: ${history[i].email}
        <br>
        Telefon: ${history[i].phone}
        <br>
        Typsnitt: ${history[i].font}`;

        sectionEl.appendChild(pEl);
        historySection.appendChild(sectionEl);
    }
}


// Rensar formulär, aktuellt studentkort och felmeddelanden
function clearForm() {

    errors = [];
    errorList.innerHTML = "";
    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    
}


//Raderar hela historiken
function deleteHistory(history) {
    // Radera sparad historik
    localStorage.removeItem("students");
    history =[];
    historySection.innerHTML = "";
    // Uppdatera history och visningen på sidan
}

loadHistory();