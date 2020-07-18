var menu = new TimelineMax({ paused:true, reversed: true});
menu
  .to("div:nth-child(2)", 0.25, {
    opacity: 0,
    ease: Power2.easeInOut
  })
  .to(
    "div:nth-child(1)",
    0.5,
    {
      rotation: -45,
      ease: Power2.easeInOut
    },
    "<"
  )
  .to(
    "div:nth-child(3)",
    0.5,
    {
      rotation:45,
      ease: Power2.easeInOut
    },
    "<"
  )
  .fromTo(
    "main-nav",
    0.25,
    {
      display:"none",
      width:"0"
    },
    {
      display:"grid",
      width:"100vw"
    },
    "-=.25"
  )
  .fromTo(
    "li",
    1,
    {
      opacity: 0,
      scale: 7
    },
    {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut,
      stagger: 0.2
    }
  );
  function navMenu () {
    menu.reversed() ? menu.play() : menu.reverse();
  }
