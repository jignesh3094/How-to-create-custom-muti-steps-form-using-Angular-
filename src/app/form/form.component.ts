import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
       userDetails: new FormGroup({
           fname: new FormControl('',Validators.required),
           lname: new FormControl('')
       }),
       contactDetails: new FormGroup({
        email: new FormControl('',Validators.required),
        address: new FormControl(''),
        contactNumber: new FormControl(''),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl('null'),
      education: new FormControl('')
  })
  })
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  get userDetails() {
        return this.multistep.controls['userDetails']['controls'];
  }

  get contactDetails() {
    return this.multistep.controls['contactDetails']['controls'];
}

  submit() {  
      this.submitted = true;
      if(this.multistep.controls.userDetails.invalid && this.step == 1) {
        return;
      }
      if(this.multistep.controls.contactDetails.invalid && this.step == 2) {
        return;
      }
      this.step = this.step + 1;
      if(this.step == 4) {
          this.route.navigate(['/thankyou'])
      }
  }

  previous() {
    console.log('steps',this.step);
    this.step = this.step - 1;
  }



}
