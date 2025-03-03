export default function initAnimeNumbers() {
  function animeNumbers() {
    const numbers = document.querySelectorAll("[data-numero]");
    if (!numbers) {
      return;
    }

    numbers.forEach((number) => {
      const total = +number.innerText;
      let start = 0;
      const increment = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          clearInterval(timer);
          number.innerText = total;
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animeNumbers();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
