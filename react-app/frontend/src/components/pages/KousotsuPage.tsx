import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
//import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';
//import { IResponce,IKstInfo,useFetchKstInfos} from '../../features/kousotsu/useFetchAPI';
//import { table } from 'console';
//import { Height } from '@material-ui/icons';
//import _ from 'lodash';
//import KstList from './KousotsuPage copy';

type Props = {} & RouteComponentProps<{}>;


const ProductPage: React.FC<Props> = (props) => {
  
  return (
    /*
    <GenericTemplate title={'高卒たんメソッド'}>
      <MaterialTable
        style={{width:1600,padding:'none'}}
        columns={[
          { 
            title: '銘柄', 
            field: 'symbol' ,
            render: rowData => (rowData.symbol.replace('USDT','')),
            cellStyle: { minWidth: 100,},
            headerStyle:{minWidth:100,width:110,maxWidth:120},
            sorting:true,
          },
          { 
            title: '判断', 
            field: 'Judgement',
            cellStyle: { minWidth: 40,},
          },
          { 
            title: 'Rating', 
            render: (rowData:IKstInfo) => (
              Number(rowData.spoint) + Number(rowData.lpoint)
              ),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: '現在価格', 
            field: 'price' ,
            render: rowData => ('$' + rowData.price),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: '適正価格1', 
            field: 'kousotsuPrice1' ,
            render: rowData => ('$' + rowData.kousotsuPrice1),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: '適正価格2', 
            field: 'kousotsuPrice2',
            render: rowData => ('$' + rowData.kousotsuPrice2) ,
            cellStyle: { minWidth: 100,},
          },
          { 
            title: '適正価格3', 
            field: 'kousotsuPrice3',
            render: rowData => ('$' + rowData.kousotsuPrice3),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: 'ロングエントリ\n推奨価格', 
            field: 'EntryPointLong',
            render: rowData => ('$' + rowData.EntryPointLong),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: 'ショートエントリ推奨価格', 
            field: 'EntryPointShort',
            render: rowData => ('$' + rowData.EntryPointShort),
            cellStyle: { minWidth: 100,},
          },
          { 
            title: '高値安値推移', 
            field: 'TREND',
            cellStyle: { minWidth: 100,},
          },
          { 
            title: 'EMA(200)乖離率',
            field: 'DREMA200',
            render: rowData => (rowData.DREMA200 + '%'),
            cellStyle: { minWidth: 80,}, 
          },
          { 
            title: 'EMA(100)乖離率', 
            field: 'DREMA100',
            render: rowData => (rowData.DREMA100 + '%'),
            cellStyle:{minWidth:80,width:80,maxWidth:80},
            headerStyle:{minWidth:80,width:80,maxWidth:80}
          },
          { title: 'EMA(50)乖離率', field: 'DREMA50',render: rowData => (rowData.DREMA50 + '%')  },
          { title: 'EMA(200)乖離率BTC建て', field: 'DREMA200BTC',render: rowData => (rowData.DREMA200BTC + '%')  },
          { title: 'RSI(14)4時間足', field: 'RSI14_1D' },
          { title: 'BTC連動率(上昇)', field: 'BTCFRUp' },
          { title: 'BTC連動率(下落)', field: 'BTCFRDown' },
          { title: '変動率(9時〜)', field: 'ChangeRate' },
          { title: '判断', field: 'calcTime1' },
          { title: '判断', field: 'calcTime' },
        ]}
        /*
        data = {info}
        */
       /*
        data={query =>
          new Promise((resolve,reject)=>{
            let url='https://kousotsu-py.info/cryptoinfo/json/kousotsutan'
            fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: 
                  query.orderBy && query.orderDirection
                  ? _.orderBy(
                    result,
                    [query.orderBy.field],
                    [query.orderDirection]
                  )
                : result,
                page: 1,
                totalCount: result.length,
              })
              console.log(result)
            })
          })
        }
        
        options={{
          fixedColumns:{left:3,},
          sorting:true,
          search:false,
          showTitle:false, 
          tableLayout:'fixed',   
          filtering:true,
          maxBodyHeight:1200,
          minBodyHeight:1000,
          padding:'default',  
          paging:false,  
          pageSize:30,
          headerStyle:{
            whiteSpace:'pre-wrap',
            position: 'sticky', top: 0,
            margin:1,
            paddingBlockStart:1,
            paddingBlockEnd:1,
          },
          rowStyle:{
            height:20,
          },
          
        }}

      />
    </GenericTemplate>
      */
        <GenericTemplate title={'高卒たんメソッド'}>
          hoge
        </GenericTemplate>
  );
};

export default withRouter(ProductPage);

