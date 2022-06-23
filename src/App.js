import Header from "./components/header"
import GraphCard from "./components/graphCard"
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.center}>
      <Header />
      <GraphCard />
    </div>
  )
}

export default App
