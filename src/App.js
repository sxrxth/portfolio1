import "./App.css";
import { useEffect, useState } from "react";
import bmi from "./Components/bmi.png";
import game from "./Components/game.png";
import unsplash from "./Components/unsplash.png";
import zoro from "./Components/zoro.png";
import todo from "./Components/todo.png"


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div class="App">
      <div>
        <div>
          <nav id="home"
            class="navbar navbar-expand-lg w-100 p-0"
            style={{
              backgroundColor: "#610094",
              position: "fixed",
              zIndex: "1",
            }}
          >
            <div class="container-fluid">
              <a
                class="navbar-brand text-light "
                href="#"
                style={{
                  fontFamily: "Courier New,monospace",
                  fontSize: "20px",
                  fontWeight:"500",
                  margin:"5px"
                  // textDecoration:" white wavy underline px"
                }}
              >
                SARATH
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
               
                  <li class="nav-item">
                    <a
                      class="nav-link text-light"
                      href="#about"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-light"
                      href="#projects"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active text-light"
                      aria-current="page"
                      href="#footer"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Contact
                    </a>
                  </li>
                  
                  <div class="form-check form-switch" style={{padding:"0px"}}>
                    <input
                      class="form-check-input"onChange={() => setDarkMode(!darkMode)}
                      style={{ scale: "1.5", backgroundColor: "#700B97" , margin:"10px 20px 10px 20px", position:"relative"}}
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <i class= {darkMode ? "hidden" : "fa-regular fa-moon text-light moon" } ></i>
                     <i class={darkMode ? "fa-regular fa-sun text-light sun" : "hidden" } ></i>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div  className={darkMode ? "about a1" : "about a1-white" }>

          <div style={{ marginBottom: "8%" }}>
            <h3 className={darkMode ? "text-white" : "text-dark" }
              style={{  fontFamily: "'Cutive Mono', monospace" }}
            >
              Hello, I am{" "}
              <span
                style={{
                  color: "#B931FC",
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Sarath
              </span>
            </h3>
            <h1 className={darkMode ? "text-white" : "text-dark" }
              style={{
                color: "white",
                fontFamily: "'Cutive Mono', monospace",
                fontWeight: "600",
                fontSize: "40px",
              }}
            >
              A professional full-stack developer.
            </h1>
            <div>
              <button className=" bttonn  me-4 mt-4" > <a
                      class="nav-link active"
                      aria-current="page"
                      href="#footer"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >Hire me</a></button>
                  
              <a href="https://drive.google.com/drive/folders/13N6MLGBUfJafU8iR_HSMBqceQHXVP2x5" style={{textDecoration:"none"}} className="bttonn  me-4 mt-4">View CV</a>
            </div>
          </div>
          <div style={{ marginBottom: "9%" }}>
            <img  
              className="imgg"
              
              // src={meh}
              src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
              alt="logo"
            />
          </div>
        </div>

        <div className={`about2 a2`}>
          <div
            className="glass"
            id="about"
            style={{
              width: "100%",
              height: "900px",
              textAlign: "center",
              paddingTop: "12.5%",
              color: "white",
            }}
          >
            <div  style={{}}>
              <p className={darkMode ? "text-white fw-semi-bold" : "text-dark fw-semi-bold" }
                style={{
                  color: "white",
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: "15px",
                }}
              >
                Get To Know More
              </p>
              <h1 className={darkMode ? "text-white" : "text-dark" }
                style={{
                  color: "white",
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: "50px",
                }}
              >
                About Me
              </h1>
              <p
              className={darkMode ? "text-white abt-p w-100 " : "text-dark abt-p w-100 " }
             
                style={{ paddingLeft: "50px", paddingRight: "50px" }}
              >
                I am a passionate and results-driven full-stack web developer
                with a strong foundation in both front-end and back-end
                technologies. With a keen eye for detail and a commitment to
                delivering high-quality, user-friendly web solutions, I have
                successfully completed numerous projects, showcasing my
                expertise in HTML, CSS, JavaScript, and a variety of back-end
                languages and frameworks.
              </p>
            </div>
            <div
              className="ins-about fw-semi-bold"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <div className={darkMode ? "glass glass1 " : " glass glass1-white " }>
                <i className="fa-solid fa-award fa-2xl mb-4 icon"></i>
                <h4>Experience</h4>
                <p>1+ years Frontend Development</p>
              </div>
              <div className={darkMode ? "glass glass1 " : " glass glass1-white " }>
                <i class=" icon fa-solid fa-laptop-code fa-2xl  mb-4 "></i>
                <h4>Education</h4>
                <p>B.C.A Bachelors Degree</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="ins-about fw-semi-bold text-white"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          <div id="projects"className={darkMode ? "glass projects" : "glass projects-white" }>
            <div className="d-flex flex-row align-item-center justify-content-center mb-1">
              <h2  className={darkMode ? "text-white fw-semi-bold" : "text-dark fw-semi-bold" } >  PROJECTS</h2>
            </div>

            <div className="d-flex flex-row align-item-center justify-content-center flex-wrap">
              <div className="prj-img">
                <img src={unsplash} alt="unsplash" />
                <div>
                  <button className="bankai bttoonn">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://unsplash-clone-sarath.netlify.app/  "
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
              <div className="  prj-img">
                <img src={game} alt="game" />
                <div>
                  <button className="bankai bttoonn">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://tictactoe-sarath.netlify.app/"
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
                
              </div>
            </div>
            <div className="d-flex flex-row align-item-center justify-content-center flex-wrap">
              <div className="  prj-img">
                <img src={zoro} alt="zoro" />
                <div>
                  <button className="bankai bttoonn">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://zoroh.netlify.app/"
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
              
              <div className="  prj-img">
                <img src={todo} alt="todo" />
                <div>
                  <button className="bankai bttoonn">
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://to-do-sarath-app.netlify.app/"
                    >
                      Live Demo
                    </a>{" "}
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="gitdiv">
              <button className=" bttonnn">
                      {" "}
                      <a
                        style={{ textDecoration: "none",color:"black" }}
                        href="https://github.com/sxrxth"
                      >
                        Git-hub
                      </a>{" "}
                    </button>
                    {/* <button className=" bttonnn">
                      {" "}
                      <a
                        style={{ textDecoration: "none",color:"black"}}
                        href="https://sarath-bmicalculator.netlify.app/"
                      >
                        Netlify
                      </a>{" "}
                    </button> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#700B97" }}
        >
          <div className="container pt-4 " id="footer">
            <section className="mb-4">
            
             
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1 text-white "
                href="mailto:sarathsabu76@gmail.com"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google huha"></i>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1 text-white "
                href="https://www.instagram.com/sxrxth_/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram huha"></i>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1 text-white "
                href="https://www.linkedin.com/in/sarath-sabu-1a260027b/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin huha"></i>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1 text-white "
                href="https://github.com/sxrxth"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github huha"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center text-dark p-3 text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright: SARATH
            
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
