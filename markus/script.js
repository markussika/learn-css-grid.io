// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

/**
 * Maina motīvu, kad izvēlas izvēles rūtiņu
 */
function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}

const visasPareizasAtbildes = ["Indonēzija", "Austrālija", "Liepāja"];

for (let i = 1; i <= 3; i++) {
  const visasAtbildes = document.getElementsByName(i);

  visasAtbildes.forEach((atbilde) => {
    atbilde.addEventListener("click", () =>
      checkHandler(visasPareizasAtbildes[i - 1], visasAtbildes)
    );
  });
}

/**
 * Iekrāso atbildes vienā jautājumā
 * @param {string} pareizaAtbilde - Pareizā atbilde ar vārdiem, jāsakrīt ar value.
 * @param {NodeList} visasAtbildes - 4 input elementi, atbildes uz jautājumu
 */
function checkHandler(pareizaAtbilde, visasAtbildes) {
  console.log(visasAtbildes);
  visasAtbildes.forEach((atbilde) => {
    if (atbilde.checked == true) {
      if (atbilde.value == pareizaAtbilde) {
        atbilde.parentNode.style.backgroundColor = "green";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  });
}
