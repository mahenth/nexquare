import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewpopComponent } from './newpop/newpop.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';

  constructor(private dailogRef: MatDialog) {}

  openDailog(){
    this.dailogRef.open(NewpopComponent)
  }
}
