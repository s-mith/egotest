





const StyledLink = ({ text, href, active}) => {


    if (active) {
        return <a href={href} className=' transition text-center text-leafyellow drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:transition-all hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'><h1>{text}</h1></a>
    }
    else {
        return <a href={href} className=' transition text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:transition-all hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'><h1>{text}</h1></a>
    }
}


export default StyledLink
