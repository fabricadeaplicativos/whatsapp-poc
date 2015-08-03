/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
// MOCK SCRIPT

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var getCat = function() {
    var cats = ['tabby', 'bengal', 'persian', 'mainecoon', 'ragdoll', 'sphynx', 'siamese', 'korat', 'japanesebobtail', 'abyssinian', 'scottishfold'];
    var cat = cats[(getRandomInt(100, 1001) % cats.length)];
    return '/images/' + cat + '.jpg';
};

var setUsername = function(){ 
    var username = prompt('Please enter your name');
    if(username !== null){
        var contact = {
        'avatar': getCat(),
        'uuid': username,
        'text': 'mew maw mee pur',
        'pending': '10'
    };
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://' + serverIP + ':5555/contact', true);
        xmlhttp.send(JSON.stringify(contact));
        return username;
    }
};

var getIP = function() {
    var IP = prompt('Please enter server IP');
    if(IP !== null){
        return IP;
    } else{
        getIP();
    }
};

var serverIP = getIP();

var avatar = getCat();
var username = setUsername();

window.addEventListener('WebComponentsReady', function() {

    app.contacts = [];
    app.msgs = {};
    app.selected = [];
    app.username = username;
    app.getChatURL = function(uuid) {return '/chat/'+ uuid;};
    app.checkKey = function(e) {if(e.keyCode === 13 || e.charCode === 13){this.send();}};
    app.send = function() {
        var msg = {
                'avatar': avatar,
                'username': app.username,
                'text': this.txt,
                'timestamp': new Date().toISOString(),
                'whospeaks':'self'
            };
        var template = document.querySelector('#msgList');
        template.push('items', msg);
        var msg1 = JSON.parse(JSON.stringify(msg));
        msg.whospeaks = 'other';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://' + serverIP + ':5555/message/' + this.params.contact, true);
        xmlhttp.send(JSON.stringify(msg1));
        this.txt='';
    };
    
    setInterval(
        function () {
            if(app.params){
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function(){
                  if (xmlhttp.readyState===4 && xmlhttp.status===200){
                    var msgs = JSON.parse(xmlhttp.responseText);
                    msgs.forEach(function(msg){
                        msg = JSON.parse(msg);
                        var template = document.querySelector('#msgList');
                        template.push('items', msg);
                    });
                  }
                };
                xmlhttp.open('GET', 'http://' + serverIP + ':5555/message/' + app.username, true);
                xmlhttp.send();
            }
    }, 1000);

    setInterval(
        function () {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
              if (xmlhttp.readyState===4 && xmlhttp.status===200){
                var contacts = JSON.parse(xmlhttp.responseText);
                contacts.forEach(function(contact){
                    contact = JSON.parse(contact);
                    if(!(contact.uuid in app.msgs) && contact.uuid !== app.username){
                        app.msgs[contact.uuid] = [];
                        var template = document.querySelector('#contactList');
                        template.push('items', contact);
                    }
                });
              }
            };
            xmlhttp.open('GET', 'http://' + serverIP + ':5555/contact', true);
            xmlhttp.send();
    }, 2000);

});
