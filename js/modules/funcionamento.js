export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = "aberto";
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.agora = new Date();
    this.diaAgora = this.agora.getDay();
    this.horarioAgora = this.agora.getUTCHours() - 3;
  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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
