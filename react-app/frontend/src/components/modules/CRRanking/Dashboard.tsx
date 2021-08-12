import MaterialTable from '@material-table/core';
import { SparklinePriceCR } from '../../atomos/sline';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography } from '@material-ui/core';

export const Dashboard = (props:{title?:string,data?:any}) => {

  const percentCol = (value:any) => {
    var c = '#FFFFFF'
    if (value < 0){c = '#E35561'}
    if (value > 0){c = '#5CC686'}
      return (
          <Typography style={{color:c}}>{value}%</Typography>
      )
  }
  return (
    <>
    <Typography>{props.title}</Typography>
    <MaterialTable
    style={{
      width:345,
      backgroundColor:'#111111',
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        width: 50,
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>
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
        render: row => SparklinePriceCR({price:row.Price,crate:row.CRate}),
        width:120,
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
      minBodyHeight:710,      
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
  </>
  )
}

export default Dashboard;