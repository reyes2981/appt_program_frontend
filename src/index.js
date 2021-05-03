const toggleStylists = document.getElementById('hairdresser-container')

document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    console.log("DOM Content Loaded")
    getAppointments()
    getHairdressers()
    const createAppointmentForm = document.querySelector("#create-appointment-form")
    createAppointmentForm.addEventListener("submit", (e) => createFormHandler(e))
})

function toggleForm() {
    var x = document.querySelector("form#create-appointment-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("hello from the toggleForm function");
}

function toggleAppts() {
    var x = document.querySelector("#appointment-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("hello from the toggleAppts function");
}

function getAppointments() {
    fetch('http://localhost:3000/api/v1/appointments')
    .then(response => response.json())
    .then(appointments => {
        console.log(appointments)
        appointments.data.forEach(appointment => { // loop 
            let newAppointment = new Appointment(appointment, appointment.attributes)
            document.querySelector('#appointment-container').innerHTML += newAppointment.renderAppointmentCard()
        })
    })
}

function getHairdressers() {
    fetch('http://localhost:3000/api/v1/hairdressers')
    .then(response => response.json())
    .then(hairdressers => {
        console.log(hairdressers)
        hairdressers.data.forEach(hairdresser => { // loop 
            let newhairdresser = new Hairdresser(hairdresser, hairdresser.attributes)
            document.querySelector('#hairdresser-container').innerHTML += newhairdresser.renderHairdresserCard()
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const firstNameInput = document.querySelector("#first-name").value
    const lastNameInput = document.querySelector("#last-name").value
    const emailInput = document.querySelector("#email").value
    const serviceId = parseInt(document.querySelector("#services").value)
    const hairdresserId = parseInt(document.querySelector("#hairdressers").value)
    const datetimeInput = document.querySelector("#datetime").value
    postAppointment(firstNameInput, lastNameInput, emailInput, serviceId, hairdresserId, datetimeInput)
}
                // ^ needs to match below
function postAppointment(first_name, last_name, email, service_id, hairdresser_id, datetime) { // Going to hit CREATE method in backend API
    console.log(first_name, last_name, email, service_id, hairdresser_id, datetime)
    const bodyData = {first_name, last_name, email, service_id, hairdresser_id, datetime}
    fetch('http://localhost:3000/api/v1/appointments', {
            // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(bodyData)
    }) 
    .then(response => response.json()) 
    .then(appointment => {
        console.log(appointment); 
        const apptData = appointment.data
            // render JSON response
        let newAppointment = new Appointment(apptData, apptData.attributes)
        document.querySelector('#renderNewAppointment').innerHTML += newAppointment.renderAppointmentCard()
    })
}

function hideForm() {
    var x = document.querySelector("form#create-appointment-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function showHairdresser() {
    var x = document.querySelector("#hairdresser-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}