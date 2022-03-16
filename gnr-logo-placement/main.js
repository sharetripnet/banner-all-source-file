import './style.scss'

document.querySelector('#app').innerHTML = `
<div class="gnr-logo" style="
    position: absolute;
    bottom: 0;
    right: 24px;
    transform: translateX(100%);
    cursor: pointer;
">

    <div class="img" style="
    margin-right: 8px;
    display: inline-block;
    vertical-align: middle;
">
  <img src="./favicon.png" alt="gnrads.com" style="
    width: 18px;
">
</div>
<div class="text" style="
    display: inline-block;
    vertical-align: middle;
    ">
    <a href="https://gnrads.com/" target="_blank" rel="noopener">gnrads.com</a>
    </div>
</div>
`

var logo = document.querySelector('.gnr-logo');

logo.addEventListener('mouseover', function () {
    logo.style.transform = "translateX(10%)";
    logo.style.transition = ".5s"
});

logo.addEventListener('mouseleave', function () {
    logo.style.transform = "translateX(100%)"
});




// var img = document.createElement("img");
// img.src = "./favicon.svg";
// img.value = "myvalue";
// select.appendChild(img);

