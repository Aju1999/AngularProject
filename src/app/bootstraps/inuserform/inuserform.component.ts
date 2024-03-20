import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { testUser } from 'src/app/models/TestModel';
import { TestingUserServiceService } from 'src/app/service/testing-user-service.service';

@Component({
  selector: 'app-inuserform',
  templateUrl: './inuserform.component.html',
  styleUrls: ['./inuserform.component.css']
})
export class InuserformComponent implements OnInit, OnChanges{
  employees:testUser = new testUser();

  @Input() pid:any;

  @Output() dataEvent = new EventEmitter<boolean>();

  constructor(private testing: TestingUserServiceService){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pid']) {
      const currentValue = changes['pid'].currentValue;
      const previousValue = changes['pid'].previousValue;
      // console.log('Input value changed. Current value:', currentValue, 'Previous value:', previousValue);
      this.getIdUser();
    }
  }

  ngOnInit(): void {
    this.getIdUser();
  }
  getIdUser(){
    console.log(this.pid);
    if(this.pid != 0 && this.pid != undefined) {
      this.testing.getUserbyId(this.pid).subscribe(
        (resp:any)=>{
          this.employees=resp;
          // console.log(resp);
        },error=>{
          console.log(error);
        }
      );
    }else{
      this.employees= new testUser();
    }
  }
  sendCancel() {    
    this.dataEvent.emit(true);
  }
  registered(){
    console.log(this.employees);
    this.testing.updateUserbyId(this.employees).subscribe(
      (resp : any)=>{
        this.employees = resp;
        this.dataEvent.emit(true);
      },error=>this.dataEvent.emit(false)
    );
    
  }
}
