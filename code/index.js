

function rating_btn(n) {
    const btn = document.getElementById(n);
    const text = document.getElementById("rating_text");
    text.textContent = `you selected ${btn.textContent} out of 5`;
    console.log(text);
}

function switchTo() {
    document.getElementById("second_container").style.display = 'block';
    document.getElementById('container').style.display = 'none';
}

function switchBack() {
    document.getElementById("second_container").style.display = 'none';
    document.getElementById('container').style.display = 'block';
}
