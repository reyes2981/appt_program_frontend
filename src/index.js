const endPoint = "http://localhost:3000/api/v1/appointments" // global variable

document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    getAppointments()

  let createAppointmentForm = document.querySelector("#create-appointment-form")
  createAppointmentForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getAppointments() {
    fetch(endPoint)
    .then(response => response.json())
    .then(appointments => {
        appointments.data.forEach(appointment => {
        render(appointment)
        })
    })
}

function render(appointment) {
    const appointmentMarkup = `
        <div data-id=${appointment.id}>
        <p>${appointment.attributes.first_name}</p>
        <p>${appointment.attributes.datetime}</p>
        </div>
        <br><br>`;

    document.querySelector('#appointment-container').innerHTML += appointmentMarkup
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
        render(apptData)

    })
}

