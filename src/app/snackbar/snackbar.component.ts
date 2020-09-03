import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackbar(message: string, action: string): void {
    let snackbar = this.snackbar.open(message, action, {
      duration: 2000
    })
    snackbar.afterDismissed().subscribe(() => {
      console.log('Dismissed')
    })

    snackbar.onAction().subscribe(() => {
      console.log('Action triggered')
    })
  }

  openCustomSnackbar(): void {
    this.snackbar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000
    })
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange;">Custom SnackBar</span>`
})
export class CustomSnackBarComponent {

}