import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  
  name = this.getProjectName();

  getProjectName(){
    return 'AngularProject';
  }
  ls = ['ajy','vijay','raj'];
}
