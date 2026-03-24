let selectedNote = 0;
function showSection(id){

    let sections = document.querySelectorAll(".menu-section");
    let apropos = document.getElementById("apropos");
    let contact = document.getElementById("contact");

    // Cacher toutes les sections menu
    sections.forEach(function(sec){
        sec.style.display = "none";
    });

    // Afficher la section demandée
    document.getElementById(id).style.display = "block";

    // Cacher À propos et Contact quand on progresse
    apropos.style.display = "none";
    contact.style.display = "none";
}
function retour(){

    let sections = document.querySelectorAll(".menu-section");
    let apropos = document.getElementById("apropos");
    let contact = document.getElementById("contact");

    sections.forEach(function(sec){
        sec.style.display = "none";
    });

    // Réafficher À propos et Contact
    apropos.style.display = "block";
    contact.style.display = "block";
}

function commander(message){

    let text = "Bonjour Délices Royale 👑%0AJe souhaite commander :%0A" + message;

    window.open("https://wa.me/22670017372?text=" + text, "_blank");
}

function commanderPersonnalise(){

    let nom = document.getElementById("nomClient").value;
    let date = document.getElementById("dateEvent").value;
    let details = document.getElementById("details").value;

    let text = "Bonjour Délices Royale je commande Gateau Mariage personnalisé 👑%0A";
    text += "Nom sur le gateau : " + nom + "%0A";
    text += "Date : " + date + "%0A";
    text += "Détails : " + details;

    window.open("https://wa.me/22670017372?text=" + text, "_blank");
}
function ouvrirImage(src){

    let modal = document.getElementById("imageModal");
    let image = document.getElementById("imageGrande");

    image.src = src;
    modal.style.display = "flex";
}

function fermerImage(){
    document.getElementById("imageModal").style.display = "none";
}
function commanderAnniversaire(){

    let nom = document.getElementById("nomAnniv").value;
    let prenom = document.getElementById("prenomAnniv").value;
    let date = document.getElementById("dateAnniv").value;
    let details = document.getElementById("detailsAnniv").value;

    let text = "Bonjour Délices Royale 👑%0A";
    text += "Commande personnalisée Anniversaire :%0A";
    text += "Nom client : " + nom + "%0A";
    text += "Nom sur gâteau : " + prenom + "%0A";
    text += "Date : " + date + "%0A";
    text += "Détails : " + details;

    window.open("https://wa.me/22670017372?text=" + text, "_blank");
}

document.getElementById("commandeForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let montant = document.getElementById("montant").value;
    let date = document.getElementById("date").value;
    let erreur = document.getElementById("erreur");

    if (montant < 5000) {
        erreur.textContent = "Le montant minimum est 5000 FCFA.";
        return;
    }

    erreur.textContent = "";

    let message = `Bonjour, je suis ${nom}.
Je souhaite commander du Gonré.
Montant: ${montant} FCFA
Date de la cérémonie: ${date}`;

    let numero = "22657376775"; // Mets ton numéro ici
    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});
let stars = document.querySelectorAll(".star");
let noteText = document.getElementById("noteText");

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        let value = this.getAttribute("data-value");

        stars.forEach(function(s) {
            s.classList.remove("active");
        });

        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }

        noteText.textContent = "Vous avez donné " + value + " étoile(s) ⭐";

    });

});

let prixPlatRiz = 1000;

let champQuantiteRiz = document.getElementById("nbRiz");
let champLivraisonRiz = document.getElementById("livraisonRiz");
let champTotalRiz = document.getElementById("totalRizCommande");
let messageRizCommande = document.getElementById("infoCommandeRiz");

function toggleRiz(){

let zone = document.getElementById("zoneCommandeRiz");

if(zone.style.display === "none" || zone.style.display === ""){
zone.style.display = "block";
}else{
zone.style.display = "none";
}

}

function calculerCommandeRiz(){

let q = parseInt(champQuantiteRiz.value) || 0;

let montant = q * prixPlatRiz;

if(champLivraisonRiz.value === "oui"){

montant += 1000;

}

champTotalRiz.value = montant + " FCFA";

}

champQuantiteRiz.addEventListener("input", calculerCommandeRiz);
champLivraisonRiz.addEventListener("change", calculerCommandeRiz);

