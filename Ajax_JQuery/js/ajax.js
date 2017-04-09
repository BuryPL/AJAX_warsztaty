'use strict';

$(document).ready(function () {
    $('#batton').click( function(){         $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            console.log(data);

            //        var newDiv = document.createElement("div");
            //        
            //        var paragraf1 = document.createElement("p");
            //        var paragraf2 = document.createElement("p");
            //        var paragraf3 = document.createElement("p");
            //        var paragraf4 = document.createElement("p");
            //        
            //        var userIdVariable = document.createTextNode("User ID: " + data.userId);
            //        var userNameVariable = document.createTextNode("User Name: " + data.userName);
            //        var userUrlVariable = document.createTextNode("User URL: " + data.userURL);
            //        var separator = document.createTextNode("-------------------");
            //        
            //        paragraf1.appendChild(userIdVariable);
            //        paragraf2.appendChild(userNameVariable);
            //        paragraf3.appendChild(userUrlVariable);
            //        paragraf4.appendChild(separator);
            //        
            //        newDiv.appendChild(paragraf1);
            //        newDiv.appendChild(paragraf2);
            //        newDiv.appendChild(paragraf3);
            //        newDiv.appendChild(paragraf4);
            //        
            //        document.body.insertBefore(newDiv, document.getElementById("batton").nextSibling);
        }); 
    });
});