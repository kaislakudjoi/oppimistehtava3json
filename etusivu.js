fetch('https://jaakkola.github.io/json/digitekniikat.json')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {

        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";

    })

function kerro(data) {
    //muuttujan testi, johon tulostettava tieto kerätään
    var teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<p>" + data.kuvaus + "</p>"
    teksti = teksti + "<p><img src ='" + data.kuva + "' alt='kuva' ></p>";
    teksti = teksti + "<h3>" + data.opintojakso.nimi + " " +
        data.opintojakso.tunnus + ", opintopisteet: " + data.opintojakso.opintopisteet + "</h3>";

    //taulukon sisältö listaelementtiin
    teksti = teksti + "<ul>";

    //taulukon käsittely for lauseessa
    for (var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }

    //objektitaulun käsittely
    teksti = teksti + "<h3>Linkit</h3><ul>";
    for (var i = 0; i < data.tekniikat.length; i++) {
        teksti = teksti + "<li>" + data.tekniikat[i].aihe + " <a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki +
            "</a></li>";
    }

    //listaelementti kiinni
    teksti = teksti + "</ul>"

    //Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
}






