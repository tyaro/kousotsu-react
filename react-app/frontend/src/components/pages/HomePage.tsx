import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="トップページ">
      <>
      <div>ホーム画面はランキング形式のダッシュボードにする予定</div>
      <div>モバイル版は<a href='https://kousotsu-py.info/mobile' style={{color:"#FFFFFF"}}>こちら</a></div>
      </>
    </GenericTemplate>
  );
};

export default HomePage;