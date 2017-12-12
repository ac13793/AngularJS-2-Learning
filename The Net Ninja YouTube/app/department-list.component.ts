// import { Component } from '@angular/core';
// @Component ({
//     selector: 'department-list',
//     template: '<h3>Department List</h3>'
// })

// export class DepartmentListComponent {}

// ********* Routing with Parameter *************
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// @Component ({
//     selector: 'department-list',
//     template: `<h3>Department List</h3>
//                 <ul class="items">
//                     <li (click) = "onSelect(department)" *ngFor="let department of departments">
//                         <span class="badge">{{department.id}}</span> {{department.name}}
//                     </li>
//                 <ul>`
// })

// export class DepartmentListComponent {
//     constructor(private router: Router){}
//     departments: Array<any> = [
//         {"id": 1, "name": "Angular"},
//         {"id": 2, "name": "Node"},
//         {"id": 3, "name": "MongoDB"},
//         {"id": 4, "name": "Bootstrap"}                        
//     ];

//     onSelect(department: any){
//         this.router.navigate(['/departments', department.id]);
//     }
// }



// ************ Optional Route Parameter *************
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component ({
    selector: 'department-list',
    template: `<h3>Department List</h3>
                <ul class="items">
                    <li (click) = "onSelect(department)" [class.selected] = "isSelected(department)" *ngFor="let department of departments">
                        <span class="badge">{{department.id}}</span> {{department.name}}
                    </li>
                <ul>`
})

export class DepartmentListComponent implements OnInit {
    public selectedId: number;
    constructor(private router: Router, private route: ActivatedRoute){}
    departments: Array<any> = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "Node"},
        {"id": 3, "name": "MongoDB"},
        {"id": 4, "name": "Bootstrap"}                        
    ];
    
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // ******** Snapshot Approach ***********
        // let id: string = this.route.snapshot.params['id'];
        // this.departmentId = parseInt(id);

        // ********** Params Observable Approach **********
        this.route.params.subscribe((params: Params) => {
            let id: number = parseInt(params['id']);
            this.selectedId = id;
        })
    }

    onSelect(department: any){
        // ***************** Absolute path navigation ****************
        //this.router.navigate(['/departments', department.id]);
        // ***************** Relative path navigation ****************
        this.router.navigate([department.id], {relativeTo: this.route});
    }

    isSelected(department: any){
        return department.id === this.selectedId;
    }
}
