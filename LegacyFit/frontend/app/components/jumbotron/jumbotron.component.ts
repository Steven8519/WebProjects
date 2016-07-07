import {Component} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumboComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
        this.jbtHeading = 'Ready To Get Fit!';
        this.jbtBtnText = 'This is for all members of a gym looking for a Personal Trainor';
        this.jbtBtnText = 'Learn More';
        this.jbtBtnUrl = '';
    }
}
