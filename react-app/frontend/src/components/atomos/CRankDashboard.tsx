import MaterialTable from '@material-table/core';
import { slinePrice2 } from './sline';
import { linkBinanceFeature } from './link';

export const Dashboard = (props:{data?:any}) => {
    const percentCol = (value:any) => {
        return (
            <div>{value}%</div>
        )
    }
  return (
    <MaterialTable
    style={{
      width:345,
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        width: 50,
      },
      { 
        title: 'Symbol',
        field: 'Pair',
        render: row => linkBinanceFeature(row.Pair.replace('USDT','')),
        type:'string',
        width: 80,
      },
      {
        title: <div>Price</div>,
        field: 'Price',
        render: row => slinePrice2(row.Price),
        width:120,
        customSort:(a,b)=>a.Price.VALUE-b.Price.VALUE,
      },
      {
        title: <div>％</div>,
        field: 'CRate',
        render: row => percentCol(row.CRate),
        width:80,
      },
      
    ]}
    data={props.data}
    options={{
      toolbar:false,
      sorting:true,
      search:false,
      showTitle: false,
      paging:false,
      tableLayout:'fixed',
      rowStyle:{
        maxHeight:30,
        marginTop:1,
        marginBottom:1,
        paddingTop:1,
        paddingBottom:1,
      },
      header:true,
      maxBodyHeight:380,      
      headerStyle:{
        position:'sticky',top:0,
        maxHeight:30,
        minHeight:20,
        height:20,
        marginTop:1,
        marginBottom:1,
        paddingTop:1,
        paddingBottom:1,
      },
      searchFieldStyle:{
          maxHeight:0,
      }
    }}  
  />
  )
}

export default Dashboard;