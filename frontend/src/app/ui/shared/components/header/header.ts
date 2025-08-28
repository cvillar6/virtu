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
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Solutions',
        items: [
          [
            {
              label: 'Solutions',
              items: [
                { label: 'Analytics portal', routerLink: '/analytics-portal' },
                { label: 'Imaging', routerLink: '/standalone-module/imaging' },
                { label: 'Hospitalization', routerLink: '/standalone-module/hospitalization' },
                { label: 'Referral Managements', routerLink: '/standalone-module/referral-managements' },
                { label: 'Patient Outreach', routerLink: '/standalone-module/patient-outreach' },
                { label: 'Disenrollments', routerLink: '/standalone-module/disenrollments' },
                { label: 'Transportation', routerLink: '/standalone-module/transportation' },
                { label: 'EHR', routerLink: '/correctional-health' },
                { label: 'Patient Mobile App', routerLink: '/patient-app' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Industries',
        routerLink: '/industries',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'About Us',
        routerLink: '/about-us',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Resources',
        items: [
          [
            {
              label: 'Resources',
              items: [
                { label: 'Blogs', routerLink: '/blogs', routerLinkActiveOptions: { exact: true } },
                { label: 'Case Studies', routerLink: '/usecases', routerLinkActiveOptions: { exact: true } },
                { label: 'News', routerLink: '/news', routerLinkActiveOptions: { exact: true } }
              ]
            }
          ],
        ],
      },
    ];
  }

}
