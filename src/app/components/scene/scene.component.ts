import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        invertX: false,
        invertY: false
    });
    let images = document.getElementsByClassName('mountain');
    for (let i = 0; i < images.length; i++) {
      images[i].style.backgroundImage = `url('assets/img/${images[i].id}.png')`;
    }
  }

}
