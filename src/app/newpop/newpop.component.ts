import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-newpop',
  templateUrl: './newpop.component.html',
  styleUrls: ['./newpop.component.css']
})
export class NewpopComponent {

  constructor() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
