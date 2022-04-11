import React, {useEffect} from 'react'
import {
    DataTable,
    Table,
    TableBatchAction,
    TableBatchActions,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
    TableSelectAll,
    TableSelectRow,
    TableToolbar,
    TableToolbarAction,
    TableToolbarContent,
    TableToolbarSearch,
    TableToolbarMenu, Button,
} from "carbon-components-react";
import {
    Delete16 as Delete,
    Download16 as Download,
} from '@carbon/icons-react';
import {header} from "./BenutzerMeta";

function BenutzerTable(props) {
    if (props.users.length > 0){
        return <DataTable rows={props.users} headers={header}>
            {({
                  rows,
                  headers,
                  getHeaderProps,
                  getRowProps,
                  getTableProps,
                  onInputChange,
                  getBatchActionProps,
                  getSelectionProps,
                  selectedRows
              }) => (
                <TableContainer title="Benutzer" >
                    <TableToolbar>
                        <TableBatchActions {...getBatchActionProps()}>
                            <TableBatchAction
                                renderIcon={Download}
                                iconDescription="Selektierte Benutzerdaten Herunterladen"
                                onClick={()=> console.log("Download")}>
                                Download
                            </TableBatchAction>
                            <TableBatchAction
                                renderIcon={Delete}
                                iconDescription="Selektierte Benutzer löschen"
                                onClick={()=>props.deleteUsers(selectedRows)}>
                                Delete
                            </TableBatchAction>
                        </TableBatchActions>
                        <TableToolbarContent>
                            <TableToolbarSearch onChange={onInputChange} />
                            <TableToolbarMenu>
                              <TableToolbarAction onClick={()=> console.log("Host")}>
                               Historie
                              </TableToolbarAction>
                              <TableToolbarAction onClick={()=> console.log("Anmeldedaten")}>
                                Anmeldedaten
                              </TableToolbarAction>
                              <TableToolbarAction onClick={()=> console.log("Sync")}>
                                Sync mit Keycloak
                              </TableToolbarAction>
                            </TableToolbarMenu>
                            <Button id="new" onClick={()=>props.addUser()}>Neuer benutzer</Button>
                        </TableToolbarContent>
                    </TableToolbar>
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                <TableSelectAll {...getSelectionProps()} />
                                {headers.map((header) => (
                                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow
                                    key={i}
                                    {...getRowProps({ row })}
                                    onClick={(evt) => {
                                        props.setCurrentUser(props.users.find(x => x.id === row.id));
                                    }}>
                                    <TableSelectRow
                                        {...getSelectionProps({ row })}
                                        onSelect={(evt) => {
                                            getSelectionProps({ row }).onSelect(evt);
                                        }}
                                    />
                                    {row.cells.map((cell) => (
                                        <TableCell key={cell.id}>{cell.value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    }else
    {
        return <p>Keine Daten gefunden</p>
    }
}
export default BenutzerTable;

