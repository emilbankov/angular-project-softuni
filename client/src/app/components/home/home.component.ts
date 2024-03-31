import { Component, OnInit, Renderer2 } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadFlickityScript();
  }

  private loadFlickityScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://unpkg.com/flickity@2.3.0/dist/flickity.pkgd.min.js';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }

}
