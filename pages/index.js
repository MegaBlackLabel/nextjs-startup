import React from 'react'
export default class extends React.Component {
  // サーバサイド時にgetInitialPropsの処理が実行される
  static async getInitialProps({ req }) {
    if (req) {
      // reqがある(サーバサイド処理)なのでheadersデータを取得
      const userAgent = req.headers['user-agent'];
      // 取得したユーザエージェントをクライアントサイドにpropsとして渡す
      return { userAgent };
    }
  }
  render() {
    // propsとして受け取ったuserAgentを表示
    return <div>userAgent: {this.props.userAgent}</div>;
  }
}