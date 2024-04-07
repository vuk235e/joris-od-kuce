const usertxt = document.getElementById("username");
const emailtxt = document.getElementById("email");
const datetxt = document.getElementById("date");

function unesi() {
  let username = usertxt.value;
  let email = emailtxt.value;
  let date = datetxt.value;

  //dodaj u tabelu
  let tabela = document.getElementById("tabela");
  let noviRed = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  cell1.textContent = username;
  cell2.textContent = email;
  cell3.textContent = date;
  tabela.appendChild(noviRed);
  noviRed.appendChild(cell1);
  noviRed.appendChild(cell2);
  noviRed.appendChild(cell3);
  console.log(username, email, date);

  //pretvori u json i ispiši
  let login = {
    username: username,
    email: email,
    datum: date,
    boja: "nema boju",
    oblik: {
      kocka: null,
      lopta: null,
    },
  };

  //izvuci vrednosti iz radia i čekboksa

  let boja = document.getElementsByName("boja");
  for (let i = 0; i < boja.length; i++) {
    if (boja[i].checked) {
      login.boja = boja[i].value;
      boja[i].checked = false;
    }
  }

  let kocka = document.getElementById("chkocka");
  let lopta = document.getElementById("chlopta");
  if (kocka.checked) {
    login.oblik.kocka = true;
  }
  kocka.checked = false;
  if (lopta.checked) {
    login.oblik.lopta = true;
  }
  lopta.checked = false;
  //ispisi json u textarea

  let jsonString = JSON.stringify(login);
  console.log(jsonString);
  let ta = document.getElementById("textarea");
  ta.value = jsonString;

  //json string prebaci u textboxeve nazad

  let json2 = ta.value;
  let login2 = JSON.parse(json2);
  document.getElementById("username2").value = login2.username;
  document.getElementById("email2").value = login2.email;
  document.getElementById("date2").value = login2.datum;

  //izbriši iz textboxa
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
}
