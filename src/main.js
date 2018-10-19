import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './doctorSearch.js';
// const Promise = require('es6-promise').Promise;

$(document).ready(function() {
  $('#formDoctorName').submit(function() {
    event.preventDefault();

    let name = $('#doctorName').val();
    console.log(name);
    $('#doctorName').val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctors(name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(name === "") {
        $("#doctorNameResult").text(`Please enter a name to be searched.`);
      } else if(body.meta.count === 0) {
        $("#doctorNameResult").text(`There are no doctor's named "${name}" found in our system.`);
      } else {
        for(var i=0; i < body.data.length; i++) {
          let doctorFullName = body.data[i].profile.first_name + " " + body.data[i].profile.last_name;
          $("#doctorNameResult").append(`<li> ${doctorFullName} <li>`);
        }
      }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
