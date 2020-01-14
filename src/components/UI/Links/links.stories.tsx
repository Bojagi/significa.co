import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { ArrowLink, Link, NavLink } from './'

storiesOf('UI/Links', module)
  .addDecorator(story => <div style={{ padding: '2em' }}>{story()}</div>)

  .add('NavLink', () => <NavLink to="/">Navigation Link</NavLink>)

  .add('Link (internal)', () => (
    <Link to="/some-page">Internal (should use router)</Link>
  ))

  .add('Link (external)', () => (
    <Link to="https://google.com/">External (should use normal anchor)</Link>
  ))

  .add('Link (rest)', () => (
    <Link to="mailto:pedro@significa.co">
      Normal (should use normal anchor)
    </Link>
  ))

  .add('ArrowLink', () => <ArrowLink to="/">Arrow Link</ArrowLink>)

  .add('ArrowLink (highlight)', () => (
    <ArrowLink to="/" highlight>
      Arrow Link
    </ArrowLink>
  ))

  .add('ArrowLink (reverse)', () => (
    <ArrowLink to="/" reverse>
      Arrow Link
    </ArrowLink>
  ))

  .add('ArrowLink (configurable)', () => (
    <ArrowLink
      to={text('To', '/')}
      reverse={boolean('Reverse', false)}
      highlight={boolean('Highlight', false)}
    >
      Arrow Link
    </ArrowLink>
  ))
