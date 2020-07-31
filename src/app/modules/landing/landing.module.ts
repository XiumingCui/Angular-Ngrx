import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/pages/landing/landing.page';
import {SharedModule} from '@shared/shared.module';


export const landingRoutes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(landingRoutes)
    ],
    declarations: [
        LandingPage
    ],
    providers: []
})
export class LandingModule {
}
