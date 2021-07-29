import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';

type Props = {} & RouteComponentProps<{}>;

const CRDashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/ChangeRateSpot'
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
  
  return(
    <MaterialTable
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => (row.pair.replace('USDT','')),
        type:'string',
      },
      { 
        title: 'Price', 
        field: 'price',
        render: row => ('$'+row.price),
      },
      {
        title: '5min', 
        field: 'CRate05',
        render: row => percentDataStyle(row.CRate05),
      },
      { 
        title: '10min', 
        field: 'CRate10',
        render: row => percentDataStyle(row.CRate10),
      },
      { 
        title: '30min', 
        field: 'CRate30', 
        render: row => percentDataStyle(row.CRate30),
      },
      { 
        title: '60min', 
        field: 'CRate60',
        render: row => percentDataStyle(row.CRate60),
      },
      { 
        title: '4Hour', 
        field: 'CRate240', 
        render: row => percentDataStyle(row.CRate240),
      },
      { 
        title: '6Hour', 
        field: 'CRate360',
        render: row => percentDataStyle(row.CRate360),
      },
      { 
        title: '8Hour', 
        field: 'CRate480',
        render: row => percentDataStyle(row.CRate480),
      },
      { 
        title: '12Hour', 
        field: 'CRate720', 
        render: row => percentDataStyle(row.CRate720),
      },
      /*
      { 
        title: 'CalcTime', 
        field: 'calcTime',
        type:'datetime',
      },
      */
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
  )
}

const ChangeRatePage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'変動率(現物)'}>
      <CRDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(ChangeRatePage);

