import classes from "./summary.module.css"

const Summary = () => {
  return (
    <div className={classes.flex_name}>
      <div className={classes.flex_div_one}>
        <p>Total this month</p>
        <h2>$478.33</h2>
      </div>
      <div className={classes.flex_div_two}>
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </div>
  )
}

export default Summary
