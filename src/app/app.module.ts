import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { DeleteServicesComponent } from './MyComponents/delete-services/delete-services.component';
import { EditServicesComponent } from './MyComponents/edit-services/edit-services.component'
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,TodosComponent,HeaderComponent, EditServicesComponent, DeleteServicesComponent,],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
