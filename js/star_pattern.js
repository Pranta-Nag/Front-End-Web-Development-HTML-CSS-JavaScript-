// Some star pattern in JS

let n = 5;
for (let i = 1; i <= n; i++) { 
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


let m = 5;
for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1; j <= m - i + 1; j++) {
        row += "* ";
    }
    console.log(row);
}

