import Layout from "../components/Layout"
import { GetStaticProps } from "next"
import users from '../data/users.json'
import { FC } from "react"

const StaticFromJsonDemoPage: FC<StaticProps> = ({users}) => {
  return(
    <Layout style={{ justifyContent: 'flex-start' }}>
      {users.map(user=><User key={user.id} {...user} />)}
    </Layout>
  )
}

const User: FC<User> = ({name, email, website})=><div style={{ textAlign: 'center' }}>
  <h1>{name}</h1>
  <a href={`mailto:${email}`}>{email}</a>
  <p><a href={website}><strong>{website}</strong></a></p>
</div>

interface User {
  id: number,
  name: string,
  email: string
  website: string
}
interface StaticProps {
  users: Array<User>
}
export const getStaticProps: GetStaticProps<StaticProps> = async ()=>{

  return {props: {
    users
  }}
}

export default StaticFromJsonDemoPage