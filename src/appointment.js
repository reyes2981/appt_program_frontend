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
    


    // renders instances of Appointments

    renderInnerHTML = () => { 
        return `
        <div class="form-group">
            <label for="first name">First Name</label>
            <input type="text" name="first name" id="FirstName" class="form-control">
        </div>
        <div class="form-group">
            <label for="last name">Last Name</label>
            <input type="text" name="last name" id="LastName" class="form-control">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" class="form-control">
        </div>
        <div class="form-group">
            <label for="item-hairdresser">Stylists</label>
            <select id="appt-hairdresser" name="appt" class="form-control">
                <option value="1">Elsa</option>
                <option value="2">Lucy</option>
                <option value="3">Margarita</option>
                <option value="4">Sia</option>
            </select>
        </div>
        <div class="form-group">
        <label for="item-service">Services</label>
        <select id="appt-service" name="appt" class="form-control">
            <option value="1">Haircut</option>
            <option value="2">Styling</option>
            <option value="3">Color</option>
            <option value="4">Waxing</option>
            <option value="5">Perm</option>
            <option value="6">Other</option>
        </select>
    </div>
        <input type="submit" name="submit" value="Schedule Appointmnet" class="btn btn-primary btn-block">
    `
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
    
    /* renderInnerHTML = () => { 
        return `
            <div class="form-group">
                <label for="first name">First Name</label>
                <input type="text" name="first name" id="FirstName" class="form-control">
            </div>
            <div class="form-group">
                <label for="last name">Last Name</label>
                <input type="text" name="last name" id="LastName" class="form-control">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="item-hairdresser">Stylists</label>
                <select id="appt-hairdresser" name="appt" class="form-control">
                    <option value="1">Elsa</option>
                    <option value="2">Lucy</option>
                    <option value="3">Margarita</option>
                    <option value="4">Sia</option>
                </select>
            </div>
            <div class="form-group">
            <label for="item-service">Services</label>
            <select id="appt-service" name="appt" class="form-control">
                <option value="1">Haircut</option>
                <option value="2">Styling</option>
                <option value="3">Color</option>
                <option value="4">Waxing</option>
                <option value="5">Perm</option>
                <option value="6">Other</option>
            </select>
        </div>
            <input type="submit" name="submit" value="Schedule Appointmnet" class="btn btn-primary btn-block">
        `
    }*/

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