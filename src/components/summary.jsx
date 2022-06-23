import classes from "./summary.module.css"

const Summary = () => {
  return (
    <div className={classes.flex_name}>
      <div>
        <p>Total this month</p>
        <h2 className={classes.header}>$478.33</h2>
      </div>
      <div>
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </div>
  )
}

export default Summary
