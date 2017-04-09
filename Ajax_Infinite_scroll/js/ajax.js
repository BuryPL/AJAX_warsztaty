'use strict';

function ajax(ajaxOptions) {
    
    //parametry połączenia i jego typu
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function() {},
        onError: ajaxOptions.onError || function() {},
        onSuccess: ajaxOptions.onSuccess || function() {},
        dataType: ajaxOptions.dataType || "text"
    };
    
    //funkcja sprawdzająca czy połączenie się udało
    function httpSuccess(httpRequest) {
        //przechwytywanie wyjątków
        try {
            return (httpRequest.status >= 200 && httpRequest.status <= 300 || httpRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        };
    }
    
    //utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    //to co wpiszemy w url, to jest przesyłane metodą GET
    
    //otwarcie połączenia 
    httpReq.open(options.type, options.url, true);
    
    //jeśli stan dokumentu został zmieniony
    //0: połączenie nie nawiązane
    //1: połączenie nawiązane
    //2: żądanie odebrane
    //3: przetwarzanie
    //4: dane zwrócone i gotowe do użycia
    httpReq.onreadystatechange = function() {
        //jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {
          //sprawdź status połączenia
            if (httpSuccess(httpReq)) {
                //jeżeli dane w formacie xml to zwrócić obiekt returnXML, w przeciwnym wypadku responseText (JSON to text)
                var returnData = (options.dataType == "xml") ? httpReq.responseXML : httpReq.responseText;
                
                //jeśli wszystko ok
                options.onSuccess(returnData);
                
                //zeruj obiekt, żeby nie utrzymywać niepotrzebnego już połączenia z serwerem
                httpReq = null;
            } else {
                //w przypadku błędu
                options.onError(httpReq.statusText);
            };
        };
    };
    httpReq.send();
};

window.onscroll = function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            onError: function (msg) {
                console.log(msg);
            },
            onSuccess: function (response) {
                var jsonObj = JSON.parse(response);
                //        console.log(jsonObj);
                jsonObj.forEach(function (element) {
                    
                    var nowyParagr = document.createElement("div");
                    
                    var paragraf1 = document.createElement("p");
                    var paragraf2 = document.createElement("p");
                    var paragraf3 = document.createElement("p");
                    var paragraf4 = document.createElement("p");
                    
                    var idValue = document.createTextNode("User ID: " + element.id);
                    var usernameValue = document.createTextNode("Username: " + element.username);
                    var userEmail = document.createTextNode("Email: " + element.email);
                    var separator = document.createTextNode("----------------");
                    
                    paragraf1.appendChild(idValue);
                    paragraf2.appendChild(usernameValue);
                    paragraf3.appendChild(userEmail);
                    paragraf4.appendChild(separator);
                    
                    nowyParagr.appendChild(paragraf1);
                    nowyParagr.appendChild(paragraf2);
                    nowyParagr.appendChild(paragraf3);
                    nowyParagr.appendChild(paragraf4);
                    
                    document.getElementById("kontener").appendChild(nowyParagr);
                });
            }
        });
    };
};