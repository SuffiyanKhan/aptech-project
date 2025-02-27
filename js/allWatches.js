const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('name');
console.log(productName)
document.querySelector("#heading").innerHTML = productName

fetch("../js/allWatchesData.json")
  .then(res => res.json())
  .then(async (data) => {
    const filteredData = data.allWatchData.filter(watch => watch.Gender === productName);
    const datas = await shuffleArray(filteredData)
    await datarender(datas)
  })

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array)
  return array;
}


let datarender = async (data) => {
  try {
    let allData = await data;
    allData.forEach(element => {
      console.log(element.thumbnail[0]);
      console.log(element);
      document.querySelector("#data").innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6"onclick="detailPage('${element.id}')">
          <div class="card"
            style="height:450px; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;border: none;cursor: pointer;">
            <img src="${element.image}" class="card-img-top" alt="Placeholder Image"
                    style="background-color: #fafafa; ">
            <div class="card-body">
              <h5 class="card-title" style="font-size:14px ;">
                ${element.Brand}</h5>
              <p class="card-text" style="font-size:14px ;">${element.title}</p>
              <p class="card-text" style="font-size:14px ;">${element.discountPrice
        }</p>
            </div>
          </div>
        </div>
            
            `;
    });
  } catch (error) {
    console.error(error.message);
  }
};

const detailPage = (id) => {
  const encodedName = encodeURIComponent(id);
  window.location.href = `../pages/shopdetailpage.html?id=${encodedName}`
}