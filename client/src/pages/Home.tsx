import Button from '@material-ui/core/Button';

function Home() {
  const authenticated: boolean = false;
  if (authenticated) {
    return <div>
      <h1>Authenticated</h1>
    </div>
  } else {
    return <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  }
}

export default Home;