document.getElementById("formCommandeRiz").addEventListener("submit",function(e){

e.preventDefault();

let nomClient = document.getElementById("clientRiz").value;
let quantiteCommande = parseInt(champQuantiteRiz.value) || 0;
let optionLivraison = champLivraisonRiz.value;
let detailCommande = document.getElementById("detailRiz").value;

if(quantiteCommande < 1){

messageRizCommande.style.color="red";
messageRizCommande.textContent="Minimum 1 plat requis";
return;

}

let montant = quantiteCommande * prixPlatRiz;

if(optionLivraison === "oui"){
montant += 1000;
}

messageRizCommande.style.color="green";
messageRizCommande.textContent="Redirection vers WhatsApp...";

let texteCommande =
`Bonjour je suis ${nomClient}

Commande : Riz Gras
Nombre de plats : ${quantiteCommande}
Livraison : ${optionLivraison}
Détail : ${detailCommande}
Total : ${montant} FCFA`;

let numeroRestaurant = "22670017372";
envoyerAvecPosition(
messageRizCommande,
numeroRestaurant,
optionLivraison
);
});
    
let chepType = document.getElementById("chepType");
let chepQuantite = document.getElementById("chepQuantite");
let chepLivraison = document.getElementById("chepLivraison");
let chepTotal = document.getElementById("chepTotal");

function calculChep() {

    let prix = parseInt(chepType.value);
    let quantite = parseInt(chepQuantite.value) || 0;

    let total = prix * quantite;

    if (chepLivraison.value === "oui") {
        total += 1000;
    }

    chepTotal.value = total + " FCFA";
}

chepType.addEventListener("change", calculChep);
chepQuantite.addEventListener("input", calculChep);
chepLivraison.addEventListener("change", calculChep);

document.getElementById("chepForm").addEventListener("submit", function(e){

e.preventDefault();

let nom = document.getElementById("chepNom").value;

let typeSelect = document.getElementById("chepType");
let type = typeSelect.options[typeSelect.selectedIndex].text;

let quantite =
document.getElementById("chepQuantite").value;

let livraison =
document.getElementById("chepLivraison").value;

let detail =
document.getElementById("chepDetail").value;

let total =
document.getElementById("chepTotal").value;


let message =
`Bonjour, je suis ${nom}

Commande Chep:
Type : ${type}
Nombre de plats : ${quantite}
Livraison : ${livraison}
Détail : ${detail}
Total : ${total}`;


let numero = "22670017372";
envoyerAvecPosition(
message,
numero,
livraison
);

});

