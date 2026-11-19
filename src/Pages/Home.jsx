import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";
import "./Home.css";
import Footer from "../Components/Footer";
function Home() {
  return (
    
    <>
     
     <main className="home-page">
        <section className="hero-section">

          <div className="hero-content">

            <span className="hero-badge">
              🚀 Free for every young learner
            </span>

            <h1>
              Empowering the Next
              <br />
              Generation of
              <br />
              <span>Software Developers</span>
            </h1>

            <p className="hero-description">
              Learn to code by building real things. Five core
              courses, thousands of students and a community
              that has your back — from your first HTML tag
              to full-stack apps.
            </p>

            <div className="hero-buttons">
              <Link to="/Courses" className="primary-btn">
                📖 Explore Courses
              </Link>

              <Link to="/Register" className="join-link">
                Join Now →
              </Link>
            </div>

          </div>

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Technology and software development"
            />

            <div className="floating-card">
              <span>💻</span>
              <div>
                <h4>Learn by Doing</h4>
                <p>Build real-world projects</p>
              </div>
            </div>

          </div>

        </section>

        <section className="why-section">

          <div className="section-heading">
            <h2>Why Tech for Youth?</h2>
            <p>
              Built by developers who started exactly where you are —
              curious, ambitious and ready to build.
            </p>
          </div>

          <div className="feature-container">

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Project-based learning</h3>
              <p>
                Every track ships with real projects you build,
                break and fix — no passive theory marathons,
                just code you can show off.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Free video tracks</h3>
              <p>
                Curated, full-length video courses for every
                step of your journey — completely free,
                forever, on every device.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">♡</div>
              <h3>Local community support</h3>
              <p>
                Join study groups, hackathons and mentor
                sessions with young developers in your area
                who cheer you on.
              </p>
            </div>

          </div>

        </section>

      
        <section className="cta-section">

          <div className="cta-icon">🚀</div>

          <h2>Your coding journey starts today</h2>

          <p>
            Create a free account, pick your track and start
            building — your first project is one click away.
          </p>

          <div className="cta-buttons">

            <Link to="/Register" className="primary-btn">
              Join Now →
            </Link>

            <Link to="/Courses" className="outline-btn">
              Explore Courses
            </Link>

          </div>

        </section>

      </main>

    
    </>
  );
}

export default Home;