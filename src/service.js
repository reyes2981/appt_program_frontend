class Service {

    constructor(service, serviceAttributes) { // constructor needs to be correct!
        this.id = service.id
        this.first_name = serviceAttributes.first_name
        console.log(this);
    }

     
    getServices() {
        fetch(serviceEndPoint)
        .then(response => response.json())
        .then(services => {
            console.log(services)
            services.data.forEach(service => { // loop 
                let newService = new service(service, service.attributes)
                document.querySelector('#service').innerHTML += newservice.renderserviceCard()
            })
        })
        console.log("hello from getservices")
    }
    
    

    renderServiceCard() {  // render function 
              return `
              <div data-id=${this.id}>
              <option>${this.name}</option>
              <button onClick="removeAppt()" class="delete-appt-button">Delete service</button>
              </div>
              <br><br>`;
      
    }



}
