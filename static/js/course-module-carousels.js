(() => {
  const modules = window.courseModuleCarouselData || {};
  document.querySelectorAll("[data-course-carousel]").forEach((root) => {
    const data = modules[root.dataset.courseCarousel];
    if (!data) return;
    const image = root.querySelector("img");
    const caption = root.querySelector("figcaption");
    const counter = root.querySelector("[data-course-counter]");
    let current = 0;

    function show(index) {
      current = (index + data.slides.length) % data.slides.length;
      const number = String(current + 1).padStart(2, "0");
      image.src = `/images/teaching/data-structures/${data.slug}/slide-${number}.jpg`;
      image.alt = `${data.title}, slide ${current + 1}: ${data.slides[current].title}`;
      const title = document.createElement("strong");
      title.textContent = data.slides[current].title;
      const comment = document.createElement("span");
      comment.textContent = data.slides[current].comment;
      caption.replaceChildren(title, comment);
      counter.textContent = `Slide ${current + 1} of ${data.slides.length}`;
    }

    root.querySelector("[data-course-previous]").addEventListener("click", () => show(current - 1));
    root.querySelector("[data-course-next]").addEventListener("click", () => show(current + 1));
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(current - 1);
      if (event.key === "ArrowRight") show(current + 1);
    });
    show(0);
  });
})();
