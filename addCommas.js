function addComma(num) {
    let numstr = num.toString()
    let numsplit = numstr.split(".");
    numsplit[0] = numsplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numsplit.join(".");
}


module.exports = addComma;