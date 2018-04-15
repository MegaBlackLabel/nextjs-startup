import fetch from 'isomorphic-fetch';

// Propsで受け取ったstarsを表示するコンポーネント
const Page = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>

// PageコンポーネントにgetInitialPropsを追加
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page