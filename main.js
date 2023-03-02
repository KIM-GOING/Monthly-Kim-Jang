function HoverOnM() {
    document.getElementsByClassName("flex-monthly-season-name")[0].style.opacity="1";
    document.getElementsByClassName("flex-monthly-season-name")[0].style.transition="all 0.25s";
}
function HoverOffM() {
    if(document.getElementsByClassName("monthly-contents")[12].style.visibility==="hidden") {
        document.getElementsByClassName("flex-monthly-season-name")[0].style.opacity="0";
        document.getElementsByClassName("flex-monthly-season-name")[0].style.transition="all 0.25s";
    }
}
function HoverOnK() {
    document.getElementsByClassName("flex-kimjang-season-name")[0].style.opacity="1";
    document.getElementsByClassName("flex-kimjang-season-name")[0].style.transition="all 0.25s";
}
function HoverOffK() {
    if(document.getElementsByClassName("kimjang-contents")[13].style.visibility==='hidden') {
        document.getElementsByClassName("flex-kimjang-season-name")[0].style.opacity="0";
        document.getElementsByClassName("flex-kimjang-season-name")[0].style.transition="all 0.25s";
    }
}


function ZoomIn(event) {
    event.target.style.width="40px";
    event.target.style.height="40px";
    event.target.style.transition="all 0.25s";
}
function ZoomOut(event) {
    event.target.style.width="30px";
    event.target.style.height="30px";
    event.target.style.transition="all 0.25s";
}
function ZoomInCircle(event) {
    event.target.style.width="25px";
    event.target.style.height="25px";
    event.target.style.transition="all 0.25s";
}
function ZoomOutCircle(event) {
    event.target.style.width="15px";
    event.target.style.height="15px";
    event.target.style.transition="all 0.25s";
}


function Fade(checked_id) {
    var con = document.getElementsByClassName("monthly-contents");
    var con2 = document.getElementsByClassName("kimjang-contents");
    var x = checked_id;

    if(con[x].style.visibility=="hidden") {
        var count;
        for(count = 0; count <= 13; count++) {
            if(count == x) {
                continue;
            }
            else if(con[count].style.visibility=="visible") {
                con[count].style.opacity="0";
                con[count].style.transition="all 0.5s";
                con[count].style.visibility="hidden";
                con2[count].style.opacity="0";
                con2[count].style.transition="all 0.5s";
                con2[count].style.visibility="hidden";
            }
        }

        con[x].style.visibility="visible";
        con[x].style.opacity="1";
        con[x].style.transition="all 0.5s";
        con2[x].style.visibility="visible";
        con2[x].style.opacity="1";
        con2[x].style.transition="all 0.5s";
    }
    else {
        con[x].style.opacity="0";
        con[x].style.transition="all 0.5s";
        con[x].style.visibility="hidden";
        con2[x].style.opacity="0";
        con2[x].style.transition="all 0.5s";
        con2[x].style.visibility="hidden";
    }
}