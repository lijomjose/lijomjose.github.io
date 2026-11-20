---
title: "Data Structures"
description: "Follow Caitlyn from pointers and changing routes to stacks, queues, trees, and graphs. Course notes, lecture slides, practice, and The Last Portal assignment."
draft: false
math: true
hideMeta: true
build:
  list: never
---

<div class="ds-course">
<section class="lecture-carousel course-hero-carousel" aria-labelledby="alfred-carousel-title">
<h2 id="alfred-carousel-title">Before the journey: Alfred, Batman, and the Collector’s Archive</h2>
<p>Batman can find a criminal in a city. Finding one gadget in his own collection is apparently a more ambitious project. Alfred has had enough. Move through the slides, pause at each question, and make a prediction.</p>
<div class="lecture-carousel-view" data-alfred-carousel tabindex="0" aria-label="Lecture slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/alfred/slide-01.jpg" alt="Lecture slide 1: Welcome to the Batcave" loading="eager"><figcaption><strong>Welcome to the Batcave</strong><span>Today Batman needs a better archive. Before we name a data structure, let’s find out what has gone wrong.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-slide-previous aria-label="Previous slide">Previous</button><span data-slide-counter aria-live="polite">Slide 1 of 24</span><button type="button" data-slide-next aria-label="Next slide">Next</button></div>
</div>
<p><a href="https://canva.link/28gif096cug9xng">Course introduction (Canva)</a> · <a href="/materials/presentations/Lecture_1_Alfred_Batman_Collector_compressed-1.pdf">Open or download the complete 24-slide lecture (PDF)</a></p>
</section>
<script src="/js/alfred-lecture-carousel.js" defer></script>
<script src="/js/course-module-carousel-data.js" defer></script>
<script src="/js/course-module-carousels.js" defer></script>

<section class="course-story-intro" aria-label="Meet Caitlyn">
<div>
<p>All semester, we’ll follow Caitlyn, a curious young explorer, as she sets off to discover new worlds and solve the problems she meets along the way. I was inspired by my daughter and her love of Dora the Explorer.</p>
<p>Caitlyn has worlds to explore, a rather unreliable map, and a habit of finding problems that a sword cannot solve. We have C. Between us, something should work. Bring your curiosity; the next discovery is just around the corner.</p>
</div>
<img src="/images/teaching/data-structures/caitlyn-explorer.jpg" alt="Caitlyn exploring a mechanical device on her journey" loading="lazy">
</section>

But before we write a structure definition or memorise an operation, I want us to
stay with the problem. What must we remember? What can change? Which route must
survive when we move a pointer? The data structure should arrive as an answer to
something we have already wondered about.

Read the story. Pause at the question. Make a prediction—even a gloriously wrong
one. Draw what happens, and then write the code. That is the journey these
materials are meant to support.

<p class="course-jump"><a href="#assignments">The Last Portal assignment</a> · <a href="#quick-reference">Quick reference, after the journey</a></p>

## The journey through the course

Open a chapter below. Start with its story and notes, then use the slides to
revisit the classroom discussion. PDF links are for reading; PPTX links are
editable presentations and can be larger downloads.

