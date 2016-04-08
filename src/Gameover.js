var GameOverScene = cc.LayerColor.extend({
    init: function(){
        this._super();
        this.frame = new GameOverFrame();
        this.frame.setPosition( new cc.Point( 400 , 300 ) );
        this.addChild( this.frame );
    },
    EndScene: function() {
        this.endScene = new EndScene();
        this.endScene.setPosition( new cc.Point( 400 , 300 ) );
        this.addChild( this.endScene );
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

