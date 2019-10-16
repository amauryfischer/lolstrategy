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
import "./Dashboard.scss"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
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
                tabName: "Knight",
                tabIcon: Favorite,
                tabContent: (
                  <div>
                    <link rel="preload" href="https://lolchess.gg/builder?deck=d533f1a0f03311e9b34023ba387c6837" as="document"></link>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=d533f1a0f03311e9b34023ba387c6837" /></div>
          <b>Notes : Best comp early game, try to eco 2-1 to 2-4 and then ....</b>
                  </div>
                )
              },
              {
                tabName: "Shapeshifter",
                tabIcon: Pets,
                tabContent: (
                  <div>
                    <div id="div_iframe"><iframe id="frame" scroll="no" frameBorder="0" onLoad={() => {document.getElementById('div_iframe').scrollTop = 500}}
          width="800"
          src="https://lolchess.gg/builder?deck=536e80e0f03411e980492f97cdbe3433" /></div>
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
