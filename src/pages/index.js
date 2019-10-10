import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Dan Stark DevOps Consulting LLC" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi. I'm Dan Stark.</h2>
                </header>
                <p>
                I'm a certified AWS Solutions Architect (Professional) based in Ambler, PA. I moonlight as <b>Dan Stark DevOps Consulting, LLC.</b>
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Capabilities</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-cloud"></span>
                <h3>Cloud-Scale Architecture</h3>
                <p>
                Leverage the latest secure and cost-effective benefits of the cloud.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-check"></span>
                <h3>Safe Deployments</h3>
                <p>
                  I'll work with your team to ensure an effortless release process.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-tachometer"></span>
                <h3>Increase Developer Velocity</h3>
                <p>
                  Reduce development pain points, leading to happier, more productive developers.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>References</h2>
              <p>
                I build relationships based on my work.
              </p>
            </header>
            <p className="main special">
            <i>Dan is great! He jumped right in and took our project from failing to up and running in no time! Not only did he get us off the ground, he then built out a roadmap for us to get the most out of our AWS investment through best practices and automation. In addition to his excellent technical work, Dan shared his knowledge and documented everything making sure that we had what we needed to succeed. After seeing him solve problems and deliver results so fast I started to call him “Super Dan”!</i>
            <br /><b>- Director of Platform Development, FinTech Startup</b>
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>First Steps</h2>
              <ul>
                I only work on projects that are a mutual fit where I can deliver value. I prefer to start with an initial phone or video chat to introduce your company and describe scope of work and budget. Then, I'll provide actionable recommendations for a small fixed price. We'll negotiate a fixed price or hourly rate, as well as finialize scope.
              </ul>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
