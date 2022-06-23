import Card from "./utils/card"
import classes from "./graphCard.module.css"
import Summary from "./summary"

const GraphCard = () => {
  return (
    <Card>
      <div className={classes.graph_card}>
        <h2>Spending - Last 7 Days</h2>

        <hr />
        <Summary />
      </div>
    </Card>
  )
}

export default GraphCard
