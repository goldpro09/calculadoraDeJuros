var capitalInput = document.getElementById("capital");
var taxaInput = document.getElementById("taxa");
var mesesInput = document.getElementById("meses");


function calcular() {
    var capital = document.getElementById("capital").value;
    var taxa = document.getElementById("taxa").value;
    var meses = document.getElementById("meses").value;
    var resultBox = document.getElementById("resultado");
    submitOK = "true";
  
    if (isNaN(taxa) || taxa < 1 || taxa > 100) {
      alert("A taxa deve ser um numero entre 1 e 100!");
      submitOK = "false";
    }

    if(isNaN(meses)){
        alert("Os meses devem ser um numero!")
        submitOK = "false";
    }

    if(isNaN(capital)){
        alert("A capital deve ser um numero!!")
        submitOK = "false";
    }
    if (submitOK == "false") {
      return false;
    }

    console.log(capital, taxa, meses);

    var juros;

    juros = capital * taxa/100 * meses;


    console.log(juros)
    resultBox.value = "Total de juros: " + juros;
}