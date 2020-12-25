import React from 'react'
import ParallaxCard from 'react-parallax-card'
import '../css/style.css';

function Events(){
    return(
        <div className = "container container-fluid">
            <ParallaxCard
                label='Label (optional)'
                enableRotate
                enableTransform
                style={{ margin: '0 auto', width: 240, height: 240 }}>

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ top: '67%', left: '75%' }} />

                <p style={{ fontSize: '3rem', fontWeight: 'bold', padding: '3rem' }}>
                    hello world!
                </p>

            </ParallaxCard>
            <ParallaxCard
                label='Label (optional)'
                enableRotate
                enableTransform
                style={{ margin: '0 auto', width: 240, height: 240 }}>

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ top: '67%', left: '75%' }} />

                <p style={{ fontSize: '3rem', fontWeight: 'bold', padding: '3rem' }}>
                    hello world!
                </p>

            </ParallaxCard>
            <ParallaxCard
                label='Label (optional)'
                enableRotate
                enableTransform
                style={{ margin: '0 auto', width: 240, height: 240 }}>

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />

                <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ top: '67%', left: '75%' }} />

                <p style={{ fontSize: '3rem', fontWeight: 'bold', padding: '3rem' }}>
                    hello world!
                </p>

            </ParallaxCard>
            {/* <ParallaxCard
                label='Label (optional)'
                enableRotate
                style={{ margin: '0 auto', width: 240, height: 240  }}>
                    <p style = {{color : 'black'}}>hello world</p>
                    <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' width='240' />
            </ParallaxCard> */}
        </div>
    )
}

export default Events