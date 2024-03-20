import { Component, OnInit } from '@angular/core';
import { testUser } from 'src/app/models/TestModel';
import { TestingUserServiceService } from 'src/app/service/testing-user-service.service';

@Component({
  selector: 'app-usertestingform',
  templateUrl: './usertestingform.component.html',
  styleUrls: ['./usertestingform.component.css']
})
export class UsertestingformComponent implements OnInit{
  isOpened: boolean=false;
  selectedEmployeeId: number;
  employees:testUser[];
  
  constructor(private testing: TestingUserServiceService){

  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.testing.getAllUserRoles().subscribe(
      (resp: any)=>{
        this.employees = resp;
      },error=>
      console.log(error)
    );
  }
  receiveData($event: any) {
  this.isOpened= !$event;
  this.getData();
  }
  showDetails(empId: number) {
    this.isOpened = true;
    this.selectedEmployeeId = empId;
  }
  newPerson(){
    this.isOpened = true;
    this.showDetails(0);
  }
}
