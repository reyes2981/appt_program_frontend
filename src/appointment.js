class Appointment {


    constructor(appointment, appointmentAttributes) { // constructor needs to be correct!
        this.id = appointment.id
        this.first_name = appointmentAttributes.first_name
        this.last_name = appointmentAttributes.last_name
        this.email = appointmentAttributes.email
        this.service = appointmentAttributes.service
        this.hairdresser = appointmentAttributes.hairdresser
        this.datetime = appointmentAttributes.datetime
    }
    


    
    getAppointments() {
        fetch(endPoint)
        .then(response => response.json())
        .then(appointments => {
            console.log(appointments)
            appointments.data.forEach(appointment => { // loop 
                let newAppointment = new Appointment(appointment, appointment.attributes)
                document.querySelector('#appointment-container').innerHTML += newAppointment.renderAppointmentCard()
            })
        })
        console.log("hello from getAppointments")
    }
    
    

    renderAppointmentCard() {  // render function 
              return `
              <div data-id=${this.id}>
              <p>${this.first_name}</p>
              <p>${this.last_name}</p>
              <p>${this.email}</p>
              <p>${this.hairdresser.first_name}</p>
              <p>${this.service.name}</p>
              <p>${this.datetime}</p>
              <button onClick="removeAppt()" class="delete-appt-button">Delete Appointment</button>
              </div>
              <br><br>`;
      
    }

}
   

// Appointment.all = [];