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
//            this.updateScore();
            this.spacebar.onpress();
        }
        else {
            this.textMiss();
            this.spacebar.miss();
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
        this.addChild( this.textLabelGreat );
//            delete this.textLabelGreat;
    },
    textMiss: function(){
        this.textLabelMiss = cc.LabelTTF.create( 'MISS!' , 'pix Chicago' , 40 );
        this.textLabelMiss.setPosition( new cc.Point( 652 , 180 ) );
        this.addChild( this.textLabelMiss );
//            delete this.textLabelMiss;
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