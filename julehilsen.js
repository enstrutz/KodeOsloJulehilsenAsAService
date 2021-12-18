//event listeners

document.getElementById("knapp").addEventListener("click", generate);
document.getElementById("textbox").addEventListener("click", copyCssCode);

// random gradient function

function rndList(length) {
  let list = [];

  for (let i = 0; i <= length - 1; i++) {
    list.push(Math.floor(Math.random() * 255));
  }
  return list;
}

function generate() {
  // generate random values for r,g,b

  // define rgba-strings

  let rgbNumber = rndList(9);
  let rgb1 =
    "rgba(" +
    rgbNumber[0] +
    "," +
    rgbNumber[1] +
    "," +
    rgbNumber[2] +
    "," +
    1 +
    ")";
  let rgb2 =
    "rgba(" +
    rgbNumber[3] +
    "," +
    rgbNumber[4] +
    "," +
    rgbNumber[5] +
    "," +
    1 +
    ")";
  let rgb3 =
    "rgba(" +
    rgbNumber[6] +
    "," +
    rgbNumber[7] +
    "," +
    rgbNumber[8] +
    "," +
    1 +
    ")";

  // define gradient-string

  let gradient =
    "linear-gradient(90deg," + rgb1 + " 0%, " + rgb2 + "0%, " + rgb3 + " 100%)";

  // define text to be displayed in text box

  let gradientCode = "background: " + gradient + ";";

  // set CSS-styles from generated strings

  document.getElementById("body").style.background = gradient;
  document.getElementById("rgb-text").innerHTML = julehilsen();
  /*   document.getElementById("instruction").innerHTML = instruction; */
  document.getElementById("instruction").style.color = "#9a8297";
}

function copyCssCode() {
  let preWord = [
    "Herlig! ",
    "Flotters! ",
    "Den er grei: ",
    "Tipp-topp! ",
    "Da var det gjort! ",
  ];
  let i = Math.floor(Math.random() * 5);
  let gradientCssCode = document.getElementById("rgb-text").innerHTML;
  let copyConfirmation =
    preWord[i] +
    "Denne er kopiert. Lim den inn i en mail og send den til en venn.";

  navigator.clipboard.writeText(gradientCssCode);
  document.getElementById("instruction").innerHTML = copyConfirmation;
  document.getElementById("instruction").style.color = "green";
}

function julehilsen() {
  let adjektiv1 = [
    "god",
    "gledelig",
    "fabelaktig",
    "amazing",
    "helt sjukt nice",
    "flott",
    "fredelig",
    "vellyket",
    "koselig",
  ];
  let adjektiv2 = [
    "godt",
    "herlig",
    "*fantastic*",
    "über-amazing",
    "innholdsrikt",
    "megasosialt",
    "koronafritt",
    "drøyt fett",
    "helt normalt",
  ];

  let randomAdjektiv1 =
    adjektiv1[Math.floor(Math.random(adjektiv1.length) * adjektiv1.length)];

  let randomAdjektiv2 =
    adjektiv2[Math.floor(Math.random(adjektiv2.length) * adjektiv2.length)];

  let julehilsenTekst =
    "Vi ønsker deg en " +
    randomAdjektiv1 +
    " jul og et " +
    randomAdjektiv2 +
    " nytt år! Hilsen Kode Oslo-gjengen.";
  console.log(randomAdjektiv1);

  return julehilsenTekst;
}

julehilsen();
