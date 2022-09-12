import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Bill } from "./Bill.model";
import { map, Observable, Subject } from "rxjs";
import * as moment from "moment";

@Injectable({ providedIn: 'root' })
export class BillGeneration {
    constructor(private http: HttpClient, private router: Router) { }
    private bills: Bill[] = [];
    billId: any;
    onPostRequest(billDate: Date, paidDate: Date, unitConsumed: number, amount: number) {
        const bill: Bill = {
            id: 'null',
            bill_date: moment(billDate).format('YYYY-MM-DD'),
            paid_date: moment(paidDate).format('YYYY-MM-DD'),
            unit_consumed: unitConsumed,
            amount: amount
        }
        // console.log(bill);
        this.http.post<{ message: string, billId: string }>('http://localhost:3000/api/electicityBill', bill).subscribe((response) => {
            this.router.navigate(['']);
        })
    }

    onGetAllBillData(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/api/electicityBill')
            // .pipe((response: any) => {
            //     return response;
            // })
            .pipe(map((data: any) => {
                return data.data.map((post: any) => {
                    return {
                        bill_date: post.bill_date,
                        paid_date: post.paid_date,
                        unit_consumed: post.unit_consumed,
                        amount: post.amount,
                        id: post._id
                    }

                });
            }));


        // })).subscribe((body: any) => {
        //     return body;
        // });
    }

    deletePost(id: string): Observable<any> {
        return this.http.delete('http://localhost:3000/api/electicityBill/bill/' + id).pipe((response: any) => {
            return response;

        });

    }

    getById(id: string) {
        return this.http.get('http://localhost:3000/api/electicityBill/bill/' + id).pipe((response: any) => {
            return response;
        });

    }

    onPutRequest(id: string, billDate: Date, paidDate: Date, unitConsumed: number, amount: number) {
        const bill: Bill = {
            id: id,
            bill_date: moment(billDate).format('YYYY-MM-DD'),
            paid_date: moment(paidDate).format('YYYY-MM-DD'),
            unit_consumed: unitConsumed,
            amount: amount
        }
        return this.http.put('http://localhost:3000/api/electicityBill/bill/' + id, bill).pipe((response: any) => {

            return response;

        });

    }
}