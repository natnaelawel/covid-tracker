import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';
import { prettyPrintStat } from "../utils/utils";



function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "";
  }
  return (
    <div className={styles.card_container}>
      {/* <Card/> */}
      <Grid container className={styles.grid} spacing={3} justify="space-between">
        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={2.5}
                end={confirmed.value}
                separator=","
                formattingFn={(value) => prettyPrintStat(value)}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active case of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={2.5}
                end={recovered.value}
                separator=","
                formattingFn={(value) => prettyPrintStat(value)}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered case of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={2.5}
                end={deaths.value}
                separator=","
                formattingFn={(value) => prettyPrintStat(value)}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of death of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={2.5}
                end={confirmed.value - (recovered.value + deaths.value)}
                separator=","
                formattingFn={(value) => prettyPrintStat(value)}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active case of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
