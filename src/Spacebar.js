var Spacebar = cc.Sprite.extend({
   ctor: function(){
       this._super();
//       this.initWithFile( 'res/images/space.png' );
       
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/space0.png' );
        animation.addSpriteFrameWithFile( 'res/images/space1.png' );
        animation.addSpriteFrameWithFile( 'res/images/space2.png' );
        animation.addSpriteFrameWithFile( 'res/images/space3.png' );
        animation.addSpriteFrameWithFile( 'res/images/space4.png' );
        animation.addSpriteFrameWithFile( 'res/images/space5.png' );
        animation.addSpriteFrameWithFile( 'res/images/space6.png' );

        animation.setDelayPerUnit( 0.1 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
       
   }
});