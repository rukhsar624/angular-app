import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userData: UserServiceService, private fb: FormBuilder) {
    console.log("Hello");
    this.userData.user().subscribe((data) => {

      console.log("data", data);
      this.users = data;

    })
  }
  title = 'my-learning-app';
  users: any;
  updateForm = this.fb.group({
    title: [null],
    body: [null]
  });

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title:  [null, Validators.required],
      body: [null, Validators.required]

    });
  }


  // updateForm:FormGroup;
  //   constructor(private user:UserServiceService)
  //   {
  //     this.user.getDate().subscribe(data=>{
  //       console.warn(data);
  //     })
  //     }
  // }

}
