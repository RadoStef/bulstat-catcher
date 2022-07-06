"use strict";

let companiesArray = ["121644736",
"202365793",
"201121156",
"203425994",
"202014844",
"203309395",
"200237987",
"102739514",
"102810025",
"201334972",
"131011832",
"131059389",
"115784032",
"101722736",
"812015320",
"102047327",
"102681185",
"204185210",
"102082965",
"125041015",
"175373822"
];

let resultEl = document.getElementById("result-el");

function activateMetro() {
    resultEl.innerHTML = companiesArray[0];
}
function activateBilyana() {
    resultEl.innerHTML = companiesArray[1];
}
function activateNolev() {
    resultEl.innerHTML = companiesArray[2];
}
function activateHelas() {
    resultEl.innerHTML = companiesArray[3];
}
function activateMiko() {
    resultEl.innerHTML = companiesArray[4];
}
function activateKriciya() {
    resultEl.innerHTML = companiesArray[5];
}
function activateLobby() {
    resultEl.innerHTML = companiesArray[6];
}
function activateTornado() {
    resultEl.innerHTML = companiesArray[7];
}
function activateKonsumativ() {
    resultEl.innerHTML = companiesArray[8];
}
function activateOpakovka() {
    resultEl.innerHTML = companiesArray[9];
}
function activateQuadrant() {
    resultEl.innerHTML = companiesArray[10];
}
function activateMagre() {
    resultEl.innerHTML = companiesArray[11];
}
function activateBultex() {
    resultEl.innerHTML = companiesArray[12];
}
function activateNectar() {
    resultEl.innerHTML = companiesArray[13];
}
function activateDenito() {
    resultEl.innerHTML = companiesArray[14];
}
function activatePobeda() {
    resultEl.innerHTML = companiesArray[15];
}
function activateBelina() {
    resultEl.innerHTML = companiesArray[16];
}
function activateFroneri() {
    resultEl.innerHTML = companiesArray[17];
}
function activateBoshnakov() {
    resultEl.innerHTML = companiesArray[18];
}
function activatePilko() {
    resultEl.innerHTML = companiesArray[19];
}
function activateTaco() {
    resultEl.innerHTML = companiesArray[20];
}

//some SO code, for copy to clipboard buton :)
function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }
