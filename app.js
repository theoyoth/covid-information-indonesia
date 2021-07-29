// const url =
//   "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

const url =
  "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more";
const container = document.getElementById("page-container");
const dataCovidContainer = document.getElementById("data-covid");
const darkLight = document.getElementById("icon-dark-light");
const darkLightIcon = document.getElementById("icon");

const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

async function getDataCovid() {
  const response = await fetch(url);
  const datas = await response.json();
  // console.log(datas);

  datas.forEach((data, i) => {
    // console.log(data);
    const box = document.createElement("div");
    box.setAttribute("class", "data-covid-content");
    // create p element for provinsi
    const provinsi = document.createElement("p");
    provinsi.setAttribute("class", "provinsi data-covid-provinsi");
    provinsi.innerHTML = data.provinsi;
    box.appendChild(provinsi);
    // create box for data
    const boxDataSembuh = document.createElement("div");
    boxDataSembuh.setAttribute("class", "box-data-result");
    const boxDataPositif = document.createElement("div");
    boxDataPositif.setAttribute("class", "box-data-result");
    const boxDataMeninggal = document.createElement("div");
    boxDataMeninggal.setAttribute("class", "box-data-result");
    const boxDatakasusUpdate = document.createElement("div");
    boxDatakasusUpdate.setAttribute("class", "box-data-result");
    // create p element for Kasus_Semb
    const sembuh = document.createElement("p");
    sembuh.setAttribute("class", "sembuh result");
    const sembuhData = document.createElement("p");
    sembuhData.setAttribute("class", "sembuh-data");
    sembuh.innerHTML = "Sembuh ";
    sembuhData.innerHTML = ": " + data.sembuh;
    boxDataSembuh.appendChild(sembuh);
    boxDataSembuh.appendChild(sembuhData);
    box.appendChild(boxDataSembuh);
    // Kasus_Posi
    const positif = document.createElement("p");
    positif.setAttribute("class", "positif result");
    const positifData = document.createElement("p");
    positifData.setAttribute("class", "positif-data");
    positif.innerHTML = "Positif ";
    positifData.innerHTML = ": " + data.kasus;
    boxDataPositif.appendChild(positif);
    boxDataPositif.appendChild(positifData);
    box.appendChild(boxDataPositif);
    // Kasus_Meni
    const meninggal = document.createElement("p");
    meninggal.setAttribute("class", "meninggal result");
    const meninggalData = document.createElement("p");
    meninggalData.setAttribute("class", "meninggal-data");
    meninggal.innerHTML = "Meninggal ";
    meninggalData.innerHTML = ": " + data.meninggal;
    boxDataMeninggal.appendChild(meninggal);
    boxDataMeninggal.appendChild(meninggalData);
    box.appendChild(boxDataMeninggal);
    // latest update
    const kasusUpdate = document.createElement("p");
    kasusUpdate.setAttribute("class", "kasusUpdate result");
    const kasusUpdateData = document.createElement("p");
    kasusUpdateData.setAttribute("class", "kasus-update-data");
    kasusUpdate.innerHTML = "Tanggal update ";
    kasusUpdateData.innerHTML = ": " + data.last_date;
    boxDatakasusUpdate.appendChild(kasusUpdate);
    boxDatakasusUpdate.appendChild(kasusUpdateData);
    box.appendChild(boxDatakasusUpdate);

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

// search field
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const dataCovidSpesifik = document.getElementById("data-covid-spesifik");
btnSearch.addEventListener("click", function () {
  //  display none to class data-covid
  const boxContent = document.querySelector(".data-covid");
  boxContent.style.display = "none";
  // console.log(inputSearch.value);
  const urlSearch = `https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi?name=${inputSearch.value}`;

  async function getDataProvinsi() {
    const responseInput = await fetch(urlSearch);
    const dataInput = await responseInput.json();
    console.log(dataInput);

    dataInput.forEach((d) => {
      // console.log(d);
      // create box spesifik
      const boxSpesifik = document.createElement("div");
      boxSpesifik.setAttribute("class", "box-spesifik");

      // box for each data spesifik
      // box data sembuh spesifik
      const boxDataSembuhSpesifik = document.createElement("div");
      boxDataSembuhSpesifik.setAttribute(
        "class",
        "data-sembuh-spesifik data-spesifik"
      );
      // box data kasus spesifik
      const boxDataPositifSpesifik = document.createElement("div");
      boxDataPositifSpesifik.setAttribute(
        "class",
        "data-positif-spesifik data-spesifik"
      );
      // box data meninggal spesifik
      const boxDataMeninggalSpesifik = document.createElement("div");
      boxDataMeninggalSpesifik.setAttribute(
        "class",
        "data-meninggal-spesifik data-spesifik"
      );
      // create p element for provinsi
      const provinsiSpesifik = document.createElement("p");
      provinsiSpesifik.setAttribute("class", "data-covid-provinsi-spesifik");
      provinsiSpesifik.innerHTML = d.provinsi;
      boxSpesifik.appendChild(provinsiSpesifik);

      // create p element for sembuh
      const sembuhSpesifik = document.createElement("p");
      sembuhSpesifik.setAttribute("class", "sembuh-spesifik");
      const sembuhDataSpesifik = document.createElement("p");
      sembuhDataSpesifik.setAttribute(
        "class",
        "sembuh-data-spesifik result-spesifik"
      );
      sembuhSpesifik.innerHTML = "Sembuh ";
      sembuhDataSpesifik.innerHTML = ": " + d.sembuh;
      boxDataSembuhSpesifik.appendChild(sembuhSpesifik);
      boxDataSembuhSpesifik.appendChild(sembuhDataSpesifik);
      boxSpesifik.appendChild(boxDataSembuhSpesifik);
      // create p element for positif
      const positifSpesifik = document.createElement("p");
      positifSpesifik.setAttribute("class", "positif-spesifik");
      const positifDataSpesifik = document.createElement("p");
      positifDataSpesifik.setAttribute(
        "class",
        "positif-data-spesifik result-spesifik"
      );
      positifSpesifik.innerHTML = "Positif ";
      positifDataSpesifik.innerHTML = ": " + d.kasus;
      boxDataPositifSpesifik.appendChild(positifSpesifik);
      boxDataPositifSpesifik.appendChild(positifDataSpesifik);
      boxSpesifik.appendChild(boxDataPositifSpesifik);
      // create p element for meninggal
      const meninggalSpesifik = document.createElement("p");
      meninggalSpesifik.setAttribute("class", "meninggal-spesifik");
      const meninggalDataSpesifik = document.createElement("p");
      meninggalDataSpesifik.setAttribute(
        "class",
        "meninggal-data-spesifik result-spesifik"
      );
      meninggalSpesifik.innerHTML = "Meninggal ";
      meninggalDataSpesifik.innerHTML = ": " + d.meninggal;
      boxDataMeninggalSpesifik.appendChild(meninggalSpesifik);
      boxDataMeninggalSpesifik.appendChild(meninggalDataSpesifik);
      boxSpesifik.appendChild(boxDataMeninggalSpesifik);

      // display the data
      dataCovidSpesifik.appendChild(boxSpesifik);
    });
  }

  getDataProvinsi();
});
