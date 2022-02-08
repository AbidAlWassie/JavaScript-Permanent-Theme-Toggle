window.onload = function() {
  const inputKey = document.getElementById("inputKey");
  const inputValue = document.getElementById("inputValue");
  const btnInsert = document.getElementById("btnInsert");
  const output = document.getElementById("output");


  btnInsert.onclick = function () {
    const key = inputKey.value;
    const value = inputValue.value;

    
    if (key && value) {
      localStorage.setItem(key, value);
      location.reload();
    }

  };

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += `${key}: ${value}<br/>`;
  }

  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.onclick = function () {
    if (localStorage.getItem("theme", "dark")) {
      localStorage.setItem("theme", "");
      // html.className="";
      location.reload();
    } else {
      localStorage.setItem("theme", "dark");
      // html.className="dark";
      location.reload();
    }
  }

  // console.log(html);
  // console.log(toggleBtn);

}
