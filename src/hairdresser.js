class Hairdresser {

    constructor(hairdresser, hairdresserAttributes) { // constructor needs to be correct!
        this.id = hairdresser.id
        this.first_name = hairdresserAttributes.first_name
        console.log(this);
    }

    static getHairdressers() {
        fetch('http://localhost:3000/api/v1/hairdressers')
        .then(response => response.json())
        .then(hairdressers => {
            console.log(hairdressers)
            hairdressers.data.forEach(hairdresser => { // loop 
                let newhairdresser = new Hairdresser(hairdresser, hairdresser.attributes)
                document.querySelector('#hairdresser-container').innerHTML += newhairdresser.renderHairdresserCard()
            })
        })
    }

    renderHairdresserCard() {  // render function 
        return `
           <div data-id=${this.id}>
            <p>${this.first_name}</p>
           </div>
           <br><br>`;
    }
    
}