<details class="course-accordion" id="introduction">
<summary>Before the journey: Alfred, Batman, and the Collector’s Archive</summary>
<div class="course-accordion-content">
<p>Batman can find a criminal in a city. Finding one gadget in his own collection is apparently a more ambitious project. Alfred has had enough.</p>
<p>Before we name any data structures, ask: when does putting everything in one pile stop being a reasonable plan?</p>
<ul>
<li><a href="https://canva.link/28gif096cug9xng">Lecture 0: course introduction (Canva)</a></li>
<li><a href="/materials/presentations/Lecture_1_Alfred_Batman_Collector_compressed-1.pdf">Alfred, Batman, and the Collector’s Archive (PDF)</a></li>
</ul>
</div>
</details>
<details class="course-accordion" id="module-1">
<summary>Module 1: Pointers, memory, and the address of the problem</summary>
<div class="course-accordion-content">
<p>A monster attacks. Caitlyn’s health ought to change. Our function confidently changes a number somewhere, and Caitlyn remains entirely unimpressed.</p>
<p>Did we give the function the thing to change, or just a copy of its value? This is where I want our C recap to begin. Addresses, arrays, allocation, and indirection will matter in every chapter that follows.</p>
<h3>Read and follow the story</h3>
<ul><li><a href="/materials/courses/data-structures/materials/notes/The-Whole-Point-of-Pointers.pdf">The Whole Point of Pointers (PDF)</a> — the main reading for this chapter.</li></ul>
<h3>Revisit the lecture</h3>
<ul>
<li><a href="https://canva.link/nknbzzn2knm03t2">The Map Beyond the Variables (Canva)</a> · <a href="/materials/courses/data-structures/materials/presentations/The%20Map%20Beyond%20the%20Variables-1.pdf">PDF</a></li>
</ul>
<section class="lecture-carousel module-lecture-carousel" aria-label="The Map Beyond the Variables slides">
<h4>The Map Beyond the Variables: let’s look at the first slide together</h4>
<p>Come with me into Pointerra. Xara has a simple request: change her gold. Let’s see why passing a number may not be enough.</p>
<div class="lecture-carousel-view" data-course-carousel="pointer" tabindex="0" aria-label="The Map Beyond the Variables slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/pointer/slide-01.jpg" alt="The Map Beyond the Variables, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>Come with me into Pointerra. Xara has a simple request: change her gold. Let’s see why passing a number may not be enough.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 42</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
<h3>Try it yourself</h3>
<ul>
<li><a href="/materials/courses/data-structures/materials/practice-problems/array_story_practice_problems.pdf">Array Story Practice Problems (PDF)</a></li>
<li><a href="/materials/courses/data-structures/materials/practice-problems/Code-Quest-I.pdf">Code Quest I: The Siege of the Shattered Citadel (PDF)</a> — five relics, five programming problems, and a final boss who is unlikely to accept “it compiled” as proof.</li>
</ul>
<p><strong>Before moving on:</strong> draw the variable, its address, and the pointer separately. Which one does each line of your program change?</p>
</div>
</details>
<details class="course-accordion" id="module-2">
<summary>Module 2: Linked lists — a route without a ready-made map</summary>
<div class="course-accordion-content">
<p>Mission Control gives Caitlyn one coordinate. Just one. No complete route, no reliable count of worlds, and certainly no promise that the next world will be conveniently next door.</p>
<p>An array wants neighbours. This expedition offers scattered destinations. What if each stop remembered only the address of the next one? Then comes the harder question: how do we change the route without losing it?</p>
<h3>Read and follow the story</h3>
<ul><li><a href="/materials/courses/data-structures/materials/notes/Mapping-Uncertainty-One-Link-at-a-Time.pdf">Mapping Uncertainty: One Link at a Time (PDF)</a> — the expanded chapter, from singly linked lists to doubly linked and circular lists, applications, and pointer-tracing quests.</li></ul>
<h3>Revisit the lectures</h3>
<ul>
<li><strong>Beyond the Signal: SLL foundations</strong> · <a href="https://canva.link/4y7cueszxhvnhzl">Canva</a> · <a href="/materials/courses/data-structures/materials/presentations/Beyond-the-Signal-SLL-Foundations.pdf">PDF</a></li>
<li><strong>Rewiring the Route: SLL operations</strong> · <a href="https://canva.link/grvr5phfeaxmvrb">Canva</a> · <a href="/materials/courses/data-structures/materials/presentations/Rewiring-the-Route-SLL-Operations.pdf">PDF</a></li>
</ul>
<section class="lecture-carousel module-lecture-carousel" aria-label="Beyond the Signal: SLL Foundations slides">
<h4>Beyond the Signal: SLL Foundations: let’s look at the first slide together</h4>
<p>Caitlyn has one coordinate and no complete map. Before naming a linked list, let’s ask how she can keep moving without knowing the whole route.</p>
<div class="lecture-carousel-view" data-course-carousel="linked" tabindex="0" aria-label="Beyond the Signal: SLL Foundations slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/linked/slide-01.jpg" alt="Beyond the Signal: SLL Foundations, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>Caitlyn has one coordinate and no complete map. Before naming a linked list, let’s ask how she can keep moving without knowing the whole route.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 36</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
<section class="lecture-carousel module-lecture-carousel" aria-label="Rewiring the Route: SLL Operations slides">
<h4>Rewiring the Route: SLL Operations: let’s look at the first slide together</h4>
<p>The route exists. Now it changes. Make a prediction before we move a link; the old route is remarkably easy to lose.</p>
<div class="lecture-carousel-view" data-course-carousel="rewiring" tabindex="0" aria-label="Rewiring the Route: SLL Operations slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/rewiring/slide-01.jpg" alt="Rewiring the Route: SLL Operations, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>The route exists. Now it changes. Make a prediction before we move a link; the old route is remarkably easy to lose.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 50</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
<p><strong>Before moving on:</strong> insert a node between two others on paper. After the first pointer assignment, can you still reach every node you need? The compiler will not check whether your map still makes sense.</p>
</div>
</details>
<details class="course-accordion" id="module-3">
<summary>Module 3: Stacks and queues — fewer buttons, better decisions</summary>
<div class="course-accordion-content">
<p>Caitlyn has found the replacement core. Home is one button away. Unfortunately, the core still needs work in a world she visited earlier. Going straight home is possible. Finishing the mission is another matter.</p>
<p>Later, her command device offers every linked-list operation imaginable. Should “open the inner hatch” really be allowed to skip the commands before it? A useful structure sometimes earns its keep by refusing to do things.</p>
<h3>Read both stories</h3>
<ul><li><a href="/materials/courses/data-structures/materials/notes/Understanding-Stacks-and-Queues.pdf">The Whole Point of Stacks and Queues (PDF)</a> — Caitlyn’s return journey, the command device, and the difference between an operation’s contract and its implementation.</li></ul>
<h3>Stacks: the way back has an order</h3>
<ul>
<li><strong>The Last Door Home</strong> · <a href="/materials/courses/data-structures/materials/presentations/Stacks-The-Last-Door-Home.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Stacks-The-Last-Door-Home.pptx">PPTX</a></li>
<section class="lecture-carousel module-lecture-carousel" aria-label="The Last Door Home: Stacks slides">
<h4>The Last Door Home: Stacks: let’s look at the first slide together</h4>
<p>Caitlyn has to find her way home and resume the work she left behind. What should she remember, and in what order?</p>
<div class="lecture-carousel-view" data-course-carousel="stack" tabindex="0" aria-label="The Last Door Home: Stacks slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/stack/slide-01.jpg" alt="The Last Door Home: Stacks, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>Caitlyn has to find her way home and resume the work she left behind. What should she remember, and in what order?</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 31</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
<li><strong>Parenthesis matching and balancing: follow the stack trace</strong> · <a href="/materials/courses/data-structures/materials/presentations/Parenthesis-Matching-v6.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Parenthesis-Matching-v6.pptx">PPTX</a></li>
<li><strong>Expression conversion and evaluation: the complete lecture</strong> · <a href="/materials/courses/data-structures/materials/presentations/Expression-Evaluation-Complete.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Expression-Evaluation-Complete.pptx">PPTX</a></li>
<li><strong>Infix to prefix: a more detailed conversion walkthrough</strong> · <a href="/materials/courses/data-structures/materials/presentations/Infix-to-Prefix-Detailed.pptx">PPTX</a></li>
<li><strong>Prefix evaluation: detailed traces, including multi-digit and floating-point values</strong> · <a href="/materials/courses/data-structures/materials/presentations/Prefix-Evaluation-Detailed-v2.pptx">PPTX</a></li>
</ul>
<h3>Queues: one command at a time</h3>
<ul>
<li><strong>Lecture 1: One Command at a Time — the device interface</strong> · <a href="/materials/courses/data-structures/materials/presentations/Queues-1-Device-Interfaces-v3.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Queues-1-Device-Interfaces-v3.pptx">PPTX</a></li>
<section class="lecture-carousel module-lecture-carousel" aria-label="One Command at a Time: Queues slides">
<h4>One Command at a Time: Queues: let’s look at the first slide together</h4>
<p>Caitlyn’s command device offers every operation in the linked-list handbook. Helpful? Let’s see what can go wrong when a command jumps the queue.</p>
<div class="lecture-carousel-view" data-course-carousel="queue" tabindex="0" aria-label="One Command at a Time: Queues slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/queue/slide-01.jpg" alt="One Command at a Time: Queues, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>Caitlyn’s command device offers every operation in the linked-list handbook. Helpful? Let’s see what can go wrong when a command jumps the queue.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 20</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
<li><strong>Lecture 2: Room for the Next Command — linked, linear, multiple, and circular queues</strong> · <a href="/materials/courses/data-structures/materials/presentations/Queues-2-Readable-Code-v2.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Queues-2-Readable-Code-v2.pptx">PPTX</a></li>
<li><strong>Lecture 3: Which End? Which Command? — deques and priority queues</strong> · <a href="/materials/courses/data-structures/materials/presentations/Queues-3-Readable-Code-v2.pdf">PDF</a> · <a href="/materials/courses/data-structures/materials/presentations/Queues-3-Readable-Code-v2.pptx">PPTX</a></li>
<li><a href="/materials/courses/data-structures/materials/code/Queue-Lectures-Code-and-Traces-v2.zip">Queue lectures 2–3: readable C programs and traces (ZIP)</a> — predict a small example before running it, then compare your trace with the program.</li>
</ul>
<p><strong>Before moving on:</strong> explain why “remove any item I like” changes the contract. Then trace a circular queue through the last array position and back to the first. The queue is circular; the array has not bent.</p>
</div>
</details>
<details class="course-accordion" id="module-4">
<summary>Module 4: Trees — which world led us here?</summary>
<div class="course-accordion-content">
<p>Caitlyn’s discovery list remembers that she visited Home, Marine, Sky, and Trench. It does not remember which world led to which. We have kept the names and misplaced the relationships. A surprisingly efficient way to get lost.</p>
<p>Start at Home. Give each newly discovered world a place beneath the world that led to it. Before calling anything a root, child, or subtree, look at the map we have built.</p>
<h3>Begin with the exploration map</h3>
<ul>
<li><strong>Lecture 1: The Map Beyond Home — general trees, binary trees, and their representations</strong> · <a href="/materials/courses/data-structures/materials/presentations/Trees-The-Map-Beyond-Home.pptx">PPTX</a></li>
<section class="lecture-carousel module-lecture-carousel" aria-label="The Map Beyond Home: Trees slides">
<h4>The Map Beyond Home: Trees: let’s look at the first slide together</h4>
<p>Home has one portal. Marine has several. Where should Caitlyn put each new discovery on her map? Let’s build the answer before naming it.</p>
<div class="lecture-carousel-view" data-course-carousel="tree" tabindex="0" aria-label="The Map Beyond Home: Trees slide carousel. Use the left and right arrow keys to change slides.">
<figure><img src="/images/teaching/data-structures/tree/slide-01.jpg" alt="The Map Beyond Home: Trees, slide 1" loading="lazy"><figcaption><strong>Slide 1</strong><span>Home has one portal. Marine has several. Where should Caitlyn put each new discovery on her map? Let’s build the answer before naming it.</span></figcaption></figure>
<div class="lecture-carousel-controls"><button type="button" data-course-previous aria-label="Previous slide">Previous</button><span data-course-counter aria-live="polite">Slide 1 of 21</span><button type="button" data-course-next aria-label="Next slide">Next</button></div>
</div>
</section>
</ul>
<p class="course-update-note"><strong>To be updated:</strong> this is the introductory trees lecture. More course materials for traversals, binary search trees, threaded trees, AVL trees, and red-black trees will be added as they are ready.</p>
<p>The chapter continues in class through traversals, binary search trees, threaded trees, and balancing with AVL and red-black trees. The quick-reference section below has the corresponding codebook chapters for revision after these ideas are understood.</p>
<p><strong>Before moving on:</strong> draw the same tree using array positions and linked nodes. Which relationships are obvious in each representation? Then trace a traversal without looking at its code.</p>
</div>
</details>
<details class="course-accordion" id="module-5">
<summary>Module 5: Graphs — the worlds refuse to stay in a tree</summary>
<div class="course-accordion-content">
<p>Now imagine that a portal connects two worlds already on Caitlyn’s map. Another route returns to a world we have seen before. Our tidy exploration tree no longer describes every connection.</p>
<p>Which links belong to the world itself, and which merely record how we explored it? Keep that distinction close as we study adjacency matrices and lists, DFS, BFS, connected components, and spanning trees.</p>
<p><strong>Work from the classroom discussion:</strong> draw a small graph, choose a starting vertex and a neighbour order, and predict the visit sequence. Trace DFS with a stack or recursive calls, then BFS with a queue. Mark a vertex when it is discovered. What happens if we forget that mark?</p>
<p class="course-update-note"><strong>To be updated:</strong> the graph lecture slides and full learning materials will be added here when they are ready.</p>
</div>
</details>

