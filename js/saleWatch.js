fetch("../js/saleWatches.json")
    .then(res => res.json())
    .then(data => {
        data.saleWatchData.forEach(element => {
            document.querySelector("#data").innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card"style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;border: none;cursor: pointer;"onclick="detailPage('${element.name}')">
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
function truncateTitle(title, wordLimit) {
    const words = title.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
}
let detailPage = (name) => {
    const encodedName = encodeURIComponent(name);
    window.location.href = `../pages/saleWatchesDetailPage.html?name=${encodedName}`
}