import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MegaMenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-header',
  imports: [AccordionModule, MegaMenuModule, ButtonModule],
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
      },
      {
        label: 'Solutions',
        items: [
          [
            {
              label: 'Virtu Analytics portal',
              items: [
                { label: 'DataCraft' },
                { label: 'Membership' },
                { label: 'Complex Cases' },
                { label: 'Pharmacy' },
                { label: 'Labs' },
                { label: 'Claims' },
                { label: 'MRA' },
                { label: 'Revenue' },
                { label: 'Reports' },
              ],
            },
          ],
          [
            {
              label: 'Virtu Analytics portal',
              items: [
                { label: 'Imaging' },
                { label: 'Hospitalization' },
                { label: 'Referral Managements' },
                { label: 'Patient Outreach' },
                { label: 'Disenrollments' },
                { label: 'Transportation' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Industries',
        items: [
          [
            {
              items: [
                { label: 'ACOs' },
                { label: 'Value-Based Care Providers' },
                { label: 'Medicare Advantage' },
                { label: 'Physician Groups' },
                { label: 'Hospitals & Health Systems' },
                { label: 'Correctional Health' },
              ],
            },
          ],
        ],
      },
      {
        label: 'About Us',
      },
      {
        label: 'Resources',
      },
    ];
  }
}
