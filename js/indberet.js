// FORM
const form = document.querySelector("#webform");

if (form) {
  form.addEventListener("submit", submitForm);
}

function submitForm(e) {
  e.preventDefault();

  const navn = document.querySelector("#firstname").value;
  const kodeord = document.querySelector("#pw").value;
  const alder = document.querySelector("#num").value;
  const email = document.querySelector("#email").value;
  const telefon = document.querySelector("#tel").value;
  const dato = document.querySelector("#date").value;
  const tidspunkt = document.querySelector("#time").value;
  const kommentar = document.querySelector("#comment").value;
  const zombier = document.querySelector("#slider").value;

  // checkbox værdier
  const oplevelser = [];
  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((box) => oplevelser.push(box.parentElement.textContent.trim()));

  // radio værdi
  let fare = "Ikke valgt";
  const valgtRadio = document.querySelector('input[name="danger"]:checked');

  if (valgtRadio) {
    fare = valgtRadio.parentElement.textContent.trim();
  }

  // VIS I SUMMARY
  document.querySelector(".placeholder").innerHTML = `
    <h3>Rapport modtaget</h3>
    <p><strong>Navn:</strong> ${navn}</p>
    <p><strong>Kodeord:</strong> ${kodeord}</p>
    <p><strong>Alder:</strong> ${alder}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${telefon}</p>
    <p><strong>Dato:</strong> ${dato}</p>
    <p><strong>Oplevelse:</strong> ${oplevelser.join(", ")}</p>
    <p><strong>Risiko:</strong> ${fare}</p>
    <p><strong>Tidspunkt:</strong> ${tidspunkt}</p>
    <p><strong>Zombier:</strong> ${zombier}</p>
    <p><strong>Beskrivelse:</strong> ${kommentar}</p>
  `;

  form.reset();
  document.querySelector("#slider-value").textContent = "0";
}

// SLIDER
const slider = document.querySelector("#slider");

if (slider) {
  slider.addEventListener("input", updateResult);
}

function updateResult() {
  document.querySelector("#slider-value").textContent = slider.value;
}
