const ordArray = ["Hej", "Nej", "EJ", "Leverpastej", "42"],
slumpadSiffra = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
// https://stackoverflow.com/a/1527820 hjälp med jämn distribution från 0-4

console.log(slumpadSiffra);

if (slumpadSiffra === 0) {
    console.log(ordArray[0]);
}

else if (slumpadSiffra === 1) {
    console.log(ordArray[1]);
}

else if (slumpadSiffra === 2) {
    console.log(ordArray[2]);
}

else if (slumpadSiffra === 3) {
    console.log(ordArray[3]);
}

else if (slumpadSiffra === 4) {
    console.log(ordArray[4]);
}

else {
    console.log("--error--")
}