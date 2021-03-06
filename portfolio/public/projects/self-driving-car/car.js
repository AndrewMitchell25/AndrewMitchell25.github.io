class Car{
    constructor(x, y, width, height, controlType, maxSpeed = 3, color="blue"){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = maxSpeed;
        this.friction = 0.05;
        this.angle = 0;

        this.useBrain = controlType=="AI";

        if(controlType != "DUMMY"){
            this.sensor = new Sensor(this);
            this.brain = new NeuralNetwork([this.sensor.rayCount, 6, 4]);
        }
        this.controls = new Controls(controlType);

        this.color = color;
        this.img = new Image();
        this.img.src = "car.png";
        //color the image
        this.mask = document.createElement("canvas");
        this.mask.width = width;
        this.mask.height = height;

        const maskCtx = this.mask.getContext("2d");
        this.img.onload = () => {
            maskCtx.fillStyle = color;
            maskCtx.rect(0,0, this.width, this.height);
            maskCtx.fill();

            maskCtx.globalCompositeOperation = "destination-atop";
            maskCtx.drawImage(this.img, 0, 0, this.width, this.height);
        }
    }

    update(roadBorders, traffic){
        if(!this.damaged){
            this.#move();
            this.polygon = this.#createPolygon();
            this.damaged = this.#assessDamage(roadBorders, traffic);
        }
        if(this.sensor){
            this.sensor.update(roadBorders, traffic);
            const offsets = this.sensor.readings.map(s => s == null ? 0 : 1-s.offset);
            const outputs = NeuralNetwork.feedForward(offsets, this.brain);

            if(this.useBrain){
                this.controls.forward = outputs[0];
                this.controls.left = outputs[1];
                this.controls.right = outputs[2];
                this.controls.reverse = outputs[3];
            }
        }
    }

    #assessDamage(roadBorders, traffic){
        for(let i = 0; i < roadBorders.length; i++){
            if(polysIntersect(this.polygon, roadBorders[i])){
                return true;
            }
        }

        for(let i = 0; i < traffic.length; i++){
            if(polysIntersect(this.polygon, traffic[i].polygon)){
                return true;
            }
        }
        return false;
    }

    #createPolygon(){
        const points = [];
        const rad = Math.hypot(this.width, this.height/2);
        const alpha = Math.atan2(this.width, this.height);
        //create the four points of the rectangle
        //switch to change shape of the car
        points.push({x:this.x-Math.sin(this.angle-alpha)*rad,y:this.y-Math.cos(this.angle-alpha)*rad});
        points.push({x:this.x-Math.sin(this.angle+alpha)*rad,y:this.y-Math.cos(this.angle+alpha)*rad});
        points.push({x:this.x-Math.sin(Math.PI + this.angle-alpha)*rad,y:this.y-Math.cos(Math.PI + this.angle-alpha)*rad});
        points.push({x:this.x-Math.sin(Math.PI + this.angle+alpha)*rad,y:this.y-Math.cos(Math.PI + this.angle+alpha)*rad});
        return points;
    }

    #move(){
        //use acceleration 
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }
        //cap the speed
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2;
        }
        //add friction
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        //set speed to 0 if very small
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        //left and right controls
        //handle flipping right and left for reversing
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;
            //change angle for left and right
            if(this.controls.left){ 
                this.angle += 0.03 * flip;
            }
            if(this.controls.right){
                this.angle -= 0.03 * flip;
            }
        }
        
        //use unit circle to implement movement
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx, highGraphics, drawSensor = false){
        if(this.sensor && drawSensor){
            //draw the sensor
            this.sensor.draw(ctx);
        }
        if(highGraphics){
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(-this.angle);
            if(!this.damaged){
                ctx.drawImage(this.mask,  -this.width/2-this.width*.15, -this.height/2-this.height*.15, this.width+this.width*.3, this.height+this.height*.3);
                ctx.globalCompositeOperation = "multiply";
            }
            ctx.drawImage(this.img, -this.width/2-this.width*.15, -this.height/2-this.height*.15, this.width+this.width*.3, this.height+this.height*.3);
            ctx.restore();
        } else {
            if(this.damaged){
                ctx.fillStyle="gray";
            } else {
                ctx.fillStyle= this.color;
            }
    
            ctx.beginPath();
            ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
            for(let i = 0; i < this.polygon.length; i++){
                ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
            }
            ctx.fill();
        }
    } 
}