
import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from "./pages.routes";

import { SharedModule } from "../shared/shared.module";

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";

//tmp

import { IncrementComponent } from "../components/increment/increment.component";
import { DoughnutChartComponent } from "../components/doughnut-chart/doughnut-chart.component";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        DoughnutChartComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component 
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
    
})
export class PageModule { }