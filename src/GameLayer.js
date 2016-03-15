var GameLayer = cc.LayerColor.extend({
  init: function() {     
      this.background = new Background();
      this.addChild ( this.background );
      this.background.setPosition ( new cc.Point(400,300) );
      
      this.spacebar = new Spacebar();
      this.addChild ( this.spacebar );
      this.spacebar.setPosition ( new cc.Point(270,75) );
      
      this.tap = new Tap();
      this.addChild ( this.tap );
      this.tap.setPosition( new cc.Point(270,430) );
//      this.tap.scheduleUpdate();
//      this.addKeyboardHandlers();
      return true;
  }
//    addKeyboardHandlers: function() {
//        var self = this;
//        cc.eventManager.addListener({
//            event: cc.EventListener.KEYBOARD,
//            onKeyPressed : function( keyCode, event ) {
//                self.onKeyDown( keyCode, event );
//            },
//            onKeyReleased: function( keyCode, event ) {
//                self.onKeyUp( keyCode, event );
//            }
//        }, this);
//    }
// 
});

var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});