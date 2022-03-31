/// hi, welcome to script.js,
/// this file helps display the web pages for digitallovelanguages.com
/// using jquery
///
/// the assignments and names of students are loaded by script.js,
/// and then used to populate the pages
/// the two pages are
/// /form (where assignments are submitted)
/// / (where assignments are filtered and viewed)
///
/// both pages use this script.js file, but you can see down below
/// that we use window.location.pathname so that
/// only some functions are run for each page
/// e.g. the function to populate the dropdowns only runs on /form
/// and the function to populate the filters only runs on /

/// the url that the data (submitted assignments) is loaded from
var DATA_FILE_URL = "http://form.digitallovelanguages.com/static/data.json";
/// the url that the config (words, projects, names), is loaded from
var CONFIG_FILE_URL = "http://digitallovelanguages.com/assets/config.json"
/// global variables where the config and data are stored
var CONFIG;
var DATA;

/// wait until the page is loaded before initializing anything
$( document ).ready(function() {

  console.log("I'm here, I'm here!⚘!");
  var pathname = window.location.pathname;

  // redirect https to http
  if (window.location.protocol === "https:") {
    window.location.protocol = "http:";
    window.location.reload();
  }

  // initialize everything for the /form page
  if (pathname === "/form.html" || pathname === '/form') {

    // initialize the dropdowns on
    $.getJSON(CONFIG_FILE_URL, function (config) {
      CONFIG = config;
      console.log("config successfully loaded for /form");

      // concatenate all student names together from both classes
      var names = [];
      for (var day of Object.keys(CONFIG["DAYS"])) {
        var students = CONFIG["DAYS"][day];
        names = names.concat(students);
      }
      names = names.sort();

      // values for form
      for (var value of names) {
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

  // initialize everything for "/"
  else {

    // a function which takes in the loaded data,
    // and then based on which filters are selected,
    // renders the correct data appropriately
    function renderFilters(data) {

      var selectedDays = $('.day-checkbox:checkbox:checked').map(function() {
        return $(this).val();
      }).get();
      var selectedNames = $('.name-checkbox:checkbox:checked').map(function() {
        return $(this).val();
      }).get();
      var selectedProjects = $('.project-checkbox:checkbox:checked').map(function() {
        return $(this).val();
      }).get();
      var selectedTopics = $('.topic-checkbox:checkbox:checked').map(function() {
        return $(this).val();
      }).get();

      // store all results which we will keep in here
      filteredData = data;

      // filter by days
      if (selectedDays.length > 0) {
        filteredData =  filteredData.filter(function(value) {
          return selectedDays.includes(value.day)
        });
      }
      // filter by names
      if (selectedNames.length > 0) {
        filteredData =  filteredData.filter(function(value) {
          return selectedNames.includes(value.name)
        });
      }
      // filter by project
      if (selectedProjects.length > 0) {
        filteredData =  filteredData.filter(function(value) {
          return selectedProjects.includes(value.project)
        });
      }
      // filter by topic
      if (selectedTopics.length > 0) {
        filteredData =  filteredData.filter(function(value) {
          return selectedTopics.includes(value.topic)
        });
      }
      // if no checkboxes are selected then show nothing
      if (
        selectedDays.length === 0
        && selectedNames.length === 0
        && selectedTopics.length === 0
        && selectedProjects.length === 0
      ) {
        filteredData = [];
      }

      // first clear out the garden
      $('.garden').empty();
      // then re-render all the visible items in it
      for (var value of filteredData) {
        console.log(value);
        let title;
        if ('title' in value && value.title !== '' ) {
          title = value.title;
        }
        else {
          title = "Untitled"
        }
        $('.garden')
          .append(`<a class="data-link" href="${value["link-input"]}">${value.name} - ${title}</a>`)
          .append(`<br>`);
      }
    }
    // build all the filters based on values in config
    $.getJSON(CONFIG_FILE_URL, function (config) {
      CONFIG = config;
      console.log("config successfully loaded for /");

      var words = CONFIG["WORDS"];
      for (var value of words) {
        $('.words')
          .append(`<input class="topic-checkbox" type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      // concatenate all student names together from both classes
      var names = [];
      for (var day of Object.keys(CONFIG["DAYS"])) {
        var students = CONFIG["DAYS"][day];
        names = names.concat(students);
      }
      names = names.sort();
      for (var value of names) {
        $('.names')
          .append(`<input class="name-checkbox" type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      var projects = CONFIG["PROJECTS"];

      for (var value of projects) {
        $('.projects')
          .append(`<input class="project-checkbox" type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }


      var days = Object.keys(CONFIG["DAYS"]);
      for (var value of days) {
        $('.days')
          .append(`<input class="day-checkbox" type="checkbox" id="${value}" name="interest" value="${value}">`)
          .append(`<label for="${value}">${value}</label></div>`)
          .append(`<br>`);
      }

      // load all the assignments and then do an initial rendering
      $.getJSON(DATA_FILE_URL, function (data) {
        DATA = data;
        console.log("data successfully loaded for /");
        console.log(data);
        // set the day of the student, based on their name
        var days = Object.keys(CONFIG["DAYS"]);
        for (var value of data) {
            for (var day of days) {
              var students_in_day = CONFIG["DAYS"][day];
              if (students_in_day.includes(value.name)) {
                value.day = day;
              }
            }
        }

        // and add a click handler, to re-filter, whenever a checkbox
        // is clicked
        $("input[type=checkbox]").click(function(e) {
          renderFilters(data);
        });

      });

    // if loading the data failed
    }).fail(function () {
      console.log("fetching json failed");
    });
  }
});
