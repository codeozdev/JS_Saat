function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = time(m);
  s = time(s);
  document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(showTime, 1000);
}

function time(i) {
  if (i < 10) {
    i = "0" + i;
  } 
  return i;
}
showTime();

let getName = prompt("Lütfen adınızı girin.");
let selectName = document.querySelector("#myName");
selectName.innerHTML = `${getName}`;
