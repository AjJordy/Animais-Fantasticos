import AnimeNumbers from "./numbers";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function animeAnimalsNumbers() {
    const animeNumeros = new AnimeNumbers("[data-numero]", ".numeros", "ativo");
    animeNumeros.init();
  }

  function insertAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function fetchAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => insertAnimals(animal));
      animeAnimalsNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return fetchAnimais(url);
}
