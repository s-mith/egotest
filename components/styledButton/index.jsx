

const StyledButton = ({ text, onclick, disabled, selected }) => {

    if (selected) {
        return <button onClick={onclick} className='transition  text-black py-2 border-2 border-dashed bg-leafbrown border-leafpink-100 cursor-pointer hover:transition-all w-full h-full hover:bg-leafyellow'>{text}</button>
    }
    else if (disabled) {
        return (
            <button disabled className='transition opacity-40 bg-leafyellow text-black py-2 border-2 border-dashed border-leafpink-100 cursor-pointer w-full h-full '>{text}</button>
        )
    }
    else{

        return (
            <button onClick={onclick} className='transition bg-leafyellow text-black py-2 border-2 border-dashed border-leafpink-100 cursor-pointer hover:transition-all w-full h-full hover:bg-leafbrown'>{text}</button>
        )
    }
}


export default StyledButton
