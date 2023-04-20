import React from "react";
import { CardBody, CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Card, Button } from "reactstrap"
import logo from "../assets/brewmate-high-resolution-logo-color-on-transparent-background.png"

const Home = () => {
  return (
    <>
  <div className="home-content">
    <img src={logo}/>
    <section className="welcome-section">
     <h1>Welcome to Brewmate</h1>
     <h3>You are one like away from finding more beers you enjoy</h3>
    </section>
    <section className="app-works">
      <h1>How Are App Works</h1>
      <h3>In order to get the most out of Brewmate, we recommend signing up and creating a profile.  There, you can set your preferences for your favorite beers.  After your preferences are set, you can look through our beer index and "like" any particular beer you are interested in.  Your selections will then be used to recommend beers of similar styles and/or ABV content.  The more you use the sight, the better recommendations will be presented to you!</h3>
    </section>
    <section className="about-us">
     <h1>About us</h1>
     <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C5603AQFQFKUiMnspJA/profile-displayphoto-shrink_200_200/0/1517620494348?e=1687392000&v=beta&t=_86ExRaDlnUnWBXuD_LviS8rFE1xb8ARE64kuZx4meQ"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Aaron Criner
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Product Manager
      </CardSubtitle>
      <CardText>
        Aaron is from Oceanside, California, and enjoys going for a long drive, cooking,  and coding something new.
      </CardText>
      <Button href="https://github.com/s8acrine" target="_blank">
        GitHub Profile
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/D5635AQEVA00ITfw8Jg/profile-framedphoto-shrink_200_200/0/1677016825375?e=1682550000&v=beta&t=HMhJdxX1jQoCDaW6nxN62oukXozuoY0Necu1UQeR324"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Xavier Barker
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Project Manager
      </CardSubtitle>
      <CardText>
      From Detroit, MI, Xavier likes to study new technology, working on side projects, listening to music, anime and practice martial arts.
      </CardText>
      <Button href="https://github.com/XavierB91" target="_blank">
        GitHub Profile
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/D5603AQH2aE8q6tpb7g/profile-displayphoto-shrink_200_200/0/1676400922743?e=1687392000&v=beta&t=THEddanXt2aNnEYK2sWrSOfcFCeZpyuTu0SQS_enENk"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Joey Alexander
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Tech Lead
      </CardSubtitle>
      <CardText>
          From Orange County, CA, Joey likes to participate in
    triathlons and paintballing.
      </CardText>
      <Button href="https://github.com/joeyalexander127" target="_blank">
        GitHub Profile
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/D4E03AQEBWKMLO6BBpQ/profile-displayphoto-shrink_200_200/0/1676492070104?e=1687392000&v=beta&t=eJrTwuQTfmvqeXdSF3Nk9-JHm8n-ayTw3bnNjxZUe84"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        John Rucker
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Design Lead
      </CardSubtitle>
      <CardText>
      Hailing from St. Louis, Missouri, John loves baking, listening to audiobooks, and traveling.
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
      <br/>
      <Button href="https://github.com/TheFourHorseman" target="_blank">
        The Four Horsemen GitHub
      </Button>
      <br/>
      Linked In
      <br/>      
      <Button href="https://www.linkedin.com/in/aaron-criner/" target="_blank">
        Aaron Criner
      </Button>
      <Button href="https://www.linkedin.com/in/xavier-barker183/" target="_blank">
        Xavier Barker
      </Button>
      <Button href="https://www.linkedin.com/in/joseph-alexander-6a0a41158/" target="_blank">
        Joey Alexander
      </Button>
      <Button href="https://www.linkedin.com/in/johnrucker4/" target="_blank">
        John Rucker
      </Button>
    </section>

  </div>
  </>
  )
};

export default Home;
