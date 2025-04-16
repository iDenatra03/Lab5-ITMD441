const billInput = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipPercentage = document.getElementById("tipPercentage");
const tipAmount = document.getElementById("tipAmount");
const totalWithTax = document.getElementById("totalWithTax");
const totalWithTip = document.getElementById("totalWithTip");
const sliderValue = document.getElementById("sliderValue");
const error = document.getElementById("errorMessage");

tipSlider.addEventListener("input", () => {
  sliderValue.textContent = tipSlider.value + "%";
  calculate();
});

function format(value) {
  return parseFloat(value).toFixed(2);
}

function calculate() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseInt(tipSlider.value);

  // If input is not a number or is 0 or negative
  if (isNaN(bill) || bill <= 0) {
    error.style.display = "block";
    tipPercentage.value = "";
    tipAmount.value = "";
    totalWithTax.value = "";
    totalWithTip.value = "";
    return;
  }

  error.style.display = "none"; 

  const tipValue = bill * (tipPercent / 100);
  const taxValue = bill * 0.11;

  const totalWithTaxOnly = bill + taxValue;
  const totalWithTipAndTax = bill + tipValue + taxValue;

  tipPercentage.value = tipPercent + "%";
  tipAmount.value = format(tipValue);
  totalWithTax.value = format(totalWithTaxOnly);
  totalWithTip.value = format(totalWithTipAndTax);
}

billInput.addEventListener("input", () => {
    const billValue = billInput.value.trim();
    const bill = parseFloat(billValue);
    const error = document.getElementById("errorMessage");
  
    if (billValue === "") {
      error.style.display = "none";
      tipSlider.value = 0;
      sliderValue.textContent = "0%";
      tipPercentage.value = "";
      tipAmount.value = "";
      totalWithTax.value = "";
      totalWithTip.value = "";
      return;
    }
  
    if (isNaN(bill) || bill <= 0) {
      error.style.display = "block";
      tipPercentage.value = "";
      tipAmount.value = "";
      totalWithTax.value = "";
      totalWithTip.value = "";
      return;
    }
  
    error.style.display = "none";
    calculate();
  });
  