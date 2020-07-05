import Layout from "../components/Layout"
import Link from 'next/link'

const Home = () => {
  return(
    <Layout>
      <Link href='static'><a>
        <h1>See Static example</h1>
      </a></Link>
      <Link href='static-from-json'><a>
        <h1>See Static from json example</h1>
      </a></Link>
      <Link href='static-from-md'><a>
        <h1>See Static markdown example</h1>
      </a></Link>
    </Layout>
  )
}

export default Home