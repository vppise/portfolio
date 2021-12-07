import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar';
import './portfolio.scss';

class portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className='comingsoon'>Comming Soon...</h1>
            </div>
        )
    }
}

export default portfolio;