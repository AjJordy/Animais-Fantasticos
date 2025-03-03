export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const agora = new Date();
  const diaAgora = agora.getDay();
  const horarioAgora = agora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

/*
const now = new Date();
// console.log(now);
// console.log(now.getDay()); // week day from 0 to 6
// console.log(now.getMonth()); // month from 0 to 11
// console.log(now.getTime()); // time in milliseconds

const future = new Date("Dec 24 2025 23:59");
// console.log(future);

const daysNow = transform2days(now.getTime());
const daysFuture = transform2days(future.getTime());
console.log(
  "Faltam quantos dias para o natal ? ",
  Math.floor(daysFuture - daysNow)
);

function transform2days(time) {
  return time / (24 * 60 * 60 * 1000);
}
*/
