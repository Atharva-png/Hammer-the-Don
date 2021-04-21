class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		'restitution':0.9,
		'friction':2.5,
		'density':1.0
	}
		this.x=x;
		this.y=y;
		this.width=width
		this.height=height
        
        this.body=Bodies.rectangle(this.x, this.y,width ,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill(0);
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
			rect(0,0,this.width,this.height)
		


			pop()
	}

}