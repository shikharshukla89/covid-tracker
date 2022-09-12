import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* Title i.e. Coronavirus cases */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        {/* +120k Number of cases */}
        <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>
          {cases}
        </h2>

        {/* 1.2M Total */}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
