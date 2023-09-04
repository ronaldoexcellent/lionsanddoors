// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

// Test Connection JavaScript Compatibility [Remove if you no longer need]...

//Try running these
    alert($('layout').parentElement.nodeName);
    alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
    alert(d.fullDate());
    //imp('extensions/template.cjs');
/*
$get_names = $$('#start form [type=text]');
submit($('form'), () => {
    loadContent(()=>{
        html($('.p1 h2'), $get_names[0].value);
        html($('.p2 h2'), $get_names[1].value);
        css($('#game-play'), "width:100%");
    });
});
*/
function roll() {
    randomOf(6, () => {
        html($(".dice-container"), `<img class="red" width="200px" height="200px" val="${n}" src="files/images/dice/${n}.png" /> &nbsp; &nbsp;`);
    });
    randomOf(6, () => {
        pushAfter($(".dice-container"), `<img class="blue" width="200px" height="200px" val="${n}" src="files/images/dice/${n}.png" />`);
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
} roll();

widgets.constructMultiple('div', 100);
renderAll($('#canvas'), widget);

var candiv = $$('#canvas div');
var colors = ['red', 'green', 'whitesmoke', 'magenta', 'cyan', 'yellow'];
loop(candiv, () => {
    html(candiv[i], i + 1);
    css(candiv[i], `background: ${randomize(colors)}; display: flex; justify-content: center; align-items: center;`);
    addClass(candiv[i], `box${i+1}`);
});

// 30 random targets
randomsOfRange(1, 98, 8, () => {
    html(candiv[i], "<img src='files/images/door.png' style='width: 70%; height:  100%;' />");
});
// every tens
randomsOfRange(1, 98, 10, () => {
    html(candiv[i], "<img src='files/images/leo.jpg' style='width: 100%; height:  100%;' />");
});

//attrib($('h1'), 'contenteditable', true);
typewrite($('h1'), html($('h1')), colours, 'true', 500, 'Reverse');

// red, blue
render(candiv[0], $('.p1')), render(candiv[0], $('.p2'));