import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import _ from 'lodash';
import { Typography } from '@material-ui/core';

type Props = {} & RouteComponentProps<{}>;

const CRDashBoard = () => {
  const {data : info1} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/MarksHighPriceAnalysis'
    ,{refreshInterval:300000}
  )
  const {data : info2} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/MarksLowPriceAnalysis'
    ,{refreshInterval:300000}
  )

  const colDataStyle = (params:Number,row:any,value:number) => {
    var c = '#FFFFFF'
    var max = row['00']
    var index = 0
    if (max<row['01']){max=row['01'];index=1}
    if (max<row['02']){max=row['02'];index=2}
    if (max<row['03']){max=row['03'];index=3}
    if (max<row['04']){max=row['04'];index=4}
    if (max<row['05']){max=row['05'];index=5}
    if (max<row['06']){max=row['06'];index=6}
    if (max<row['07']){max=row['07'];index=7}
    if (max<row['08']){max=row['08'];index=8}
    if (max<row['09']){max=row['09'];index=9}
    if (max<row['10']){max=row['10'];index=10}
    if (max<row['11']){max=row['11'];index=11}
    if (max<row['12']){max=row['12'];index=12}
    if (max<row['13']){max=row['13'];index=13}
    if (max<row['14']){max=row['14'];index=14}
    if (max<row['15']){max=row['15'];index=15}
    if (max<row['16']){max=row['16'];index=16}
    if (max<row['17']){max=row['17'];index=17}
    if (max<row['18']){max=row['18'];index=18}
    if (max<row['19']){max=row['19'];index=19}
    if (max<row['20']){max=row['20'];index=20}
    if (max<row['21']){max=row['21'];index=21}
    if (max<row['22']){max=row['22'];index=22}
    if (max<row['23']){max=row['23'];index=23}
    if (params == index){c = '#E35561'}
    return (
      <div style={{color:c}}>{value}</div>
    )
  }
  const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + value + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }

  return(
    <>
    <Typography>その日の高値を記録した時間帯(過去60日) ※日本時間(UTC+9)</Typography>
    
    <MaterialTable
           style={{
            width:1000,
          }}
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => linkCol(row.pair.replace('USDT','')),
        type:'string',
        width:100
      },
      { title: '00',field: '00',render:row => colDataStyle(0,row,row['00'])},
      { title: '01',field: '01',render:row => colDataStyle(1,row,row['01'])},
      { title: '02',field: '02',render:row => colDataStyle(2,row,row['02'])},
      { title: '03',field: '03',render:row => colDataStyle(3,row,row['03'])},
      { title: '04',field: '04',render:row => colDataStyle(4,row,row['04'])},
      { title: '05',field: '05',render:row => colDataStyle(5,row,row['05'])},
      { title: '06',field: '06',render:row => colDataStyle(6,row,row['06'])},
      { title: '07',field: '07',render:row => colDataStyle(7,row,row['07'])},
      { title: '08',field: '08',render:row => colDataStyle(8,row,row['08'])},
      { title: '09',field: '09',render:row => colDataStyle(9,row,row['09'])},
      { title: '10',field: '10',render:row => colDataStyle(10,row,row['10'])},
      { title: '11',field: '11',render:row => colDataStyle(11,row,row['11'])},
      { title: '12',field: '12',render:row => colDataStyle(12,row,row['12'])},
      { title: '13',field: '13',render:row => colDataStyle(13,row,row['13'])},
      { title: '14',field: '14',render:row => colDataStyle(14,row,row['14'])},
      { title: '15',field: '15',render:row => colDataStyle(15,row,row['15'])},
      { title: '16',field: '16',render:row => colDataStyle(16,row,row['16'])},
      { title: '17',field: '17',render:row => colDataStyle(17,row,row['17'])},
      { title: '18',field: '18',render:row => colDataStyle(18,row,row['18'])},
      { title: '19',field: '19',render:row => colDataStyle(19,row,row['19'])},
      { title: '20',field: '20',render:row => colDataStyle(20,row,row['20'])},
      { title: '21',field: '21',render:row => colDataStyle(21,row,row['21'])},
      { title: '22',field: '22',render:row => colDataStyle(22,row,row['22'])},
      { title: '23',field: '23',render:row => colDataStyle(23,row,row['23'])},
      {},
    ]}
    data={info1}
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
    <br/>
    <Typography>その日の安値を記録した時間帯(過去60日) ※日本時間(UTC+9)</Typography>
    <MaterialTable
       style={{
        width:1000,
      }}
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => linkCol(row.pair.replace('USDT','')),
        type:'string',
        width:100
      },
      { title: '00',field: '00',render:row => colDataStyle(0,row,row['00'])},
      { title: '01',field: '01',render:row => colDataStyle(1,row,row['01'])},
      { title: '02',field: '02',render:row => colDataStyle(2,row,row['02'])},
      { title: '03',field: '03',render:row => colDataStyle(3,row,row['03'])},
      { title: '04',field: '04',render:row => colDataStyle(4,row,row['04'])},
      { title: '05',field: '05',render:row => colDataStyle(5,row,row['05'])},
      { title: '06',field: '06',render:row => colDataStyle(6,row,row['06'])},
      { title: '07',field: '07',render:row => colDataStyle(7,row,row['07'])},
      { title: '08',field: '08',render:row => colDataStyle(8,row,row['08'])},
      { title: '09',field: '09',render:row => colDataStyle(9,row,row['09'])},
      { title: '10',field: '10',render:row => colDataStyle(10,row,row['10'])},
      { title: '11',field: '11',render:row => colDataStyle(11,row,row['11'])},
      { title: '12',field: '12',render:row => colDataStyle(12,row,row['12'])},
      { title: '13',field: '13',render:row => colDataStyle(13,row,row['13'])},
      { title: '14',field: '14',render:row => colDataStyle(14,row,row['14'])},
      { title: '15',field: '15',render:row => colDataStyle(15,row,row['15'])},
      { title: '16',field: '16',render:row => colDataStyle(16,row,row['16'])},
      { title: '17',field: '17',render:row => colDataStyle(17,row,row['17'])},
      { title: '18',field: '18',render:row => colDataStyle(18,row,row['18'])},
      { title: '19',field: '19',render:row => colDataStyle(19,row,row['19'])},
      { title: '20',field: '20',render:row => colDataStyle(20,row,row['20'])},
      { title: '21',field: '21',render:row => colDataStyle(21,row,row['21'])},
      { title: '22',field: '22',render:row => colDataStyle(22,row,row['22'])},
      { title: '23',field: '23',render:row => colDataStyle(23,row,row['23'])},
      {},
    ]}
    data={info2}
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
  </>
  )
}

const HighLowAnalysisPage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'オカルト分析'}>
      <CRDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(HighLowAnalysisPage);

