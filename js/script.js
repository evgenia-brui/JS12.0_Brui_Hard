let arr = ['45634', '56564', '22222', '8431', '3648', '4546431', '989889'];

arr.forEach(function(item) {
    if (item[0] == 2 || item[0] == 4) console.log(item);
});

checkNumber:
for (let n = 2; n <= 100; n++) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) continue checkNumber;
    }

    console.log(n + '. Делители этого числа: 1 и ' + n);
}