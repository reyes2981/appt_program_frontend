class Appointment {

    constructor(appointment, appointmentAttributes) { // constructor needs to be correct!
        this.id = appointment.id
        this.first_name = appointmentAttributes.first_name
        this.datetime = appointmentAttributes.datetime
        Appointment.all.push(this)
        //console.log(this);
    }

    renderAppointmentCard() {  // render function 
       // debugger
            return `
            <div data-id=${this.id}>
            <p>${this.first_name}</p>
            <p>${this.datetime}</p>
            </div>
            <br><br>`;
    
    }
}

Appointment.all = []; // array of appointments