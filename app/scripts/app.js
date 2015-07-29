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


    app.selected = [];
    app.getChatURL = function(uuid) {return '/chat/'+ uuid;};
    app.checkKey = function(e) {if(e.keyCode === 13 || e.charCode === 13){this.send();}};
    app.send = function() {
        app.selected.push();
        var template = document.querySelector("#msglist");
        template.push('items', {
            text: this.txt,
            timestamp: new Date().toISOString(),
            whospeaks: "self"
        });
        this.txt="";
    };


    app.contacts = [
        {
            "avatar":"/images/korat.jpg",
            "uuid":"Mewster Tamborine",
            "text":"mew maw mee pur",
            "pending":"10"
        },
        {
            "avatar":"/images/japanesebobtail.jpg",
            "uuid":"Akira",
            "text":"-= milk =-",
            "pending":"56"
        },
        {
            "avatar":"/images/ragdoll.jpg",
            "uuid":"Figurinha",
            "text":"Cant touch me",
        },
        {
            "avatar":"/images/siamese.jpg",
            "uuid":"StrayedCatz",
            "text":"Bad catz group :D",
            "pending":"99+"
        }
    ];

    app.msgs = {
        "StrayedCatz":[
            {
                "avatar":"/images/korat.jpg",
                "username":"Meowster Tamborine",
                "text":"Lick my fur plos.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "avatar":"/images/japanesebobtail.jpg",
                "username":"Akira",
                "text":"Oh nows.",
                "timestamp":"2013-11-12T17:14:50.000Z",
                "whospeaks":"other"
            },
            {
                "avatar":"/images/ragdoll.jpg",
                "username":"Milk",
                "text":"**is playing with a string and can't chat right now**",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "avatar":"/images/korat.jpg",
                "username":"Frida Calo",
                "text":"Nevur mewstr",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "avatar":"/images/siamese.jpg",
                "username":"Ms Paws",
                "text":"aosjdpjap pojpoadj j i jdijdow.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            }
        ],
        "Mewster Tamborine":[
            {
                "text":"Lick my fur plos.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"Oh nows.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"**is playing with a string and can't chat right now**",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"Nevur mewstr",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"aosjdpjap pojpoadj j i jdijdow.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
                        {
                "text":"Lick my fur plos.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"Oh nows.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"**is playing with a string and can't chat right now**",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"Nevur mewstr",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"aosjdpjap pojpoadj j i jdijdow.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            }
        ],
        "Figurinha":[
            {
                "text":"Lick my fur plos.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"Oh nows.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            },
            {
                "text":"**is playing with a string and can't chat right now**",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"Nevur mewstr",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"other"
            },
            {
                "text":"aosjdpjap pojpoadj j i jdijdow.",
                "timestamp":"2013-11-12T17:14:46.000Z",
                "whospeaks":"self"
            }
        ]
    };


});
