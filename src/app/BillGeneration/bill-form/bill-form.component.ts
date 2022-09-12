import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BillGeneration } from '../BillGeneration.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {
  bill: any = {};
  form: FormGroup;
  billId: string;
  private mode = 'create';
  constructor(private BGService: BillGeneration, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'bill_date': new FormControl(null, { validators: [Validators.required] }),
      'paid_date': new FormControl(null, { validators: [Validators.required] }),
      'unit_consumed': new FormControl(null, { validators: [Validators.required] }),
      'amount': new FormControl(null, { validators: [Validators.required] }),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('billId')) {
        this.mode = 'edit';
        console.log(paramMap);
        this.billId = paramMap.get('billId');
        this.BGService.getById(this.billId).subscribe((data: any) => {
          this.bill = {
            id: data.post._id,
            bill_date: data.post.bill_date,
            paid_date: data.post.paid_date,
            unit_consumed: data.post.unit_consumed,
            amount: data.post.amount
          }
          console.log(data);
          this.form.setValue({
            'bill_date': this.bill.bill_date,
            'paid_date': this.bill.paid_date,
            'unit_consumed': this.bill.unit_consumed,
            'amount': this.bill.amount,
          })
        });
      } else {
        this.mode = 'create';
        this.billId = null;
      }
    })
  }
  onAddBill() {
    if (this.form.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.BGService.onPostRequest(this.form.value.bill_date, this.form.value.paid_date, this.form.value.unit_consumed, this.form.value.amount);
      this.router.navigate(['']);
    } else {
      this.BGService.onPutRequest(this.billId, this.form.value.bill_date, this.form.value.paid_date, this.form.value.unit_consumed, this.form.value.amount).subscribe((data: any) => {
        this.router.navigate(['']);

      });
    }
    this.form.reset();
  }
}
