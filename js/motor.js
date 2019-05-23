cargarDiscos();

function cargarDiscos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);

        }

    };
    xhr.open('GET', 'tecnologia.xml', true);
    xhr.send();
}

function cargarXML(xml) {

    var docXML = xml.responseXML;
    var item = docXML.querySelectorAll('item');
    var plantilla = "";

    for (var i = 0; i < item.length; i++) {

        var titulo = item[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
        var link = item[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;
        var img = item[i].getElementsByTagName('enclosure')[0].attributes['url'].value;
        var description = item[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
        var pubDate = item[i].getElementsByTagName('pubDate')[0].childNodes[0].nodeValue;
        plantilla = '<div class="cont2"><div class="Ddisco"><a class="noStyleA" href="' + link + '" target="_blank"><h2>' + titulo +
            '</h2></a></div><div class="img"><img class="imgS" src="' + img + '"></div><div class="txtDesc"><p> ' + description +
            '</p></div><div><p class="pubTxt"> ' + pubDate + '</p></div> </div>';

        document.querySelector('.contenedor').innerHTML += plantilla;
    }

}