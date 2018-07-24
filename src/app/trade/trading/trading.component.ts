import {Component, OnInit} from '@angular/core'

import * as $ from 'jquery';

import '../../../../node_modules/admin-lte/plugins/datatables/jquery.dataTables.js'
import '../../../../node_modules/admin-lte/plugins/datatables/dataTables.bootstrap4.js'
import '../../../../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js'
import '../../../../node_modules/admin-lte/plugins/fastclick/fastclick.js'

@Component({
    selector: 'app-trading',
    templateUrl: './trading.component.html',
    styleUrls: ['./trading.component.css']
})
export class TradingComponent  implements OnInit{
    ngOnInit() {
        $(function () {
            $("#example1").DataTable();
        });
    }
}