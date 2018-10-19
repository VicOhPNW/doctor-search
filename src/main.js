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

      if(body.meta.count() === 0)

      for(var i=0; i < body.data.length; i++) {
        let name = body.data[i].first_name;
        $("#resultDoctorName").text("doctorName");
      }


    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
