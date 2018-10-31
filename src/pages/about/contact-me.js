import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';

export default function ContactMePage() {
  return (
    <Layout>
      <Helmet title="Contact Me" />
      <h1>Contact Me</h1>
      <p>Want to get in touch?</p>
      <p>
        Send me a DM on <a href="https://twitter.com/hswolff">Twitter</a> or use
        the form below.
      </p>
      <form name="contact" method="POST" netlify>
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  );
}
