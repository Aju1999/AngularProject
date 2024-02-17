import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageData } from 'src/app/models/PageData';
import { Person } from 'src/app/models/Person';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit{

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
pages:PageData | undefined;
recordsPerPage : number = 5;

constructor(private userService:UserService){}

  ngOnInit(): void {
      this.getUsersByNameAndPages();
      
    }

  getUsersByNameAndPages(name:string = "",page:number=0,records:number=this.recordsPerPage){
      this.userService.getUsersByPegination(name,page,records).subscribe(
        (data:PageData)=>{
          console.log(data);
          this.pages = data;
        }
      );
    }
  gotoPage(records :number){
    var name ="";
    if(this.searchInput !== undefined){ name = this.searchInput.nativeElement.value};
    // console.log(this.searchInput.nativeElement.value);
    this.userService.getUsersByPegination(name,records,this.recordsPerPage).subscribe(
      (data:PageData)=>{
        console.log(data);
        this.pages = data;
      }
    );
  }
  pageInDirection(direction :string){
    // console.log(direction);
    // console.log(this.searchInput.nativeElement.value);
    if(direction ==="forword"){
      if(!this.pages.last){
        this.gotoPage(this.pages.number+1);
      }
    }else if(direction ==="backword"){
      if(!this.pages.first){
        this.gotoPage(this.pages.number-1);
      }
    }
  }
}
