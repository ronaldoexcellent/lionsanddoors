function CodeSharp() {
    $codeline = $codeline.replaceAll('a(', 'alert(');
    $codeline = $codeline.replaceAll('q(', 'document.querySelector(');
}