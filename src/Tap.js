var Tap = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile( 'res/images/bar5.png' );
        this.vy = 0.2;
        this.start = true;
    },
    update: function( dt ) {
        var pos = this.getPosition();
        if ( pos.y >= 0 ){
            this.setPosition( new cc.Point( pos.x , ( pos.y - (this.vy/2) ) ));  
            this.vy += 0.02;
        }
        else {
            this.setPosition ( screenWidth / (800/270) , screenHeight / 1.4 );
            var moveAction = cc.MoveTo.create( 0.5 , pos.x , ( pos.y - Math.abs(this.vy/2) ) );
            this.runAction( moveAction );
        }
    }
});