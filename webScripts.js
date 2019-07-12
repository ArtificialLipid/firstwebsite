function flipColor(elt, clr) {
    if (elt.style.color != 'black') {
        elt.style.color = 'black';
    } else {
    elt.style.color = clr;
    }
}

function buttonOnEnter (e){
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('btn').click();
    }
}