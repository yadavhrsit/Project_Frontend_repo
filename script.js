// api url
const getCollectionsapi_url =
    "http://localhost:5000/auth/getCollections";
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data;
}
var i = 1;
var data = getapi(getCollectionsapi_url).then((result) => {
    result.forEach(element => {
        for (const [key, value] of Object.entries(element)) {
            var title = null;
            var img = null;
            if (key == "name") {
                title = value;
                var insertHtml = `<div class="main-collections-card">
    <div class="main-collections-card-img col${i}"></div>
    <div class="main-collections-card-title">${title}</div>
</div>`;
                console.log(insertHtml)
                document.getElementsByClassName("main-collections")[0].innerHTML += insertHtml;
            }
            else {
                img = `"url(${value})"`;
                console.log(img)
                //document.getElementsByClassName("main-collections-card-img")[i].style.backgroundImage = img;
            }

        } i++;
    });

}).catch((err) => {

});



