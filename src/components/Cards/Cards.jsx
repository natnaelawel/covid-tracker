import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { prettyPrintStat } from "../../utils/utils";

function Cards({
  dailyReport: {
    cases,
    todayCases,
    recovered,
    todayRecovered,
    deaths,
    todayDeaths,
    active,
    critical,
    lastUpdate,
  },
  onCardClicked,
}) {
  if (!cases) {
    return "";
  }
  const handleCardClicked = (caseType) => {
    onCardClicked(caseType);
    console.log("card has clicked");
  };
  return (
    <Grid
      container
      className={styles.card_container}
      spacing={3}
      justify="center"
    >
      <Grid
        item
        xs={10}
        md={2}
        component={Card}
        className={cx(styles.card, styles.infected)}
        onClick={() => handleCardClicked("cases")}
      >
        <CardContent>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            Total Case
          </Typography>
          <Typography variant="h3" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={cases}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">Today Cases</Typography>
          <Typography variant="h4" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={todayCases}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">{lastUpdate}</Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={10}
        md={2}
        component={Card}
        className={cx(styles.card, styles.recovered)}
        onClick={() => handleCardClicked("recovered")}
      >
        <CardContent>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            Total Recovered
          </Typography>
          <Typography variant="h3" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={recovered}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">Today Recovered</Typography>
          <Typography variant="h4" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={todayRecovered}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">{lastUpdate}</Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={10}
        md={2}
        component={Card}
        className={cx(styles.card, styles.deaths)}
        onClick={() => handleCardClicked("deaths")}
      >
        <CardContent>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            Total Death
          </Typography>
          <Typography variant="h3" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={deaths}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">Today Deaths</Typography>
          <Typography variant="h4" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={todayDeaths}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">{lastUpdate}</Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={10}
        md={2}
        component={Card}
        className={cx(styles.card, styles.active)}
        onClick={() => handleCardClicked("active")}
      >
        <CardContent>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            Total Active Case
          </Typography>
          <Typography variant="h3" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={active}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">Total Critical</Typography>
          <Typography variant="h4" gutterBottom>
            <CountUp
              start={0}
              duration={2.5}
              end={critical}
              separator=","
              formattingFn={(value) => prettyPrintStat(value)}
            />
          </Typography>
          <Typography color="textSecondary">{lastUpdate}</Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default Cards;

// <div className={styles.card_container}>
//   <Grid
//     container
//     className={styles.grid}
//     spacing={3}
//     justify="space-between"
//   >
//     <Grid
//       item
//       component={Card}
//       xs={10}
//       md={2}
//       className={cx(styles.card, styles.infected)}
//       onClick={(e) => handleCardClicked("cases")}
//     >
//       <CardActions onClick={alert('nati')}><button onClick={(e)=>handleCardClicked('cases')}>View </button></CardActions>
//       <CardContent>
//         <Typography color="textSecondary" variant="h5" gutterBottom>
//           Total Case
//         </Typography>
//         <Typography variant="h3" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={cases}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">Today Cases</Typography>
//         <Typography variant="h4" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={todayCases}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">{lastUpdate}</Typography>
//       </CardContent>
//     </Grid>
//     <Grid
//       item
//       component={Card}
//       xs={10}
//       md={2}
//       className={cx(styles.card, styles.recovered)}
//       onClick={(e) => handleCardClicked("recovered")}
//     >
//       <CardContent>
//         <Typography color="textSecondary" variant="h5" gutterBottom>
//           Total Recovered
//         </Typography>
//         <Typography variant="h3" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={recovered}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">Today Recovered</Typography>
//         <Typography variant="h4" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={todayRecovered}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">{lastUpdate}</Typography>
//       </CardContent>
//     </Grid>
//     <Grid
//       item
//       component={Card}
//       xs={10}
//       md={2}
//       className={cx(styles.card, styles.deaths)}
//       onClick={(e) => handleCardClicked("deaths")}
//     >
//       <CardContent>
//         <Typography color="textSecondary" variant="h5" gutterBottom>
//           Total Deaths
//         </Typography>
//         <Typography variant="h3" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={deaths}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">Today Deaths</Typography>
//         <Typography variant="h4" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={todayDeaths}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">{lastUpdate}</Typography>
//       </CardContent>
//     </Grid>
//     <Grid
//       item
//       component={Card}
//       xs={10}
//       md={2}
//       className={cx(styles.card, styles.active)}
//       onClick={(e) => handleCardClicked("active")}
//     >
//       <CardContent>
//         <Typography color="textSecondary" variant="h5" gutterBottom>
//           Total Active
//         </Typography>
//         <Typography variant="h3" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={active}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">Total Critical</Typography>
//         <Typography variant="h4" gutterBottom>
//           <CountUp
//             start={0}
//             duration={2.5}
//             end={critical}
//             separator=","
//             formattingFn={(value) => prettyPrintStat(value)}
//           />
//         </Typography>
//         <Typography color="textSecondary">{lastUpdate}</Typography>
//       </CardContent>
//     </Grid>
//   </Grid>
// </div>
