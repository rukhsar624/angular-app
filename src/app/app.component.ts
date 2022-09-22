import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";
import { Data } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  closeResult = '';
  constructor(
    private userData: UserServiceService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    console.log('Hello');
    // this.userData.user().subscribe((data) => {
    //   console.log('data', data);
    //   this.users = data;
    // });
  }
  title = 'my-learning-app';
  users: any;
  user: any;


  updateForm:any = this.fb.group({
    email: [null],
    password: [null],
  });

  ngOnInit(): void {
    this.getblogs()
  }
  open(content: any, ) {

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  sendbutton() {
    this.userData.post(`login`, this.updateForm.value)
  }
  getblogs() {
    this.userData.get(`blogs`)
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
