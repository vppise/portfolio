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
            <div>
                <Navbar />
                <div class="dashboard">
                    <div class="my_img">
                        <img src={Profilepic} alt='mypic' />
                    </div>
                    <div class="my_intro">
                        <h5>Hello,</h5>
                        <h1>I'm Vikas Pise...</h1>
                        <h3 class="job_profile">Frontend Developer</h3>
                        <div className='social_links'>
                            <img src={Github} alt='github' onClick={() => window.open('https://github.com/vppise')} />
                            <img src={Linkedin} alt='linkedin' onClick={() => window.open('https://www.linkedin.com/in/vikas-prakash-pise-l-i-o-n-094b4955/')} />
                            <a href="mailto:vikasppise@gmail.com"><img src={Gmail} alt='gmail' /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default dashboard;