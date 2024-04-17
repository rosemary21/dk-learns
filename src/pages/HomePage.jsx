import React from "react";
import Layout from "../components/home/Layout";
import background from "../assets/background.jpg";
// import background from "../assets/hero-bg.png";

import '../styles/main.css'

import courseImg1 from "../assets/course-img1.png";
import courseImg2 from "../assets/course-img2.png";
import courseImg3 from "../assets/course-img3.png";
import courseImg4 from "../assets/course-img4.png";
import courseImg5 from "../assets/course-img5.png";
import courseImg6 from "../assets/course-img6.png";
import courseImg7 from "../assets/course-img7.png";
import courseImg8 from "../assets/course-img8.png";
import courseImg9 from "../assets/course-img9.png";
import courseImg10 from "../assets/course-img10.png";


import quote from "../assets/quote.svg.png"

import play from "../assets/play.png"
import WA from "../assets/WA.png"
import RF from "../assets/RF.png"
import PW from "../assets/PW.png"


import nasdaq from "../assets/nasdaq-dark.svg.png";
import volkswagen from "../assets/volkswagen-dark.svg.png";
import boxDark from "../assets/box-dark.svg.png";
import netapp from "../assets/netapp-dark.svg.png";
import eventbrite from "../assets/eventbrite-dark.svg.png";
import tcs from "../assets/tcs-dark.svg.png"
import instructorImg from "../assets/instructor-1x-v3.jpg.png"
import { FaStar } from "react-icons/fa";

// import tcs from "../assets/tcs-dark.svg.png";
// import img from "../assets/background.jpg";
// import img from "../assets/background.jpg";


