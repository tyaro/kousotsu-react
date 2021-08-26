
import * as styles from '../d3lib/styles.css';
import Chart from "../d3lib/Chart";

import { fetchOHLC30 } from "../../atomos/FetchAPIData";
import { isUndefined } from "lodash";

export const KlinesChart = (props:{symbol:string,span:string,width:any,height:any}) => {
  const chart_width = props.width;
  const chart_height = props.height;
  
  const info = fetchOHLC30({symbol:props.symbol,span:props.span})

  if(isUndefined(info)){
    return(
      <div>now loading...</div>
    )
  }

  var data = info.Result.slice(-30)
  return (
    <div className={styles.App}>
        <div>
          <Chart data={data} width={chart_width} height={chart_height} span={props.span}/>
      </div>
    </div>
  );
}

export default KlinesChart;