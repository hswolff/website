import React from 'react';
import { color } from '../utils/css';

export default function Newsletter({ className }) {
  return (
    <div
      className={className}
      css={`
        border-width: 1px;
        border-style: solid;
        border-color: ${color.titleLighter};
        padding: 5px 10px;
        border-radius: 4px;
      `}
    >
      <div>
        <p>I have a newsletter! ✍</p>
        <p>
          Subscribe so I can send you updates on new blog posts, videos, and
          anything else that I think you should know!
        </p>
      </div>
      <form
        action="https://tinyletter.com/hswolff"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open(
            'https://tinyletter.com/hswolff',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          );
        }}
      >
        {/* <p>
          <label htmlFor="tlemail">Enter your email address</label>
        </p> */}
        <div
          css={`
            display: flex;
          `}
        >
          <input
            type="text"
            name="email"
            id="tlemail"
            placeholder="Email address"
            css={`
              margin-right: 20px;
            `}
          />
          <input type="hidden" defaultValue={1} name="embed" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
