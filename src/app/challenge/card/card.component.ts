import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'piano-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  musicXml: string;

  constructor(private http: HttpClient) {
    const _headers = new HttpHeaders();

    const headers = _headers.set('Content-Type', 'text/xml')
    http.get('./assets/test.musicxml', {headers: _headers, responseType: 'text'})
      .subscribe(res => this.musicXml = res);
  }

  ngOnInit() {
  }

}