document.addEventListener("DOMContentLoaded", function() {

    let stars = document.querySelectorAll(".star");
    let noteText = document.getElementById("noteText");

    stars.forEach(function(star) {

        star.addEventListener("click", function() {

            selectedNote = this.getAttribute("data-value");

            stars.forEach(function(s) {
                s.classList.remove("active");
            });

            for (let i = 0; i < selectedNote; i++) {
                stars[i].classList.add("active");
            }

            noteText.textContent = "Vous avez donné " + selectedNote + " étoile(s)";
        });

    });

});
function envoyerAvis() {

    let commentaire = document.getElementById("avisCommentaire").value;

    if (selectedNote == 0 || commentaire === "") {
        alert("Veuillez donner une note et écrire un commentaire.");
        return;
    }

    let nouveau = document.createElement("div");
    nouveau.classList.add("commentaire");

    nouveau.innerHTML = `
        <strong>${"⭐".repeat(selectedNote)}</strong>
        <p>${commentaire}</p>
    `;

    document.getElementById("listeCommentaires").prepend(nouveau);

    document.getElementById("avisCommentaire").value = "";
    selectedNote = 0;
}
function showSection(id) {

    // Cacher le menu principal
    document.getElementById("menu").style.display = "none";

    // Cacher toutes les catégories
    let sections = document.querySelectorAll(".menu-section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Afficher seulement celle qu’on clique
    document.getElementById(id).style.display = "block";
}
function retour() {

    // Réafficher menu principal
    document.getElementById("menu").style.display = "block";

    // Cacher toutes les catégories
    let sections = document.querySelectorAll(".menu-section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });
}
function ouvrirFormGonre(){
   let form = document.getElementById("formCommandeGonre");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}

function choixCommandeGonre(){

   let type = document.getElementById("typeCommandeGonre").value;

   if(type === "gonre"){
      document.getElementById("blocQuantiteGonre").style.display = "block";
      document.getElementById("blocQuantiteKoum").style.display = "none";
   }
   else if(type === "combo"){
      document.getElementById("blocQuantiteGonre").style.display = "block";
      document.getElementById("blocQuantiteKoum").style.display = "block";
   }
}

function calculPrixGonre(){

   let nbG = parseInt(document.getElementById("nbPlatGonre").value) || 0;
   let nbK = parseInt(document.getElementById("nbPlatKoum").value) || 0;

   let total = (nbG * 500) + (nbK * 500);

   let livraison = document.getElementById("livraisonGonre").value;

   if(livraison === "oui"){
      total += 1000;
   }

   document.getElementById("prixTotalGonre").innerText = total;
}

function envoyerCommandeGonre(){

   let nom = document.getElementById("nomClientGonre").value;
   let nbG = document.getElementById("nbPlatGonre").value;
   let nbK = document.getElementById("nbPlatKoum").value;
   let livraison = document.getElementById("livraisonGonre").value;
   let total = document.getElementById("prixTotalGonre").textContent;

   let texteLivraison =
   (livraison === "oui") ?
   "Oui (+1000 FCFA)" : "Non";

   let message =
      "Bonjour, je suis : " + nom + "\n\n" +
      "Commande :\n" +
      "Gonré : " + nbG + "\n" +
      "Koumvando : " + nbK + "\n" +
      "Livraison : " + texteLivraison + "\n\n" +
      "Prix Total : " + total + " FCFA";

   let numero = "22657376775";

envoyerAvecPosition(
message,
numero,
livraison
);
}

function OuvrirForm(){

   let form = document.getElementById("FormCommande");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}

function ChoiCommande(){
   let type = document.getElementById("TypCommande").value;

   if(type === "Gonre"){
      document.getElementById("quantite1").style.display = "block";
      document.getElementById("quantite2").style.display = "none";
   }
   else if(type === "Combo"){
      document.getElementById("quantite1").style.display = "block";
      document.getElementById("quantite2").style.display = "block";
   }
}

document.addEventListener("input", function(){
   CalculPrix();
});
function CalculPrix(){

   let NbG = parseInt(document.getElementById("NbGonre").value) || 0;
   let NbK = parseInt(document.getElementById("NbKoum").value) || 0;

   let total = (NbG * 500) + (NbK * 500);

   let livraison = document.getElementById("livraisonmet").value;

   if(livraison === "oui"){
      total += 1000;
   }

   document.getElementById("PrixTotal").innerText = total;
}
function envoyeCommande(){

   let NoM = document.getElementById("NoMClient").value;
   let nbG = document.getElementById("NbGonre").value;
   let nbK = document.getElementById("NbKoum").value;
   let livraison = document.getElementById("livraisonmet").value;
   let texteLivraison = (livraison == "oui") ? "Oui (+1000 FCFA)" : "Non";
   let total = document.getElementById("PrixTotal").textContent;

   let message =
      "Bonjour, je suis : " + NoM + "\n\n" +
      "Commande :\n" +
      "Gonré : " + nbG + "\n" +
      "Koumvando : " + nbK + "\n" +
      "Livraison : " + texteLivraison + "\n\n" +
      "Prix Total : " + total + " FCFA";

   let numero = "22657376775"; // ton numéro sans +
envoyerAvecPosition(
message,
numero,
livraison
);
   
}
function OuvrirFor(){

   let form = document.getElementById("Commande");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}
function uvrirForm(){

   let form = document.getElementById("Formommande");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}
function ouvrirFORm(){

   let form = document.getElementById("Céré");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}

function buvrirForm(){

   let form = document.getElementById("Formomman");

   if(form.style.display === "block"){
      form.style.display = "none";
   } else {
      form.style.display = "block";
   }
}
// OUVRIR / FERMER
function toggleForm(id){
   let form = document.getElementById(id);

   if(form.style.display === "none" || form.style.display === ""){
      form.style.display = "block";
   } else {
      form.style.display = "none";
   }
}

// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", function() {

    // OUVRIR / FERMER FORMULAIRE
    window.ouvrirPremium = function(button) {

        let card = button.closest(".card");
        let form = card.querySelector(".commande-form");

        document.querySelectorAll(".commande-form").forEach(f => {
            if (f !== form) f.style.display = "none";
        });

        form.style.display =
            form.style.display === "block" ? "none" : "block";
    };


    // CALCUL AUTOMATIQUE
    document.addEventListener("input", function(e) {

        let form = e.target.closest(".commande-form");
        if (!form) return;

        let prix = parseInt(form.dataset.prix) || 0;
        let quantite = parseInt(form.querySelector(".quantite")?.value) || 0;
        let livraison = parseInt(form.querySelector(".livraison")?.value) || 0;

        let total = (quantite * prix) + livraison;

        form.querySelector(".total").innerText =
            total.toLocaleString();
    });


    // LANCER COMMANDE
document.addEventListener("click", function(e) {

    if (!e.target.classList.contains("btn-commander")) return;

    let form = e.target.closest(".commande-form");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let nom = form.querySelector(".nom-client").value;
    let quantite = form.querySelector(".quantite").value;
    let livraisonValue = form.querySelector(".livraison").value;
    let livraison = livraisonValue == "1000" ? "Oui" : "Non";
    let total = form.querySelector(".total").innerText;

    let message =
`Bonjour, je souhaite commander :

Nom : ${nom}
Quantité : ${quantite}
Livraison : ${livraison}
Total : ${total} F CFA`;

    let numero = "22670017372";

    envoyerAvecPosition(
   message,
   numero,
   livraisonValue
);

});

});
window.ouvrirPremium = function(button) {

    let card = button.closest(".card");
    if (!card) return;

    // Prend simplement le formulaire dans la card (peu importe sa classe)
    let form = card.querySelector("form");
    if (!form) return;

    // Fermer tous les autres formulaires
    document.querySelectorAll(".card form").forEach(f => {
        if (f !== form) {
            f.style.display = "none";
        }
    });

    // Ouvrir / fermer celui cliqué
    form.style.display =
        form.style.display === "block" ? "none" : "block";
};
// Récupération des éléments principaux
const header = document.getElementById("header");
const apropos = document.getElementById("apropos");
const menuPrincipal = document.getElementById("menu"); // menu principal
const accueil = document.getElementById("accueil");   // section accueil
const menuSections = document.querySelectorAll(".menu-section"); // sous-menus

