const suggestionEL = document.querySelector("#auto-suggestion");
const suggestionInput = document.querySelector("#suggestion-input");
const suggestionButton = document.querySelector("#suggestion-button");
const suggestionList = document.querySelector("#suggestion-list");
const searchDisplay = document.querySelector("#search-display");
const keyWords = [];

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

window.addEventListener("load", () => {
  suggestionInput.focus();
});

function getCountry(country) {
  const word = country;
  const apiURL = `https://restcountries.com/v3.1/name/;`;
  console.log(apiURL);
}

suggestionInput.addEventListener("keyup", (event) => {
  suggestionList.innerHTML = "";
  if (event.keyCode === 13) {
    let country = document.createElement("a");

    country.innerHTML = `${suggestionInput.value} <br>`;
    country.href = `https://en.wikipedia.org/wiki/Main_Page/search?q=${country.textContent}`;
    country.target = "_blank";
    searchDisplay.appendChild(country);
    country.addEventListener("click", getCountry(country.textContent));

    return null;
  }
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    keyWords.push(event.key.toUpperCase());
  }
  if (event.keyCode === 8) {
    keyWords.pop();
  }

  let searchTerm = keyWords.join("");
  console.log(searchTerm);
  if (searchTerm) {
    let suggestionItems = countryList.filter((item) => {
      item = item.toUpperCase();
      if (item.startsWith(searchTerm, 0)) {
        console.log(item);
        return item;
      }
    });
    if (suggestionItems) {
      suggestionItems.forEach((suggestion) => {
        let listItem = document.createElement("li");
        listItem.innerText = suggestion;

        suggestionList.appendChild(listItem);

        listItem.addEventListener("click", (e) => {
          console.log(e.target.innerText);
          suggestionInput.value = e.target.textContent;
          suggestionList.innerHTML = "";
        });
      });
    }
  }
});

suggestionButton.addEventListener("click", () => {
  let country = document.createElement("a");

  country.innerHTML = `${suggestionInput.value} <br>`;
  country.href = `https://www.google.com/search?q=${country.textContent}`;
  country.target = "_blank";
  searchDisplay.appendChild(country);
  return null;
});
