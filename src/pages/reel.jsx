import React from 'react'

import Banner from '../template/banner'
import Footer from '../template/footer'
import ReelVideo from '../images/mov_bbb.mp4'

import './reel.css'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export default props => {
    return (
        <>
            <Banner>
                <h1>Reel2</h1>
            </Banner>
            <div className="pageMargin">
                <div className="reelContainer">
                    <Video
                        loop
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={ReelVideo} type="video/webm" />
                    </Video>
                </div>
            </div>
            <Footer/>
        </>
    )
}