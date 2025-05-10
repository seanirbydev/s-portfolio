import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solera from "../../Assets/Projects/solera.jpg";
import bloomfilter from "../../Assets/Projects/bloomfilter.jpg";
import offbeat from "../../Assets/Projects/offbeat.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on before.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solera}
              isBlog={false}
              title="Solera"
              description="Solera is a pioneering mobility risk intelligence provider leveraging AI and machine learning to enhance road safety. By analyzing vast amounts of smartphone sensor data, Solera translates behaviors like speeding and phone usage into actionable insights. Their innovative approach includes incentivizing safer driving through personalized coaching experiences, empowering drivers to earn discounts on auto insurance and contributing significantly to their mission of making roads safer worldwide. Contributed to the website's animation areas, enriching the user experience with captivating visual elements, aligning with Solera's mission to enhance road safety."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloomfilter}
              isBlog={false}
              title="Bloomfilter"
              description="Bloomfilter is a pioneering process mining tool specifically tailored for the software development lifecycle. Unlike typical developer productivity tools, it focuses on objective analysis, bridging the gap between product teams and business stakeholders. By providing clear insights and eliminating guesswork, Bloomfilter empowers teams to streamline their processes, accurately predict project timelines, and enhance software delivery."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={offbeat}
              isBlog={false}
              title="Offbeat"
              description="Offbeat is the platform where L&D professionals gather to accelerate their career growth through practice and knowledge sharing. Learn together with your peers through weekly sessions, async conversations, mentors, and cohort-based programs. You finally get to focus on your own learning journey. Learn together with other professionals like you and accelerate your career."
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
