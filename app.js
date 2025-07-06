const calcForm = document.querySelector("#calcForm");

const resultContainer = document.querySelector("#result");

calcForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // const oyako = calcForm.elements.oyako;
  const oyako = document.getElementById('oyako');
  // const tumoron = calcForm.elements.tumo_ron;
  const tumoron = document.getElementById('tumo_ron');
  const hansu = calcForm.elements.hansu;
  const husu = calcForm.elements.husu;
  total(oyako.value, tumoron.value, hansu.value, husu.value);
  // console.log(oyako.value);
  // console.log(tumoron.value);
  // console.log(hansu.value);
  // console.log(husu.value);

  // console.log(total(oyako.value, tumoron.value, hansu.value, husu.value));

  printTotal();

  // submit後に入力欄を0に戻す
  hansu.value = '0';
  husu.value = '0';
});

const printTotal = function() {
  // const total1 = document.createElement('p');
  const score = total(oyako.value, tumo_ron.value, hansu.value, husu.value);
  // total1.append(score);
  // resultContainer.append(total1);
  const pTag = document.querySelector('#result');
  const h2Tag = document.querySelector('h2');
  h2Tag.innerText = '点数';
  pTag.innerText = `あなたの点数は${score}点です`;
}


const total = function(oyako, tumoron, hansu, husu) {
  let tempTotal = 0;

  hansu = parseInt(hansu);
  husu = parseInt(husu);

  if (hansu >= 13) {
    tempTotal = 32000;
  }else if(hansu >= 11) {
    tempTotal = 24000;
  }else if(hansu >= 8) {
    tempTotal = 16000;
  }else if (hansu >= 6) {
    tempTotal = 12000;
  }else if (hansu >= 5 || (hansu >= 4 && husu >= 40)) {
    tempTotal = 8000;
  }else {
    tempTotal = husu * (2 ** (2 + hansu));
    if (oyako === 'child' && tumoron === 'ron') {
      tempTotal = Math.ceil((tempTotal * 4)/100)*100;
    }
    if (oyako === 'parent' && tumoron === 'ron') {
      tempTotal = Math.ceil((tempTotal * 6)/100)*100;
    }
    if (oyako === 'child' && tumoron === 'tumo') {
      tempTotal = Math.ceil((tempTotal * 2)/100)*100 + Math.ceil(tempTotal/100)*100;
    }
    if (oyako === 'parent' && tumoron === 'tumo') {
      tempTotal = Math.ceil(tempTotal * 2/100)*100 * 2;
    }
  }
  return tempTotal;
};



