import Layout from "../components/Layout"
import { GetStaticProps } from "next"
import { FC } from "react"


const StaticDemoPage: FC<StaticProps> = ({ content }) => {
  return(
    <Layout>
      <h1>{content}</h1>
    </Layout>
  )
}

interface StaticProps {
  content: string
}

export const getStaticProps: GetStaticProps<StaticProps> = async ()=>{
  return {props: {
    content: 'Hello  World'
  }}
}

export default StaticDemoPage