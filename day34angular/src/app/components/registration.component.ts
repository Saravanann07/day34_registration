import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from '../models/model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output()
  onRegistration = new Subject<Registration>()

  reg!: Registration

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.createForm()
  
  }

  private createForm(){
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email])
    })
  }

  registration(){
    console.info("Registration button clicked")
    const reg: Registration = this.form.value as Registration
    console.info('>>>>>Registered: ', reg)
    this.onRegistration.next(reg)
  }

}
