function display() {
    // After translating, the dates in text nodes get replaced by <font> tags, so I'm creating separate scripts for the Portuguese and English
    
    //For English Translation
    //-----------------------------------------------------------------------------------------------------------------------
    //Publication Date
    console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span span :nth-child(2)").innerText);
    
    //Object
    console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span p").innerText);

    //Bidding Date
    console.log(document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span>font")[9].innerText);
    
    //Links
    let x = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .views-field-field-historico-da-licitacao tbody tr :nth-child(2) a");
    let allLinks = '';
    [].forEach.call(x, function (x) {
        allLinks = allLinks.concat(x.href, "\n");
    });
    console.log(allLinks);
    
    //For original page in Portuguese (Scripts for object and links are same)
    //------------------------------------------------------------------------------------------------------------------------
    //Publication Date
    var cloned =document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span span").cloneNode( true );
    var span=cloned.childNodes[0];
    var textnode = document.createTextNode('');
    cloned.replaceChild(textnode, span);
    console.log(cloned.innerText);
    
    //Object
    console.log(document.querySelector("#block-views-block-view-noticia-pbh-block-5 .views-field-nothing span p").innerText);

    //Bidding Date
    var cloned2 =document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .field-content>span")[6].cloneNode( true );
    var span2=cloned2.childNodes[0];
    var textnode2 = document.createTextNode('');
    cloned2.replaceChild(textnode2, span2);
    console.log(cloned2.innerText);
    
    //Links
    let x = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 .views-field-field-historico-da-licitacao tbody tr :nth-child(2) a");
    let allLinks = '';
    [].forEach.call(x, function (x) {
        allLinks = allLinks.concat(x.href, "\n");
    });
    console.log(allLinks);
    
}
