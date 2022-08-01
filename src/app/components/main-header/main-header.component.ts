import { Component, Input, OnInit } from '@angular/core';

interface MenuItem {
  routeText: string;
  routeLink: string;
}

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  @Input() public title: string = '';
  public menuList: MenuItem[] = [
    {
      routeText: 'Products',
      routeLink: '/products',
    },
    {
      routeText: 'Cart',
      routeLink: '/cart',
    },
  ];
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
