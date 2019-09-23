import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChallengeRepositoryService} from '../services/repository/challenge-repository.service';
import {Scale} from '../../domain/music-vocabulary';
import {Observable} from 'rxjs';

@Component({
  selector: 'piano-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  musicXml: string;
  scale: Scale;
  @Input()
  scale$: Observable<Scale>;

  constructor(private http: HttpClient,
              private challengeRepository: ChallengeRepositoryService) {
    // const _headers = new HttpHeaders();
    // const headers = _headers.set('Content-Type', 'text/xml')
    // this.http.get('./assets/test.musicxml', {headers: _headers, responseType: 'text'})
    //   .subscribe(res => {
    //     console.log('A');
    //     this.musicXml = res;
    //   })
    // ;
  }

  ngOnInit() {

  }

}
