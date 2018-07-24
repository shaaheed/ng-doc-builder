import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  template: `
  <div class="controls">
      <mat-icon title="Delete" (click)="onDelete()">delete</mat-icon>
      <mat-icon title="Copy" (click)="onCopy()">file_copy</mat-icon>
      <mat-icon title="Rotate" (click)="onRotate()">rotate_90_degrees_ccw</mat-icon>
  </div>
  `
})
export class ControlsComponent implements OnInit {

  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() copy: EventEmitter<any> = new EventEmitter();
  @Output() rotate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onCopy() {
    this.copy.emit();
  }

  onRotate() {
    this.rotate.emit();
  }

}
