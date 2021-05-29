let price = () => {
    let autonames = document.getElementsByClassName('autoname');
    let gearboxes = document.getElementsByClassName('gearbox');
    let bodys = document.getElementsByClassName('body');
    let fueles = document.getElementsByClassName('fuel');
    let ranges = document.getElementsByClassName('range');
    let extras = document.getElementsByClassName('extra');
    let sum = 0;

    for (let autoname of autonames) {
        if (autoname.selected) {
        sum += +autoname.value;
    }
    }

    for (let gearbox of gearboxes) {
        if (gearbox.checked) {
        sum += +gearbox.value;
    }
    }

    for (let body of bodys) {
        if (body.checked) {
        sum += +body.value;
    }
    }

    for (let fuel of fueles) {
        if (fuel.checked) {
        sum += +fuel.value;
    }
    }

    for (let range of ranges) {
        if (range.checked) {
        sum += +range.value;
    }
    }

    for (let extra of extras) {
        if (extra.checked) {
        sum += +extra.value;
    }
    }

    document.getElementById('result').value = sum;
}
