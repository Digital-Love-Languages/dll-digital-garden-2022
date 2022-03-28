var CONFIG;
var DATA;
var DATA_FILE_URL = "http://form.digitallovelanguages.com/static/data.json";
var CONFIG_FILE_URL = "http://digitallovelanguages.com/assets/config.json"

$( document ).ready(function() {

  console.log("I'm here, I'm here!⚘!");
  var pathname = window.location.pathname;

  if (pathname === "/form.html") {
    $.getJSON(CONFIG_FILE_URL, function (config) {
      CONFIG = config;
      console.log("config successfully loaded for /form");

      // values for form
      for (var value of CONFIG['NAMES']) {
        $('#names-dropdown')
          .append(`<option value="${value}">${value}</option>`)
          .append(`<br>`);
      }

      for (var value of CONFIG['PROJECTS']) {
        $('#projects-dropdown')
          .append(`<option value="${value}">${value}</option>`)
          .append(`<br>`);
      }

      for (var value of CONFIG['WORDS']) {
        $('#topics-radio')
          .append(`<div>
      <input type="radio" id="${value}" name="topic" value="${value}">
        <label for="communion">${value}</label>
    </div>`);
      }
    });
  }
  // if pathname == "/"
  else {
    $.getJSON(DATA_FILE_URL, function (data) {
      DATA = data;
      console.log("data successfully loaded for /");
      console.log(data);

      for (var value of data) {
        console.log(value);
        $('.garden')
          .append(`<a class="data-link" href="${value["link-input"]}">${value.name}-${value.project}</a>`)
          .append(`<br>`);
      }
    });
    $.getJSON(CONFIG_FILE_URL, function (config) {
      CONFIG = config;
      console.log("config successfully loaded for /");

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


    }).fail(function () {
      console.log("fetching json failed");
    });
  }
});
