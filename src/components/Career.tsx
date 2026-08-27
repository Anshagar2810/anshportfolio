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
                <h4>Networking Automation Intern</h4>
                <h5>Airtel</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Architected a Django portal to automate CI activation workflows, reducing request TAT processing time by 45%. Migrated backend application databases from MySQL to PostgreSQL for 10,000+ records with zero downtime.
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
              Deployed an AI customer support chatbot using Gradio and Ollama (Mistral 7B), achieving 92% automated query resolution accuracy and reducing manual ticket volume by 35%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>IBM Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Analyzed 50,000+ telecom CDRs for Wangiri call fraud patterns. Developed predictive ML models to classify high-risk calling anomalies with 94% precision, boosting fraud detection accuracy by 18%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
