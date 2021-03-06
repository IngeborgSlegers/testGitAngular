import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testGit';

  resultsSW = new FormGroup({
    searchbar: new FormControl('')
  })

  submitted(): void {
    console.log(this.resultsSW.value)
  }
}
