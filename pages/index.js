import Router from 'next/router';

export default () => (
  <div>
    about <span onClick={() => Router.push('/about')}>here</span>
  </div>
);