fetch('https://raw.githubusercontent.com/kaislakudjoi/oppimistehtava3json/refs/heads/main/palaveri.json')
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
    
        sisalto += "<h1>Palaveri: " + data.palaveri.aihe + "</h1>";
    
        sisalto += "<h2>Osallistujien määrä</h2>";
        sisalto += "<p>" + data.palaveri.osallistujien_lukumäärä + " osallistujaa</p>";
    
        sisalto += "<h2>Osallistujat</h2>";
        sisalto += "<ul>";
        data.palaveri.osallistujat.forEach(function (osallistuja) {
            sisalto += "<li>" + osallistuja + "</li>";
        });
        sisalto += "</ul>";
    
        sisalto += "<h2>Paikka</h2>";
        sisalto += "<p>" + data.palaveri.paikka + "</p>";
    
        sisalto += "<h2>Alkamisaika</h2>";
        sisalto += "<p>" + data.palaveri.alkaminen + "</p>";
    
        sisalto += "<h2>Kesto</h2>";
        sisalto += "<p>" + data.palaveri.kesto + "</p>";
    
        document.getElementById("palaveri").innerHTML = sisalto;
    }