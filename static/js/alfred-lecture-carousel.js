(() => {
  const root = document.querySelector("[data-alfred-carousel]");
  if (!root) return;

  const slides = [
    ["Welcome to the Batcave", "Today Batman needs a better archive. Before we name a data structure, let’s find out what has gone wrong."],
    ["Alfred’s worst night", "One story, a growing collection, and a problem hiding in plain sight. What would you organise first?"],
    ["Bruce’s bad habit", "“I’ll organise it tomorrow” is a plan with a remarkably long history and a remarkably poor success rate."],
    ["The pile system", "Everything is together. Everything is also difficult to find. Is putting things away the same as organising them?"],
    ["The emergency", "The lock breaker is somewhere in the pile. Batman needs it now. What would you have to check?"],
    ["The syllabus, sir", "Batman cannot remember where he left it. Alfred can. Guess which one has been doing the organising."],
    ["Searching the pile", "If the gadget is at the bottom, how many items might Alfred inspect? What changes when the collection grows?"],
    ["Alfred’s first fix", "Shelves group gadgets by category. Finding an antidote gets easier. Let’s see what happens when something new arrives."],
    ["Better search", "A medical shelf narrows the search. It is a small design choice with a very practical effect."],
    ["Insertion becomes an issue", "The new explosive gel needs a place. Making room on an ordered shelf may mean moving everything else."],
    ["Alfred’s second fix", "A catalogue points to a numbered shelf and box. Faster to find, perhaps. What information did Alfred have to add?"],
    ["Time versus memory", "The Batcave now stores the gadgets and their locations. The extra information has a cost too."],
    ["Requirements keep changing", "Latest first? Emergency items nearby? Group by mission? The right arrangement depends on what Batman asks most often."],
    ["There is no perfect arrangement", "One operation gets easier and another may get harder. A good design starts by asking what work matters."],
    ["Scale-up question", "Alfred can manage a few hundred gadgets. Would the same plan work for ten million objects?"],
    ["Enter the Collector", "The Collector owns millions of objects. Batman’s pile has found a worthy rival."],
    ["One archive, many questions", "Find one rare coin, group objects by origin, retrieve the most valuable item. Is one arrangement best for all three?"],
    ["Class challenge: you are the archive architect", "Choose how the archive stores its objects. First, predict which operation your design will make easier."],
    ["Defend your design", "Explain how objects are arranged, what extra information you store, what gets faster, and what costs more."],
    ["This is data structures", "A data structure is a deliberate way to organise data so the operations we need can be done efficiently."],
    ["Why are we using C?", "C lets us look inside memory and see how the structure is built. The design question reaches beyond C."],
    ["Exit question", "Two systems store the same data. Could one still be dramatically faster? Tell me what you think, and why."],
    ["Welcome to Data Structures", "That question is our starting point. We’ll keep asking it whenever a new structure appears."],
    ["Thank you", "Now let’s open the archive, make a prediction, and see whether our design survives the first search."]
  ];
  const image = root.querySelector("img");
  const caption = root.querySelector("figcaption");
  const counter = root.querySelector("[data-slide-counter]");
  const previous = root.querySelector("[data-slide-previous]");
  const next = root.querySelector("[data-slide-next]");
  let current = 0;

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
  previous.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));
  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
  show(0);
})();
