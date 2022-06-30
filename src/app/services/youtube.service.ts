import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

 // getChannels(channelName: string): Observable<any>
  /*{
    const API_KEY = "AIzaSyDB0NpkFSE_rDaCLKpgvMT2leTiGUEiXeQ";
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet,contentDetails,statistics&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults=50";
    

    return this.http.get<any>(url);
  }*/
  //getChannels():Observable<any>
 /* {
    const API_KEY = "AIzaSyDB0NpkFSE_rDaCLKpgvMT2leTiGUEiXeQ";
    const url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCldyi11QYNXYXiLjVbyw5dA&maxResults=50&key="+API_KEY;

   // https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCq-Fj5jknLsUf-MWSy4_brA&   maxResults=50&key=

    

    return this.http.get<any>(url);
  }*/

  getChannels():Observable<any>
  {
    const API_KEY = "AIzaSyD-dYiupb2-wamg8iUJ75dH8Fu6O874XWo";
    const url = "https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&channelId=UCldyi11QYNXYXiLjVbyw5dA&part=snippet,id&order=date&maxResults=50";

   // https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCq-Fj5jknLsUf-MWSy4_brA&   maxResults=50&key=

    

    return this.http.get<any>(url);
  }
  
}
