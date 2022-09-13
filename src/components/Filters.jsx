import React from 'react';
import {Link, useParams} from 'react-router-dom'

const Filters = () => {
    const {filter: activeFilter = 'all'} = useParams()

    return (
        <div style={{display: 'flex', gap: '0.75rem'}}>
            <Link to="/all" style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</Link>
            <Link to="/active" style={{color: activeFilter === 'active' ? 'red' : 'black'}}>active</Link>
            <Link to="/completed" style={{color: activeFilter === 'completed' ? 'red' : 'black'}}>completed</Link>
        </div>
    );
};

export default Filters;
