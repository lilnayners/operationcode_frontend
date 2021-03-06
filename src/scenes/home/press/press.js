import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import PressVideos from './pressVideos/pressVideos';
import PressPhotos from './pressPhotos/pressPhotos';
import styles from './press.css';

class Press extends Component {
  render() {
    return (
      <div>
        <Section title="Press" theme="white">
          <p>
            This page is designed to make a journalist&apos;s job easy in writing, blogging, or documenting Operation Code. Below you will find targeted information corresponding to common representative visitors, videos, photos, and our branding guidelines. Eventually this page will also contain a list of press releases. If you are looking for our mission statement or our values, please <Link to="/about">go to the About page</Link>. On other pages of our website you can <Link to="/faq">see answers to frequently asked questions</Link>, <Link to="/history">view our history</Link>, and <Link to="/team">learn more about our staff</Link>. Lastly, if you are seeking information not located on our website, please do not hesitate to email us at <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>.
          </p>

          <br />

          <div className={styles.flexContainer}>
            <div className={styles.column}>
              <h4>Code Schools</h4>
              <p>
                Firstly, if your code school&apos;s information is not listed on our directory, please contact us at <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>. If your school has recently partnered with our organization and is seeking information to write about it a blog post, we recommend joining our Slack team to receive personal anecdotes from our members, many of whom have attended various coding schools - perhaps yours!
              </p>
            </div>

            <div className={styles.column}>
              <h4>Partnered Organizations</h4>
              <p>
                We have long-standing, productive partnerships with some amazing companies, and yours could be one of them! Organizations the put our members and our open source work on a pedastal, can look forward to receive social media blasts and the appreciate of America&apos;s military veterans. If you are thinking about a partnership with Operation Code, but are unsure of what to offer our members, <a href="mailto:staff@operationcode.org">let&apos;s talk</a>. If you&apos;re seeking information to display in announcing the partnership, please see below!
              </p>
            </div>

            <div className={styles.column}>
              <h4>Media Outlets</h4>
              <p>
                The staff at Operation Code thank you for taking your time to represent us in your work. If your piece has a specific theme or target, and you&apos;d like some custom contributions, please join our organization to receive a Slack team invite. There you&apos;ll likely find many Operation Code members willing and able to offer personal anecdotes and first-hand interviews!
              </p>
            </div>
          </div>
        </Section>

        <Section title="Videos">
          <PressVideos />
        </Section>

        <Section title="Photos" theme="white">
          <PressPhotos />
        </Section>

        <Section title="Branding">
          <br />
          <a href="https://ocbranding.squarespace.com/" className={styles.brandingLink} target="_blank" rel="noopener noreferrer">CLICK HERE</a>
        </Section>
      </div>
    );
  }
}

export default Press;
