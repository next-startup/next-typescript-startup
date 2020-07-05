/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from 'next/head'
import { FC, CSSProperties } from 'react'

type Meta = {
  name: string,
  content: string
}

interface Props {
  title?: string
  metas?: Meta[]
  icon?: string
  style?: CSSProperties
}

const initMeta: Array<Meta> = [
  {
    name: 'description',
    content: 'A nextjs typescript startup template for you to quickly jump in.'
  }
]

const Layout: FC<Props> = ({title='Next Typescript Startup', metas=initMeta, icon, children, ...props}) => {
  return(
    <main className='layout' css={css`
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `} {...props}>
      <Head>
        <title>{title}</title>
        {
          metas.map((meta, i)=><meta key={i} name={meta.name} content={meta.content} />)
        }
        <link rel="shortcut icon" href="/favicon.ico"/>
        { icon && <link rel="shortcut ico" href={icon} />}
      </Head>
      {children}
    </main>
  )
}

export default Layout