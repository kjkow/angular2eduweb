import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
  <div class="card">
    <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{text}}</p>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: []
})
export class ContentCardComponent implements OnInit {

  @Input()
  title = '';

  @Input('content')
  text = '';

  constructor() { }

  ngOnInit() {
  }

}
