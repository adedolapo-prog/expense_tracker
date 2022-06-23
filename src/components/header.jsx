import Card from "./utils/card"
import classes from "./header.module.css"

const Header = (props) => {
  return (
    <Card>
      <div className={classes.header_card}>
        <div className={classes.flex_item_one}>
          <p>My Balance</p>
          <h2>$921.48</h2>
        </div>
        <div className={classes.flex_item_two}>
          <div className={classes.white}></div>
          <div className={classes.black}></div>
        </div>
      </div>
    </Card>
  )
}

export default Header
