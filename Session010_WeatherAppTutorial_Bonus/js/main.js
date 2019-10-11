document.addEventListener("DOMContentLoaded", function() {
  let fToCBlue = true;
  onLeftTextFieldChange(leftTextField => {
    console.log("The value of the left text field is", leftTextField);
    if (isEmpty(leftTextField)) false;
    clearRightTextField();
    if (isEmpty(leftTextField)) {
      if (fToCBlue) setRightTextFieldPlaceholder("Celsius");
      else setRightTextFieldPlaceholder("Fahrenheit");
      console.log("Not a valid number");
    } else if (isNotValidNumber(leftTextField)) {
      setRightTextFieldPlaceholder("0");
      console.log("Not a valid number");
    } else if (fToCBlue) {
      let tempF = stringToNumber(leftTextField);
      console.log("valid number");
      let convertF2C = (tempF - 32) * (5 / 9);
      setRightTextField(convertF2C.toFixed(2));
    } else {
      let tempC = stringToNumber(leftTextField);
      console.log("valid number");
      let convertC2F = tempC * (9 / 5) + 32;
      setRightTextField(convertC2F.toFixed(2));
    }
  });
  onCToFButtonClicked(() => {
    setCToFButtonBlue();
    setFToCButtonGray();
    clearLeftTextField();
    clearRightTextField();
    setLeftTextFieldPlaceholder("Celsius");
    setRightTextFieldPlaceholder("Fahrenheit");
    fToCBlue = false;
  });
  onFToCButtonClicked(() => {
    setFToCButtonBlue();
    setCToFButtonGray();
    clearLeftTextField();
    clearRightTextField();
    setLeftTextFieldPlaceholder("Fahrenheit");
    setRightTextFieldPlaceholder("Celsius");
    fToCBlue = true;
  });
  onLeftTextFieldChange(() => {
    if (fToCBlue) setRainBackgroundImage("background change");
    else setBeachBackgroundImage(leftTextField);
    setRightTextFieldPlaceholder("0");
    console.log("valid number");
  });
});
