import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import _ from 'lodash';

type Props = {} & RouteComponentProps<{}>;

const CRDashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/HighLowAnalysis'
    ,{refreshInterval:3000}
    )
  const percentDataStyle = (params:Number) => {
    var c = '#FFFFFF'
    if (params < 0){c = '#E35561'}
    if (params > 0){c = '#5CC686'}
    return (
      <div style={{color:c}}>{params}%</div>
    )
  }
  const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + value + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }
  console.log(info)
  var pair = _.keys(info)
  console.log(pair)

  return(
    <>
    <MaterialTable
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => {()=>{
          return _.keys(row)}
        },
        type:'string',
      },
    ]}
    data={info}
    options={{
      showTitle: false,
      paging:false,
      rowStyle:{
        height:10,
      },
      maxBodyHeight:800,      
      headerStyle:{
        position:'sticky',top:0,
      },
      searchFieldAlignment:'left',
    }}
    />
  </>
  )
}

const HighLowAnalysisPage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'高値,安値時間帯分析'}>
      <CRDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(HighLowAnalysisPage);

