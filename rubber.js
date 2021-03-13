class Rubber 
{ constructor(x, y,width,height) 
    { var options = 
        { 'density':1,
          'friction': 5,
          'restitution':0.3 
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