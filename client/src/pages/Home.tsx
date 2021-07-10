import Register from "../components/Register";
import Authenticate from "../components/Authenticate";
import { useState } from "react";

type HomeProps = {
  authenticated: boolean
}

function Home({ authenticated }: HomeProps): JSX.Element {
  const [toggle, setToggle] = useState(false);

  if (authenticated) {
    return <div>
      <h1>Authenticated</h1>
    </div>
  } else {
    if (toggle) {
      return <div>
        <Register />
        <p>Already and user? <button onClick={() => setToggle(false)}>Log in here!</button></p>
      </div>
    } else {
      return <div>
        <Authenticate />
        <p>Not an user yet? <button onClick={() => setToggle(true)}>Register here!</button></p>
      </div>
    }
  }
}

export default Home;