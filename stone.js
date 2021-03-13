class Stone 
{ constructor(x, y,width,height) 
    { var options = 
        { 'density':5,
          'friction': 1.0,
          'restitution':0.9 
    };
     this.body = Bodies.circle(x, y, width,height, options); 
     this.width = width; 
     this.height = height; 
     World.add(world, this.body);

    }; 
    display()
    { 
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        pop(); 
    }; 
};