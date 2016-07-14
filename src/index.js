import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const hola = [
    {
        id: 1,
        name: 'Zami',
        status: 'Chido'
    },
    {
        id: 2,
        name: 'Zami2',
        status: 'Chido-One'
    }
]

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TableExampleSimple listaCosas={hola}/>
      </MuiThemeProvider>
    );
  }
}



const TableExampleSimple = ({listaCosas}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {listaCosas.map((element, index) => {
            return (
                <TableRow key={index}>
                    <TableRowColumn>{element.id}</TableRowColumn>
                    <TableRowColumn>{element.name}</TableRowColumn>
                    <TableRowColumn>{element.status}</TableRowColumn>
                </TableRow>
            )
        })}
      
      
    </TableBody>
  </Table>
);

TableExampleSimple.propTypes = {
	listaCosas: PropTypes.array.isRequired
};


render(<Main />,
	document.getElementById('app')
);
