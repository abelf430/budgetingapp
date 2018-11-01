function netIncome() {
  var hours = document.getElementById('hours').value;
  var grossIncome = hours * 14;
  var taxes = .173859;
  var income = grossIncome - (grossIncome * taxes);
  console.log(grossIncome);
  document.getElementById('netIncome').innerHTML = income.toLocaleString('us-US', { style: 'currency', currency: 'USD' });

  let tithepcnt = .10;
  var titheAmnt = income * tithepcnt;
  document.getElementById('tithe').innerHTML = titheAmnt.toLocaleString('us-US', { style: 'currency', currency: 'USD' });


// }
//
// function debt() {
  var d = new Date();
  var today = d.getDate();
  var week = today + 7;

  const tmsDate = 1;
  const tmsMoney = 437.50;

  const awsDate = 4;
  const awsMoney = 1;

  const skimmDate = 5;
  const skimmMoney = 2.99;

  const cbsDate = 11;
  const cbsMoney = 5.99;

  const electricityDate = 12;
  const electricityMoney = 105;

  const primeDate = 17;
  const primeMoney = 6.60;

  const codecademyDate = 17;
  const codecademyMoney = 19.99;

  const spotifyDate = 23;
  const spotifyMoney = 5.47;

  const dropBoxDate = 27;
  const dropBoxMoney = 9.99;

  const appleDate = 28;
  const appleMoney = 0.99;

  const spectrumDate = 29;
  const spectrumMoney = 50;
  var totalCost = 0;

  var services = [];

  if (tmsDate >= today && tmsDate <= week) {
    totalCost = totalCost + tmsMoney;
    services.push("tms");
  }
  if (awsDate >= today && awsDate <= week) {
    totalCost = totalCost + awsMoney;
    services.push("aws");
  }
  if (skimmDate >= today && skimmDate <= week) {
    totalCost = totalCost + skimmMoney;
    services.push("skimm");
  }
  if (cbsDate >= today && cbsDate <= week) {
    totalCost = totalCost + cbsMoney;
    services.push("cbs");
  }
  if (electricityDate >= today && electricityDate <= week) {
    totalCost = totalCost + electricityMoney;
    services.push("electricity");
  }
  if (primeDate >= today && primeDate <= week) {
    totalCost = totalCost + primeMoney;
    services.push("Amazon Prime");
  }
  if (codecademyDate >= today && codecademyDate <= week) {
    totalCost = totalCost + codecademyMoney;
    services.push("Codecademy");
  }
  if (spotifyDate >= today && spotifyDate <= week) {
    totalCost = totalCost + spotifyMoney;
    services.push("spotify");
  }
  if (dropBoxDate >= today && dropBoxDate <= week) {
    totalCost = totalCost + dropBoxMoney;
    services.push("dropbox");
  }
  if (appleDate >= today && appleDate <= week) {
    totalCost = totalCost + appleMoney;
    services.push("iCloud");
  }
  if (spectrumDate >= today && spectrumDate <= week) {
    totalCost = totalCost + spectrumMoney;
    services.push("Internet (Spectrum)");
  }
  document.getElementById('services').innerHTML = services

  document.getElementById('debt').innerHTML = totalCost.toLocaleString('us-US', { style: 'currency', currency: 'USD' });

  let incomeaftertithe = income - titheAmnt;
  let incomeafterCost = income - totalCost;
  let incomeafterTandC = incomeaftertithe - totalCost;
  var savings = incomeafterCost * .43;
  document.getElementById('savings').innerHTML = savings.toLocaleString('us-US', { style: 'currency', currency: 'USD' });

  const costPercent = totalCost/incomeaftertithe;
  console.log("COST PERCENT: " + costPercent.toLocaleString("en", {style: "percent"}));

  const cash = (incomeafterTandC - savings).toLocaleString('us-US', { style: 'currency', currency: 'USD' });
  document.getElementById('cash').innerHTML = cash.toLocaleString('us-US', { style: 'currency', currency: 'USD' });



  var options = {
        chart: {
            type: 'donut',
        },
        series: [5.47, 44.53, 206.17, 264.12],
        labels: ["Cost", "Tithe", "Cash", "Savings"]


    }

   var chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );

    chart.render();


}
