import { Routes } from '@angular/router';
import { AboutUsPage } from './ui/pages/about-us-page/about-us-page';
import { AnalyticsPortalPage } from './ui/pages/analytics-portal-page/analytics-portal-page';
import { BlogPage } from './ui/pages/blog-page/blog-page';
import { BlogsPage } from './ui/pages/blogs-page/blogs-page';
import { ContactUsPage } from './ui/pages/contact-us-page/contact-us-page';
import { CorrectionalHealthPage } from './ui/pages/correctional-health-page/correctional-health-page';
import { HomePage } from './ui/pages/home-page/home-page';
import { IndustriesPage } from './ui/pages/industries-page/industries-page';
import { NewPage } from './ui/pages/new-page/new-page';
import { NewsPage } from './ui/pages/news-page/news-page';
import { PatientAppPage } from './ui/pages/patient-app-page/patient-app-page';
import { StandaloneModulePage } from './ui/pages/standalone-module-page/standalone-module-page';
import { UsecasePage } from './ui/pages/usecase-page/usecase-page';
import { UsecasesPage } from './ui/pages/usecases-page/usecases-page';

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
    },
    {
        path: 'resources',
        component: BlogsPage,
    },
    {
        path: 'resources/:id',
        component: BlogPage,
    },
    {
        path: 'news',
        component: NewsPage,
    },
    {
        path: 'news/:id',
        component: NewPage,
    },
    {
        path: 'usecases',
        component: UsecasesPage,
    },
    {
        path: 'usecases/:id',
        component: UsecasePage,
    },
    {
        path: 'correctional-health',
        component: CorrectionalHealthPage,
    },
    {
        path: 'patient-app',
        component: PatientAppPage,
    },
    {
        path: 'solutions/:id',
        component: StandaloneModulePage,
    },
    {
        path: 'analytics-portal',
        component: AnalyticsPortalPage,
    },
    {
        path: 'industries',
        component: IndustriesPage,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
