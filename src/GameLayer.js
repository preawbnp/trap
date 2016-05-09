var score = 0;
var highScore = 0;

var GameLayer = cc.LayerColor.extend({
	init: function() {    
	this.background = new Background();
	this.addChild ( this.background );
	this.background.setPosition ( new cc.Point(400,300) );

	this.spacebar = new Spacebar();
	this.addChild ( this.spacebar );
	this.spacebar.setPosition ( new cc.Point(270,75) );

	this.tap = new Tap();
	this.tap.setPosition( new cc.Point( screenWidth / (800/270), screenHeight / 1.4 ) );
	this.addChild ( this.tap ); 
    
    this.tap.scheduleUpdate();    
    this.tap.update();
	this.addKeyboardHandlers();

	this.scoreLabel = cc.LabelTTF.create( '0' , 'pix Chicago', 65 );
	this.scoreLabel.setPosition( new cc.Point( 652, 360 ) );
	this.addChild( this.scoreLabel );

	this.playMusic();
        
	return true;
},
	onSpacebar: function( keyCode, event ){
	var posTap = this.tap.getPosition();
	if ( posTap.y >= 50 && posTap.y <= 105 ){
		if ( keyCode == 32 ){
			this.updatePressed();
            this.updateScore();
            this.tap.setPosition( new cc.Point( 270 , 429 ));
            this.vy += 0.03;
            if ( highScore <= score )
                highScore = score;
            console.log( "score : " + score );
		}
	}
	else {
        console.log("YOU DIE!!");
        this.updateUnpressed();
	}
},
	addKeyboardHandlers: function() {
	var self = this;
	cc.eventManager.addListener({
		event: cc.EventListener.KEYBOARD,
		onKeyPressed : function( keyCode, event ) {
		self.onSpacebar( keyCode, event );
	},
		onKeyReleased: function( keyCode, event ){
		self.unscheduleUpdate();
	}
	}, this);
},
	textGreat: function(){
	this.textLabelGreat1 = cc.LabelTTF.create( 'GREAT!' , 'pix Chicago' , 40 );
	this.textLabelGreat1.setPosition( new cc.Point( 652 , 180 ) );
	this.textLabelGreat1.setColor(new cc.Color (83,205,213));
        
    this.textLabelGreat2 = cc.LabelTTF.create( 'GREAT!' , 'pix Chicago' , 40 );
	this.textLabelGreat2.setPosition( new cc.Point( 654 , 176 ) );
	this.textLabelGreat2.setColor(new cc.Color (243,234,133));
	
    this.addChild( this.textLabelGreat2 );
    this.addChild( this.textLabelGreat1 );

	this.textLabelGreat2.runAction( cc.fadeTo(1,0) ); 
    this.textLabelGreat1.runAction( cc.fadeTo(1,0) ); 

},
	textMiss: function(){
	this.textLabelMiss1 = cc.LabelTTF.create( 'MISS!' , 'pix Chicago' , 40 );
	this.textLabelMiss1.setPosition( new cc.Point( 652 , 180 ) );
	this.textLabelMiss1.setColor(new cc.Color (218,212,94));
        
    this.textLabelMiss2 = cc.LabelTTF.create( 'MISS!' , 'pix Chicago' , 40 );
	this.textLabelMiss2.setPosition( new cc.Point( 655 , 178 ) );
	this.textLabelMiss2.setColor(new cc.Color (218,292,94));
	
    this.addChild( this.textLabelMiss2 );
    this.addChild( this.textLabelMiss1 );
	this.textLabelMiss2.runAction( cc.fadeTo(1,0) );
    this.textLabelMiss1.runAction( cc.fadeTo(1,0) );
},
	updateScore: function(){
	score += 1;
	this.scoreLabel.setString( score );
},
	playMusic: function(){
	   cc.audioEngine.playMusic( 'res/effects/Sunset Route.wav' , true );
    },
	stopMusic: function(){
	   cc.audioEngine.stopMusic();
    },
    updatePressed: function(){
        this.textGreat();
        this.spacebar.onpress();
    },
    updateUnpressed: function(){
        this.tap.unscheduleUpdate();                
        this.tap.removeChild();
        this.textMiss();
        this.stopMusic();
		this.spacebar.miss();
        this.playEffectFail();
    },
    playEffectFail: function(){
        cc.audioEngine.playEffect( 'res/effects/fail.mp3' );
    }
});

var StartScene = cc.Scene.extend({
	onEnter: function() {
	this._super();
	var layer = new GameLayer();
	layer.init();
	this.addChild( layer );
}
});