// Fonction pour afficher une section
function showSection(id) {
    // Masquer toutes les sous-sections sauf le menu principal
    menuSections.forEach(sec => {
        if (sec.id !== "menu") {
            sec.style.display = "none";
        }
    });

    if (id === "menu") {
        // Afficher le menu principal et header
        menuPrincipal.style.display = "block";
        if (header) header.style.display = "block";
        if (apropos) apropos.style.display = "block";
        if (accueil) accueil.style.display = "block";
    } else if (id === "accueil") {
        // Afficher l'accueil uniquement, masquer les sous-menus
        if (header) header.style.display = "block";
        if (apropos) apropos.style.display = "block";
        if (accueil) accueil.style.display = "block";
        // masquer les sous-menus
        menuSections.forEach(sec => {
            if (sec.id !== "menu") sec.style.display = "none";
        });
    } else {
        // Afficher la sous-section
        const section = document.getElementById(id);
        if (section) section.style.display = "block";
        // Masquer menu et accueil
        menuPrincipal.style.display = "none";
        if (header) header.style.display = "none";
        if (apropos) apropos.style.display = "none";
        if (accueil) accueil.style.display = "none";
    }

    // Mettre à jour le hash
    window.location.hash = "#" + id;
}

// Bouton retour
function retour(destination) {
    if (!destination) destination = "menu"; // par défaut retour au menu principal
    showSection(destination);
}

// Au chargement de la page
window.addEventListener("load", () => {
    // Laisser le menu principal affiché par défaut
    menuPrincipal.style.display = "block";
    if (header) header.style.display = "block";
    if (apropos) apropos.style.display = "block";
    if (accueil) accueil.style.display = "block";

    // Masquer uniquement les sous-menus (sauf menu)
    menuSections.forEach(sec => {
        if (sec.id !== "menu") sec.style.display = "none";
    });
});

// Gestion du hash du navigateur
window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection("accueil");
    }
});
// ouvrir formulaire
document.querySelectorAll(".ouvrir-commande").forEach(function(btn){

    btn.addEventListener("click", function(){

        let bloc = btn.parentElement;
        let form = bloc.querySelector(".commande-zam");

        if(form.style.display === "none"){
            form.style.display = "block";
        }else{
            form.style.display = "none";
        }

    });

});


