class Dustbin
{
    constructor(x,y,r)
    {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        this.x=x;
        this.y=y
        this.r=r
        this.body = Bodies.circle(this.x, this.r, this.r/2, options)
        World.add(world, this.body)

        display()
        {
            

        }

    
    }
}