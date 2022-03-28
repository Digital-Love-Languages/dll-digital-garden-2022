var CONFIG;
var DATA;
var DATA_FILE_URL = "http://form.digitallovelanguages.com/static/data.json";

$( document ).ready(function() {

  console.log("I'm here, I'm here!⚘!");

  $.getJSON("assets/config.json", function(config) {
    CONFIG = config;
    console.log("config successfully loaded");

    $.getJSON( DATA_FILE_URL, function( data ) {
      DATA = data;
      console.log(data);

      for (var value of data) {
        console.log(value);
        $('.garden')
          .append(`<a class="data-link" href="${value["link-input"]}">${value.name}-${value.project}</a>`)
          .append(`<br>`);
      }

      var words = CONFIG["WORDS"];

      for (var value of words) {
        $('.words')
          .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      var names = CONFIG["NAMES"];

      for (var value of names) {
        $('.names')
          .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      var projects = CONFIG["PROJECTS"];

      for (var value of projects) {
        $('.projects')
          .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }


      var days = CONFIG["DAYS"];

      for (var value of days) {
        $('.days')
          .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      // values for form
      for (var value of names) {
        $('#names-dropdown')
          .append(`<option value="${value}">${value}</option>`)
          .append(`<br>`);
      }

      for (var value of projects) {
        $('#projects-dropdown')
          .append(`<option value="${value}">${value}</option>`)
          .append(`<br>`);
      }

      for (var value of words) {
        $('#topics-radio')
          .append(`<div>
      <input type="radio" id="${value}" name="topic" value="${value}">
        <label for="communion">${value}</label>
    </div>`);
      }
    });
  }).fail(function() {
    console.log("fetching json failed");
  });






});
