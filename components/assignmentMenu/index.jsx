
import React, { useState, useContext } from 'react'

import StyledButton from '../styledButton'


import { PasswordContext } from "@/pages/_app";




const AssignmentMenu = ({ repeat }) => {

    const [assignments, setAssignments] = useState([])
    const [password,setPassword] = useContext(PasswordContext);

    


    const [title, setTitle] = useState("")
    // due is a date object
    const [due, setDue] = useState(new Date())

    const [days, setDays] = useState([])

    const [time , setTime] = useState(new Date())

    const alternate = (dai) => {
            if (days.includes(dai)) {
                setDays(days.filter((day) => day != dai))
            } else {
                setDays([...days, dai])
            }
    }

    

    const [description, setDescription] = useState("")

    if (!repeat) {
        return (<>
        <div className="col-span-2 row-span-1">
            {/* due date and time*/}
            <input type="datetime-local" className="h-full w-full" onChange={(e) => setDue(e.target.value)} />
        </div>
    
    
        <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
            {/* title text box */}
            <input type="text" placeholder="title" className="h-full w-full" onChange={(e) => setTitle(e.target.value)} />
        </div>
    
        <div className="col-span-1 row-span-2 max-[943px]:col-span-2">
            {/* description text box */}
            <textarea placeholder="description" className="h-full w-full" onChange={(e) => setDescription(e.target.value)} />
    
        </div>
    
        <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
            {/* submit button */}
            <StyledButton text="submit" onclick={ async () => {
                // send post request to api/todo/tasks
                // 
                console.log(password)
                fetch(`http://`+ process.env.CAPI +`/api/todo/assignments`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        password: password,
                        title: title,
                        due: Math.floor(new Date(due).getTime() / 1000),
                        description: description,
                    })
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .then(
                        
                        
                        fetch(`http://`+ process.env.CAPI +`/api/todo/complete`)
                        .then(response => response.json())
                        .then(data => setAssignments(data))
                        .then(console.log(assignments)))
    
                    
            }} />
        </div>
    </>)
    }
    else {

    return (<>
            <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                            {/* 7 toggle buttons titled mon,tue,wed,thu,fri,sat,sun */}
                            <div className="grid grid-cols-7 grid-rows-1">
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="mon" onclick={() => alternate("mon")} selected={days.includes("mon")}/>
                                </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="tue" onclick={() => alternate("tue")} selected={days.includes("tue")}/>
                                    </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="wed" onclick={() => alternate("wed")} selected={days.includes("wed")}/>
                                    </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="thu" onclick={() => alternate("thu")} selected={days.includes("thu")}/>
                                    </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="fri" onclick={() => alternate("fri")} selected={days.includes("fri")}/>
                                    </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="sat" onclick={() => alternate("sat")} selected={days.includes("sat")}/>
                                    </div>
                                <div className="col-span-1 row-span-1">
                                    <StyledButton text="sun" onclick={() => alternate("sun")} selected={days.includes("sun")}/>
                                    </div>
                            </div>
                        </div>
        
                            
        
        
                        <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                            {/* just a time input */}
                            <input type="time" className="h-full w-full" onChange={(e) => setTime(e.target.value)} />
                            
                        </div>
        
        
                        <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                            {/* title text box */}
                            <input type="text" placeholder="title" className="h-full w-full" onChange={(e) => setTitle(e.target.value)} />
                        </div>
        
                        <div className="col-span-1 row-span-2 max-[943px]:col-span-2">
                            {/* description text box */}
                            <textarea placeholder="description" className="h-full w-full" onChange={(e) => setDescription(e.target.value)} />
        
                        </div>
        
                        <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                            {/* submit button */}
                            <StyledButton text="submit" onclick={() => {
                                // send post request to api/todo/tasks
        
                                // take time and put it into the format HH.MM
                                let hours = time.split(":")[0]
                                let minutes = time.split(":")[1]
                                let combined = hours + "." + minutes
                                // for each day in days, send a post request to api/todo/repeat
                                days.forEach((day) => {
                                fetch(`http://`+ process.env.CAPI +`/api/todo/repeat`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        password: password,
                                        title: title,
                                        due: combined,
                                        repeat: day,
                                        description: description,
                                    })
                                })
                                    .then(response => response.json())
                                    .then(data => console.log(data))
                                }
                                )
                            }
                            } />
                        </div>
            </>)
    }
}


export default AssignmentMenu
