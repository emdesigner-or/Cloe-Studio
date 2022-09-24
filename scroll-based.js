
// Background color changes from black to white
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('.s2-wr.projects', {
    backgroundColor: "#ffffff",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('.s2-wr.projects', {
    backgroundColor: "#000000",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('.s2-wr.projects', {
    backgroundColor: "#000000",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('.s2-wr.projects', {
    backgroundColor: "#ffffff",
    duration: 0.2,
  }),
});

// Featured text color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#explore-text', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#explore-text', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#explore-text', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#explore-text', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
});

// Project info text color changes
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-info', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-info', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-info', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-info', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
});

// Project info button color changes
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-btn', {
    color: "hsla(0, 0%, 0%, 0.85)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-btn', {
    color: "hsla(0, 0%, 100%, 0.85)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-btn', {
    color: "hsla(0, 0%, 100%, 0.85)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-btn', {
    color: "hsla(0, 0%, 0%, 0.85)",
    duration: 0.2,
  }),
});

// Project details title color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#projects-details-small-title', {
    color: "hsla(0, 0%, 0%, 0.5)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#projects-details-small-title', {
    color: "hsla(0, 0%, 100%, 0.5)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#projects-details-small-title', {
    color: "hsla(0, 0%, 100%, 0.5)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#projects-details-small-title', {
    color: "hsla(0, 0%, 0%, 0.5)",
    duration: 0.2,
  }),
});

// Project details website color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#projects-details-small-website', {
    color: "hsla(0, 0%, 0%, 0.5)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#projects-details-small-website', {
    color: "hsla(0, 0%, 100%, 0.5)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#projects-details-small-website', {
    color: "hsla(0, 0%, 100%, 0.5)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#projects-details-small-website', {
    color: "hsla(0, 0%, 0%, 0.5)",
    duration: 0.2,
  }),
});

// Project main title color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-m-title', {
    color: "hsla(0, 0%, 0%, 0.85)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-m-title', {
    color: "hsla(0, 0%, 100%, 0.85)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-m-title', {
    color: "hsla(0, 0%, 100%, 0.85)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-m-title', {
    color: "hsla(0, 0%, 0%, 0.85)",
    duration: 0.2,
  }),
});

// Project sub-title color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-s-title', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-s-title', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-s-title', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-s-title', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
});

// Project sub-title dot color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-s-dot', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-s-dot', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-s-dot', {
    color: "hsla(0, 0%, 100%, 0.7)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-s-dot', {
    color: "hsla(0, 0%, 0%, 0.7)",
    duration: 0.2,
  }),
});

// Project lines color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-line, #project-s-line', {
    backgroundColor: "hsla(0, 0%, 0%, 0.25)",
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-line, #project-s-line', {
    backgroundColor: "hsla(0, 0%, 100%, 0.25)",
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-line, #project-s-line', {
    backgroundColor: "hsla(0, 0%, 100%, 0.25)",
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-line, #project-s-line', {
    backgroundColor: "hsla(0, 0%, 0%, 0.25)",
    duration: 0.2,
  }),
});



// Project arrow color change
ScrollTrigger.create({
  trigger: ".s2-wr.projects",
  scroller: ".sections-wr",
  start: "40em 0%",
  end: "center+=200px center",
  scrub: 0.2,
  onEnter: () => gsap.to('#project-arrow', {
    filter: 'invert(0%)',
    duration: 0.2,
  }),
  onLeave: () => gsap.to('#project-arrow', {
    filter: 'invert(100%)',
    duration: 0.2,
  }),
    onLeaveBack: () => gsap.to('#project-arrow', {
    filter: 'invert(100%)',
    duration: 0.2,
  }),
  onEnterBack: () => gsap.to('#project-arrow', {
    filter: 'invert(0%)',
    duration: 0.2,
  }),
});
