import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderAboutMe from '../components/HeaderAboutMe'
import pic04 from '../assets/images/learnmore.jpg'

class AboutMe extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="What is DevOps to me" />
        <AboutMe />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>What is DevOps to me?</h2>
            <p>Many people say DevOps is a culture, not a position. I agree to an extent.</p>
            <p>Similar to Agile, it's most important to find a way of working where everyone feels productive, objectives are met, without compromising scalability or security.</p>
            <h2>Communication is important</h2>
            <p>I have always been passionate about technology, but also working with people. I have a Master's degree in School and Community counseling. It's critical to share what I know, through documentation and pairing with your team if possible. As this is a moonlighting position, there are some hurdles with asynchronous communication. I clearly and frequently update my progress and prioritize getting tasks "over the line."</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default AboutMe
