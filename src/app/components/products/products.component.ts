import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() theme: string;

constructor() { }

ngOnInit() {
}

scrollRight(){
  var widthOneItem = parseInt($(".col-lg-3").first().css("width"))+parseInt($(".col-lg-3").first().css("margin-left"))+parseInt($(".col-lg-3").first().css("margin-right"))+parseInt($(".col-lg-3").first().css("padding-left"))+parseInt($(".col-lg-3").first().css("padding-right"));
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "+="+widthOneItem
  }, "fast");
}
scrollLeft(){
  var widthOneItem = parseInt($(".col-lg-3").first().css("width"))+parseInt($(".col-lg-3").first().css("margin-left"))+parseInt($(".col-lg-3").first().css("margin-right"))+parseInt($(".col-lg-3").first().css("padding-left"))+parseInt($(".col-lg-3").first().css("padding-right"));
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "-="+widthOneItem
  }, "fast");
}

}
