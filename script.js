function getData(value) {
    document.getElementById('display').value += value;
}
function ac() {
    document.getElementById('display').value = "";
}

function equalto(value) {
    let data =document.getElementById('display').value
    let res = eval(data);
    document.getElementById('display').value = `${res}`;
}

document.addEventListener('keydown' , function (event){
    const key = event.key;
    if((key >= '0' && key <= '9') || key === '/' || key === '*' || key === '-' || key === '+' || key === '.'){
        getData(key);
    } else if (key === 'Enter'){
    equalto(key);
} else if (key === 'Escape' || key === 'Delete'){
    ac();
}
})

function del() {
    let a = document.getElementById('display').value;
    document.getElementById('display').value = (a.slice(0,(a.length)-1));
}