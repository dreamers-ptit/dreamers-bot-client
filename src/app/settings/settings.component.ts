import { Component, OnInit } from '@angular/core'

import * as $ from 'jquery';

import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js'
import '../../../node_modules/admin-lte/plugins/bootstrap-slider/bootstrap-slider.js'
import '../../../node_modules/admin-lte/plugins/datatables/jquery.dataTables.js'
import '../../../node_modules/admin-lte/plugins/datatables/dataTables.bootstrap4.js'
import '../../../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js'
import '../../../node_modules/admin-lte/plugins/fastclick/fastclick.js'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    ngOnInit() {
        $(function () {
            $("#excludedPair").DataTable()
            /* ION SLIDER */
            $('#satoshi_range').ionRangeSlider({
                min: 0,
                max: 10000,
                from: 500,
                to: 5000,
                type: 'double',
                step: 100,
                prefix: '',
                postfix: ' sat',
                prettify: false,
                grid: true
            })
            $('#volume_range').ionRangeSlider({
                min: 0,
                max: 1000,
                from: 100,
                to: 500,
                type: 'double',
                step: 10,
                prefix: '',
                postfix: ' BTC',
                prettify: false,
                grid: true
            })
        })
    }
}