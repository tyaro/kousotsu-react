import { Typography } from "@material-ui/core";
import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

const BtcPage: React.FC = () => {
  return (
    <GenericTemplate title="(´･ω･｀) ">
      <div>何かの間違いで億ってしまったらおこぼれ下さい(´･ω･｀) </div>
      <div>If you make a mistake and make a million dollars, please donate</div>
      <br/>
      <div>BTC Address</div>
      <img src={`${process.env.PUBLIC_URL}/btcaddress.png`} alt=""/>
      <Typography>bc1qff33pn3kwltpflzfks6z0mxqkzl2kwwfjva35g</Typography>

      <br/>
      <div>SOL Address</div>
      <img src={`${process.env.PUBLIC_URL}/sol.png`} alt=""/>
      <Typography>GCGQZbVjRvPgHgfT464gMcRJon7wVYVUD8LFjAdSi23s</Typography>
    </GenericTemplate>
  );
};

export default BtcPage;