// envoi whatsapp
document.querySelectorAll(".commande-zam").forEach(function(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let name = form.querySelector(".name").value;
        let somme = form.querySelector(".somme").value;
        let jour = form.querySelector(".jour").value;
        let euror = form.querySelector(".euror");

        if(somme < 5000){
            euror.textContent = "Le montant minimum est 5000 FCFA";
            return;
        }

        euror.textContent = "";

        let message =
        "Nouvelle commande Zamnin:%0A" +
        "Nom : " + name + "%0A" +
        "Montant : " + somme + " FCFA%0A" +
        "Date cérémonie : " + jour;

        let numero = "22657376775";

        window.open("https://wa.me/" + numero + "?text=" + message, "_blank");

    });
let etoiles = document.querySelectorAll(".etoiles span");
let noteInput = document.getElementById("note");
etoiles.forEach((etoile, index) => {

etoile.addEventListener("click", () => {

let note = etoile.dataset.value;

noteInput.value = note;

etoiles.forEach((e,i)=>{
e.classList.toggle("active", i < note);
});

});

});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
  .then(function() {
    console.log("Service Worker enregistré");
  });
}
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
const iosInstall = document.getElementById("iosInstall");

});

const container = document.getElementById("installContainer");

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isInStandaloneMode() {
  return ('standalone' in window.navigator) && (window.navigator.standalone);
}

if (isIos() && !isInStandaloneMode()) {
  container.style.display = "block";
  iosInstall.style.display = "block";
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  container.style.display = "block";
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();

  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === "accepted") {
    console.log("Application installée");
  }

  deferredPrompt = null;
});
window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "48f36667-cbe5-4368-88ec-0f4f6569e77c",

    serviceWorkerPath: "OneSignalSDKWorker.js",
    serviceWorkerParam: { scope: "/D-lice-royal/" },

    notifyButton: {
      enable: true
    },
	allowLocalhostAsSecureOrigin: true
  });
});
window.onload = function(){
if(localStorage.getItem("popupDejaVu")){
document.getElementById("popup").style.display = "none";
}
}

function fermerPopup(){
document.getElementById("popup").style.display = "none";
localStorage.setItem("popupDejaVu", "oui");
}
window.addEventListener("load", function(){
let loader = document.getElementById("loader");

setTimeout(()=>{
loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
}, 500);

}, 500);
});
document.querySelectorAll(".livraison").forEach(function(select){

select.addEventListener("change", function(){

let form = select.closest("form");
let position = form.querySelector(".position");

if(select.value == "1000"){

position.style.display = "block";

}else{

position.style.display = "none";
position.value = "";

}

});

});
function envoyerAvecPosition(message, numero, livraison){

// si pas de livraison → envoi direct
if(livraison != "oui" && livraison != "1000"){

ouvrirWhatsApp(message, numero);
return;

}


// on prépare un envoi de secours
let dejaEnvoye = false;

function envoyer(messageFinal){

if(!dejaEnvoye){

dejaEnvoye = true;
ouvrirWhatsApp(messageFinal, numero);

}
}

// si GPS disponible
if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

function(position){

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

let lienPosition =
"https://maps.google.com/?q=" +
latitude + "," + longitude;

envoyer(
message +
"\n\nPosition : " +
lienPosition
);

},

function(){

envoyer(
message +
"\n\nPosition : non disponible"
);

},

{
enableHighAccuracy:true,
timeout:6000
}

);


// sécurité : si GPS bloque trop longtemps
setTimeout(function(){

envoyer(
message +
"\n\nPosition : non détectée"
);

}, 7000);


}else{

envoyer(message);

}

}



function ouvrirWhatsApp(message, numero){

let url =
"https://wa.me/" +
numero +
"?text=" +
encodeURIComponent(message);


// meilleur pour téléphone
window.location.href = url;

}
function payer(btn){

let nom = document.querySelector(".nom").value;
let total = document.querySelector(".total").innerText;

if(!nom){

alert("Entre ton nom");

return;

}

fetch("https://paydunya-server-gpg1.onrender.com/payer",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({

montant: total,
nom: nom

})

})

.then(res=>res.json())

.then(data=>{

PayDunya.setup({

masterKey:data.masterKey,

privateKey:data.privateKey,

publicKey:data.publicKey,

token:data.token,

mode:"test"

});

PayDunya.CheckoutInvoice({

total_amount: total,

description:"Commande nourriture",

customer_info:{

fullname: nom

}

});

})

.catch(error=>{

alert("Erreur connexion serveur");

console.log(error);

});

}