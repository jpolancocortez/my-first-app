import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styles: [`
        p {
            color: greenyellow;
        }
    `]
})
export class SuccessAlertComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }

}
