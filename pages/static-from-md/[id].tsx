import Layout from "../../components/Layout"
import { GetStaticPaths, GetStaticProps } from "next"
import markdown from '../../lib/markdown'
import { FC } from "react"
import Head from 'next/head'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { log } from "console"

const StaticMdDemoPage: FC<StaticProps> = ({content}) => {
  return(
    <Layout style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '10vh 0',
      justifyContent: 'flex-start'
    }}>
      <Head>
        <link rel="stylesheet" href="/github-markdown.css"/>
      </Head>

      <div className='markdown-body' dangerouslySetInnerHTML={{__html: content}} css={css`
        pre {
          background: rgba(0,0,0,.88)
        }
      `} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ()=>{
  return {
    paths: markdown.paths,
    fallback: false
  }
}

interface StaticProps {
  content: string
}
export const getStaticProps: GetStaticProps<StaticProps> = async ({params})=>{
  return {
    props: {
      content: markdown.getContent((params.id as string)+'.md')
    }
  }
}

export default StaticMdDemoPage