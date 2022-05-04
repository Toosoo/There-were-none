gsap.registerPlugin(DrawSVGPlugin)
gsap.set(".cursor", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});

let tl = gsap.timeline()
tl.from(".BP",{
  duration:2,
  rotate:-10,
  stagger:.2,
  opacity:0,
  y:-50,
  delay:50
})
  .from(".line1",{
  drawSVG:0,
  duration:4,
  ease:"linear",
  immediateRender:true
},"<")
  .fromTo(
  ".line2",
  { drawSVG: "100% 100%", immediateRender: true },
  { drawSVG: "0% 100% ", duration: 5, ease: "linear" },"<")