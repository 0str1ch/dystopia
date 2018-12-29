import React from 'react';
import clientManifest from '../../client-manifest';
import PortfolioImages from './portfolio-images';

const VerticalGallery = () => (
  <>
    <div className="panel-right">
      <PortfolioImages items={clientManifest} />
    </div>

    <style jsx global>
      {`
        .panel-right::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .panel-right {
          padding: 0 2rem;
          margin-right: 2rem;
          min-height: 102vh;
          overflow: scroll;
          position: relative;
          display: flex;
          flex-direction: column;
          place-items: center;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow: -moz-scrollbars-none;
          scroll-snap-type: y mandatory;
        }

        .panel-right figure {
          scroll-snap-align: center;
        }
      `}
    </style>
  </>
);

export default VerticalGallery;
