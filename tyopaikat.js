fetch('https://gis.vantaa.fi/rest/tyopaikat/v1/Varhaiskasvatus')
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
        
        sisalto += "<h1>Työpaikat</h1>";
        sisalto += "<ul>";
    
        data.forEach(function (tyopaikka) {
            sisalto += "<li>";
            sisalto += "<strong>Työtehtävä:</strong> " + tyopaikka.tyotehtava + "<br>";
            sisalto += "<strong>Osoite:</strong> " + tyopaikka.osoite + "<br>";
            sisalto += "<strong><a href='" + tyopaikka.linkki + "' target='_blank'>Linkki työpaikkailmoitukseen</a></strong>";
            sisalto += "<br><br>";
            sisalto += "</li>";
        });
    
        sisalto += "</ul>";
    
        document.getElementById("tyopaikka").innerHTML = sisalto;
    }