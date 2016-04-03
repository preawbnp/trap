var Tap = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile( 'res/images/bar3.png' );
        
        this.vy = 0.5;
        this.started = true;
    },
    update: function( dt ) {
        if ( this.started ) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x , (pos.y - this.vy ) ));
            this.vy += 0.02;
        }

    }
});

Tap.G = -1;
Tap.STARTING_VELOCITY = 0.5;

