const endPoint = "http://localhost:3000/api/v1/appointments" // global variable

document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    console.log("DOM Content Loaded")
    //getAppointments()
  

  const createAppointmentForm = document.querySelector("#create-appointment-form")
  createAppointmentForm.addEventListener("submit", (e) => createFormHandler(e) 
  )

  const sendConfAlert = document.querySelector("#create-button")
  sendConfAlert.addEventListener("submit", (e) => alert('Booked!')//provide an alert to the screen

  )
})

function getAppointments() {
    fetch(endPoint)
    .then(response => response.json())
    // displays error in console .catch(err => console.log(err)) 
    .then(appointments => {
        console.log(appointments)
        appointments.data.forEach(appointment => { // loop 

            let newAppointment = new Appointment(appointment, appointment.attributes)
            document.querySelector('#appointment-container').innerHTML += newAppointment.renderAppointmentCard()
            //render(appointment)
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
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(bodyData)
    }) 
    .then(response => response.json()) 
    .then(appointment => {
        console.log(appointment); 
        const apptData = appointment.data
        let newAppointment = new Appointment(apptData, apptData.attributes)
        document.querySelector('#appointment-container').innerHTML += newAppointment.renderAppointmentCard()

    })
}

function hideForm() {
    var x = document.querySelector(".form-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

