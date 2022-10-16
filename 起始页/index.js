function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".time").innerHTML = h + ':' + m + ':' + s;
    t = setTimeout(function () {
        startTime();
    }, 500);
}



function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } 
    return i;
}

function search() {
  let v = document.querySelector("#object");
  window.open("https://www.google.com/search?q=" + v.value);
}