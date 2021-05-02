class Appointment {

    constructor(appointment, appointmentAttributes) { // constructor needs to be correct!
        this.id = appointment.id
        this.first_name = appointmentAttributes.first_name
        this.last_name = appointmentAttributes.last_name
        this.email = appointmentAttributes.email
        this.service = appointmentAttributes.service
        this.hairdresser = appointmentAttributes.hairdresser
        this.datetime = appointmentAttributes.datetime
        //Appointment.push(this)
        //console.log(this);
    }

    renderAppointmentCard() {  // render function 
       // debugger
              return `
           <div data-id=${this.id}>
            <p>${this.first_name}</p>
            <p>${this.last_name}</p>
            <p>${this.email}</p>
            <p>${this.hairdresser.first_name}</p>
            <p>${this.service.name}</p>
            <p>${this.datetime}</p>
           </div>
            <br><br>`;
    
    }
}

 //Appointment.all = []; // array of appointments
 
 class Hairdresser {

    constructor(hairdresser, hairdresserAttributes) { // constructor needs to be correct!
        this.id = hairdresser.id
        this.first_name = hairdresserAttributes.first_name
       
        //Appointment.push(this)
        console.log(this);
    }

    renderHairdresserCard() {  // render function 
       // debugger
              return `
           <div data-id=${this.id}>
            <p>${this.first_name}</p>
           </div>
            <br><br>`;
    
    }
}
