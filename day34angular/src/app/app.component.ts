import { Component } from '@angular/core';
import { Registration } from './models/model';
import { RegistrationService } from './services/registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private registrationSvc: RegistrationService){}

  registerUser(reg: Registration){

    console.info('>>>>>> new Registration', reg)
    this.registrationSvc.newRegistration(reg)
      .then(result => {
        console.info('>>>> result: ', result)
      })

      .catch(error => {
        console.error('>>>> error: ', error)
      })
  }
}

