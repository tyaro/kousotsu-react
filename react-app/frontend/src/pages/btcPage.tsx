import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

const BtcPage: React.FC = () => {
  return (
    <GenericTemplate title="(´･ω･｀) ">
      <div>何かの間違いで億ってしまったらおこぼれ下さい(´･ω･｀) </div>
      <img src={`${process.env.PUBLIC_URL}/btcaddress.png`} alt=""/>
    </GenericTemplate>
  );
};

export default BtcPage;