$( document ).ready(function() {

console.log( "ready!" );

console.log("I'm here, I'm here!⚘!");

//<input type="checkbox" name="favorite_pet" value="Cats" onclick="return ValidatePetSelection();">Cats<br>

var words = ['Communion', 'Consent', 'Refusal', 'Renewal'];

    for (var value of words) {
      $('.words')
        .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
        .append(`<label for="${value}">${value}</label></div>`)
        .append(`<br>`);
    }

var names = ['Andre Medina' , 'carolina treviño' , 'Charis Poon' , 'Chirag Davé' , 'Erica Goodwin' , 'Evangeline Brooks' , 'Francesca Cantor' , 'Garrett Blaize' , 'Gwendolyn Wallace' , 'Jianfei Lyu' , 'Ladan Bahmani' , 'LaRisa Anderson' , 'Miaoye Que' , 'Nate Mooney' , 'Patricia Wood' , 'Rudy Natanzon' , 'Simone Robert' , 'Thomas Knoepffler' , 'Tuan Huang', 'Ahreum Lee' , 'Alexa Ann Bonomo' , 'Caiu' , 'Carolyn Li-Madeo' , 'Elisabeth Schifrin' , 'Elvia Vasconcelos' , 'Fernanda González' , 'Fikir Derese' , 'Henry Holtgeerts' , 'Jacob Sheffet' , 'Jake Levin' , 'Lewis Chesebrough' , 'Lia Coleman' , 'lillyanne pham' , 'Mark Hernandez Motaghy' , 'Michelle Santiago Cortés' , 'Rebecca Nea Alemee Meyer' , 'SHALIN SHAH' , 'Yalda Bidshahri'];

    for (var value of names) {
      $('.names')
        .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
        .append(`<label for="${value}">${value}</label></div>`)
        .append(`<br>`);
    }

var projects = ['Speculative Liberatory Learning Environment', 'Folder Poem', 'Passing Notes', 'Consensual Hacking', 'Other'];

    for (var value of projects) {
      $('.projects')
        .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
        .append(`<label for="${value}">${value}</label></div>`)
        .append(`<br>`);
    }


var days = ['Thursday', 'Friday'];

    for (var value of days) {
      $('.days')
        .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
        .append(`<label for="${value}">${value}</label></div>`)
        .append(`<br>`);
    }






// var href = window.location.href;
// var dir = href.substring(0, href.lastIndexOf('/')) + "/";


// (function makeCommunion(){
//     // vary size for fun
//     var word = "communion"
//     var divsize = ((Math.random()*100) + 250).toFixed();
//     var num = Math.floor(Math.random() * 1).toFixed();
//     console.log(divsize);
//
//     $newdiv = $('<a href="'+dir+word+"/index.html"+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');
//
//     // make position sensitive to size and document's width
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//
//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( '.wrapper' ).fadeIn(100)
// })();
//
// (function makeConsent(){
//     // vary size for fun
//     var word = "consent"
//     var divsize = ((Math.random()*100) + 250).toFixed();
//     var num = Math.floor(Math.random() * 1).toFixed();
//     console.log(divsize);
//
//     $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');
//
//     // make position sensitive to size and document's width
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//
//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( '.wrapper' ).fadeIn(100)
// })();
//
// (function makeRefusal(){
//     // vary size for fun
//     var word = "refusal"
//     var divsize = ((Math.random()*100) + 250).toFixed();
//     var num = Math.floor(Math.random() * 1).toFixed();
//     console.log(divsize);
//
//     $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');
//
//     // make position sensitive to size and document's width
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//
//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( '.wrapper' ).fadeIn(100)
// })();
//
// (function makeRenewal(){
//     // vary size for fun
//     var word = "renewal"
//     var divsize = ((Math.random()*100) + 250).toFixed();
//     var num = Math.floor(Math.random() * 1).toFixed();
//     console.log(divsize);
//
//     $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');
//
//     // make position sensitive to size and document's width
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//
//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( '.wrapper' ).fadeIn(100)
// })();



});
