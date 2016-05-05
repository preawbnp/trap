var res = {
    bg1_png: "res/images/bg22.png",
    bg2_png: "res/images/bg33.png",
    space_miss: "res/images/space-onmiss.png",
    space_press: "res/images/space-onpress.png",
    space: "res/images/space-press.png",
    bar4_png: "res/images/bar4.png",
    music: 'res/effects/Sunset Route.wav',
    laugh: 'res/effects/hahaha.mp3',
    press: 'res/effects/Beep8.wav',
    fail: 'res/effects/fail.mp3'
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
