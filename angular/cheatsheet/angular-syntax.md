https://angular.io/guide/cheatsheet
* 
* 
* 
#### Template (.html)
* Bind a property (show value of components property on html page)
    * `{{hero}}`
* Display a component with `app-heroes` selector
    * `<app-heroes></app-heroes>`
* Transform text via pipeline
    * `<h2>{{hero.name | uppercase}} Details</h2>`
* One way data binding (data flows to hero property in angular code)
    * `<detail [hero]="selectedHero"></detail>`
* Two-way binding (data can flow from `<input>` to `hero.name` and from `hero.name` to `<input>`)
    * `<input [(ngModel)]="hero.name"/>`
* Repeater (repeat `<li>` for each `hero`)
    * `<li *ngFor="let hero of heroes">`
* Event binding (call `onSave` method on click)
    * `<button (click)="onSave($event)">Save</button>`
* Display `<div>` only if `selectedHero` is truthy
    * `<div *ngIf="selectedHero">`
* Class binding (Apply `leftside` css class to element, if condition is truthy)
    * `<div [class.leftside]="size > 23">`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`

#### Angular code (.ts)
* Input property (data binding from html page to angular code)
    * `@Input() myProperty;`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`
* zz
    * `xx`

