import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';
import Seo from './SEO';

const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    ${Object.entries(theme.colors).reduce(
      (acc, [color, value]) => `${acc}--color-${color}: ${value};`
    )}
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: var(--color-bg);
    background: var(--color-primary);
  }
  html {
    font-family: ${theme.fontFamily.sansSerif};
    font-size: ${theme.baseFontSize};
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: var(--color-bg);
    color: var(--color-text);
  }
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: var(--color-primaryLight)t);
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: '';
    position: absolute;
    background: var(--color-primary);
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: 0.5rem;
  }
  input,
  textarea,
  button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${theme.fontFamily.sansSerif};
  }
  input,
  textarea {
    border-radius: 0.5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: 0.4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: var(--color-bg);
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <>
      {!customSEO && <Seo buildTime={buildTime} />}
      <Global styles={globalStyles} />
      {children}
      <Footer>
        &copy; 2019 by LekoArts. All rights reserved. <br />
        <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog">
          GitHub Repository
        </a>
        <br />
        <span>Last build: {buildTime}</span>
      </Footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
