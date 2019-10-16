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

export default function UserProfile() {
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
                tabName: "Knight + Katarina",
                tabIcon: Favorite,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=8cbd8d80f03411e9be8f5f50eadd4cb1" /></div>
          <b>Notes : Best comp try to eco and try to get yumii</b>
                  </div>
                )
              },
              {
                tabName: "Knight + Zed",
                tabIcon: HowToReg,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=9eb6b930f03411e9ae0dbffea9893c39" /></div>
          <b>Notes : Good compo too, you can go for 2 knight + 3 assassins too</b>
                  </div>
                )
              },
              {
                tabName: "Shapeshifter Wild Sorcerer",
                tabIcon: Pets,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=411695e0f03511e991805dc52bf31fd9" /></div>
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
