import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'enterprise', loadChildren: () => import('./enterprise/enterprise.module').then(mod => mod.EnterpriseModule) },
  { path: 'service', loadChildren: () => import('./service/service.module').then(mod => mod.ServiceModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule) },
  { path: '404', loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule) },
  { path: '500', loadChildren: () => import('./internal-error/internal-error.module').then(mod => mod.InternalErrorModule) },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }