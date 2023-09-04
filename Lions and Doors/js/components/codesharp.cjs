$codeline;
$codeline = $codeline.toString();
$codeline = $codeline.slice($codeline.indexOf('{') +1, $codeline.lastIndexOf('}'));
// --------------------------------------------------
$codeline = $codeline.replaceAll('/#start firebase/', `widgets.construct("div"); addClass(widget, "err-msg-on-console"); html(widget, $info); renderLastPlace($(".CodeJS-Console"), widget) try {} catch (err) {}`); //${$tester}
$codeline = $codeline.replaceAll('#show console', 'app.messages()');
$n = 0;
const app_console = {
    messages : ($info) => {
        if ($info == "" || $info == null) {
            $('.CodeJS-Console').style.display = "block";
        } else {
            $('.CodeJS-Console').style.display = "block";
            widgets.construct('div'),
            html(widget, $info),
            $n++;
            addClass();
            renderLastPlace($('.CodeJS-Console'), widget);
        }
    }
};
$codeline = $codeline.replaceAll('/#write to console/', 'app_console');
// --------------------------------------------------
imp('components/codeline.cjs');
CodeSharp();
// --------------------------------------------------
eval($codeline);