import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var role1 = new SplitText(".landing-role-1", TextProps);
  var role2 = new SplitText(".landing-role-2", TextProps);
  var role3 = new SplitText(".landing-role-3", TextProps);
  gsap.set([".landing-role-1", ".landing-role-2", ".landing-role-3"], {
    opacity: 1,
  });

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopText3(role1, role2, role3);
}

function LoopText3(TextA: SplitText, TextB: SplitText, TextC: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
  const hold = 1;
  [TextA, TextB, TextC].forEach((T) => {
    tl.fromTo(
      T.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        duration: 0.9,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.06,
      }
    ).to(
      T.chars,
      {
        y: -80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.inOut",
        stagger: 0.06,
      },
      `+=${hold}`
    );
  });
}
