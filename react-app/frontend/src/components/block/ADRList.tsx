import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../atomos/link';


export const Dashboard = (props:{data?:any}) => {
  const percentCol = (params:Number) => {
    var c = '#FFFFFF'
    return (
      <div style={{color:c}}>{params}%</div>
    )
  }
  const priceCol = (value:any)=>{
    return(
        <div>${value}</div>
    )
  }

  return (
    <MaterialTable
    style={{
      width:1000,
    }}
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => linkBinanceFeature(row.pair.replace('USDT','')),
        type:'string',
        width:100,
      },
      {
        title: <div>Price</div>,
        field: 'Price',
        render: row => priceCol(row.Price),
        width:120,
      },
      {
        title: <div>ATR<br/>Rate<br/>1day</div>,
        field: 'ARR0',
        render: row => percentCol(row.ARR0),
        width:80,
      },
      {
        title: <div>ADR(5)<br/>Rate<br/>1day</div>,
        field: 'ARR5',
        render: row => percentCol(row.ARR5),
        width:80,
      },
      {
        title: <div>ADR(10)<br/>Rate<br/>1day</div>,
        field: 'ARR10',
        render: row => percentCol(row.ARR10),
        width:80,
      },
      {
        title: <div>ADR(20)<br/>Rate<br/>1day</div>,
        field: 'ARR20',
        render: row => percentCol(row.ARR20),
        width:80,
      },
      {
        title: <div>ADRE(5)<br/>Rate<br/>1day</div>,
        field: 'ARRE5',
        render: row => percentCol(row.ARRE5),
        width:80,
      },
      {
        title: <div>ADRE(10)<br/>Rate<br/>1day</div>,
        field: 'ARRE10',
        render: row => percentCol(row.ARRE10),
        width:80,
      },
      {
        title: <div>ADRE(20)<br/>Rate<br/>1day</div>,
        field: 'ARRE20',
        render: row => percentCol(row.ARRE20),
        width:80,
      },
    ]}
    data={props.data}
    options={{
      sorting:true,
      showTitle: false,
      paging:false,
      tableLayout:'fixed',
      rowStyle:{
        height:40,
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

export default Dashboard;