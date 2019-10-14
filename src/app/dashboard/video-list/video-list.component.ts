import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../interfaces';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
selectedVideo: Video | undefined;


  @Input () videos: Video[] = [];
  @Output () videoSelected = new EventEmitter<Video>();

  constructor() {
    console.log('constructor', this.videos);
  }
      ngOnInit() {
        console.log('ngOnInit', this.videos);
        this.selectVideo(this.videos[0]);
      }

selectVideo(video: Video) {
  this.selectedVideo = video;
  this.videoSelected.emit(video);
}

}
