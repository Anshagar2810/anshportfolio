import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Smart Ward Early Warning System (IoT + AI)",
    category: "IoT & Healthcare Monitoring",
    description:
      "Engineered a real-time IoT patient vitals monitoring system tracking metrics with <2s latency. Implemented on-device risk analysis and automated WhatsApp alerts via Twilio, accelerating clinical response by 50%.",
    software: "Node.js, MongoDB, ThingSpeak API, Twilio, HTML, JavaScript",
    hardware: "ESP8266 Microcontroller, DS18B20 Temp & Oximeter Sensors",
    images: ["/images/ews-1.png", "/images/ews-2.png"],
    link: "https://webtech-project-ae73.vercel.app",
  },
  {
    title: "AI-Based Knee Osteoarthritis Detection System",
    category: "Deep Learning & Medical Imaging",
    description:
      "Built a medical imaging classifier using Xception and MobileNet CNNs, achieving 93% accuracy across knee X-ray stages. Automated image preprocessing and diagnostic report generation, reducing radiologist evaluation time by 60%.",
    software: "Python, Deep Learning, Xception, MobileNet, TensorFlow, React, Next.js",
    hardware: "N/A",
    images: ["/images/arthro-1.png", "/images/arthro-2.png"],
    link: "https://kneearthritisdetection.vercel.app",
  },
  {
    title: "Multi-Mode Smart Robotic Car",
    category: "IoT Robotics & Gesture Control",
    description:
      "Constructed an IoT robotic vehicle supporting tri-mode control via hand gestures, Bluetooth, and voice commands. Integrated sensor arrays and wireless modules for seamless low-latency (<50ms) mode switching.",
    software: "Arduino IDE (C/C++), Bluetooth Protocol",
    hardware: "Arduino Nano, Arduino Uno, Bluetooth Module, Ultrasonic & Gesture Sensors",
    images: ["/images/car.png"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <div className="tools-group">
                            <span className="tools-label">Software Tech</span>
                            <p>{project.software}</p>
                          </div>
                          <div className="tools-group">
                            <span className="tools-label">Hardware Tech</span>
                            <p>{project.hardware}</p>
                          </div>
                        </div>
                        {project.link && (
                          <div className="project-link-wrapper">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-website-btn">
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    {project.images && project.images.length > 0 && (
                      <div className="carousel-image-wrapper">
                        <div className="project-images-grid">
                          {project.images.map((img, i) => (
                            <WorkImage key={i} image={img} alt={project.title} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