## The Last Portal

<section class="course-assignment" id="assignments" aria-labelledby="portal-title">
<h3 id="portal-title">The game is broken. That is your invitation.</h3>
<p>Caitlyn would very much like to get home. Unfortunately, remembering a move, following a route, and repairing the right links now depend on your C code.</p>
<p>Play the reference, notice what fails in the puzzle, and ask which data-structure rule has been broken. Then diagnose, repair, and test it. A screenshot of the finished reference is not a repaired program. Caitlyn appreciates the enthusiasm, though.</p>
<p><a class="course-primary-link" href="https://github.com/lijomjose/the-last-portal-assignment">Open The Last Portal assignment on GitHub</a></p>
<ul>
<li><a href="https://github.com/lijomjose/the-last-portal-assignment/releases/latest">Assignment downloads and release files</a></li>
<li><a href="https://github.com/lijomjose/the-last-portal-assignment/blob/main/Assignment_Handout.pdf">Read the assignment handout</a></li>
<li><a href="https://github.com/lijomjose/the-last-portal-assignment/blob/main/MACOS_README.md">macOS setup instructions</a></li>
</ul>
<p>Extract the assignment pack and begin with <code>START_HERE.txt</code>. Follow the handout for the work to submit and the course portal for the deadline and submission link.</p>
<p>Get help understanding a concept or a tool, but do the diagnosis, implementation, and testing yourself. Do not ask an LLM to generate the repairs or solve the controllers for you.</p>
</section>

