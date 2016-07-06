import {Component} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    private name:string;
    constructor(){
        this.name = 'LagacyFit';
    }
}