class Appointment {

    constructor(appointment, appointmentAttributes) {
        this.id = appointment.id
        this.first_name = appointmentAttributes.first_name
        this.datetime = appointmentAttributes.datetime
        Appointment.call.push(this)
        debugger
    }
}

Appointment = [];