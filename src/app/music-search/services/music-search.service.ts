import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class MusicSearchService {

  albums = [];
  albumsStream = new Subject();

  constructor(private http:Http) { 
    this.search('batman');
  }

  getAlbumsStram(): Observable<any>{
    return Observable
        .from(this.albumsStream)
        .startWith(this.albums);
  }

  getAlbum(id){
    let url = `https://api.spotify.com/v1/albums/${id}`;
    return this.http.get(url, this.getRequestOptions).map(response => response.json())
  }


  search(query){
    let url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    this.http.get(url, this.getRequestOptions)
      .map((response)=>{
        let data: any = response.json();
        return data.albums.items;
      })
      .do((albums)=>{ 
        this.albums = albums
      })
      .subscribe((response)=>{
        this.albumsStream.next(this.albums);
      })

  }

  get getToken(){
    let token = localStorage.getItem('token');
    if(!token){
      throw new Error("No authentication token avaiable.");
    }
    return token;
  }

  get getRequestOptions(){
    let headerDictionary = {
      'Authorization': "Bearer " + this.getToken
    }

    let requestOptions = {
      headers: new Headers(headerDictionary)
    }

    return requestOptions;
  }
}
