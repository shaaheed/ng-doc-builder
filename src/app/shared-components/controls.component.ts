import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-controls',
  template: `
  <div class="controls">
      <mat-icon title="Delete" *ngIf="showDelete" (click)="onDelete()">delete</mat-icon>
      <mat-icon title="Copy" *ngIf="showCopy" (click)="onCopy()">file_copy</mat-icon>
      <mat-icon title="Rotate" *ngIf="showRotate" (click)="onRotate()">rotate_90_degrees_ccw</mat-icon>
  </div>
  `
})
export class ControlsComponent implements OnInit {

  @Input() showCopy: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() showRotate: boolean = true;
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
