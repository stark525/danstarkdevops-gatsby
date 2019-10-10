import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Let's Connect!</h2>
      <p>
        The best way to reach me is via e-mail. I'll get back to you almost 
        always the same day. I'm excited to learn about your project. I'll
        work hard to deliver metrics-driven business value.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Location</dt>
        <dd>Ambler &bull; Philadelphia Suburbs, PA &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="danstarkdevops@gmail.com">danstarkdevops@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/danstarkdevops"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.quora.com/profile/Dan-Stark-21" className="icon fa-quora alt">
            <span className="label">Quora</span>
          </a>
        </li>
        <li>
          <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=4&t=c&d=2018-11-26&ci=AWS00375547" className="icon fa-amazon alt">
            <span className="label">AWS</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/stark525" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Dan Stark DevOps LLC. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
