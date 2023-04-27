import React from "react";
import {
  CardBody,
  CardGroup,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  Button,
} from "reactstrap";
import logo from "../assets/brewmate-high-resolution-logo-color-on-transparent-background.png";
import aaron from "../assets/aaron.png";
import xavier from "../assets/xavier.png";
import joey from "../assets/joey.png";
import john from "../assets/john.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const Home = () => {
  return (
    <>
      <div className="home-content">
        <article className="scroller">
          <section className="welcome-section">
            <img src={logo} className="logo" />
            <h1>Welcome to Brewmate</h1>
            <h3>You are one like away from finding more beers you enjoy</h3>
          </section>
          <section className="app-works">
            <h1>How Our App Works</h1>
            <h3>
              In order to get the most out of Brewmate, we recommend signing up
              and creating a profile. There, you can set your preferences for
              your favorite beers. After your preferences are set, you can look
              through our beer index and "like" any particular beer you are
              interested in. Your selections will then be used to recommend
              beers of similar styles and/or ABV content. The more you use the
              sight, the better recommendations will be presented to you!
            </h3>
          </section>
          <section className="about-us">            
            <h1>About us</h1>
            <CardGroup>              
              <Card>
                <CardImg alt="Card image cap" src={aaron} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">Aaron Criner</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Product Manager
                  </CardSubtitle>
                  <CardText>
                    Aaron is from Oceanside, California, and enjoys going for a
                    long drive, cooking, and coding something new.
                  </CardText>
                  <IconButton aria-label="github">
                  <GitHubIcon href="https://github.com/s8acrine" target="_blank" />
                  </IconButton>
                </CardBody>
              </Card>
              <Card>
                <CardImg alt="Card image cap" src={xavier} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">Xavier Barker</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Project Manager
                  </CardSubtitle>
                  <CardText>
                    From Detroit, MI, Xavier likes to study new technology,
                    working on side projects, listening to music, anime and
                    practice martial arts.
                  </CardText>
                </CardBody>
                <Button href="https://github.com/XavierB91" target="_blank">
                  GitHub Profile
                </Button>
              </Card>
              <Card>
                <CardImg alt="Card image cap" src={joey} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">Joey Alexander</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Tech Lead
                  </CardSubtitle>
                  <CardText>
                    From Orange County, CA, Joey likes to participate in
                    triathlons and paintballing.
                  </CardText>
                  <Button
                    href="https://github.com/joeyalexander127"
                    target="_blank"
                  >
                    GitHub Profile
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg alt="Card image cap" src={john} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">John Rucker</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Design Lead
                  </CardSubtitle>
                  <CardText>
                    Hailing from St. Louis, Missouri, John loves baking,
                    listening to audiobooks, and traveling.
                  </CardText>
                  <Button href="https://github.com/johnrucker4" target="_blank">
                    GitHub Profile
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </section>
          <section className="contact-us">
            Contact us
            <br />
            <Button href="https://github.com/TheFourHorseman" target="_blank">
              The Four Horsemen GitHub
            </Button>
            <br />
            Linked In
            <br />
            <Button
              href="https://www.linkedin.com/in/aaron-criner/"
              target="_blank"
            >
              Aaron Criner
            </Button>
            <Button
              href="https://www.linkedin.com/in/xavier-barker183/"
              target="_blank"
            >
              Xavier Barker
            </Button>
            <Button
              href="https://www.linkedin.com/in/joseph-alexander-6a0a41158/"
              target="_blank"
            >
              Joey Alexander
            </Button>
            <Button
              href="https://www.linkedin.com/in/johnrucker4/"
              target="_blank"
            >
              John Rucker
            </Button>
          </section>
        </article>
      </div>
    </>
  );
};

export default Home;
