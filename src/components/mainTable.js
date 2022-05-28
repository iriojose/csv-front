import {Table} from 'react-bootstrap'
import React from 'react';

function MainTable(props) {
	return (
        <Table striped bordered hover size="xl">
            <thead>
                <tr>
                    {props.columns && props.columns.map((col) => {
                        return <th>{col}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map((item,i) => {
                    return item.lines.map((line) => {
                        return (
                            <tr key={i}>
                                <td>{item.file}</td>
                                <td>{line.text}</td>
                                <td>{line.number}</td>
                                <td>{line.hex}</td>
                            </tr>
                        )
                    })
                })}
            </tbody>
        </Table>
	);
}

export default MainTable;
