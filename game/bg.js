'use strict';class Bg{constructor(a=new Game){this.game=a,this.image=this.random=null,this.x=0}init(){this.random=Math.floor(2*Math.random()),this.loadImage()}loadImage(){switch(this.image=new Image,this.random){case 0:this.image.src="img/bg-day.webp";break;case 1:this.image.src="img/bg-night.webp";}}update(){const a=this.game.currentState,b=this.game.state;a===b.play&&(this.x=--this.x%289)}draw(){this.game.offContext.drawImage(this.image,this.x,0),this.game.offContext.drawImage(this.image,this.x+288,0)}}