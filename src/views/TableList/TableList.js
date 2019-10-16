import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import Pets from "@material-ui/icons/Pets";
import HowToReg from "@material-ui/icons/HowToReg";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import { bugs, website, server } from "variables/general.js";
import "../Dashboard/Dashboard.scss"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <div>
{/*           <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder" /></div> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Compositions:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Drag/Guardian + Sorcerer Yumii",
                tabIcon: Favorite,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=a3a2e7b0f03511e992c05399c3b36ce9" /></div>
          <b>Notes : Ideal comp</b>
                  </div>
                )
              },
              {
                tabName: "Drag/Guardian + Sorcerer knight's vow",
                tabIcon: HowToReg,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=d12a7bf0f03511e98094e129050281cd" /></div>
          <b>Notes : Good compo too, you can go for 2 knight + 3 assassins too</b>
                  </div>
                )
              },
              {
                tabName: "Drag/Guardian + Sorcerer NO SPATULA",
                tabIcon: Pets,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=123500f0f03611e9835793df761ba1f1" /></div>
          <b>Notes : Good alternative, u can swap for shyvana for panth dragon buff</b>
                  </div>
                )
              }
            ]}
          />
        </GridItem>
</GridContainer>
    </div>
  );
}
