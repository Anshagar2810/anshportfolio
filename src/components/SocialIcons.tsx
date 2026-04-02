import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanupFns: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animationFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      elem.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanupFns.push(() => {
        elem.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://www.linkedin.com/in/anshagar2810" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/anshagar281004" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://github.com/Anshagar2810" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://leetcode.com/u/anshagar2810/" target="_blank">
            <SiLeetcode />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/images/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Ansh_Agarwal_Resume.pdf"
        onClick={(e) => {
          e.stopPropagation();
        }}
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
