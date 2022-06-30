import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import {YoutubeService} from './services/youtube.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-Learning';
  channels:any
  videos: any=[];
  
  
  //@ViewChild('channelName')
  //channelName!: ElementRef;

  @ViewChild('videoName')
  videoName!: ElementRef;
  constructor(private youtube:YoutubeService) {}

  //ngOnInit(){
    //this.youtube.getChannels("programming").subscribe((data)=>{
    //console.log(data)
    //this.channels = data.items;
    
   // })}

   /* getData()
    {
      var channelName = this.channelName.nativeElement.value;
      this.youtube.getChannels(channelName).subscribe((data)=>{
        this.youtube.getChannels().subscribe((data)=>{
        console.log(data);
        this.channels = data.items;
    })}*/

    ngOnInit(){
    this.youtube.getChannels().subscribe((data)=>{
    //console.log(data)
    this.channels = data.items;
    console.log(this.channels);
    this.videos = this.channels
    
    })}

    /*getData()
    {
      var videoId = this.videoId.nativeElement.value;
      
        this.youtube.getChannels().subscribe((data)=>{
        console.log(data);
        this.channels = data.items;
    })}*/
    getVideo()
    {
      console.log(this.videoName);
          var videoName = this.videoName.nativeElement.value;
         
          this.videos = [];
         console.log(videoName);
         for(let channel of this.channels)
         {
            console.log(channel.snippet.title);
            if(channel.snippet.title.includes(videoName))
            {
              console.log("true");
              this.videos.push(channel);

            }
         }
         console.log(this.videos);
    }




  }
 