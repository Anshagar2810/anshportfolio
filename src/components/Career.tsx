import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI ML Intern</h4>
                <h5>IBM Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a model on Wangiri call fraud detection using AI/ML techniques like
              hashing and Python. Optimized the detection algorithm to identify
              suspicious patterns in real-time, significantly reducing false
              positives in telecommunication data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Deep Learning Intern</h4>
                <h5>IBM Pune</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a Customer complaint analyzer chatbot for Vodafone Idea Customers
              using Ollama Mistral 7B and NLP techniques. Implemented automated
              sentiment analysis and category classification to streamline support
              ticket resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
