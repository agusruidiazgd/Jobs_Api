import React from 'react';
import './Table.scss';

const Table = ({id, name, avatar,job,children}) =>{
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td><img className="avatar" src={avatar}/></td>
            <td>{job}</td>
            {children}
        </tr>
    );
}


export default Table;
