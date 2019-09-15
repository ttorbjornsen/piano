import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OpenSheetMusicDisplay} from 'opensheetmusicdisplay';

@Component({
  selector: 'piano-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit, AfterViewInit {

  musicXml: string;
  openSheetMusicDisplay: OpenSheetMusicDisplay;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    const _headers = new HttpHeaders();
    const headers = _headers.set('Content-Type', 'text/xml')
    this.http.get('./assets/test.musicxml', {headers: _headers, responseType: 'text'})
      .subscribe(res => this.musicXml = res);

  }

  ngAfterViewInit(): void {
    const container = document.getElementById('tempdiv');
    this.openSheetMusicDisplay = new OpenSheetMusicDisplay(container, {backend: 'canvas', drawingParameters: 'compact', drawPartNames: false});

  }

}
