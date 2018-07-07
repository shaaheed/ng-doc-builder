import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  template: `
  <div class="picker">
    <h5>{{title}}</h5>
    <div class="control file-picker">
      <mat-icon class="cursor-pointer" [class.color-pink]="filename" (click)="fileInput.click()">cloud_upload</mat-icon>
      <span class="file-name">{{filename ? filename : ''}}</span>
    </div>
    <input #fileInput hidden type="file" (change)="fileInputChange($event)" accept="image/*">
  </div>
  `
})
export class FilePickerComponent implements OnInit {

  @Input() title: string;
  @Input() filename: any;
  @Output() filenameChange: EventEmitter<any> = new EventEmitter();
  @Input() dataURL: any;
  @Output() dataURLChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fileInputChange(e) {
    getFileAsDataURL(e, (data) => {
      this.filenameChange.emit(data.filename);
      this.dataURLChange.emit(data.dataURL);
    })
  }


}
