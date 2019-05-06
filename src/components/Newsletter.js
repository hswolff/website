import React from 'react';
import { color, mq } from '../utils/css';
import { css } from '@emotion/core';

export default function Newsletter({ className }) {
  return (
    <div
      css={[
        css`
          border-width: 1px;
          border-style: solid;
          border-color: ${color.titleLighter};
          padding: 5px 10px;
          border-radius: 4px;
        `,
      ]}
      className={className}
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
        <div
          css={[
            css`
              display: flex;
            `,
            css(
              mq({
                flexDirection: ['row', 'column'],
              })
            ),
          ]}
        >
          <input
            type="text"
            name="email"
            id="tlemail"
            placeholder="Email address"
            css={css`
              margin-right: 20px;
            `}
          />
          <input type="hidden" defaultValue={1} name="embed" />
          <button
            type="submit"
            css={css(
              mq({
                marginTop: [0, '20px'],
              })
            )}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
