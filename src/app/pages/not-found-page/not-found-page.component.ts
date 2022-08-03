import { Component, OnInit } from '@angular/core';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  public faBombIcon = faBomb;
  constructor() {}

  ngOnInit(): void {}
}
