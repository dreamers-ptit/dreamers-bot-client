import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

import '../../assets/js/bootstrap-switch.min.js'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    ngOnInit() {
        $(function(){
            $("[name='my-checkbox']").bootstrapSwitch();
        })
    }
}