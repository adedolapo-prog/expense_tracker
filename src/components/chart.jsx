import classes from "./chart.module.css"

const data = [
  {
    id: 1,
    day: "mon",
    amount: 17.45,
  },
  {
    id: 2,
    day: "tue",
    amount: 34.91,
  },
  {
    id: 3,
    day: "wed",
    amount: 52.36,
  },
  {
    id: 4,
    day: "thu",
    amount: 31.07,
  },
  {
    id: 5,
    day: "fri",
    amount: 23.39,
  },
  {
    id: 6,
    day: "sat",
    amount: 43.28,
  },
  {
    id: 7,
    day: "sun",
    amount: 25.48,
  },
]

const Chart = () => {
  return (
    <div className={classes.chart}>
      {data.map((data) => {
        let dataStyle = { height: `${data.amount * 1.5}%` }
        if (data.day === "wed") {
          dataStyle = { ...dataStyle, "background-color": "hsl(186, 34%, 60%)" }
        }

        return (
          <div className={classes.overall_chart_container} key={data.id}>
            <div className={classes.chart_container}>
              <div style={dataStyle} className={classes.chart_bar}></div>
            </div>
            <p>{data.day}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Chart
