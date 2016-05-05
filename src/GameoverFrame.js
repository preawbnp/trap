var GameOverFrame = cc.Sprite.extend({
    ctor: function(){
        this._super();
//        this.initWithFile( 'res/images/gameover.png' );
        
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/gameover1.png' );
        animation.addSpriteFrameWithFile( 'res/images/gameover2.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
    }
});
