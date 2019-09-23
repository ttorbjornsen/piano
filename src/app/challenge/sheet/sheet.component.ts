import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OpenSheetMusicDisplay} from 'opensheetmusicdisplay';

@Component({
  selector: 'piano-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit, AfterViewInit, OnChanges {

  openSheetMusicDisplay: OpenSheetMusicDisplay;
  @Input() xml: string;
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    console.log('ngoninit');

  }

  ngAfterViewInit(): void {
  }

  refresh(): void {
    this.openSheetMusicDisplay
      .load(this.xml)
      .then(
        () => this.openSheetMusicDisplay.render(),
        (err) => console.log('Error retrieving osmd xml', err)
      ).then(
      () => console.log('Sheet music displayed.'),
      (err) => console.log('Error rendering osmd xml', err)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges');
    if (!this.openSheetMusicDisplay){
      const container = document.getElementById('sheetDiv');
      this.openSheetMusicDisplay = new OpenSheetMusicDisplay(container,
        {drawingParameters: 'compact', drawPartNames: false, drawTitle: false});
    }
    if (changes && changes.xml) {
      this.xml = changes.xml.currentValue;
      this.refresh();
    }

  }

}
