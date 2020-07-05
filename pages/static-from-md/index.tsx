import Layout from '../../components/Layout'
import { GetStaticProps } from 'next'
import markdown, { FileNames } from '../../lib/markdown'
import { FC } from 'react'
import Link from 'next/link'


const StaticMdHomePage: FC<StaticProps> = ({ paths }) => {
  return (
    <Layout>
      {paths.map(path => (
        <h1 key={path}>
          <Link href={'static-from-md/' + path.replace(/\.md$/, '')}>
            <a>{path}</a>
          </Link>
        </h1>
      ))}
    </Layout>
  )
}

interface StaticProps {
  paths: FileNames
}
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      paths: markdown.fileNames
    }
  }
}

export default StaticMdHomePage
