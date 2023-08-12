// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

// Test Connection JavaScript Compatibility [Remove if you no longer need]...

//Try running these
    alert($('layout').parentElement.nodeName);
    alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
    alert(d.fullDate());

/*
$get_names = $$('#start form [type=text]');
submit($('form'), () => {
    loadContent(()=>{
        html($('.p1 h2'), $get_names[0].value);
        html($('.p2 h2'), $get_names[1].value);
        css($('#game-play'), "width:100%");
    });
});

function roll() {
    randomOf(6, () => {
        html($(".dice-container"), `<img class="red" val="${n}" src="files/images/red dice/${n}.png" />`);
    });
    randomOf(6, () => {
        pushAfter($(".dice-container"), `<img class="blue" val="${n}" src="files/images/blue dice/${n}.png" />`);
    });
    $points = parseInt(attrib($('.red'), 'val')) + parseInt(attrib($('.blue'),'val'));
    if (parseInt(attrib($('.red'), 'val')) == 1 || parseInt(attrib($('.blue'),'val')) == 1) {
        $totalPoints = 0;
        html($('#game-board h1'), $totalPoints);
        setTimeout(()=>summary(), 2000);
    } else {
        $totalPoints = Number(html($('#game-board h1'))) + $points;
        html($('#game-board h1'), $totalPoints);
    }
}
*/

widgets.constructMultiple('div', 100);
renderAll($('#canvas'), widget);

var candiv = $$('#canvas div');
var colors = ['red', 'green', 'whitesmoke', 'magenta', 'cyan', 'yellow'];
loop(candiv, () => {
    html(candiv[i], i + 1);
    css(candiv[i], `background: ${randomize(colors)}`);
});

var indicator;
// red, blue

// random of tens
loopSelect(candiv, 10, () => {
    html(candiv[i], 'lions');
});

var ladders;

click($('#b1'), ()=>{
    changeAppMode('dark');
});

click($('#b2'), ()=>{
    changeAppMode('light');
});
