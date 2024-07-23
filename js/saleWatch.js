fetch("../js/saleWatches.json")
    .then(res => res.json())
    .then(async(data) => {
        const products = await shuffleArray(data.saleWatchData)
        products.forEach(element => {
            document.querySelector("#data").innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card"style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;border: none;cursor: pointer;"onclick="detailPage('${element.id}')">
                        <img src="${element.image}" class="card-img-top" alt="Placeholder Image"style="background-color: #fafafa; ">
                        <div class="card-body">
                            <h5 class="card-title"style="font-size:14px ;">
                            ${element.Brand}</h5>
                            <p class="card-text"style="font-size:14px ;">${truncateTitle(element.title, 4)}</p>
                        </div>
                    </div>
                </div>
            `

        });

    })
    .catch(error => console.log(error.message))
    
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array;
}

function truncateTitle(title, wordLimit) {
    const words = title.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
}
let detailPage = (id) => {
    const encodedName = encodeURIComponent(id);
    window.location.href = `../pages/../pages/shopdetailpage.html?id=${encodedName}`
}