class Divisions {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      this.color=color(random(0,225),random(0,225),random(0,225))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.w, this.h);
    }
  }