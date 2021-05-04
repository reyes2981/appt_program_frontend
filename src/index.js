// global variables
const toggleStylists = document.getElementById('hairdresser-container')
const endPoint = "http://localhost:3000/api/v1/appointments" 
const selectApptBttn = document.getElementById("toggleForm");


document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    console.log("DOM Content Loaded");
    //getAppointments();

})

selectApptBttn.addEventListener("click", () => {
    // fetch & load appointments
    create_form();
    //getAppointments();
})

function create_form() {
  // Create a form synamically
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

  const FN = document.createElement("input");
  FN.setAttribute("type", "text");
  FN.setAttribute("name", "FirstName");
  FN.setAttribute("id", "FirstName");
  FN.setAttribute("placeholder", "FirstName");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  
                // Append the email_ID input to the form
  form.append(FN); 
                
                // Append the button to the form
  form.append(submit); 
  
  document.getElementsByTagName("body")[0].appendChild(form);

  console.log("hello from create_form");
}







/*function toggleForm() {
    var x = document.querySelector("form#create-appointment-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("hello from the toggleForm function");
}*/

/*function toggleAppts() {
    var x = document.querySelector("#appointment-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("hello from the toggleAppts function");
}*/

/*function getAppointments() {
    fetch(endPoint)
    .then(response => response.json())
    .then(appointments => {
        console.log(appointments)
        appointments.data.forEach(appointment => { // loop 
            let newAppointment = new Appointment(appointment, appointment.attributes)
            document.querySelector('#appointment-container').innerHTML += newAppointment.renderAppointmentCard()
        })
    })
}*/

function createFormHandler(e) {
    e.preventDefault()
    const firstNameInput = document.querySelector("#firstName").value
    const lastNameInput = document.querySelector("#lastName").value
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

/*function hideForm() {
    var x = document.querySelector("form#create-appointment-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}*/


/*function showHairdresser() {
    var x = document.querySelector("#hairdresser-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}*/

// destroys instance of appointment
var down = document.getElementById("GFG_DOWN");
            function GFG_Fun() {
                
                // Create a form synamically
                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", "submit.php");
  
                // Create an input element for emailID
                var ID = document.createElement("input");
                ID.setAttribute("type", "text");
                ID.setAttribute("name", "emailID");
                ID.setAttribute("placeholder", "E-Mail ID");
  
                // Create an input element for password
                var PWD = document.createElement("input");
                PWD.setAttribute("type", "password");
                PWD.setAttribute("name", "password");
                PWD.setAttribute("placeholder", "Password");
  
                // Create a submit button
                var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
  
                // Append the email_ID input to the form
                form.append(ID); 
                
                // Append the password to the form
                form.append(PWD); 
                
                // Append the button to the form
                form.append(s); 
  
                document.getElementsByTagName("body")[0]
               .appendChild(form);
            }