/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
// MOCK SCRIPT
window.addEventListener('WebComponentsReady', function() {

    app.contacts = [];
    app.msgs = {};
    app.selected = [];
    app.getUsername = function(){ 
        var username = prompt("Please enter your name");
        if(username != null){
            var contact = {
            "avatar":"/images/korat.jpg",
            "uuid": username,
            "text": "mew maw mee pur",
            "pending":"10"
        };
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "http://127.0.0.1:5555/contact", true);
            xmlhttp.send(JSON.stringify(contact));
            app.username = username;
        }
    };
    app.getUsername();
    app.getChatURL = function(uuid) {return '/chat/'+ uuid;};
    app.checkKey = function(e) {if(e.keyCode === 13 || e.charCode === 13){this.send();}};
    app.send = function() {
        var msg = {
                "avatar":"/images/siamese.jpg",
                "username": app.username,
                "text": this.txt,
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            };
        var template = document.querySelector("#msglist");
        template.push('items', msg);
        var msg1 = JSON.parse(JSON.stringify(msg));
        msg.whospeaks = "other";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://127.0.0.1:5555/message/" + this.params.contact, true);
        xmlhttp.send(JSON.stringify(msg1));
        this.txt="";
    };
    
    setInterval(
        function () {
            if(this.params){
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function(){
                  if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    var template = document.querySelector("#msgList");
                    for (msg in JSON.parse(xmlhttp.responseText)){
                        template.push('items', msg);
                    }
                  }
                }
                xmlhttp.open("GET", "http://127.0.0.1:5555/message/" + this.params.contact, true);
                xmlhttp.send();
            }
    }, 500);

    setInterval(
        function () {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
              if (xmlhttp.readyState==4 && xmlhttp.status==200){
                var contacts = JSON.parse(xmlhttp.responseText);
                contacts.forEach(function(contact){
                    contact = JSON.parse(contact);
                    if(!(contact.uuid in app.msgs)){
                        app.msgs[contact.uuid] = [];
                        var template = document.querySelector("#contactList");
                        template.push('items', contact);
                    }
                });
              }
            }
            xmlhttp.open("GET", "http://127.0.0.1:5555/contact", true);
            xmlhttp.send();
    }, 3000);

});
