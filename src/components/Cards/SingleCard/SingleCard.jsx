import React,{useEffect, useState} from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./SingleCard.module.css";
import { getSingleData } from "../../../api";
import { prettyPrintStat } from "../../utils/utils";

function SingleCard({name}) {
    const [data, setData] = useState({});

   useEffect(() => {
     const fetchSingleData = async (name) => {
       setData(await getSingleData(name));
     };
     fetchSingleData(name);
   }, []);
  return (
    <div
      className={styles.cards}

    >
      <Card variant="outlined" className={styles.status_list_item}>
        <CardContent>
          <Typography color="textSecondary">Total Cases</Typography>
          <Typography color="red" variant="h3" gutterBottom>
            {prettyPrintStat(data.cases)}
          </Typography>
          <Typography color="textSecondary">Today Cases</Typography>
          <Typography color="red" variant="h4" gutterBottom>
            {prettyPrintStat(data.todayCases)}
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={styles.status_list_item}>
        <CardContent>
          <Typography color="textSecondary">Recovered</Typography>
          <Typography color="red" variant="h3" gutterBottom>
            {prettyPrintStat(data.recovered)}
          </Typography>
          <Typography color="textSecondary">Today Cases</Typography>
          <Typography color="red" variant="h4" gutterBottom>
            {prettyPrintStat(data.todayRecovered)}
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={styles.status_list_item}>
        <CardContent>
          <Typography color="textSecondary">Deaths</Typography>
          <Typography color="red" variant="h3" gutterBottom>
            {prettyPrintStat(data.deaths)}
          </Typography>
          <Typography color="textSecondary">Today Deaths</Typography>
          <Typography color="red" variant="h4" gutterBottom>
            {prettyPrintStat(data.todayDeaths)}
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={styles.status_list_item}>
        <CardContent>
          <Typography color="textSecondary">active</Typography>
          <Typography color="red" variant="h3" gutterBottom>
            {prettyPrintStat(data.active)}
          </Typography>
          <Typography color="textSecondary">Critical Cases</Typography>
          <Typography color="red" variant="h4" gutterBottom>
            {prettyPrintStat(data.critical)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleCard;
