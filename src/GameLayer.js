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
   
        this.addKeyboardHandlers();
      
      // create var score for show on screen   
        this.scoreLabel = cc.LabelTTF.create( '0' , 'pix Chicago', 65 );
      // this.scoreLabel.setString( Integer.parseInt( this.scoreLabel.String ) + 1);
        this.scoreLabel.setPosition( new cc.Point( 652, 360 ) );
        this.addChild( this.scoreLabel );
      
        return true;
    },
    onSpacebar: function( keyCode, event ){
        console.log( 'Space: ' + keyCode.toString() );
        var posTap = this.tap.getPosition();
        if ( posTap.x == 270 && posTap.y > 75 && posTap.y < 90 ){
            this.textGreat();
            this.spacebar.onpress();
        }
        else {
            this.textMiss();
            this.spacebar.miss();
            this.gameOver();
        }
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onSpacebar( keyCode, event );
            }
        }, this);
    },
    textGreat: function(){
        this.textLabelGreat = cc.LabelTTF.create( 'GREAT!' , 'pix Chicago' , 40 );
        this.textLabelGreat.setPosition( new cc.Point( 652 , 180 ) );
        this.textLabelGreat.setColor(new cc.Color (83,205,213));
        this.addChild( this.textLabelGreat );
        this.textLabelGreat.runAction( cc.fadeTo(2,0)); //time,opacity
    },
    textMiss: function(){
        this.textLabelMiss = cc.LabelTTF.create( 'MISS!' , 'pix Chicago' , 40 );
        this.textLabelMiss.setPosition( new cc.Point( 652 , 180 ) );
        this.textLabelMiss.setColor(new cc.Color (218,212,94));
        this.addChild( this.textLabelMiss );
        this.textLabelMiss.runAction( cc.fadeTo(2,0));
    },
    updateScore: function(){
        this.scoreLabel.setString( ( parseInt( this.scoreLabel.String ) ) + 1);
        this.addChild( this.scoreLabel );
	},
    removeTextGreat: function(){
        this.textLabelGreat.setString("");
        this.addChild( this.textLabelGreat );
    },
    gameOver: function() {
        cc.director.runScene( new EndGame() );
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