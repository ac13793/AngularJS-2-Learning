// ************************ Route Parameter ************************
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component ({
//     template: '<h3>You selected department with id = {{departmentId}}</h3>'
// })

// export class DepartmentDetailsComponent implements OnInit {
//     public departmentId: string;
//     constructor(private router: ActivatedRoute){}

//     ngOnInit() {
//         //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//         //Add 'implements OnInit' to the class.
//         let id: string = this.router.snapshot.params['id'];
//         this.departmentId = id;
//     }
// }

// *********** Params Observable ********
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, Params } from '@angular/router';
// @Component ({
//     template: `<h3>You selected department with id = {{departmentId}}</h3>
//                 <a (click)="goPrevious()">Previous</a>
//                 <a (click)="goNext()">Next</a>`
// })

// export class DepartmentDetailsComponent implements OnInit {
//     public departmentId: number;
//     constructor(private route: ActivatedRoute, private router: Router){}

//     ngOnInit() {
//         //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//         //Add 'implements OnInit' to the class.
//         // ******** Snapshot Approach ***********
//         // let id: string = this.route.snapshot.params['id'];
//         // this.departmentId = parseInt(id);

//         // ********** Params Observable Approach **********
//         this.route.params.subscribe((params: Params) => {
//             let id: number = parseInt(params['id']);
//             this.departmentId = id;
//         })
//     }

//     goPrevious(){
//         let previoudId: number = this.departmentId - 1;
//         this.router.navigate(['/departments', previoudId]);
//     }
//     goNext(){
//         let nextId = (this.departmentId + 1).toString();
//         console.log("Next:" + nextId);
//         this.router.navigate(['/departments', nextId]);
//     }
// }



// ************ Optional Route Parameter *************
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component ({
    template: `<h3>You selected department with id = {{departmentId}}</h3>
                <a (click)="goPrevious()">Previous</a>
                <a (click)="goNext()">Next</a>
                <p><button (click)="gotoDepartments()">Back</button></p>`
})

export class DepartmentDetailsComponent implements OnInit {
    public departmentId: number;
    constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // ******** Snapshot Approach ***********
        // let id: string = this.route.snapshot.params['id'];
        // this.departmentId = parseInt(id);

        // ********** Params Observable Approach **********
        this.route.params.subscribe((params: Params) => {
            let id: number = parseInt(params['id']);
            this.departmentId = id;
        })
    }

    goPrevious(){
        let previoudId: number = this.departmentId - 1;
        this.router.navigate(['/departments', previoudId]);
    }
    goNext(){
        let nextId = (this.departmentId + 1).toString();
        console.log("Next:" + nextId);
        this.router.navigate(['/departments', nextId]);
    }
    gotoDepartments(){
        let selectedId = this.departmentId? this.departmentId: null;
        this.router.navigate(['/departments', {id: selectedId, random: "random"}]);
    }
}