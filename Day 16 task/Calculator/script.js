let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}
function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("invalid");
    }
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', function clear() {
  outputScreen.value = '';
});

