// global variables
const toggleStylists = document.getElementById('hairdresser-container');
const endPoint = "http://localhost:3000/api/v1/appointments";
const selectApptBttn = document.getElementById("toggleForm");
const hdEndPoint = "http://localhost:3000/api/v1/hairdressers";
const serviceEndPoint = "http://localhost:3000/api/v1/services";

document.addEventListener("DOMContentLoaded", () => {
    // fetch & load appointments
    console.log("DOM Content Loaded");
    //getAppointments();
})

selectApptBttn.addEventListener("click", () => {
    
    // fetch & load appointments
    create_form();
})


function create_form() {
  // Create a form synamically
  const newOption = document.createElement('option');  

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");
  form.setAttribute("class", "form-inputs");

  const FN = document.createElement("input");
  FN.setAttribute("type", "text");
  FN.setAttribute("name", "firstName");
  FN.setAttribute("id", "firstName");
  FN.setAttribute("class", "form-inputs");
  FN.setAttribute("placeholder", "First Name");

  const LN = document.createElement("input");
  LN.setAttribute("type", "text");
  LN.setAttribute("name", "lastName");
  LN.setAttribute("id", "LastName");
  LN.setAttribute("class", "form-inputs");
  LN.setAttribute("placeholder", "Last Name");

  const EMAIL = document.createElement("input");
  EMAIL.setAttribute("type", "text");
  EMAIL.setAttribute("name", "email");
  EMAIL.setAttribute("id", "email");
  EMAIL.setAttribute("class", "form-inputs");
  EMAIL.setAttribute("placeholder", "Email");

  const HD = document.createElement("select");
  HD.setAttribute("type", "select");
  HD.setAttribute("name", "Stylists");
  HD.setAttribute("id", "hairdresser");
  HD.setAttribute("class", "form-inputs");
  HD.setAttribute("value", "");

  const SERVICE = document.createElement("select");
  SERVICE.setAttribute("type", "select");
  SERVICE.setAttribute("name", "services");
  SERVICE.setAttribute("id", "service");
  SERVICE.setAttribute("class", "form-inputs");
  SERVICE.setAttribute("value", "");

  
  
  const SUBMIT = document.createElement("input");
  SUBMIT.setAttribute("class", "form-inputs");
  SUBMIT.setAttribute("type", "button");
  SUBMIT.setAttribute("id", "submit");
  SUBMIT.setAttribute("value", "Submit");

                
  form.append(FN); 
  form.append(LN); 
  form.append(EMAIL); 
  form.append(HD); 
  form.append(SERVICE); 
  form.append(SUBMIT); // Append the button to the form
  
  document.getElementById("form-container").appendChild(form);
 // getHairdressers();

  console.log("hello from create_form");


  // disales apptmtButton after it has been clicked
  let apptmtButton = selectApptBttn;
  apptmtButton.disabled = true;

  HD.addEventListener("click", (e) => {
    e.preventDefault();
    // fetch & load appointments
    getHdData();
    getServices();
    //getAppointments();
  })


  const hdData = fetch(hdEndPoint, {
    // POST request
    method: "GET",
    headers: {"Content-Type": "application/json"}, 
    }) 
  .then(response => response.json()) 
  .then(appointment => {
    console.log(appointment);

    
    });     
  }

  function getHdData() {   
    var options = "";

    document.getElementById("hairdresser").innerHTML = options;
    
  }

  const serviceData = fetch(serviceEndPoint, {
    // POST request
    method: "GET",
    headers: {"Content-Type": "application/json"}, 
    }) 
  .then(response => response.json()) 
  .then(service => {
    console.log(service);

    
    });     
  

  function getServiceData() {   
    var options = "";

    document.getElementById("service").innerHTML = options;
    
  }
/* fetch(endPoint, {
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
    })*/

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
