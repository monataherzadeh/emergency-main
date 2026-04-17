//INFOGRAPHIC

document.querySelector("#_Blanket_").addEventListener("click", infoBlanket);
document.querySelector("#_Moon_").addEventListener("click", infoMoon);
document.querySelector("#_Mirror_").addEventListener("click", infoMirror);

function infoBlanket() {
  console.log("infoBlanket");
  document.querySelector(".info-text > h2").textContent = "FLYVENDE OBJEKTER";
  document.querySelector(".info-subheadline").textContent =
    "Objekter der bevæger sig uden forklaring.";
  document.querySelector("#efficiency").innerHTML =
    "<p>Hvis dynen svæver af sig selv, er det sjældent træk fra vinduet.</p>\
    <p>Paranormale hændelser starter ofte med små bevægelser i hverdagsobjekter.<p>\
    <p><strong>Tip:</strong> Hvis du stadig kan bruge en computer mens det sker, er du sandsynligvis ikke et spøgelse endnu.</p>";
}

function infoMoon() {
  console.log("infoMoon");
  document.querySelector(".info-text > h2").textContent = "KOSMISK AKTIVITET";

  document.querySelector(".info-subheadline").textContent =
    "Kosmisk aktivitet registreret.";

  document.querySelector("#efficiency").innerHTML =
    "<p>Månen forbindes ofte med øget paranormal aktivitet.</p>\
     <p>Skygger kan opføre sig anderledes under månelys.</p>\
     <p>Hvis månen virker tættere end normalt, anbefales det at dobbelttjekke virkeligheden.</p>";

  const moon = document.querySelector("#_Moon_");
  moon.style.setProperty("--moon-scale", "2");
}

function infoMirror() {
  console.log("infoMirror");
  document.querySelector(".info-text > h2").textContent = "REFLEKSION";

  document.querySelector(".info-subheadline").textContent =
    "Refleksion bekræftet.";

  document.querySelector("#efficiency").innerHTML =
    "<p>Se i spejlet.</p>\
     <p>Kan du se din refleksion? Godt tegn.</p>\
     <p>Kan du også klikke rundt på denne hjemmeside? Endnu bedre.</p>\
     <p><strong>Konklusion:</strong> Spøgelser har generelt svært ved at bruge computere.</p>";
}

// FORM
const form = document.querySelector("form");

form.addEventListener("invalid", cancelPopup, true);

function cancelPopup() {
  console.log("cancelPopup");
}
