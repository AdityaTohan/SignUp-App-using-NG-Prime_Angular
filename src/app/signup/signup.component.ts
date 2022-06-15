import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MenuItem} from "primeng/api";
import {ApiService} from "../services/api.service";
import {Message,MessageService} from "primeng/api";
import {Router} from "@angular/router";
// import {count} from "../app.component";

export let count=50;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService],
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;
  leftTooltipItems: MenuItem[];
  messageEnable = false
  message:Message[];

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {

    // this.message = [
    //   {
    //     command: () => {
    //       this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
    //     }
    //   }
    // ]

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]]
    })

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]]
    })

    this.leftTooltipItems = [
      {
        tooltipOptions: {
          tooltipLabel: "Zoom Out",
          tooltipPosition: "left",
        },
        icon: 'pi pi-search-minus',
        command: () => {
          count+=20;
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Zoom In",
          tooltipPosition: "left",
        },
        icon: 'pi pi-search-plus',
        command: () => {
          count-=20;
        }
      }
    ];


  }

  get signupFormCtrl() {
    return this.signupForm.controls
  }

  get loginFormCtrl() {
    return this.loginForm.controls
  }

  login(){
    this.apiService.login(this.loginForm.value).subscribe(response => {
      if(response) this.messageEnable = true
    }, (err) => {
      this.messageEnable = true
    })
  }

  signup(){
    this.apiService.signupApi(this.signupForm.value).subscribe(response => {
      if(response) this.messageEnable = true
    }, (err) => {
      this.messageEnable = true
    })
  }

  scaleUp() {
    count--

  }

  scaleDown(){
    count++
  }

  returnCount(){
    console.log(count)
    return count;

  }
}
