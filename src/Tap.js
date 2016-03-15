var Tap = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile( 'res/images/bar4.png' );
        this.started = true;
        this.vy = 15;
    },
    update: function( dt ) {
        if ( this.started ) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point(pos.x,pos.y + this.vy) );
            this.vy += -1;
            this.player.start();
        }
    }
});