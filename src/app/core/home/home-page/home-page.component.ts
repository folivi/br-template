import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  /** Application starting component
   * Responsible for checking authentication and authorizations.
   * If none is granted, redirect to the portal's logging page.
   */

  constructor() { }

  ngOnInit(): void {
  }

}
