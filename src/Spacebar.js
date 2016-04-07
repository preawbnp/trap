var Spacebar = cc.Sprite.extend({
   ctor: function(){
       this._super();
       this.initWithFile( 'res/images/space-press.png' ); 
   },
    miss: function(){
        this.setPosition ( new cc.Point(270,75) );
        this.initWithFile( 'res/images/space-onmiss.png' );
    },
    onpress: function(){
        this.setPosition ( new cc.Point(270,75) );
        this.initWithFile( 'res/images/space-onpress.png' );
    }
});