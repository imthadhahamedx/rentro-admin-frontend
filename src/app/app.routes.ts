import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [

    {path: '', redirectTo : '/process/home', pathMatch: 'full'},

    {
        path: 'process',
        loadComponent: () => import('./pages/home-context/home-context').then((e) => e.HomeContext),
        
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            
            {
                path: 'home',
                loadComponent: () => import('./pages/home-page/home-page').then((e) => e.HomePage),
            },

            {
                path: 'fleet',
                loadComponent: () => import('./pages/fleet-page/fleet-page').then((e) => e.FleetPage),
            },

            {
                path: 'about',
                loadComponent: () => import('./pages/about-page/about-page').then((e) => e.AboutPage),
            },

            {
                path: 'contact',
                loadComponent: () => import('./pages/contact-page/contact-page').then((e) => e.ContactPage),
            },
        ]   
    },

    {
        path: 'auth',
        loadComponent: () => import('./pages/auth/auth').then((e) => e.Auth), 
        
        children:[
            {path: '', redirectTo : 'login', pathMatch: 'full'},

            {
                path: 'register',
                loadComponent: () => import('./pages/auth/inner-pages/register-page/register-page')
                .then((e) => e.RegisterPage)
            },

            {
                path: 'login',
                loadComponent: () => import('./pages/auth/inner-pages/login-page/login-page')
                .then((e) => e.LoginPage)
            }
        ], 
    },

    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((e) => e.Dashboard)   
    },

    {
        path: '**',
        component: NotFoundPage
    }
];
