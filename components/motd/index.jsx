
import { useState, useEffect } from 'react'

const Motd = ({ mymotd }) => {
    const [motd, setMotd] = useState(mymotd)  

    // every 100ms put the next letter of the motd into the display

    useEffect(() => {
        const interval = setInterval(() => {
        // set the motd to the next letter of the motd
        setMotd(motd => motd.substring(1) + motd[0])
        }, 200);
        return () => clearInterval(interval);
    })


    return (
        <h1 className='text-6xl text-leafyellow bg-leafpink-100 text-center w-full h-full max-[943px]:text-4xl'>{motd}</h1>
    )
}


export default Motd
