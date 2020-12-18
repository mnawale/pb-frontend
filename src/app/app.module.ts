import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { FooterComponent } from "./components/footer/footer.component"
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { BudgetsComponent } from "./components/budgets/budgets.component";
import { CreateBudgetComponent } from "./components/add-budget/add-budget.component";

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { HeroComponent } from './components/hero/hero.component';
import { ChartsComponent } from './components/charts/charts.component';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { ChartmenuComponent } from './components/chartmenu/chartmenu.component';
import { UpdateamountComponent } from './components/updateamount/updateamount.component';
import { BarchartComponent } from './components/barchart/barchart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    BudgetsComponent,
    CreateBudgetComponent,
    FooterComponent,
    HeroComponent,
    ChartsComponent,
    BargraphComponent,
    ChartmenuComponent,
    UpdateamountComponent,
    BarchartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
