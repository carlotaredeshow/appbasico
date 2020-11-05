import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private http: HttpClient) { }

  contactField: null;
  messageField: null;

  ngOnInit() {
  }

  sendForm(f: NgForm) {
    const url = environment.apiUrl + '/saveForm';
    const dataIn = {
      contact: this.contactField,
      message: this.messageField,
      token: this.authentication.token
    };
    this.http.post(url, dataIn)
      .subscribe(dataOut => {
        console.log(dataOut);
      }, error => {
        console.log(error.message);
      });
  }
}