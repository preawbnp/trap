var FirstScene = cc.LayerColor.extend({
    init: function(){
        console.log("- WELCOME TO TRAP WORLD -");
        console.log("PLEASE PRESS TO SPACEBAR");
        
        this.frame = new StartFrame();
        this.frame.setPosition( new cc.Point( 400 , 300 ) );
        this.addChild( this.frame );
        
        this.button();
        this.playMusic();
        this.playScene();
        this.addKeyboardHandlers();
        
    },
    button: function(){
        this.startButtonItem = new cc.MenuItemImage('res/images/start.png',
        'res/images/start2.png', function(){
                this.startButton.setEnabled(false);
                this.playEffect();
                cc.director.runScene( cc.TransitionShrinkGrow.create( 0.5,new StartScene()));
        },this);
            this.startButton = new cc.Menu( this.startButtonItem);
            this.startButton.setPosition(400,200);
            this.addChild( this.startButton );
    },
    playMusic: function(){
	   cc.audioEngine.playMusic( 'res/effects/sacrifice-short.wav' );
    },
    playEffect: function(){
        cc.audioEngine.playEffect( 'res/effects/button1.wav' );
    },
    playScene: function( keyCode ){
        if ( keyCode == 32 || keyCode == 13 ){
            cc.director.runScene( cc.TransitionShrinkGrow.create( 0.5,new StartScene()));
        }
    },
    addKeyboardHandlers: function(){
        var self = this;
	       cc.eventManager.addListener({
		      event: cc.EventListener.KEYBOARD,
		      onKeyPressed : function( keyCode, event ) {
		          self.playScene( keyCode, event );
	           }
	       }, this);
    }
});

var FirstGame = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new FirstScene();
    layer.init();
    this.addChild( layer );
  }
});

