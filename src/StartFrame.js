var StartFrame = cc.Sprite.extend({
    ctor: function(){
        this._super();
//        this.initWithFile( 'res/images/gameover.png' );
        
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/start_bg1.png' );
        animation.addSpriteFrameWithFile( 'res/images/start_bg2.png' );
        animation.setDelayPerUnit( 0.3 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
    }
});
