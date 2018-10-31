import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

export default function ProjectsIndexPage() {
  return (
    <Layout>
      <Helmet title="Projects" />
      <h1>Projects</h1>
      <p>
        I like to keep myself busy, and to make sure I never have a moment to
        rest I work on a handful of projects.
      </p>
      <h2>
        <a href="https://www.youtube.com/user/hswolff">YouTube</a>
      </h2>
      <p>
        Right now I&apos;m focusing on growing my collection of{' '}
        <a href="https://www.youtube.com/user/hswolff">YouTube</a> videos. I
        keep it updated weekly, posting a new video every Monday morning.
      </p>
      <p>
        Most of the content is about JavaScript, unsurprisingly. I strongly
        believe that any educational video should show both the code and the
        instructor. Having both in view provides a user with more learning cues,
        resulting in a higher chance of learning what is being taught.
      </p>

      <h2>
        <a href="https://theconsolelog.com/">Podcast</a>
      </h2>
      <p>
        I also created a podcast called{' '}
        <a href="https://theconsolelog.com/">The Console Log</a>. It&apos;s a
        weekly news show about...you guessed it, JavaScript!
      </p>
      <p>
        Every week my co-hosts and I gather around and talk about the latest
        news items from the past week. We talk about what they are, what their
        impact is, and what knowledge you can take back to your daily job.
      </p>

      <h2>
        <a href="https://github.com/hswolff">Open Source</a>
      </h2>
      <p>
        I also love creating open source software on{' '}
        <a href="https://github.com/hswolff">GitHub</a>. You can click through
        to see some projects I&apos;e created. Hopefully they may be of use to
        you!
      </p>
    </Layout>
  );
}
