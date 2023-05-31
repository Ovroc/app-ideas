const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

build = () => {
  let date = new Date();

  horas.textContent = setContent(date.getHours());
  minutos.textContent = setContent(date.getMinutes());
  segundos.textContent = setContent(date.getSeconds());
};

setContent = (val) => {
  if (Number.isNaN(val)) return 0;
  return val < 10 ? "0" + val : val;
};

const tempo = setInterval(build, 1000);