**** Angular 9 setup

ng new ksj-app --routing -S

ng add @angular/localize

**** boot strap instalation

npm i -s bootstrap @ng-bootstrap/ng-bootstrap

**** angular.json ****

"options": { "outputPath": "../nodeServer/public",

"styles": [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.css" ], "scripts": []

**** App.Module.ts ****

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [NgbModule, ...],

// restart NG SERVE //

**** Generate Components
ng g m components/1-ksj/ksj --flat --routing

ng g c components/pages/page-not-found --skipTests=true --prefix
ng g c components/pages/section0/employeeProfile --skipTests=true --prefix
ng g s components/service/auth --skipTests=true
ng g pipe components/custom/pipe/display.... --skipTests=true
ng s -o ==== ng serve
ng build --prod ==== ng build



err => { alert('Server Error : '+err.message+' If this continues Please contact Systems.'); }

findIndex((i: any ) => i.job === job)