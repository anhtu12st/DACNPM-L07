import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      Hello World!!!
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/groups"
    }
  }
}

export default Home
