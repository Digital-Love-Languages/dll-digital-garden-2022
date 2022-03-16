$( document ).ready(function() {

console.log("I'm here, I'm here!⚘!");


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

var projects = ['Speculative Liberatory Learning Environment', 'Folder Poetry', 'Passing Notes', 'Consensual Hacking', 'Other'];

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


});
