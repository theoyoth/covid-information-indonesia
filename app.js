const url =
  "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

const container = document.getElementById("page-container");
const dataCovidContainer = document.getElementById("data-covid");
const darkLight = document.getElementById("icon-dark-light");
const darkLightIcon = document.getElementById("icon");

const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

async function getDataCovid() {
  const response = await fetch(url);
  const datas = await response.json();
  const features = datas.features;

  features.forEach((data, i) => {
    const box = document.createElement("div");
    box.setAttribute("class", "data-covid-content");
    const attribut = data.attributes;

    // create p element for provinsi
    const provinsi = document.createElement("p");
    provinsi.setAttribute("class", "provinsi data-covid-provinsi");
    provinsi.innerHTML = attribut.Provinsi;
    box.appendChild(provinsi);

    // create p element for Kasus_Semb
    const sembuh = document.createElement("p");
    sembuh.setAttribute("class", "sembuh result");
    sembuh.innerHTML = "Sembuh : " + attribut.Kasus_Semb;
    box.appendChild(sembuh);
    // Kasus_Posi
    const positif = document.createElement("p");
    positif.setAttribute("class", "positif result");
    positif.innerHTML = "Positif : " + attribut.Kasus_Posi;
    box.appendChild(positif);
    // Kasus_Meni
    const meninggal = document.createElement("p");
    meninggal.setAttribute("class", "meninggal result");
    meninggal.innerHTML = "Meninggal : " + attribut.Kasus_Meni;
    box.appendChild(meninggal);

    dataCovidContainer.appendChild(box);
  });
}
getDataCovid();

// ================== dark light mode ================== //
function changeDark() {
  container.classList.add("active-dark");
}
moonIcon.addEventListener("click", changeDark);

function changeLight() {
  container.classList.add("active-light");
  container.classList.remove("active-dark");
}
sunIcon.addEventListener("click", changeLight);
