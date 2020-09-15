'use strict';class Announce{constructor(a=new Game){this.game=a,this.messImg=[],this.medalImg=[],this.medalIndex=0,this.dingAu=new Audio("audio/ding.wav"),this.played=!1,this.speedY=0,this.gravity=.5,this.table={x:30,y:512,speedY:0,gravity:.05},this.over={x:45,y:-42,speedY:0,gravity:.1},this.medal={x:55,y:203,w:420,h:420,speed:0,acceleration:.15},this.restartBtn={x:93,y:285,w:100,h:40},this.bound=!0,this.tableDone=!1,this.overDone=!1,this.medalDone=!1,this.restartDone=!1}init(){this.loadImage()}loadImage(){const a=new Image,b=new Image,c=new Image,d=new Image,e=new Image,f=new Image,g=new Image,h=new Image,i=new Image;a.src="img/message.webp",b.src="img/game-over.webp",c.src="img/score.webp",d.src="img/restart.webp",this.messImg.push(a,b,c,d),e.src="img/ngu-medal.webp",f.src="img/bronze-medal.webp",g.src="img/silver-medal.webp",h.src="img/gold-medal.webp",i.src="img/platinum-medal.webp",this.medalImg.push(e,f,g,h,i)}update(){const a=this.game.currentState,b=this.game.state;a===b.over&&(this.tableDone?this.medalDone?!this.played&&(this.dingAu.play(),this.played=!0):(this.medalType(),this.medal.h-=this.medal.speed+=this.medal.acceleration,this.medal.w-=this.medal.speed+=this.medal.acceleration,43>this.medal.h&&43>this.medal.w&&(this.medal.h=43,this.medal.w=43,this.medalDone=!0)):(this.table.y-=this.table.speedY+=this.table.gravity,160>this.table.y&&(this.table.y=160,this.tableDone=!0)),!this.overDone&&(this.over.y+=this.over.speedY+=this.over.gravity,100<this.over.y&&(this.bound?(this.over.speedY*=-.8,this.bound=!1):(this.over.y=100,this.overDone=!0))))}medalType(){const a=this.game.score.point.value;this.medalIndex=10>a?0:10<=a&&20>a?1:20<=a&&30>a?2:30<=a&&40>a?3:4}draw(){const a=this.game.currentState,b=this.game.state,c=this.game.offContext;a===b.ready?c.drawImage(this.messImg[0],50,49):a===b.over&&(c.drawImage(this.messImg[1],this.over.x,this.over.y),c.drawImage(this.messImg[2],this.table.x,this.table.y),this.tableDone&&c.drawImage(this.medalImg[this.medalIndex],this.medal.x,this.medal.y,this.medal.w,this.medal.h)),this.game.bird.heavenDone&&(c.drawImage(this.messImg[3],this.restartBtn.x,this.restartBtn.y,this.restartBtn.w,this.restartBtn.h),this.restartDone=!0)}}