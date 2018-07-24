import {Component, OnInit} from '@angular/core'

import * as $ from 'jquery';

import '../../../../node_modules/admin-lte/plugins/datatables/jquery.dataTables.js'
import '../../../../node_modules/admin-lte/plugins/datatables/dataTables.bootstrap4.js'
import '../../../../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js'
import '../../../../node_modules/admin-lte/plugins/fastclick/fastclick.js'

@Component({
    selector: 'app-holding',
    templateUrl: './holding.component.html',
    styleUrls: ['./holding.component.css']
})
export class HoldingComponent implements OnInit {
    ngOnInit() {
        $(function () {
            $("#example1").DataTable();
        });
    }
}