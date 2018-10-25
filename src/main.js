import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './doctorSearch.js';
// const Promise = require('es6-promise').Promise;

$(document).ready(function() {
//Results by Doctor Name
  $('#formDoctorName').submit(function() {
    event.preventDefault();

    let name = $('#doctorName').val();
    $('#doctorName').val("");
    console.log(name);

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctors(name);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if(name === "") {
        $(".doctorNameResult").text(`Please enter a name to be searched.`);
      } else if(body.meta.count === 0) {
        $(".doctorNameResult").text(`There are no doctor's named "${name}" found in our system.`);
      } else {
        for(var i=0; i < body.data.length; i++) {
          let doctorFullName = body.data[i].profile.first_name + " " + body.data[i].profile.last_name;
          $(".doctorNameResult").append(`${doctorFullName}` + "<br>");
//info not displaying in the manner that I want. Still need to play around with this. e.g. some info is "undefined"
            for(var j = 0; j < body.data[i].practices.length; j++) {
              if (body.data[i].practices[j].visit_address.street2 !== undefined){
                $("#info").append("Address:" + body.data[i].practices[j].visit_address.street + " " + body.data[i].practices[j].visit_address.street2 + "<br>");
                $("#info").append(body.data[i].practices[j].visit_address.city + ", " + body.data[i].practices[j].visit_address.state + " " + body.data[i].practices[j].visit_address.zip + "<br>");
              } else {
                $("#info").append("Address:" + body.data[i].practices[j].visit_address.street + "<br>");
                $("#info").append(body.data[i].practices[j].visit_address.city + ", " + body.data[i].practices[j].visit_address.state + " " + body.data[i].practices[j].visit_address.zip + "<br>");
              }
              if (body.data[i].practices[0].website !== undefined){
                $("#info").append("Website: " + body.data[i].practices[0].website + "<br><br>");
              }

              if(body.data[i].practices[1].accepts_new_patients){
                $("#info").append("Is accepting new patients." + "<br>");
              } else {
                $("#info").append("Is not accepting new patients." + "<br>");
              }
               $("#info").append("Phone Number: " + body.data[i].practices[j].phones[0].number + "<br>" + "<br>");
            }
          }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

//Results by Symptom Search
  $('#formSymptom').submit(function() {
    event.preventDefault();

    let symptom = $('#symptom').val();
    console.log(symptom);
    $('#symptom').val("");

    let symptomSearch = new DoctorSearch();
    let promise = symptomSearch.getSymptom(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);


    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
