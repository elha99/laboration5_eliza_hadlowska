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

clearButton.addEventListener('click', clearForm)
deleteHistoryButton.addEventListener('click', deleteHistory)

// Array som används för felmeddelanden
let errors = [];

let history = [];

//Formuläret
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(validateForm()) {
    errorList.innerHTML = "";
    createStudentCard();
    } else {
    displayErrors()
    }

    clearForm()
    });

function validateForm() {
    
    // Kontrollera formulärets obligatoriska fält

    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen

    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";

    // Skriv ut aktuella felmeddelanden till DOM

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

//Kontrollera att namn,email och telefon fälten är ifyllda, om ej genereras det ett felmeddelande
    if (fullname === "") {
    errors.push("Du måste ange ditt fullständiga namn");
    } 

    if (email === "") {
    errors.push("Du måste ange din e-postadress");
    }

    if (phone === "") {
    errors.push("Du måste ange ditt telefonnummer");
    }
    
    if (errors.length > 0) {
        return false;
    } else {
        return true;
    }

}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {

    errorList.innerHTML = "";

    if (errors.length > 0) {
        errors.forEach(function(message) {
        const liEl = document.createElement('li');
        liEl.textContent = message;

//li elementet kommer att ingå i ul errorList i HTML-filen
        errorList.appendChild(liEl);
        })
    }
//Visar hur många fel det handlar om och för varje skapar den ett li element

}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {

    //Inhämta värden från formuläret och ta bort mellanslagen med trim()
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();


    
    // Uppdatera studentkortet
    previewFullname.innerHTML = `${fullname}`
    previewEmail.innerHTML = `${email}`
    previewPhone.innerHTML = `${phone}`

    previewFullname.style.fontFamily = fontSelect;
    previewEmail.style.fontFamily = fontSelect;
    previewPhone.style.fontFamily = fontSelect;

    // Lägg till studentkortet i historiken
 /*    const studentCard = {
        fullname.unshift() 
    } */
    historySection.innerHTML = `Namn: ${fullname} <br> Email: ${email} <br> Telefon: ${phone} <br> Font: ${fontSelect}`

    // Spara och uppdatera historiken
    // Array som innehåller sparade studentkort

    history.unshift(historySection);

/*       if (errors.length > 0) {
        errors.forEach(function(message) {
        const liEl = document.createElement('li');
        liEl.textContent = message;

//li elementet kommer att ingå i ul errorList i HTML-filen
        errorList.appendChild(liEl);
        }) */

}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
/*     JSON.stringify(history)
    localStorage.setItem() */
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik
/* localStorage.getItem("nyckel");
JSON.parse() */
    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik
/* historySection.innerHTML = ""; */
    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {

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