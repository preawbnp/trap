var count = 0;
var Spacebar = cc.Sprite.extend({
   ctor: function(){
       this._super();
       this.initWithFile( 'res/images/space-press.png' ); 
   },
    miss: function(){
        this.initWithFile( 'res/images/space-onmiss.png' );
        if (count < 1){
            this.playEffectFail();
            count++;
        }
        else
            cc.audioEngine.pauseEffect();
        this.gameOver();
    },
    onpress: function(){
        this.initWithFile( 'res/images/space-onpress.png' );
        this.playEffectPress();
    },
    gameOver: function() {
//       setTimeout( function() { cc.director.runScene( new EndGame() ); }, 500 );
        cc.director.runScene( cc.TransitionFade.create( 2 ,new EndGame()));
    },
    playEffectPress: function(){
        cc.audioEngine.playEffect( 'res/effects/Beep8.wav' );
    },
    playEffectFail: function(){
        cc.audioEngine.playEffect( 'res/effects/fail.mp3' );
    }
});