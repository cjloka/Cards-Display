import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
  {
    title: "NEATTREE",
    username: "JOHNWICK",
    imageurl :"assets/tree.jpeg",
    content : " WOW THIS IS AMAZING!!"

  },
  {
  title: "Foggy Mounatain",
    username: "MAROON",
    imageurl :"assets/mountain.jpeg",
    content : " WOW THIS IS AMAZING!!"


  } ,
  {
  title: "BIKING",
    username: "STEPHEN",
    imageurl :"assets/biking.jpeg",
    content : " WOW THIS IS AMAZING!!"
 },
 {
  title: "BIKING",
  username: "STEPHEN",
  imageurl :"assets/biking.jpeg",
  content : " WOW THIS IS AMAZING!!"
 }
];
}
