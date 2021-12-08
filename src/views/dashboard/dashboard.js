import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar';
import Profilepic from '../../assets/images/pic1.png'
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';
import Gmail from '../../assets/images/gmail.png';
import './dashboard.scss';


class dashboard extends Component {


    render() {
        return (
            <div className='dashboard_root'>
                <Navbar />
                <div class="dashboard">
                    <div class="my_img">
                        <img src={Profilepic} alt='mypic' />
                    </div>
                    <div class="my_intro">
                        <h2>Hello,</h2>
                        <h1 className="job_profile">I'm Vikas Pise...</h1>
                        <span >Frontend Developer</span>
                        <div className='social_links'>
                            <img src={Github} alt='github' onClick={() => window.open('https://github.com/vppise')} />
                            <img style={{ marginLeft: '10px' }} src={Linkedin} alt='linkedin' onClick={() => window.open('https://www.linkedin.com/in/vikas-prakash-pise-l-i-o-n-094b4955/')} />
                            <a href="mailto:vikasppise@gmail.com"><img style={{ marginLeft: '10px' }} src={Gmail} alt='gmail' /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default dashboard;