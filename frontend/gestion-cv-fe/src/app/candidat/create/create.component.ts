import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup = this.createFormGroup() ;
   
  constructor(
   
  ) { }
  
  ngOnInit(): void {
  }
   
  get f(){
    return this
    .form.controls;
  }

  createFormGroup() {
    return  new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required)
    });
  }

}
