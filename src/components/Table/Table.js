import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { Switch, Route } from 'react-router-dom';

import { ControlCameraOutlined } from '@material-ui/icons';
import { Table as TableDiv, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

const Table = ({ title, data, columns, options, parentState, parentStateSetter}) => {

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  function onCellClick (day, time, client) {

    const tret = {
      'day'     : day, 
      'time'    : time, 
      'client'  : client
    }

    console.log(tret);

    // setPopupTretman(tret);
  }

  return (
    <div>
      <Switch>
          <Route path="/noviKlijent">
              
          </Route>
          <Route path="/listaKlijenata">
            <MaterialTable
              title={title}
              data={data}
              columns={columns}
              options={options}
              // cellEditable={{
              // onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
              //   return new Promise((resolve, reject) => {

              //       // goToUsersProfile(rowData);

              //       // console.log('newValue: ' + newValue);
              //       // setTimeout(resolve, 4000);
              //     });
              //   }
              // }}
              icons={tableIcons}
              editable={{
                // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
                // isEditHidden: rowData => rowData.name === 'x',
                // isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
                // isDeleteHidden: rowData => rowData.name === 'y',
                // onBulkUpdate: changes => 
                //   new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //       /* setData([...data, newData]); */

                //       resolve();
                //     }, 1000);
                //   }),
                onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      /* setData([...data, newData]); */

                      resolve();
                    }, 1000);
                  }),
              }}
            />
          </Route>
          <Route path="/KlijentProfile">
          <MaterialTable
              title={title}
              data={data}
              columns={columns}
              options={options}
              icons={tableIcons}
            />
          </Route>
          <Route path="/zakazivanje">
            <TableDiv>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                      <TableCell>{column.title}</TableCell>
                    ))
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  data.map(row => {
                    return (
                      <TableRow>
                        {
                          columns.map(column => {

                            if (column.title != "") {
                              return (
                                <TableCell
                                  className="pointerCell"
                                  onClick={(() => onCellClick(column.field, row['vreme'], row[column.field]))}
                                >
                                  {row[column.field]}
                                </TableCell>
                              )
                            } else {
                              return (
                                <TableCell>{row[column.field]}</TableCell>
                              )
                            }
                          })
                        }
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </TableDiv>
          </Route>
        </Switch>
    </div>
  )
}

export default Table;