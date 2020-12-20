function display() {
    //please translate to English before running the scripts
    console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span span :nth-child(2)").innerText);

    console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span p").innerText);


    console.log(document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span>font")[9].innerText);

    let x = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .views-field-field-historico-da-licitacao tbody tr :nth-child(2) a");

    let allLinks = '';
    [].forEach.call(x, function (x) {
        allLinks = allLinks.concat(x.href, "\n");
    });
    console.log(allLinks);
}