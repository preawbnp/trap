var Tap = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile( 'res/images/bar5.png' );
        this.vy = 0.2;
        this.start = true;
        
        this.spacebar = new Spacebar();        
    },
    update: function( dt ) {
        var pos = this.getPosition();
        if ( pos.y < 55 ) {
            this.textMiss();
            this.updateUnpressed();
            console.log("YOU DIE!!");
        }
        else if ( pos.y >= 0 ){
            this.setPosition( new cc.Point( pos.x , ( pos.y - this.vy ) ));  
            this.vy += 0.02;
        }
        else {
            this.setPosition ( screenWidth / (800/270) , screenHeight / 1.4 );
            var moveAction = cc.MoveTo.create( 0.5 , pos.x , ( pos.y - Math.abs(this.vy) ) );
            this.runAction( moveAction );
        }
    },
    updateUnpressed: function(){
        this.unscheduleUpdate();                
        this.removeChild();
		this.spacebar.miss();
        this.playEffectFail();
    },
    textMiss: function(){
	   this.textLabelMiss = cc.LabelTTF.create( 'MISS!' , 'pix Chicago' , 40 );
	   this.textLabelMiss.setPosition( new cc.Point( 535 , 138 ) );
	   this.textLabelMiss.setColor(new cc.Color (218,292,94));
	   this.addChild( this.textLabelMiss );
	   this.textLabelMiss.runAction( cc.fadeTo(1,0) );
    },
    playEffectFail: function(){
        cc.audioEngine.playEffect( 'res/effects/fail.mp3' );
    }
});