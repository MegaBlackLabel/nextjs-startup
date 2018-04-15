// ステートレスPageコンポーネント
const Page = ({ userAgent }) => <div>userAgent: {userAgent}</div>;

// コンポーネントにgetInitialPropsメソッドを追加
Page.getInitialProps = async data => {
  if (data.req) {
    // 取得したユーザエージェントをクライアントサイドに渡す
    const userAgent = data.req.headers['user-agent'];
    return { userAgent };
  }
};

export default Page;