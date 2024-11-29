fetch('https://raw.githubusercontent.com/kaislakudjoi/oppimistehtava3json/refs/heads/main/oppimistehtava3omajson.json')
    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        // Testataan onnistuuko json-luku
        // jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu
        // document.getElementById("vastaus").innerHTML =
        // "<p>Jatketaan harjoitusta</p>";

        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("tuloste").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(data) {
    let sisalto = "";
    sisalto += "<h1>" + data.yritys + "</h1>";
    sisalto += "<h2>Yhteystiedot</h2>";
    sisalto += "<p><strong>Osoite:</strong> " + data.yhteystiedot.osoite + "</p>";
    sisalto += "<p><strong>Puhelin:</strong> " + data.yhteystiedot.puhelin + "</p>";
    sisalto += "<p><strong>Email:</strong> " + data.yhteystiedot.email + "</p>";

    sisalto += "<h2>Tuotteet</h2>";
    sisalto += "<ul>";
    data.tuotteet.forEach(function (tuote) {
        sisalto += "<li>" + tuote + "</li>";
    });
    sisalto += "</ul>";

    sisalto += "<h2>Henkilökunta</h2>";
    sisalto += "<ul>";
    data.henkilokunta.forEach(function (hlo) {
        sisalto += "<li>" + hlo.nimi + " (" + hlo.titteli + ")</li>";
    });
    sisalto += "</ul>";

    document.getElementById("tuloste").innerHTML = sisalto;
}