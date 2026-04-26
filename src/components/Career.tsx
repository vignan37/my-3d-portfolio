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
                <h4>Software Developer</h4>
                <h5>InvestCloud, Inc. · Bengaluru</h5>
              </div>
              <h3>2024-NOW</h3>
            </div>
            <div className="career-details">
              <p>
                Building and delivering fintech platforms using Angular,
                TypeScript, NgRx, and .NET, focusing on scalable UI architecture
                and performance.
              </p>
              <ul>
                <li>
                  Led end-to-end development of key features across MMS, IMS, and
                  home applications.
                </li>
                <li>
                  Improved user experience by implementing persistent state
                  (filters, sorting) using NgRx and local storage.
                </li>
                <li>
                  Increased test coverage to 95%, reducing production defects.
                </li>
                <li>
                  Built reusable UI components for shared design systems across
                  products.
                </li>
                <li>
                  Mentored developers and conducted code reviews to improve code
                  quality.
                </li>
                <li>
                  Contributed to CI/CD pipelines and automation workflows for
                  faster releases.
                </li>
              </ul>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Allianz Technology · Pune</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <div className="career-details">
              <p>
                Developed and enhanced insurance web applications using Angular,
                TypeScript, RxJS, and Java.
              </p>
              <ul>
                <li>
                  Integrated REST APIs and optimized frontend performance for
                  large datasets.
                </li>
                <li>
                  Increased unit test coverage from 70% to 92%, improving
                  reliability.
                </li>
                <li>
                  Supported deployments via Jenkins and improved release
                  stability.
                </li>
                <li>
                  Collaborated with cross-functional teams in Agile environments.
                </li>
                <li>
                  Delivered UI training sessions and mentored backend developers
                  on Angular best practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
