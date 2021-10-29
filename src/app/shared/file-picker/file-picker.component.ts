// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html'
})
export class FilePickerComponent implements OnInit {

  @Input() title: string = '';
  @Input() filename: any;
  @Output() filenameChange: EventEmitter<any> = new EventEmitter();
  @Input() dataURL: any;
  @Output() dataURLChange: EventEmitter<any> = new EventEmitter();
  @Output() load: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  fileInputChange(e: any) {
    // getFileAsDataURL(e, (data) => {
    //   this.filenameChange.emit(data.filename);
    //   this.dataURLChange.emit(data.dataURL);
    // }, (load) => { this.load.emit(load); })
  }


}