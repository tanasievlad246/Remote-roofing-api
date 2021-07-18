import NoUser from "./NoUser";

type HomeProps = {
  authenticated: boolean
}

function Home({ authenticated }: HomeProps): JSX.Element {
  if (authenticated) {
    return <div>
      <h1>Authenticated</h1>
    </div>
  } else {
    return <NoUser />
  }
}

export default Home;