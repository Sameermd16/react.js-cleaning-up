import React from 'react';


function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWindow() {
            console.log('setting up')
            setWindowWidth(window.innerWidth) 
        }
        window.addEventListener('resize', watchWindow)
        return () => {
            console.log("cleaning up")
            window.removeEventListener('resize',watchWindow)
        }
    }, [])


    return(
        <h1>Window width: {windowWidth} </h1>
    )
}

export default WindowTracker;