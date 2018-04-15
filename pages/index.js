import React from 'react';
import Router from 'next/router';

const handler = () => {
  Router.onRouteChangeStart = url => {
    // 画面遷移開始時に実行します
    console.log('onRouteChangeStart', url);
  };
  Router.push({
    pathname: '/about',
    query: { name: 'hogehoge' }
  });
};

export default class extends React.Component {
  render() {
    return (
      <div>
        about <span onClick={handler}>here</span>
      </div>
    );
  }
}