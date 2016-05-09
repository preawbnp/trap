var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/bg33.png' );
        animation.addSpriteFrameWithFile( 'res/images/bg22.png' );
        animation.setDelayPerUnit( 0.8 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
    }
});
