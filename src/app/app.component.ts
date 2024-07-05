import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-api';

  listFetchedUsingHttp: any = [];
  listFetchedUsingFetch: any = [];

  constructor(
    public __dataService: DataService
  ) {

  }

  ngOnInit() {
    this.getDataUsingHttp();
    this.getDataUsingFetch();
  }
  getDataUsingHttp() {
    this.__dataService.getData().subscribe((res: any) => {
      res.map((item: any) => item['method'] = 'HttpClient');
      this.listFetchedUsingHttp = res.slice(0, 10);
    })
  }


  async getDataUsingFetch() {
    try {
      let res = await this.__dataService.getDataUsingFetch();
      res.map((item: any) => item.method = 'Fetch');
      this.listFetchedUsingFetch = res.slice(0, 10);
    }
    catch (error) {
      console.log(error);
    }

  }

}



interface Item {
  userId: number
}
