import { Component } from '@angular/core';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ROUTER_DIRECTIVES, Routes, Router} from "@angular/router";
import {JumboComponent} from "./components/jumbotron/jumbotron.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, JumboComponent, NavbarComponent, HomeComponent, AboutComponent]

})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent}
])
export class AppComponent { 
    constructor(private rourer: Router) {
        
    }
}
