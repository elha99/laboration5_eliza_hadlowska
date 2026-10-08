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

//Läsa in värden som skrivs in i fälten
const fullname = fullnameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();

// Array som används för felmeddelanden
let errors = [];

//Array som används för historiken
let history = [];

//Eventlyssnaren för formuläret
function onSubmit(event) {
    event.preventDefault();

    if(!validateForm()) {
        displayErrors();
    } else {
        createStudentCard();
        clearForm();
    }
    };

//Validera formuläret
function validateForm() {
    
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
function createStudentCard() {

    const font = fontSelect.value;
    font.style.fontFamily = font;

    //Uppdatera studentkortet
    previewFullname.innerHTML = `Namn: ${fullname}`
    previewEmail.innerHTML = `E-post: ${email}`
    previewPhone.innerHTML = `Telefon: ${phone}`

    //Studentkort som ett objekt som ska läggas in i historiken
    const studentCard = {
        fullname: fullname,
        email: email,
        phone: phone,
        fontSelect: font
    }

    history.unshift(studentCard);

    saveHistory();

    loadHistory();
}



//Sparar historiken i localStorage.
function saveHistory() {
    // Spara historik i localStorage
    const studentsJson = JSON.stringify(students);
    localStorage.setItem("students", studentsJson);

    const localStorageData = localStorage.getItem("students");

    const students = JSON.parse(localStorageData);
    if(students === null) {
        students = [];
    }
    students.push(studentCard)
}



//Läser in tidigare historik från localStorage.
function loadHistory() {
    // Hämta eventuell sparad historik
    const localStorageData = localStorage.getItem("students");
    
    //Hämta data från localStorage
    const students = JSON.parse(localStorageData);
    
    //Om data inte finns, gör en ny array
    if(students === null) {
        students = [];
    }

    // Uppdatera historik
    for(let i = 0; i < students.length; i++) {
        const sectionEl = document.createElement("section");

        const pEl = dokument.createElement("p");
        pEl.innerHTML = `Namn: ${students[i].fullname}
        <br>
        E-post: ${students[i].email}
        <br>
        Telefon: ${students[i].phone}`;

        sectionEl.appendChild(pEl);
        historySection.appendChild(sectionEl);
    }
}

// Visar historiken på sidan.
function renderHistory() {
    // Rensa tidigare visad historik
    historySection.innerHTML = "";
    // Skriv ut innehållet i history till DOM
}


// Rensar formulär, aktuellt studentkort och felmeddelanden.
function clearForm() {

    errors = [];
    errorList.innerHTML = "";
    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik
/*     historySection.innerHTML = ""; */
    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik