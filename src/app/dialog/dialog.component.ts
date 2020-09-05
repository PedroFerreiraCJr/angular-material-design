import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogExampleComponent, 
      {
        data: {
          name: 'Pedro Ferreira'
      }
    })
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`dialog result: ${result}`)
    })
  }

}
