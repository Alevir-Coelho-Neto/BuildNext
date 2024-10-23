new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  animationDuration: 1000,
  breakpoints: {
    1300: {
      perView: 2,
    },
    1000: {
      perView: 1,
    },
  },
}).mount();