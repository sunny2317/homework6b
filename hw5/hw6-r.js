


function makeAppointment(){
    let appointment = "Appointment"
    //const appointment = {time: null, date: null};

}

function showAppointment(){
    //id = getdocument.. appointment-date
    // id.text = localStorage.date
    console.log("shows appointments");
}

function getDates() {
    selectElement = document.querySelector('#dates');
    date = selectElement.value;
    document.querySelector('.date').textContent = date;
    // localStorage.setItem("date", date);
    appointment.date = "date";

}

function getTimes() {
    selectElement = document.querySelector('#times');
    time = selectElement.value;
    document.querySelector('.time').textContent = time;
   // localStorage.setItem("time", time);
   appointment.time = "time"
}



/**

var amTimes = []
var amHours = [9,10,11,12]
var amHour = null
var min = null

function appointmentTime(){
    for (amHour in amHours) {
        for (min = 0; min < 60; min += 15) {
          amTimes.push(('0' + amHours[amHour]).slice(-2) + ':' + ('0' + min).slice(-2) + " AM");
        }
  }

}

function appointmentConfirmation()
    {

}

function getOption() {
        selectElement = document.querySelector('#select1');
        output = selectElement.value;
        document.querySelector('.output').textContent = output;
    }



var amTimes = []
var amHours = [9,10,11,12]
var amHour = null
var min = null

  for (amHour in amHours) {
    for (min = 0; min < 60; min += 15) {
      amTimes.push(('0' + amHours[amHour]).slice(-2) + ':' + ('0' + min).slice(-2) + " AM");
    }
  }

var pmTimes = []
var pmHours = [1,2,3]
var pmHour = null
  for (pmHour in pmHours) {
    for (min = 0; min < 60; min += 15) {
      pmTimes.push(('0' + pmHours[pmHour]).slice(-2) + ':' + ('0' + min).slice(-2) + " PM");
    }
  }

  function allTimes() 

  document.getElementById("appointmentList").innerHTML = appointmentList;

**/


