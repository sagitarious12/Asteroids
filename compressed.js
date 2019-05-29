(function(a){var b=function(){var b={forEach:function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(a[c],c)}},c=b.forEach;b.getTranspose=function(a){var b={};return c(a,function(a,c){b[a]=c}),b},b.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);var c,d=a.length;for(c=0;c<d;c++)if(a[c]===b)return c;return-1};var d=b.indexOf;return b.pushUnique=function(a,b){return-1===d(a,b)&&(a.push(b),!0)},b.removeValue=function(a,b){var c=d(a,b);if(-1!==c)return a.splice(c,1)[0]},b.documentOn=function(b,c){a.addEventListener?a.addEventListener(b,c,!1):document.attachEvent&&document.attachEvent("on"+b,c)},b.requestAnimationFrame=function(){return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||function(b){a.setTimeout(b,1e3/60)}}(),b.noop=function(){},b}(),c={ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,SHIFT:16,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,DELETE:46,TAB:9,TILDE:192},d=b.getTranspose(c),e=[],f=function(){'use strict';function a(a){this.keyCode=a,this.cachedKeypressEvent=null}function c(a,b,c,d){c?a[b]=c:a[b](d)}return a.prototype._downHandler=b.noop,a.prototype._upHandler=b.noop,a.prototype._pressHandler=b.noop,a.prototype.isDown=function(){return-1!==b.indexOf(e,this.keyCode)},a.prototype.down=function(a){c(this,"_downHandler",a,this.cachedKeypressEvent)},a.prototype.up=function(a,b){c(this,"_upHandler",a,b)},a.prototype.press=function(a,b){this.cachedKeypressEvent=b,c(this,"_pressHandler",a,b)},a.prototype.unbindDown=function(){this._downHandler=b.noop},a.prototype.unbindUp=function(){this._upHandler=b.noop},a.prototype.unbindPress=function(){this._pressHandler=b.noop},a}(),g=function(e){'use strict';var g={Key:f},h=!1,i=Date.now?Date.now:function(){return+new Date},j=i();return g.tick=function(){var a,b=e.length;for(a=0;a<b;a++){var c=e[a],f=d[c];f&&g[f].down()}},g.run=function(c){h=!0;var d=i(),e=d-j;b.requestAnimationFrame.call(a,function(){h&&(g.run(c),c(e,d))}),j=d},g.stop=function(){h=!1},b.forEach(c,function(a,b){g[b]=new f(a)}),b.documentOn("keydown",function(a){var c=a.keyCode,f=d[c],h=b.pushUnique(e,c),i=g[f];if(i){var j=i.cachedKeypressEvent||{};(j.ctrlKey||j.shiftKey||j.metaKey)&&(h=!0),h&&i.press(null,a)}}),b.documentOn("keyup",function(a){var c=b.removeValue(e,a.keyCode),f=d[c];f&&g[f].up(null,a)}),b.documentOn("blur",function(){b.forEach(e,function(a){var b=d[a];b&&g[b].up()}),e.length=0}),g}(e);"object"==typeof module&&"object"==typeof module.exports?module.exports=g:"function"==typeof define&&define.amd?define(function(){return g}):a.kd=g})(window);(function(){kd.LEFT.down(function(){state.getState()===state.getStates().GAME&&(ship.left(),ship.hasInteracted())}),kd.RIGHT.down(function(){state.getState()===state.getStates().GAME&&(ship.right(),ship.hasInteracted())}),kd.UP.down(function(){state.getState()===state.getStates().GAME&&(ship.forward(),ship.hasInteracted())}),kd.A.down(function(){state.getState()===state.getStates().GAME&&(ship.left(),ship.hasInteracted())}),kd.D.down(function(){state.getState()===state.getStates().GAME&&(ship.right(),ship.hasInteracted())}),kd.W.down(function(){state.getState()===state.getStates().GAME&&(ship.forward(),ship.hasInteracted())}),kd.SPACE.press(function(){state.getState()===state.getStates().GAME&&(bullet.fire(),ship.hasInteracted())}),kd.ENTER.press(function(){state.getState()===state.getStates().LOADING?(state.changedState(!0),state.setState(state.getStates().GAME)):state.getState()===state.getStates().GAME&&(bullet.fire(),ship.hasInteracted())}),kd.ESC.press(function(){state.getState()===state.getStates().GAME?state.setState(state.getStates().PAUSE):state.getState()===state.getStates().PAUSE&&state.setState(state.getStates().GAME)}),kd.P.press(function(){state.getState()===state.getStates().GAME?state.setState(state.getStates().PAUSE):state.getState()===state.getStates().PAUSE&&state.setState(state.getStates().GAME)}),kd.SHIFT.press(function(){state.getState()===state.getStates().GAME&&(ship.hyperspace(),ship.hasInteracted())}),kd.E.press(function(){state.getState()===state.getStates().GAME&&(ship.hyperspace(),ship.hasInteracted())})})(window);(function(a){let b,c,d,e=0,f=!1,g=!1,h=!1,i=!1,j=!1;const k=a=>{e+=a,1e4<e&&!f?(f=!0,state.addLife()):2e4<e&&!g?(g=!0,state.addLife()):3e4<e&&!h?(h=!0,state.addLife()):4e4<e&&!i?(i=!0,state.addLife()):5e4<e&&!j&&(j=!0,state.addLife()),m(a)},l=()=>localStorage.getItem("highScore")?+localStorage.getItem("highScore"):0,m=a=>{localStorage.getItem("highScore")!==void 0&&e>+localStorage.getItem("highScore")&&localStorage.setItem("highScore",+localStorage.getItem("highScore")+a)},n=()=>{b.beginPath(),b.save(),b.font="20px Arcade",b.fillStyle="white",b.textAlign="left",b.translate(.05*c,40),b.fillText("Score: "+e,0,0,.2*c),b.translate(.37*c,0),b.fillText("Highscore: "+l(),0,0,.25*c),b.restore()};a.score={init:(a,e,f)=>{b=a,c=e,d=f},addScore:k,draw:n,update:()=>{}}})(window);(function(a){let b,c,d,e=0,f={exploding:!1,x:0,y:0,frames:0},g=[],h=[],j=40,k=1,l=60,m=.5;const n=(a,b)=>{g.push({x:a,y:b})},o=()=>{e++,1e4<e&&(e=0),0<g.length&&q(),f.exploding&&r(),0<h.length&&s()},p=()=>{0<h.length&&t()},q=()=>{for(let a=0;a<g.length;a++)for(let b=0;b<30;b++){let b=Math.floor(360*Math.random()+1),c=Math.random()*(2-k)+k,d=Math.random()*(60-j)+j;h.push({direction:b,x:g[a].x,y:g[a].y,xOrigin:g[a].x,yOrigin:g[a].y,speed:c,distance:d})}g=[]},r=()=>{for(let a=0;a<70;a++){let a=Math.floor(360*Math.random()+1),b=Math.random()*(1.5-m)+m,c=Math.random()*(80-l)+l;h.push({direction:a,x:f.x,y:f.y,xOrigin:f.x,yOrigin:f.y,speed:b,distance:c})}f.exploding=!1},s=()=>{for(let a,b=0;b<h.length;b++){a=h[b].direction*Math.PI/180,h[b].x+=h[b].speed*Math.sin(a),h[b].y-=h[b].speed*Math.cos(a);let c=Math.abs(Math.sqrt(Math.pow(h[b].xOrigin-h[b].x,2)+Math.pow(h[b].yOrigin-h[b].y,2)));c>h[b].distance&&h.splice(b,1)}},t=()=>{for(let a=0;a<h.length;a++)b.beginPath(),b.save(),b.translate(h[a].x,h[a].y),b.moveTo(0,0),b.lineTo(0,1),b.lineTo(1,1),b.lineTo(1,0),b.lineTo(0,0),b.strokeStyle="#a0a0a0",b.lineWidth=1,b.stroke(),b.restore()};a.effects={init:(a,e,f)=>{b=a,c=e,d=f,h=[]},explodeAsteroid:n,explodeShip:(a,b)=>{f.exploding=!0,f.x=a,f.y=b},update:o,draw:p}})(window);(function(a){let b=.5;a.sound={largeSound:function(){this.largeSound=new Audio("./assets/bangLarge.mp3"),this.play=()=>{this.largeSound.volume=b,this.largeSound.play()},this.pause=()=>{this.largeSound.pause()}},mediumSound:function(){this.mediumSound=new Audio("./assets/bangMedium.mp3"),this.play=()=>{this.mediumSound.volume=b,this.mediumSound.play()},this.pause=()=>{this.mediumSound.pause()}},smallSound:function(){this.smallSound=new Audio("./assets/bangSmall.mp3"),this.play=()=>{this.smallSound.volume=b,this.smallSound.play()},this.pause=()=>{this.smallSound.pause()}},fireSound:function(){this.fireSound=new Audio("./assets/fire.mp3"),document.body.appendChild(this.fireSound),this.play=()=>{this.fireSound.volume=b,this.fireSound.play()},this.pause=()=>{this.fireSound.pause()}},thrustSound:function(){this.thrustSound=new Audio("./assets/thrust.mp3"),this.play=()=>{this.thrustSound.volume=b,this.thrustSound.play()},this.pause=()=>{this.thrustSound.pause()}},musicSound1:function(){this.musicSound=new Audio("./assets/beat1.mp3"),this.play=()=>{this.musicSound.volume=b,this.musicSound.play()},this.pause=()=>{this.musicSound.pause()}},musicSound2:function(){this.musicSound=new Audio("./assets/beat2.mp3"),this.play=()=>{this.musicSound.volume=b,this.musicSound.play()},this.pause=()=>{this.musicSound.pause()}},extraShipSound:function(){this.extraShipSound=new Audio("./assets/extraShip.mp3"),this.play=()=>{this.extraShipSound.volume=b,this.extraShipSound.play()},this.pause=()=>{this.extraShipSound.pause()}},setVolume:function(a){b=a}}})(window);(function(a){let b,c,d;const e=[];directions=[{name:"up",directions:[315,0,45]},{name:"right",directions:[45,90,135]},{name:"down",directions:[135,180,225]},{name:"left",directions:[225,270,315]}];const f=120,g=180,h=2,i=13,j=20,k=60,l=new sound.smallSound,m=()=>{let a=Math.floor(4*Math.random()),b=directions[a].directions[Math.floor(3*Math.random())],l=0,m=0,n=Math.floor(Math.random()*(g-f)+f),o=Math.random()*(2.4-h)+h,p=Math.floor(12*Math.random())+1,q="large";4>=p&&(q="small"),0===a&&(m=d,l=Math.floor(Math.random()*(c-400)+200)),1===a&&(l=0,m=Math.floor(Math.random()*(c-400)+200)),2===a&&(m=0,l=Math.floor(Math.random()*(c-400)+200)),3===a&&(l=c,m=Math.floor(Math.random()*(c-400)+200)),e.push({direction:a,angle:b,x:l,y:m,nextChange:n,speed:o,finalSize:q,radius:"small"===q?i:j,lastFire:k})},n=(a,b,c)=>{bulletAlien.fire(a,b,c)},o=()=>{for(let a=0;a<e.length;a++)b.beginPath(),b.save(),b.translate(e[a].x,e[a].y),"large"===e[a].finalSize&&q(),"small"===e[a].finalSize&&r(),b.strokeStyle="white",b.lineWidth=1,b.stroke(),b.restore()},p=()=>{for(let a=0;a<e.length;a++){if(0>=e[a].nextChange){for(let b=e[a].angle;e[a].angle==b;)e[a].angle=directions[e[a].direction].directions[Math.floor(3*Math.random())];e[a].nextChange=Math.floor(Math.random()*(g-f)+f)}else e[a].nextChange--;0>=e[a].lastFire?(n(e[a].x,e[a].y,e[a].finalSize),e[a].lastFire=k):e[a].lastFire--,e[a].x+=e[a].speed*Math.sin(e[a].angle*Math.PI/180),e[a].y-=e[a].speed*Math.cos(e[a].angle*Math.PI/180),0===e[a].direction?(0>=e[a].x&&(e[a].x=c),e[a].x>c&&(e[a].x=0)):1===e[a].direction?(0>=e[a].y&&(e[a].y=d),e[a].y>d&&(e[a].y=0)):2===e[a].direction?(0>=e[a].x&&(e[a].x=c),e[a].x>c&&(e[a].x=0)):3===e[a].direction&&(0>=e[a].y&&(e[a].y=d),e[a].y>d&&(e[a].y=0)),0===e[a].direction&&0>=e[a].y?e.splice(a,1):1===e[a].direction&&e[a].x>c?e.splice(a,1):2===e[a].direction&&e[a].y>d?e.splice(a,1):3===e[a].direction&&0>=e[a].x&&e.splice(a,1)}},q=()=>{b.moveTo(0,0),b.moveTo(-j,0),b.lineTo(j,0),b.lineTo(j-j/2,j/2),b.lineTo(-j+j/2,j/2),b.lineTo(-j,0),b.lineTo(-j+j/2,-j/2),b.lineTo(j-j/2,-j/2),b.lineTo(j,0),b.moveTo(-j+j/1.5,-j/2),b.lineTo(-j+j/1.5,-j/1.2),b.lineTo(j-j/1.5,-j/1.2),b.lineTo(j-j/1.5,-j/2)},r=()=>{b.moveTo(0,0),b.moveTo(-i,0),b.lineTo(i,0),b.lineTo(i-i/2,i/2),b.lineTo(-i+i/2,i/2),b.lineTo(-i,0),b.lineTo(-i+i/2,-i/2),b.lineTo(i-i/2,-i/2),b.lineTo(i,0),b.moveTo(-i+i/1.5,-i/2),b.lineTo(-i+i/1.5,-i/1.2),b.lineTo(i-i/1.5,-i/1.2),b.lineTo(i-i/1.5,-i/2)};a.alien={init:(a,e,f)=>{b=a,c=e,d=f},update:p,draw:o,spawn:m,getAliens:()=>e,explode:(a,b,c)=>{effects.explodeShip(a,b);const d=e[c].size;"large"===d&&score.addScore(200),"small"===d&&score.addScore(1e3),e.splice(c,1),l.play()}}})(window);(function(a){let b,c,d,e=0,f=0,g=1,h=1,i=1,j=-1,k=0;const l=()=>{b.beginPath(),b.save(),b.font="30px Arcade",b.fillStyle="white",b.textAlign="center",b.clearRect(0,0,d,c),b.translate(0,40),30>k%60&&b.fillText("Press   Enter   To   Start!",d/2,0,d),b.translate(0,40),b.fillText("controls:",d/2,0,d),b.translate(0,70),b.fillText("rotate  left:  a,  left  arrow",d/4,0,d),b.fillText("rotate  right:  d,  right  arrow",d/4+d/2,0,d),b.translate(0,40),b.fillText("thrust:  w,   forward arrow",d/4,0,d),b.fillText("fire:  SPACE,  enter",d/4+d/2,0,d),b.translate(0,40),b.fillText("pause game:  p,  esc",d/4,0,d),b.fillText("hyperspace:  e, shift",d/4+d/2,0,d),b.scale(i,i),p(0+e,0+f),q(-20+e,0+f),r(-30+e,0+f),s(-40+e,0+f),t(-50+e,0+f),u(-67+e,0+f),v(-80+e,0+f),w(-90+e,0+f),q(645+e,0+f),b.restore(),asteroid.draw()},m=()=>{k++,1e4<k&&(k=0),i+=.002*j,(.5>i||1<i)&&(j*=-1,g*=-1),e+=1.75*g,f+=2*h,(300<f||-200>f)&&(h*=-1),asteroid.update()},n=(a,c)=>{b.lineTo(a,c)},o=()=>{b.strokeStyle="white",b.lineWidth=5,b.stroke()},p=(a,c)=>{b.beginPath(),b.save(),b.translate(40+a,280+c),b.moveTo(-30,120),n(0,0),n(30,0),n(60,120),n(30,120),n(15,80),n(0,120),n(-30,120),b.moveTo(15,35),n(25,60),n(5,60),n(15,35),o(),b.restore()},q=(a,c)=>{b.save(),b.beginPath(),b.translate(110+a,280+c),b.arc(45,35,38,.5*Math.PI,1.7*Math.PI),o(),b.beginPath(),b.arc(45,38,9,.5*Math.PI,1.7*Math.PI),o(),b.beginPath(),b.arc(45,86,38,-.5*Math.PI,-1.2*Math.PI),o(),b.beginPath(),b.arc(45,82,9,-.5*Math.PI,-1.2*Math.PI),o(),b.beginPath(),b.moveTo(14,108),n(38,88),b.moveTo(68,4),n(51,32),o(),b.restore()},r=(a,c)=>{b.beginPath(),b.save(),b.translate(200+a,280+c),b.moveTo(0,0),n(100,0),n(100,30),n(65,30),n(65,120),n(35,120),n(35,30),n(0,30),n(0,0),o(),b.restore()},s=(a,c)=>{b.beginPath(),b.save(),b.translate(320+a,280+c),b.moveTo(0,0),n(80,0),n(80,35),n(30,35),n(30,45),n(60,45),n(60,75),n(30,75),n(30,85),n(80,85),n(80,120),n(0,120),n(0,0),o(),b.restore()},t=(a,c)=>{b.beginPath(),b.save(),b.translate(420+a,280+c),b.moveTo(0,0),n(0,120),n(30,120),n(30,80),n(60,120),n(90,120),n(60,70),n(85,50),n(80,10),n(40,0),n(0,0),b.moveTo(20,20),n(30,20),n(47,25),n(50,45),n(37,50),n(20,45),n(20,20),o(),b.restore()},u=(a,c)=>{b.beginPath(),b.save(),b.translate(530+a,280+c),b.beginPath(),b.arc(45,45,45,1*Math.PI,0*Math.PI),o(),b.beginPath(),b.arc(45,75,45,0*Math.PI,1*Math.PI),o(),b.beginPath(),b.arc(45,45,15,1*Math.PI,0*Math.PI),o(),b.beginPath(),b.arc(45,75,15,0*Math.PI,1*Math.PI),o(),b.beginPath(),b.moveTo(0,45),n(0,75),b.moveTo(30,45),n(30,75),b.moveTo(60,45),n(60,75),b.moveTo(90,45),n(90,75),o(),b.restore()},v=(a,c)=>{b.beginPath(),b.save(),b.translate(640+a,280+c),b.moveTo(0,0),n(100,0),n(100,30),n(65,30),n(65,90),n(100,90),n(100,120),n(0,120),n(0,90),n(35,90),n(35,30),n(0,30),n(0,0),o(),b.restore()},w=(a,c)=>{b.beginPath(),b.save(),b.translate(760+a,280+c),b.moveTo(0,0),n(0,120),n(40,120),n(80,100),n(85,60),n(80,20),n(40,0),n(0,0),b.moveTo(25,30),n(25,90),n(40,90),n(60,70),n(60,60),n(60,50),n(40,30),n(25,30),o(),b.restore()};a.loading={init:(a,e,f)=>{b=a,c=f,d=e},draw:l,update:m}})(window);(function(a){let b;a.pause={init:(a,c,d)=>{b=a,c=width,d=height},draw:()=>{},update:()=>{}}})(window);(function(a){let b,c,d;const e=(a,b,c,d,e)=>{return c*=c+10,!!((a-d)*(a-d)+(b-e)*(b-e)<c)};a.collision={init:(a,e,f)=>{b=a,c=e,d=f},update:(a,b,c,d,f)=>{for(let g=0;g<c.length;g++){c[g]&&e(c[g].location.x,c[g].location.y,c[g].radius,a.x,a.y)&&ship.explode();for(let a=0;a<b.length;a++)c[g]&&b[a]&&e(c[g].location.x,c[g].location.y,c[g].radius,b[a].x,b[a].y)&&(asteroid.shatter(g),bullet.remove(a))}for(let g=0;g<f.length;g++)f[g]&&e(a.x,a.y,24,f[g].x,f[g].y)&&(ship.explode(),bulletAlien.remove(g));for(let g=0;g<d.length;g++){e(d[g].x,d[g].y,d[g].radius,a.x,a.y)&&(ship.explode(),alien.explode(d[g].x,d[g].y,g));for(let a=0;a<b.length;a++)b[a]&&d[g]&&e(d[g].x,d[g].y,d[g].radius,b[a].x,b[a].y)&&(alien.explode(d[g].x,d[g].y,g),bullet.remove(a))}},isColliding:(a,b)=>{for(let c=0;c<b.length;c++)if(b[c]&&e(b[c].location.x,b[c].location.y,b[c].radius,a.x,a.y))return!0}}})(window);(function(a){let b,c,d,e=[];const f={SMALL:0,MEDIUM:1,LARGE:2},g=[{minSpeed:1.2,maxSpeed:3.6,radiusS:16,radiusM:24,radiusL:28,smallScale:.7,mediumScale:.5,largeScale:.35,smallLine:1,mediumLine:1.5,largeLine:2},{minSpeed:1.2,maxSpeed:2.4,radiusS:16,radiusM:24,radiusL:28,smallScale:1.35,mediumScale:.7,largeScale:.65,smallLine:.9,mediumLine:1,largeLine:1.25},{minSpeed:1.2,maxSpeed:1.2,radiusS:16,radiusM:24,radiusL:28,smallScale:2,mediumScale:1.15,largeScale:.9,smallLine:.65,mediumLine:.85,largeLine:1}],h=new sound.largeSound,j=new sound.mediumSound,k=new sound.smallSound,l=(a,h,i,j,k,l=0,q=0)=>{b=i,c=j,d=h,m(a),n(),o(l,q,k),p();let r=Math.floor(360*Math.random()),s=Math.floor(3*Math.random());e.push({size:a,speed:m(a),rotation:n(),location:o(l,q,k),direction:p(),radius:a===f.SMALL?g[a].radiusS:a===f.MEDIUM?g[a].radiusM:g[a].radiusL,randomRotation:r,type:s})},m=a=>{if(a===f.SMALL)return Math.floor(Math.random()*g[f.SMALL].maxSpeed+g[f.SMALL].minSpeed);return a===f.MEDIUM?Math.floor(Math.random()*g[f.MEDIUM].maxSpeed+g[f.MEDIUM].minSpeed):a===f.LARGE?Math.floor(Math.random()*g[f.LARGE].maxSpeed+g[f.LARGE].minSpeed):void 0},n=()=>Math.floor(360*Math.random()+1),o=(a,d,e)=>{if(e){let a=Math.floor(2*Math.random()+1);return 1===a?{x:0,y:Math.floor(Math.random()*c+1)}:{y:0,x:Math.floor(Math.random()*b+1)}}return{x:a,y:d}},p=()=>Math.floor(360*Math.random()+1),q=(a,b)=>{d.lineTo(a,b)},r=()=>{for(let a=0;a<e.length;a++){d.beginPath(),d.save(),d.translate(e[a].location.x,e[a].location.y);let b=e[a].rotation*Math.PI/180;d.rotate(b),e[a].type===f.SMALL?(t(a,14),d.lineWidth=g[e[a].size].smallLine):e[a].type===f.MEDIUM?(u(a,21),d.lineWidth=g[e[a].size].mediumLine):e[a].type===f.LARGE&&(v(a,28),d.lineWidth=g[e[a].size].largeLine),d.strokeStyle="white",d.stroke(),d.restore()}},s=()=>{for(let a,d=0;d<e.length;d++)a=e[d].rotation*Math.PI/180,e[d].location.x+=e[d].speed*Math.sin(a),e[d].location.y-=e[d].speed*Math.cos(a),e[d].location.x>=b&&(e[d].location.x=0),e[d].location.y>=c&&(e[d].location.y=0),0>e[d].location.x&&(e[d].location.x=b),0>e[d].location.y&&(e[d].location.y=c)},t=(a,b)=>{d.rotate(e[a].randomRotation*Math.PI/180),d.scale(g[e[a].size].smallScale,g[e[a].size].smallScale),d.moveTo(10-b,0-b),q(18-b,0-b),q(20-b,9-b),q(28-b,12-b),q(28-b,20-b),q(20-b,22-b),q(18-b,28-b),q(10-b,28-b),q(12-b,23-b),q(3-b,20-b),q(0-b,10-b),q(10-b,7-b),q(10-b,0-b)},u=(a,b)=>{d.rotate(e[a].randomRotation*Math.PI/180),d.scale(g[e[a].size].mediumScale,g[e[a].size].mediumScale),d.moveTo(0-b,14-b),q(10-b,7-b),q(18-b,20-b),q(16-b,0-b),q(31-b,3-b),q(25-b,15-b),q(37-b,10-b),q(41-b,33-b),q(32-b,42-b),q(18-b,42-b),q(5-b,33-b),q(0-b,14-b)},v=(a,b)=>{d.rotate(e[a].randomRotation*Math.PI/180),d.scale(g[e[a].size].largeScale,g[e[a].size].largeScale),d.moveTo(0-b,28-b),q(6-b,10-b),q(26-b,0-b),q(36-b,15-b),q(42-b,4-b),q(52-b,18-b),q(52-b,40-b),q(47-b,44-b),q(37-b,33-b),q(30-b,52-b),q(15-b,47-b),q(17-b,38-b),q(0-b,28-b)},w=()=>e,x=a=>{e[a].size===f.LARGE?(score.addScore(50),h.play(),l(f.MEDIUM,d,b,c,!1,e[a].location.x,e[a].location.y),l(f.MEDIUM,d,b,c,!1,e[a].location.x,e[a].location.y)):e[a].size===f.MEDIUM?(score.addScore(100),j.play(),l(f.SMALL,d,b,c,!1,e[a].location.x,e[a].location.y),l(f.SMALL,d,b,c,!1,e[a].location.x,e[a].location.y)):(k.play(),score.addScore(150)),effects.explodeAsteroid(e[a].location.x,e[a].location.y),e.splice(a,1),state.checkWonLevel()};a.asteroid={getSizes:()=>f,init:l,draw:r,update:s,getAsteroids:w,shatter:x,clear:()=>{e=[]}}})(window);(function(a){let b,c,d,e=1,f=3,g=new sound.extraShipSound;hasChangedState=!0;let h=asteroid.getSizes();const i={LOADING:0,GAME:1,PAUSE:2};let j=i.LOADING;const k=(a,g,k)=>{b=a,c=g,d=k,e=1,f=3,j===i.LOADING?(asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.MEDIUM,b,c,d,!0),asteroid.init(h.MEDIUM,b,c,d,!0),asteroid.init(h.MEDIUM,b,c,d,!0),asteroid.init(h.SMALL,b,c,d,!0),asteroid.init(h.SMALL,b,c,d,!0),asteroid.init(h.SMALL,b,c,d,!0)):j===i.GAME&&q(e)},l=()=>j,m=a=>{j===i.LOADING&&asteroid.clear(),j=a},n=a=>{hasChangedState=a},o=()=>f,p=()=>{f-=1,0===f&&(m(i.LOADING),n(!0),e=1,f=3,bullet.clear(),asteroid.clear(),ship.isDead())},q=a=>{switch(a){case 1:s();break;case 2:t();break;case 3:u();break;case 4:v();break;case 5:w();break;case 6:x();break;default:x();}},r=()=>{let a=asteroid.getAsteroids();0>=a.length&&(q(e+=1),bullet.clear(),ship.init(b,c,d),ship.setSpeedUpSound(90))},s=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},t=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},u=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},v=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},w=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},x=()=>{asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0),asteroid.init(h.LARGE,b,c,d,!0)},y=()=>{for(let a=0;a<f;a++){b.beginPath(),b.save();let d=.85*c+22*a;b.translate(d,40),b.rotate(0),b.moveTo(0,-12),b.lineTo(6,12),b.lineTo(4,10),b.lineTo(-4,10),b.lineTo(-6,12),b.lineTo(0,-12),b.strokeStyle="white",b.lineWidth=1,b.stroke(),b.restore()}};a.state={init:k,checkWonLevel:r,getLives:o,minusLife:p,draw:y,addLife:()=>{f+=1,g.play()},getState:l,getStates:()=>i,setState:m,changedState:n,getChangedState:()=>hasChangedState}})(window);(function(a){let b=0,c=!0;bullets=[];let d,e,f,g=7,h=new sound.fireSound;const j=(a,b,c)=>{bullets[c].traveled=Math.abs(Math.sqrt(Math.pow(bullets[c].xOrigin-bullets[c].x,2)+Math.pow(bullets[c].yOrigin-bullets[c].y,2))),bullets[c].xOrigin=a,bullets[c].yOrigin=b,bullets[c].x=a,bullets[c].y=b},k=()=>{b++;for(let a=0;a<bullets.length;a++){let b=bullets[a].rotation*Math.PI/180,c=1*Math.sin(b),d=1*Math.cos(b);bullets[a].x+=c*g,bullets[a].y-=d*g,bullets[a].x>=e&&j(0,bullets[a].y,a),0>bullets[a].x&&j(e,bullets[a].y,a),bullets[a].y>=f&&j(bullets[a].x,0,a),0>bullets[a].y&&j(bullets[a].x,f,a);let h=Math.abs(Math.sqrt(Math.pow(bullets[a].xOrigin-bullets[a].x,2)+Math.pow(bullets[a].yOrigin-bullets[a].y,2)));h+bullets[a].traveled>450&&bullets.splice(a,1)}},l=()=>{for(let a=0;a<bullets.length;a++)d.beginPath(),d.save(),d.translate(bullets[a].x,bullets[a].y),d.moveTo(0,0),d.lineTo(0,1),d.lineTo(1,1),d.lineTo(1,0),d.lineTo(0,0),d.strokeStyle="white",d.lineWidth=1,d.stroke(),d.restore()};a.bullet={fire:()=>{4>bullets.length&&(h.pause(),h.play(),bullets.push({xOrigin:ship.getX(),yOrigin:ship.getY(),x:ship.getX(),y:ship.getY(),rotation:ship.getRotation(),traveled:0}),c=!1,b=0)},update:k,draw:l,init:(a,b,c)=>{d=a,e=b,f=c},getBullets:()=>bullets,remove:a=>{bullets.splice(a,1)},clear:()=>{bullets=[]}}})(window);(function(a){let b=0,c=!0;bulletsAlien=[];let d,e,f,g=9,h=new sound.fireSound;const i=(a,b,c,d)=>{var e=Math.atan2(d-b,c-a);return e*=180/Math.PI,e},j=(a,b,c)=>{bulletsAlien[c].traveled=Math.abs(Math.sqrt(Math.pow(bulletsAlien[c].xOrigin-bulletsAlien[c].x,2)+Math.pow(bulletsAlien[c].yOrigin-bulletsAlien[c].y,2))),bulletsAlien[c].xOrigin=a,bulletsAlien[c].yOrigin=b,bulletsAlien[c].x=a,bulletsAlien[c].y=b},k=()=>{b++;for(let a=0;a<bulletsAlien.length;a++){let b=bulletsAlien[a].rotation*Math.PI/180,c=1*Math.sin(b),d=1*Math.cos(b);bulletsAlien[a].x+=c*g,bulletsAlien[a].y-=d*g,bulletsAlien[a].x>=e&&j(0,bulletsAlien[a].y,a),0>bulletsAlien[a].x&&j(e,bulletsAlien[a].y,a),bulletsAlien[a].y>=f&&j(bulletsAlien[a].x,0,a),0>bulletsAlien[a].y&&j(bulletsAlien[a].x,f,a);let h=Math.abs(Math.sqrt(Math.pow(bulletsAlien[a].xOrigin-bulletsAlien[a].x,2)+Math.pow(bulletsAlien[a].yOrigin-bulletsAlien[a].y,2)));h+bulletsAlien[a].traveled>550&&bulletsAlien.splice(a,1)}},l=()=>{for(let a=0;a<bulletsAlien.length;a++)d.beginPath(),d.save(),d.translate(bulletsAlien[a].x,bulletsAlien[a].y),d.moveTo(0,0),d.lineTo(0,1),d.lineTo(1,1),d.lineTo(1,0),d.lineTo(0,0),d.strokeStyle="white",d.lineWidth=1,d.stroke(),d.restore()};a.bulletAlien={fire:(a,d,e)=>{if(4>bulletsAlien.length){h.pause(),h.play();let f=ship.ship(),g=i(f.x,f.y,a,d)+270,j=0;if("small"===e){j=Math.random()*(g+45-(g-45))+(g-45)}else"large"===e&&(j=360*Math.random());bulletsAlien.push({xOrigin:a,yOrigin:d,x:a,y:d,rotation:j,traveled:0}),c=!1,b=0}},update:k,draw:l,init:(a,b,c)=>{d=a,e=b,f=c},getBullets:()=>bulletsAlien,remove:a=>{bulletsAlien.splice(a,1)},clear:()=>{bulletsAlien=[]}}})(window);(function(a){let b,c,d,e,f,g=0,h=0,i=0,j=0,k=0,l=0,m=4,n=2,o=!0,p=!0,q=!1,r=!0,s=!1,t=0,u=new sound.musicSound1,v=new sound.musicSound2,w=new sound.thrustSound;const z=new sound.smallSound;let A=!1,B=90,C=0,D=!0;const E=(a,m,n)=>{d=a,e=m,f=n,b=e/2,c=f/2,g=0,h=0,i=0,j=0,k=0,l=0,C=0},F=()=>b,G=()=>c,H=()=>{o&&(k+=5,360<=k&&(k=0),o=!1)},I=()=>{p&&(k-=5,0>k&&(k=359),p=!1)},J=()=>{r&&(r=!1,q=!0,M(L().speedX+.015),N(L().speedY+.015))},K=()=>k,L=()=>({speedX:g,speedY:h}),M=a=>{a>n&&(a=n),0>a&&(a=0),g=a;let b=l*Math.PI/180;i+=.15*Math.sin(b),i>m+1&&(i=m+1),i<-m-1&&(i=-m-1)},N=a=>{a>n&&(a=n),0>a&&(a=0),h=a;let b=l*Math.PI/180;j+=.05*Math.cos(b),j>m&&(j=m),j<-m&&(j=-m)},O=(a,b)=>{d.lineTo(a,b)},P=()=>{d.beginPath(),d.save(),d.translate(b,c);let a=k*Math.PI/180;d.rotate(a),d.scale(1.2,1.2),d.moveTo(0,-12),O(6,12),O(4,10),O(-4,10),O(-6,12),O(0,-12),q&&(d.moveTo(-5,13),O(-3,11),O(3,11),O(5,13),O(2,19),O(0,16),O(-2,21),O(-5,13),d.strokeStyle=A?"black":"white",d.lineWidth=1,d.stroke(),w.play(),q=!1),d.strokeStyle=A?"black":"white",d.lineWidth=1,d.stroke(),d.restore()},Q=()=>{A?(b=e/2,c=f/2,g=0,h=0,i=0,j=0,!collision.isColliding(R(),asteroid.getAsteroids())&&D&&(A=!1)):(t++,o=!0,p=!0,r=!0,b+=g*i,c-=h*j,0<g&&(g*=.99),0<j&&(j*=.99),b>=e&&(b=0),c>=f&&(c=0),0>b&&(b=e),0>c&&(c=f),l=k,0==t%270&&(B-=6),0==t%60&&(C+=1),44>=B&&(B=44),s&&(0==t%B&&u.play(),t%B===Math.ceil(B/2)&&v.play()),0==C%20&&0==t%60&&alien.spawn())},R=()=>({x:b,y:c}),S=()=>{A||(state.minusLife(),bullet.clear(),z.play(),effects.explodeShip(b,c),D=!1),A=!0,setTimeout(()=>{E(d,e,f),D=!0},2e3)},T=()=>s,U=()=>A;a.ship={getX:F,getY:G,init:E,right:H,left:I,draw:P,update:Q,forward:J,getRotation:K,ship:R,explode:S,hasInteracted:()=>{s=!0},getHasInteracted:T,isDead:U,hyperspace:()=>{console.log("do hyperspace")},setSpeedUpSound:a=>{B=a}}})(window);(function(){function a(){state.getChangedState()&&(loading.init(i,j,k),state.init(i,j,k),state.changedState(!1))}function b(){state.getChangedState()&&(state.init(i,j,k),ship.init(i,j,k),bullet.init(i,j,k),score.init(i,j,k),collision.init(i,j,k),effects.init(i,j,k),alien.init(i,j,k),bulletAlien.init(i,j,k),state.changedState(!1))}function c(){state.getChangedState()&&(pause.init(i,j,k),state.changedState(!1))}function d(g){return g<m+1e3/l?void requestAnimationFrame(d):void(m=g,n++,2e3<n&&(n=0),state.getState()===state.getStates().GAME||state.getState()===state.getStates().PAUSE?(b(),state.getState()!==state.getStates().PAUSE&&e(),f()):state.getState()===state.getStates().LOADING&&(a(),loading.update(),loading.draw()),state.getState()===state.getStates().PAUSE&&(c(),pause.update(),pause.draw()),requestAnimationFrame(d))}function e(){kd.tick(),ship.update(),ship.isDead()||bullet.update(),asteroid.update(),score.update(),collision.update(ship.ship(),bullet.getBullets(),asteroid.getAsteroids(),alien.getAliens(),bulletAlien.getBullets()),effects.update(),alien.update(),bulletAlien.update()}function f(){i.clearRect(0,0,j,k),ship.draw(),ship.isDead()||bullet.draw(),asteroid.draw(),score.draw(),effects.draw(),state.draw(),alien.draw(),bulletAlien.draw()}const g=document.getElementById("canvas"),h=document.getElementById("grid-container");g.style.marginLeft=(h.clientWidth-g.width)/2+"px",g.style.marginTop=(window.innerHeight-g.height)/2+"px";const i=g.getContext("2d"),j=900,k=750;g.width=j,g.height=k;const l=60;let m=0,n=0;(function(){requestAnimationFrame(d)})()})();function setVolume(a){sound.setVolume(a)}