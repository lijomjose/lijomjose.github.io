(() => {
  const root = document.querySelector("[data-alfred-carousel]");
  if (!root) return;

  const slides = [
    ["Welcome to the Batcave", "All right, detective. Batman needs a better archive. Before I give this problem a name, what has gone wrong?"],
    ["Alfred’s worst night", "A growing collection, one increasingly patient butler, and a problem hiding in plain sight. Where would you start?"],
    ["Bruce’s bad habit", "“I’ll organise it tomorrow.” A bold plan, sir. History suggests we may need a backup plan."],
    ["The pile system", "Everything is together. Admirably democratic. Now, if you needed the antidote in a hurry, where would you look?"],
    ["The emergency", "The lock breaker is in the pile. Somewhere. How many gadgets would you check before finding it? No guessing that Batman remembers."],
    ["The syllabus, sir", "Batman has forgotten where he left it. Alfred has not. I wonder which of them arranged the collection."],
    ["Searching the pile", "If the gadget is at the bottom, you may inspect nearly everything. What happens when the pile grows from a hundred to a thousand?"],
    ["Alfred’s first fix", "Shelves by category. Finding an antidote is easier already. Lovely. Now Bruce has brought home a new gadget."],
    ["Better search", "Need medicine? Try the medical shelf. That simple decision saves a search. Which other questions would these shelves answer well?"],
    ["Insertion becomes an issue", "The new freeze-resistant gel needs its place. To keep the shelf tidy, Alfred must make room. Who volunteered to move the gadgets?"],
    ["Alfred’s second fix", "A catalogue gives each gadget an address. Faster to find, perhaps. What extra information must the Batcave now keep?"],
    ["Time versus memory", "We store the gadgets and their locations. Finding things gets easier; storing those directions takes space. The Batcave has a budget too."],
    ["Requirements keep changing", "Latest first? Emergency items nearby? Group them by mission? Bruce has supplied an impressive list of reasons one shelf may not do."],
    ["There is no perfect arrangement", "Fast search can mean slower insertion. Grouping can help one question and frustrate another. Which job matters most to this user?"],
    ["Scale-up question", "Alfred can cope with a few hundred gadgets. Shall we give him ten million and see how the shelf plan feels?"],
    ["Enter the Collector", "Millions of objects, one archive, and somehow not enough room for another pile. We may need to think this through."],
    ["One archive, many questions", "Find a rare coin, group items by origin, fetch the most valuable. Would you arrange the archive the same way for every request?"],
    ["Class challenge: you are the archive architect", "Your turn. Design an archive for ten million objects. Start by choosing the operation you want to make easy."],
    ["Defend your design", "Tell us how your archive works: what gets faster, what gets slower, and what extra memory did you ask Alfred to maintain?"],
    ["This is data structures", "That choice of arrangement is the data structure. The point is to make the operations we need work well. Now the name has earned its place."],
    ["Why are we using C?", "C lets us peek inside memory and see how the structure is built. Think of it as the workshop; the design decision travels with us."],
    ["Exit question", "Two systems, same data, very different speed. Plausible? Before you answer, ask what each system makes easy."],
    ["Welcome to Data Structures", "That is where our course begins: with a problem worth solving, and a design we can explain."],
    ["Thank you", "Now, open the archive. Make a prediction before we search. Alfred has done enough guessing for one evening."]
  ];
  const image = root.querySelector("img");
  const caption = root.querySelector("figcaption");
  const counter = root.querySelector("[data-slide-counter]");
  const previous = root.querySelector("[data-slide-previous]");
  const next = root.querySelector("[data-slide-next]");
  let current = 0;
  let timer;

  function show(index) {
    current = (index + slides.length) % slides.length;
    image.src = `/images/teaching/data-structures/alfred/slide-${String(current + 1).padStart(2, "0")}.jpg`;
    image.alt = `Lecture slide ${current + 1}: ${slides[current][0]}`;
    caption.replaceChildren();
    const title = document.createElement("strong");
    title.textContent = slides[current][0];
    const comment = document.createElement("span");
    comment.textContent = slides[current][1];
    caption.append(title, comment);
    counter.textContent = `Slide ${current + 1} of ${slides.length}`;
  }
  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(current + 1), 20000);
  }
  previous.addEventListener("click", () => { show(current - 1); restartTimer(); });
  next.addEventListener("click", () => { show(current + 1); restartTimer(); });
  root.addEventListener("mouseenter", () => window.clearInterval(timer));
  root.addEventListener("mouseleave", restartTimer);
  root.addEventListener("focusin", () => window.clearInterval(timer));
  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget)) restartTimer();
  });
  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") { show(current - 1); restartTimer(); }
    if (event.key === "ArrowRight") { show(current + 1); restartTimer(); }
  });
  show(0);
  restartTimer();
})();
