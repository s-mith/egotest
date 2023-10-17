// "assign":1696737600,"completed":false,"description":"2mg estrodial, 100mg spiro","due":1696737600,"title":"take Hrt","uuid":"a0d6a4a5-d189-447e-950f-0bd99d4f95b7"

import StyledButton from "../styledButton"



const CompleteAssignment = ({ description, due, title, }) => {

    // unix time to date
    const dueDate = new Date(due * 1000)
    const dueTimeString = dueDate.toLocaleTimeString()
    const dueDateString = dueDate.toLocaleDateString()


    return (
        <div className="grid grid-cols-3 grid-rows-2 bg-leafpink-500 border-double border-4 border-leafyellow"> 



                <div className="col-span-1 row-span-1 max-[943px]:col-span-3">
                    <h1 className="text-leafyellow text-2xl bg-leafbrown opacity-90">{dueDateString}</h1>
                    <h1 className="text-leafyellow text-xl bg-leafbrown opacity-80">{dueTimeString}</h1>
                </div>
                <div className="col-span-2 row-span-1 max-[943px]:col-span-3">
                    <h1 className="text-leafyellow text-2xl">{title}</h1>
                </div>
                {/* complete button */}
                <div className="col-span-1 row-span-1 max-[943px]:col-span-3">
                    <StyledButton text="Completed" disabled={true}/>
                </div>
                <div className="col-span-2 row-span-1 max-[943px]:col-span-3">
                    <h1 className="text-leafyellow text-l">{description}</h1>
                </div>

            

        </div>
    )
}


export default CompleteAssignment
