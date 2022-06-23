import Card from "./utils/card"
import classes from "./graphCard.module.css"
import Summary from "./summary"
import Chart from "./chart"

const GraphCard = () => {
  return (
    <Card>
      <div className={classes.graph_card}>
        <h2>Spending - Last 7 Days</h2>
        <Chart />
        <hr />
        <Summary />
      </div>
    </Card>
  )
}

export default GraphCard
