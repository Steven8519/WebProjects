import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    private name:string;
    constructor(){
        this.name = 'LagacyFit';
    }
}