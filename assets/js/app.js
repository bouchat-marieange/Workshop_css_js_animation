import "../scss/app.scss";
import "jquery";
import { TimelineMax, TweenMax, Linear, Power1, TweenLite, Power, TimelineLite, RoughEase } from 'gsap';
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
import axios from "axios"


var controller = new ScrollMagic.Controller();

var header = new TimelineMax();
  header
    .from($('.left'),0.5,{height:0})
    .from($('.right'),0.5,{y:'100%'})
    .from($('.cardXL'),1,{height:0})
    .from($('.tag'),0.5,{y:100, autoAlpha:0})


var tl = new TimelineLite();
tl
  .from($('.textStation'),1,{opacity:0,y:150})
  .from($('.boldTitle'),1,{x:-150})
  .from($('.inner-img'),0.5,{height:0})


//-------------------------Section Content----------------------//  

var content = new TimelineLite();
  content
  .to($('.second'),0.75,{width:0,opcaity:0,  ease:Expo.easeOut})
  .to($('.first'),0.75,{width:0,opacity:0,  ease:Expo.easeOut},'-=0.25')
  .from($('.img-content'),0.5,{width:0, ease:Circ})
  .from($('.content-text'),0.5,{autoAlpha:0,y:50});
var sceneContent = new ScrollMagic.Scene({
  triggerElement:'.content',
  reverse:false
})
.setTween(content)
.addTo(controller)
.addIndicators({
  colorStart:'red'
})
 //Animation des logod//

  var square = $('.square'),
      logo = $('.logo-img'),
      show = $('.show');

  var blockAnimation = new TimelineMax();

  blockAnimation
   .staggerFrom(square,0.5,{y:150,opacity:0, ease:Power2.easeOut,yoyo:true},0.1)
   .staggerFrom(logo,0.5,{y:50,opacity:0, ease:Power2.easeOut,yoyo:true},0.1)
  var block =  new ScrollMagic.Scene({
    triggerElement:'.show',

  })
  .setTween(blockAnimation)
  .addTo(controller)
  .addIndicators({
    colorStart:'blue'
  })

   


