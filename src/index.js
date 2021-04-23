const endPoint = "http://localhost:3000/api/v1/appointments" // global variable

document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    console.log("DOM Content Loaded")
    getAppointments()

  const createAppointmentForm = document.querySelector("#create-appointment-form")
  createAppointmentForm.addEventListener("submit", (e) => createFormHandler(e))
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
    postAppointment(firstNameInput)
}
                // ^ needs to match below
function postAppointment(first_name) { // Going to hit CREATE method in backend API
    console.log(first_name)
    let bodyData = {first_name}

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

