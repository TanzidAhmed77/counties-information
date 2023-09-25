const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (country) => {
  const ul = document.getElementById("user-list");

  country.forEach((country) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>Country Name: ${country.name.common}</p>
    <p>Capital: ${country.capital}</p>
    <p>Region: ${country.region}</p>
    <button title="Details" onclick="details('${country.cca2}')">Details</button>
    `;
    ul.appendChild(li);
    li.classList.add("styles");
  });
};

loadData();

const details = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};

const displayDetails = (country) => {
  const details = document.getElementById("details-info");
  details.innerHTML = `
  <img src="${country.flags.png}" alt="">
  <h1>${country.name.official}</h1>
  <h3>Name: ${country.name.common}</h3>
  <p>Capital: ${country.capital}</p>
  <p>Region: ${country.region}</p>
  <p>Subregion: ${country.subregion}</p>
  <p>Language: ${country.languages.ben}</p>
  <p>Area: ${country.area}</p>
  <p>Population: ${country.population}</p>
  <button id="refreshButton">Go Back</button>
  `;
  document.getElementById("refreshButton").onclick = () => {
    window.location.reload();
  };
};

const search = () => {
  const input = document.getElementById("search-input");
  const inputValue = input.value;
  input.value = "";
  loadSearch(inputValue);
};
const loadSearch = (value) => {
  url = `https://restcountries.com/v3.1/name/${value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchData(data[0]));
};
const displaySearchData = (country) => {
  const div = document.getElementById("search-result");
  div.style.display = "block";
  div.innerHTML = `
  <img style="position: absolute; left: 30%; ;" src="${country.flags.png}" alt="">
  <p>Country Name: ${country.name.common}</p>
  <p>Capital: ${country.capital}</p>
  <p>Region: ${country.region}</p>
  <button title="Details" onclick="details('${country.cca2}')">Details</button>
  `;
};
