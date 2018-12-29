/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IObserver from './intersection-observer';

class Image extends Component {
  static defaultProps = {
    lazy: true,
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    lazy: PropTypes.bool,
  };

  state = {
    src: !this.props.lazy ? this.props.videoSrc || this.props.src : undefined,
  };

  handleIntersect = entry => {
    if (entry.isIntersecting) {
      this.setState({ src: this.props.videoSrc || this.props.src });
    }
  };

  render() {
    const {
      caption,
      width,
      height,
      margin = 40,
      video = false,
      videoSrc,
      captionSpacing = null,
      renderImage,
      oversize = true,
      float,
      lazy,
      ...rest
    } = this.props;

    const aspectRatio = `${String((height / width) * 100)}%`;

    return (
      <IObserver
        once
        onIntersect={this.handleIntersect}
        rootMargin="30%"
        disabled={!lazy}
      >
        <figure
          className={classNames({
            oversize: width > 650,
            float: float && width < 520,
          })}
        >
          <main style={{ width }}>
            <div style={{ paddingBottom: aspectRatio }}>
              {this.state.src ? (
                videoSrc || video ? (
                  <video src={this.state.src} muted autoPlay loop playsInline />
                ) : renderImage ? (
                  renderImage(rest)
                ) : (
                  <img alt="" src={this.state.src || null} />
                )
              ) : null}
            </div>

            {caption && (
              <p style={captionSpacing ? { marginTop: captionSpacing } : {}}>
                {caption}
              </p>
            )}
          </main>

          <style jsx>
            {`
              figure {
                display: block;
                text-align: center;
                margin: ${margin}px 0;
              }
              main {
                margin: 0 auto;
                max-width: 100%;
              }
              div {
                position: relative;
              }
              figure :global(img),
              figure :global(video) {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
              }
              p {
                color: var(--primary-text);
                font-size: var(--text-small);
                margin-top: 0.4rem;
                text-align: center;
              }
              @media (min-width: 1200px) {
                figure.oversize {
                  width: ${width}px;
                  margin: ${margin}px 0 ${margin}px
                    calc(((${width}px - 650px) / 2) * -1);
                }
                figure.float {
                  float: ${float};
                  margin: ${margin}px;
                  margin-${float}: -150px;
                }
              }


            `}
          </style>
        </figure>
      </IObserver>
    );
  }
}

export const Video = props => <Image {...props} video />;

export default Image;
