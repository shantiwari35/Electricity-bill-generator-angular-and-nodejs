import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { BillGeneration } from '../BillGeneration.service';

@Component({
  selector: 'app-bill-datatable',
  templateUrl: './bill-datatable.component.html',
  styleUrls: ['./bill-datatable.component.css']
})
export class BillDatatableComponent implements OnInit {
  billArray: any = {};
  rows = [];
  reorderable = true;
  temp = [];
  columns = [{ props: 'id', name: 'Id' }, { props: "bill_date", name: 'Bill Date' }, { name: 'Paid Date', props: "paid_date" }, { name: 'Unit Consumed', props: 'unit_consumed' }, { name: 'Amount', props: "amount" }, { name: 'Action' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private BGService: BillGeneration, public route: Router) { }

  ngOnInit(): void {
    // console.log(this.BGService.onGetAllBillData());
    this.BGService.onGetAllBillData().subscribe((response: any) => {
      console.log(response);
      this.temp = [...response];
      this.rows = response;

    });

    // this.rows = this.temp
  }
  // updateFilter(event) {
  //   const val = event.target.value;
  //   console.log(this.temp);
  //   // filter our data
  //   let temp = this.temp.filter(d => {
  //     d.includes(val);
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }
  onEdit(row) {
    console.log(row.id)
    this.route.navigate([row.id + '/edit']);
  }

  onDelete(row) {
    this.BGService.deletePost(row.id).subscribe((id: any) => {
      this.rows = this.temp.filter(d => d.id !== id);
      this.ngOnInit();
    });
    // this.route.navigate([''])
  }
}
