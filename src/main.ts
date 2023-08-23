import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <pre>
    {{curlclode.curlCommand}}
    </pre>
  `,
})
export class App {
  name = 'Angular';
  curlclode = {
    curlCommand:
      'PREDICTOR SNIPPET:\n curl --location --request POST https://sandboxdask.hypersense.ai:31327/v1/models/restdeppipe/v1/models/restdeppipe:predict --header \'auth-key: <authentication_key>\' --header \'Content-Type: application/json\'  -d \'{"instances":[{"gender":"string","ssc_percentage":"float","ssc_board":"string","hsc_percentage":"float","hsc_board":"string","hsc_subject":"string","degree_percentage":"float","undergrad_degree":"string","work_experience":"string","emp_test_percentage":"float","specialisation":"string","mba_percent":"float","status":"string"}] }\' \n\nCOUNTER FACTUAL SNIPPET : \ncurl --location --request POST https://sandboxdask.hypersense.ai:31327/v1/models/restdeppipe/v1/models/restdeppipe_counterfactual:explain --header \'auth-key: <authentication_key>\' --header \'Content-Type: application/json\'  -d \'{"instances":[{"gender":"string","ssc_percentage":"float","ssc_board":"string","hsc_percentage":"float","hsc_board":"string","hsc_subject":"string","degree_percentage":"float","undergrad_degree":"string","work_experience":"string","emp_test_percentage":"float","specialisation":"string","mba_percent":"float","status":"string"}] ,"counter_factual_details": {"desired_target":["Object","Object"],"features_to_vary":["String","String"],"total_CFs":"Integer"}}\' \n\nFEATURE CONTRIBUTION SNIPPET : \ncurl --location --request POST https://sandboxdask.hypersense.ai:31327/v1/models/restdeppipe/v1/models/restdeppipe_counterfactual:explain --header \'auth-key: <authentication_key>\' --header \'Content-Type: application/json\'  -d \'{"instances":[{"gender":"string","ssc_percentage":"float","ssc_board":"string","hsc_percentage":"float","hsc_board":"string","hsc_subject":"string","degree_percentage":"float","undergrad_degree":"string","work_experience":"string","emp_test_percentage":"float","specialisation":"string","mba_percent":"float","status":"string"}] ,"counter_factual_details": {"desired_target":["Object","Object"],"features_to_vary":["String","String"],"total_CFs":"Integer"}}',
  };
}

bootstrapApplication(App);
