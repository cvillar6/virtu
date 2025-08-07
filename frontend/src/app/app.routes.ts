import { Routes } from '@angular/router';
import { AboutUsPage } from './ui/pages/about-us-page/about-us-page';
import { BlogPage } from './ui/pages/blog-page/blog-page';
import { ContactUsPage } from './ui/pages/contact-us-page/contact-us-page';
import { HomePage } from './ui/pages/home-page/home-page';
import { NewPage } from './ui/pages/new-page/new-page';
import { NewsPage } from './ui/pages/news-page/news-page';
import { ResourcesPage } from './ui/pages/resources-page/resources-page';

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
        component: ResourcesPage,
    },
    {
        path: 'blog/:id',
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
        path: '**',
        redirectTo: '',
    }
];
