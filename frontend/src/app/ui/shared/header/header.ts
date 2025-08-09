import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { MegaMenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-header',
  imports: [AccordionModule, MegaMenuModule, ButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  readonly REQUEST_DEMO_TEXT = 'REQUEST A DEMO';
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Solutions',
        items: [
          [
            {
              label: 'Solutions',
              items: [
                { label: 'Analytics portal' },
                { label: 'Imaging' },
                { label: 'Hospitalization' },
                { label: 'Referral Managements' },
                { label: 'Patient Outreach' },
                { label: 'Disenrollments' },
                { label: 'Transportation' },
                { label: 'EHR' },
                { label: 'Patient Mobile App' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Industries',
      },
      {
        label: 'About Us',
        routerLink: '/about-us',
      },
      {
        label: 'Resources',
        items: [
          [
            {
              label: 'Resources',
              items: [
                { label: 'Blogs', routerLink: '/blogs' },
                { label: 'Case Studies', routerLink: '/usecases' },
                { label: 'News', routerLink: '/news' }
              ]
            }
          ],
        ],
      },
    ];
  }

}
