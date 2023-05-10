const NumCard = document.querySelectorAll(".num-card"),
  Name = document.querySelector(".name"),
  Month = document.querySelector(".month"),
  Year = document.querySelector(".year"),
  CVV = document.querySelector(".cvv"),
  NameInp = document.querySelector(".name_inp"),
  NumInp = document.querySelector(".num_inp");
const MonthInp = document.querySelector(".month_inp");
const YearInp = document.querySelector(".year_inp");
const cvc = document.querySelector(".cvc");
const SubBtn = document.querySelector(".sub-btn");
const input = document.querySelectorAll("input");
const RightCard = document.querySelector(".right-card");
const ThankCard = document.querySelector(".thanks-card");
const Continue = document.querySelector(".continue"); 

let currentCard = 0;

SubBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //   inputlarda malumot bor yoqligini
if(NumInp.value == "" || NameInp.value == "" || MonthInp.value == "" || YearInp.value == "" || cvc.value ==  ""){
  alert("Ko'rsatilgan maydonni to'ldiring!");
  return false;
  }

  //   Ismni Tekshirish
  const nameValue = NameInp.value.trim();
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(nameValue)) {
    alert(
      "Ismingizni kiritishda hatolikka yo'l qo'ydingiz tekshirib qaytadan kiriting!"
    );
    NameInp.value = "";
    NameInp.focus();
    return false;
  } else {
    Name.innerHTML = NameInp.value;
  }
  //   Karta muddatini tekshirish
  const regExpDate = /^[0-9]{2}/;
  if (regExpDate.test(MonthInp.value) && regExpDate.test(YearInp.value)) {
    Month.innerHTML = MonthInp.value;
    Year.innerHTML = YearInp.value;
  } else {
    alert(
      "Karta muddatini to'g'ri kiritmadingiz tekshirib qaytadan kiritib ko'ring!"
    );
    MonthInp.value = "";
    YearInp.value = "";
    MonthInp.focus();
    return false;
  }
  //  cvv raqamini tekshirish va chiqarish
  const regCVV = /^[0-9]{3}/;
  if (regCVV.test(cvc.value)) {
    CVV.innerHTML = cvc.value;
  } else {
    alert("CVV raqamini to'g'ri kiritmadingiz tekshirib qaytadan kiriting!");
    cvc.value = "";
    cvc.focus();
  }
  // karta raqamini to'g'ri kiritilganini tekshirib chiqarib beruvchi kod
  const regex = /^[0-9]{16}/;
  if (regex.test(NumInp.value)) {
    for (let i = 0; i < NumCard.length; i++) {
      for (let k = 0; k < NumInp.value.length; k++) {
        NumCard[i].innerHTML = NumInp.value[k];
        i++;
      }
    }
  } else {
    alert("Karta raqamini to'g'ri kiritmadingiz!");
    NumInp.value = "";
    NumInp.focus();
    return false;
  }
  // thank card ga o'tish
  RightCard.style.display = "none";
  ThankCard.style.display = "flex";
  //   inputlarni tozalash
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
});
Continue.addEventListener("click",(e) => {
  e.preventDefault();
  RightCard.style.display = "flex";
  ThankCard.style.display = "none";
})