const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <img
            src={background} 
            alt="Background Image"
            className="background-image"
          />
          <div className="text-overlay">
            <h1>Get the best Courses Here</h1><br />
            <p>We have courses covering a whole lot of fields that you can try out</p>
          </div>
        </div>

        {/*  Courses Section */}
    <section class="courses-sec">
      <h1>A broad selection of courses</h1>
      <p>
        Choose from 213,000 online video courses with new additions published
        every month
      </p>
      <div class="course-links">
        <a href="#">Python</a>
        <a href="#">Excel</a>
        <a href="#">Web Development</a>
        <a href="#">JavaScript</a>
        <a href="#">Data Science</a>
        <a href="#">AWS Certification</a>
        <a href="#">Drawing</a>
      </div>

      <div class="career-opportunities">
        <div>
          <h2>Expand your career opportunities with Python</h2>
          <p>
            Take one of DK Learning’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to both beginners and advanced developers alike.
          </p>
          <button class="career-btn">Explore Python</button>
        </div>

        <div class="explore-python">
          <div>
            <img src={courseImg1} alt="" />
            <h3>Learn Python: The Complete Python Programming Course</h3>
            <h4>Avinash Jain, The Codex</h4>
            <p>
              4.3 <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star-half-o"></i> <span>(4,253)</span>
            </p>
            <h3>$94.99</h3>
          </div>

          <div>
            <img src={courseImg2} alt="" />
            <h3>Learning Python for Data Analysis and Visualization Ver 1</h3>
            <h4>Jose Portilla</h4>
            <p>
              4.3 <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star-half-o"></i> <span>(18,586)</span>
            </p>
            <h3>$119.99</h3>
            <button>Bestseller</button>
          </div>

          <div>
            <img src={courseImg3} alt="" />
            <h3>Python for Beginners - Learn Programming from scratch</h3>
            <h4>Edwin Diaz, Coding Faculty Solutions</h4>
            <p>
              4.3 <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star-half-o"></i> <span>(2,350)</span>
            </p>
            <h3>$84.99</h3>
          </div>

          <div>
            <img src={courseImg4} alt="" />
            <h3>Learn Python: Python for Beginners</h3>
            <h4>Abrar Hussain</h4>
            <p>
              4.3 <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star-half-o"></i> <span>(2,822)</span>
            </p>
            <h3>$29.99</h3>
          </div>

          <div>
            <img src={courseImg5} alt="" />
            <h3>Python From Scratch & Selenium WebDriver QA</h3>
            <h4>Admas Kinfu</h4>
            <p>
              4.3 <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star-half-o"></i> <span>(2,323)</span>
            </p>
            <h3>$109.99</h3>
            <button>Bestseller</button>
          </div>
        </div>
      </div>
    </section>

    {/* Goals Section */}
    <section class="goals">
      <h2>How learners like you are achieving their goals</h2>
      <div class="container">
        <div class="box">
          <img src={quote} alt="" className="quoteImg" />
          <p>
            I am proud to say that after a few months of taking this course...I
            passed my exam and am now an AWS Certified Cloud Practitioner! This
            content was exactly what the CCP exam covered.
          </p>
          <div class="learners"><img src={WA} alt="user" style={{ width: '30px'}} />Will A</div>
          <hr />
          <div class="play">
            <img src={play} alt="#" style={{ width: '30px'}} /><a href="#"
              >[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a
            >
          </div>
        </div>

        <div class="box">
          <img src={quote} alt="" className="quoteImg" />
          <p>
            This course helped me freshen up on my product manager skills and
            land a job at Facebook! Thanks guys :)
          </p>
          <br />
          <br />
          <div class="learners"><img src={RF} alt="#" style={{ width: '30px'}} />Ron F</div>
          <hr />
          <div class="play">
            <img src={play} alt="#" style={{ width: '30px'}} /><a href="#"
              >Become a Product Manager | Learn the Skills & Get the Job</a
            >
          </div>
        </div>

        <div class="box">
          <img src={quote} alt="" className="quoteImg" />
          <p>
            One of the best courses on management and leadership I have come
            across so far. The advice is practical, and examples highly
            relatable. Would help anyone become a better manager.
          </p>
          <div class="learners"><img src={PW} alt="#" style={{ width: '30px'}} />Phillip W</div>
          <hr />
          <div class="play">
            <img src={play} alt="#" style={{ width: '30px'}} /><a href="#"
              >Leadership: Practical Leadership Skills</a
            >
          </div>
        </div>
      </div>
    </section>

    {/*  Viewing Section */}
    <section class="viewing">
      <h2>Students are viewing</h2>
      <div class="explore-python views">
        <div>
          <img src={courseImg6} alt="" />
          <h3>The Complete 2023 Web Development Bootcamp</h3>
          <h4>Dr. Angela Yu</h4>
          <p>
            4.3 <FaStar/><FaStar/><FaStar/><FaStar/>  <span>(247,955)</span>
          </p>
          <h3>$119.99</h3>
          <button>Bestseller</button>
        </div>

        <div>
          <img src={courseImg7} alt="" />
          <h3>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h3>
          <h4>Dr. Angela Yu</h4>
          <p>
            4.3 <FaStar/><FaStar/><FaStar/><FaStar/> <span>(162,432)</span>
          </p>
          <h3>$84.99</h3>
          <button>Bestseller</button>
        </div>

        <div>
          <img src={courseImg8} alt="" />
          <h3>The Complete JavaScript Course 2023: From Zero to Expert!</h3>
          <h4>Jonas Schmedtmann</h4>
          <p>
            4.3 <FaStar/><FaStar/><FaStar/><FaStar/> <span>(161,454)</span>
          </p>
          <h3>$149.99</h3>
          <button>Bestseller</button>
        </div>

        <div>
          <img src={courseImg9} alt="" />
          <h3>React - The Complete Guide (incl Hooks, React Router, Redux)</h3>
          <h4>Academind by Maximilian Schwarzmüller,</h4>
          <p>
            4.3 <FaStar/><FaStar/><FaStar/><FaStar/> <span>(171,292)</span>
          </p>
          <h3>$129.99</h3>
          <button>Bestseller</button>
        </div>

        <div>
          <img src={courseImg10} alt="" />
          <h3>Ultimate AWS Certified Solutions Architect Associate</h3>
          <h4>Stephane Maarek | AWS Certified Cloud</h4>
          <p>
            4.3 <FaStar/><FaStar/><FaStar/><FaStar/><span>(160,038)</span>
          </p>
          <h3>$84.99</h3>
          <button>Bestseller</button>
        </div>
      </div>
    </section>

    {/* Featured Section */}
    <section class="featured">
      <h2>Featured topics by category</h2>
      <div class="featured-container">
        <div>
          <h3>Development</h3>
          <a href="#">Python</a>
          <p>36,354,994 students</p>
          <a href="#">Web Development</a>
          <p>11,415,615 students</p>
          <a href="#">Machine Learning</a>
          <p>7,070,015 students</p>
          <button>Explore more topics</button>
        </div>

        <div>
          <h3>Business</h3>
          <a href="#">Financial Analysis</a>
          <p>1,195,282 students</p>
          <a href="#">SQL</a>
          <p>5,977,561 students</p>
          <a href="#">PMP</a>
          <p>1,733,398 students</p>
        </div>

        <div>
          <h3>IT and Software</h3>
          <a href="#">AWS Certification</a>
          <p>6,078,244 students</p>
          <a href="#">Ethical Hacking</a>
          <p>10,931,066 students</p>
          <a href="#">Cyber Security</a>
          <p>3,998,037 students</p>
        </div>

        <div>
          <h3>Design</h3>
          <a href="#">Photoshop</a>
          <p>10,909,736 students</p>
          <a href="#">Graphic Design</a>
          <p>3,381,052 students</p>
          <a href="#">Drawing</a>
          <p>2,410,849 students</p>
        </div>
      </div>
    </section>

    {/* Trust Section*/}
    <section class="trust">
      <div class="trust-up">
        <h2>Trusted by over 13,400 great teams</h2>
        <p>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
      </div>
      <div class="trust-company">
        <img src={nasdaq} alt="" />
        <img src={volkswagen} alt="" />
        <img src={boxDark} alt="" />
        <img src={netapp} alt="" />
        <img src={eventbrite} alt="" />
        <img src={tcs} alt="" />
      </div>
    </section>

    {/* Instructor Section */}
    <section class="instructor">
      <div class="instructor-img">
        <img src={instructorImg} alt="" />
      </div>

      <div>
        <h2>Become an instructor</h2>
        <p>
          Instructors from around the world teach millions of students on DK Learning.
          We provide the tools and skills to teach what you love.
        </p>
        <button class="black-btn">Start teaching today</button>
      </div>
    </section>

      </Layout>
    </div>
  );
};

export default HomePage;