## Quick reference, after the journey

<section class="course-reference" id="quick-reference" aria-labelledby="reference-title">
<h3 id="reference-title">The scroll cannot do the journey for you.</h3>
<p><strong>The cheatsheet and codebook are for quick reference only. Do not use them as learning material.</strong></p>
<p>Reading a finished explanation or implementation before you have struggled with the question spoils the very thing this course is trying to build: learning through intuition. Begin with the stories, classroom discussions, predictions, and your own traces. Try writing the program yourself. Only then open these references to recall an idea or check a detail.</p>
<ul>
<li><a href="/materials/courses/data-structures/materials/notes/Data-Structures-Before-Code.pdf">Cheatsheet: Data Structures Before Code (PDF)</a> — a quick reminder of concepts you have already worked through.</li>
<li><a href="/materials/courses/data-structures/materials/codebook/The-Dragon-Scroll-of-Data-Structures.pdf">The Dragon Scroll of Data Structures (PDF)</a> — the C codebook for checking details after your own attempt.</li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html">Read the codebook in your browser</a> — the same quick-reference role, with a topic index.</li>
<li><a href="/materials/courses/data-structures/materials/codebook/Data-Structures-C-Codebook.zip">Download the codebook and C examples (ZIP)</a> — the book, 41 runnable examples, shared headers, and supporting files. Extract the whole archive and read its README before compiling.</li>
</ul>
<details class="course-reference-index">
<summary>Find a topic you have already studied</summary>
<ul>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter0">1. Pointers, memory, and recursion</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter1">2. Searching and sorting</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter2">3. Strings and sparse matrices</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter3">4. Linked lists and polynomials</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter4">5. Stacks, queues, and applications</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter5">6. Expression conversion and evaluation</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter6">7. Binary trees and binary search trees</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter7">8. AVL trees</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter8">9. Red-black trees</a></li>
<li><a href="/materials/courses/data-structures/materials/codebook/index.html#chapter9">10. Graphs</a></li>
</ul>
</details>
</section>

<p class="course-closing">If you can explain why the next line belongs there before you type it, we are getting somewhere.</p>
</div>
