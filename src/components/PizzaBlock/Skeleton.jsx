import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#ededed'
    foregroundColor='#e4e2e2'
    {...props}>
    <rect
      x='0'
      y='260'
      rx='11'
      ry='11'
      width='280'
      height='27'
    />
    <rect
      x='0'
      y='310'
      rx='8'
      ry='8'
      width='280'
      height='89'
    />
    <rect
      x='128'
      y='426'
      rx='20'
      ry='20'
      width='149'
      height='43'
    />
    <circle
      cx='140'
      cy='122'
      r='120'
    />
    <rect
      x='0'
      y='428'
      rx='8'
      ry='8'
      width='96'
      height='39'
    />
  </ContentLoader>
);

export default Skeleton;
