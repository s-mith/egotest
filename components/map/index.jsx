import StyledLink from "../styledLink"





const Map = ({ active }) => {

    let home = false
    let todo = false

    if (active == "") {
        home = true
    }
    else if (active == "todo") {
        todo = true
    }

    return (
        <div className='grid grid-cols-7 grid-rows-2 h-full text-xl max-[943px]:text-xl max-[943px]:grid-rows-7 max-[943px]:grid-cols-2'>
            <div className='col-span-1 row-span-1'><StyledLink href={"/"} text={"home"} active={home}/></div>
            <div className='col-span-1 row-span-1'><StyledLink href={"/todo"} text={"/todo/"} active={todo}/></div> 
        </div>
        )
}


export default Map
