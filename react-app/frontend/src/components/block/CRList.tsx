import MaterialTable from '@material-table/core';
import { slinePrice2 } from '../atomos/sline';
import { linkBinanceFeature } from '../atomos/link';


export const Dashboard = (props:{data?:any}) => {
    const percentDataStyle = (params:Number) => {
        var c = '#FFFFFF'
        if (params < 0){c = '#E35561'}
        if (params > 0){c = '#5CC686'}
        return (
          <div style={{color:c}}>{params}%</div>
        )
    }
    var colWidth = 50
    return (
        <MaterialTable
        style={{
          width:880,
        }}  
        columns={[
          { 
            title: 'Symbol',
            field: 'pair',
            render: row => linkBinanceFeature(row.pair.replace('USDT','')),
            type:'string',
            width:80,
          },
          { 
            title: 'Price', 
            field: 'price',
            render: row => slinePrice2(row.price),
            customSort:(a,b)=>(a.price - b.price),
            width:110,
          },
          {
            title: '1min', 
            field: 'CRate01',
            render: row => percentDataStyle(row.CRate01),
            customSort:(a,b)=>(a.CRate01 - b.CRate01),
            width: colWidth,
          },
          {
            title: '5min', 
            field: 'CRate05',
            render: row => percentDataStyle(row.CRate05),
            customSort:(a,b)=>(a.CRate05 - b.CRate05),
            width: colWidth,
          },
          { 
            title: '10min', 
            field: 'CRate10',
            render: row => percentDataStyle(row.CRate10),
            customSort:(a,b)=>(a.CRate10 - b.CRate10),
            width: colWidth,
          },
          { 
            title: '30min', 
            field: 'CRate30', 
            render: row => percentDataStyle(row.CRate30),
            customSort:(a,b)=>(a.CRate30 - b.CRate30),
            width: colWidth,
          },
          { 
            title: '60min', 
            field: 'CRate60',
            render: row => percentDataStyle(row.CRate60),
            customSort:(a,b)=>(a.CRate60 - b.CRate60),
            width:colWidth,
          },
          { 
            title: '4Hour', 
            field: 'CRate240', 
            render: row => percentDataStyle(row.CRate240),
            customSort:(a,b)=>(a.CRate240 - b.CRate240),
            width: colWidth,
          },
          { 
            title: '6Hour', 
            field: 'CRate360',
            render: row => percentDataStyle(row.CRate360),
            customSort:(a,b)=>(a.CRate360 - b.CRate360),
            width:colWidth,
          },
          { 
            title: '8Hour', 
            field: 'CRate480',
            render: row => percentDataStyle(row.CRate480),
            customSort:(a,b)=>(a.CRate480 - b.CRate480),
            width: colWidth,
          },
          { 
            title: '12Hour', 
            field: 'CRate720', 
            render: row => percentDataStyle(row.CRate720),
            customSort:(a,b)=>(a.CRate720 - b.CRate720),
            width: colWidth,
          },
          /*
          { 
            title: 'CalcTime', 
            field: 'calcTime',
            type:'datetime',
          },
          */
         {
           width: 20,
         },
        ]}
        data={props.data}
        options={{
          showTitle: false,
          paging:false,
          tableLayout:'fixed',
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

export default Dashboard;