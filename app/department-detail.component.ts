import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component ({
    template: '<h3>You selected department with id = {{departmentId}}</h3>'
})

export class DepartmentDetailsComponent implements OnInit {
    public departmentId: string;
    constructor(private router: ActivatedRoute){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        let id: string = this.router.snapshot.params['id'];
        this.departmentId = id;
    }
}