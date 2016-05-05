var GameOverScene = cc.LayerColor.extend({
    init: function(){
        this.frame = new GameOverFrame();
        this.frame.setPosition( new cc.Point( 400 , 300 ) );
        this.addChild( this.frame );
        this.playMusic();
        
        this.score = score;
        this.scoreLabel = cc.LabelTTF.create( this.score + '' , 'pix Chicago', 40 );
        this.scoreLabel.setColor( new cc.Color( 68, 63, 62, 65 ) );

        this.scoreLabel.setPosition( new cc.Point( 290, 210 ) );
        this.addChild( this.scoreLabel );
        
        this.addKeyboardHandlers();
    },
    EndScene: function() {
        this.endScene = new EndScene();
        this.endScene.setPosition( new cc.Point( 400 , 300 ) );
        this.addChild( this.endScene );
    },
    playMusic: function(){
        cc.audioEngine.playMusic( 'res/effects/hahaha.mp3' );
    },
    addKeyboardHandlers: function(){
        var self = this;
	       cc.eventManager.addListener({
		      event: cc.EventListener.KEYBOARD,
		      onKeyPressed : function( keyCode, event ) {
		          self.restart( keyCode, event );
	           }
	       }, this);
    },
    restart: function( keyCode ){
        if ( keyCode == 82 )
            setTimeout( function() { cc.director.runScene( new StartScene() ); }, 500 );
    }
});

var EndGame = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameOverScene();
    layer.init();
    this.addChild( layer );
  }
});

