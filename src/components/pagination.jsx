import React, {useState} from 'react'
import { Pagination } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'

const PaginationItem = ({count, setCount}) => {
 


    
    
    return ( 
        <nav className='nav justify-content-center mt-4'>
            <ul className="pagination">
                <li  className={`${count == 1 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/' onClick={() => setCount(1)}>{1}</Link>
                </li>
                <li  className={`${count == 2 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/2' onClick={() => setCount(2)}>{2}</Link>
                </li>
                <li  className={`${count == 3 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/3' onClick={() => setCount(3)}>{3}</Link>
                </li>
                <li  className={`${count == 4 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/4' onClick={() => setCount(4)}>{4}</Link>
                </li>
                <li  className={`${count == 5 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/5' onClick={() => setCount(5)}>{5}</Link>
                </li><li  className={`${count == 6 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/6' onClick={() => setCount(6)}>{6}</Link>
                </li><li  className={`${count == 7 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/7' onClick={() => setCount(7)}>{7}</Link>
                </li>
                <li  className={`${count == 8 ? `active` : ``} page-item`}>
                <Link  className='page-link' to='/page/8' onClick={() => setCount(8)}>{8}</Link>
                </li>
            </ul>
            </nav>
     );
}
 
export default PaginationItem;