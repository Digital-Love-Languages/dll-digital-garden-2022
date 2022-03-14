$( document ).ready(function() {

console.log( "ready!" );

console.log("I'm here, I'm here!⚘!");

var href = window.location.href;
var dir = href.substring(0, href.lastIndexOf('/')) + "/";


(function makeCommunion(){
    // vary size for fun
    var word = "communion"
    var divsize = ((Math.random()*100) + 250).toFixed();
    var num = Math.floor(Math.random() * 1).toFixed();
    console.log(divsize);

    $newdiv = $('<a href="'+dir+word+"/index.html"+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100)
})();

(function makeConsent(){
    // vary size for fun
    var word = "consent"
    var divsize = ((Math.random()*100) + 250).toFixed();
    var num = Math.floor(Math.random() * 1).toFixed();
    console.log(divsize);

    $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100)
})();

(function makeRefusal(){
    // vary size for fun
    var word = "refusal"
    var divsize = ((Math.random()*100) + 250).toFixed();
    var num = Math.floor(Math.random() * 1).toFixed();
    console.log(divsize);

    $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100)
})();

(function makeRenewal(){
    // vary size for fun
    var word = "renewal"
    var divsize = ((Math.random()*100) + 250).toFixed();
    var num = Math.floor(Math.random() * 1).toFixed();
    console.log(divsize);

    $newdiv = $('<a href="/'+word+'"><img src="assets/'+word+'/'+num+'.png" style="width:'+divsize+'px;"/></a>');

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( '.wrapper' ).fadeIn(100)
})();



});
