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
