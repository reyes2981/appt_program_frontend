class Hairdresser {

    constructor(hairdresser, hairdresserAttributes) { // constructor needs to be correct!
        this.id = hairdresser.id
        this.first_name = hairdresserAttributes.first_name
        console.log(this);
    }

     
    getHairdressers() {
        fetch(hdEndPoint)
        .then(response => response.json())
        .then(hairdressers => {
            console.log(hairdressers)
            hairdressers.data.forEach(hairdresser => { // loop 
                let newhairdresser = new Hairdresser(hairdresser, hairdresser.attributes)
                document.querySelector('#hairdresser-container').innerHTML += newhairdresser.renderHairdresserCard()
            })
        })
        console.log("hello from getHairdressers")
    }
    
    

    renderHairdresserCard() {  // render function 
              return `
              <div data-id=${this.id}>
              <option>${this.first_name}</option>
              <button onClick="removeAppt()" class="delete-appt-button">Delete hairdresser</button>
              </div>
              <br><br>`;
      
    }



    renderHairdresserCard() {  // render function 
        return `
           <div data-id=${this.id}>
            <p>${this.first_name}</p>
           </div>
           <br><br>`;
    }
    
}
