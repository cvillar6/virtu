import { Routes } from '@angular/router';
import { AboutUsPage } from './ui/pages/about-us-page/about-us-page';
import { ContactUsPage } from './ui/pages/contact-us-page/contact-us-page';
import { HomePage } from './ui/pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'contact-us',
        component: ContactUsPage,
    },
    {
        path: 'about-us',
        component: AboutUsPage,
    }
];
