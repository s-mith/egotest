
import React, { useState, useContext } from 'react'

import StyledButton from '../styledButton'
import StyledLink from '../styledLink'
import AssignmentMenu from '../assignmentMenu'
import { useRouter } from 'next/router'

import { PasswordContext } from "@/pages/_app";




const FullTodoMenu = () => {

    
    const [password,setPassword] = useContext(PasswordContext);
 
    const [repeat, setRepeat] = useState(false)


    const handleSetPassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const slug = useRouter().asPath
    const second = slug.split('/')[2]

    let tasks = false
    let assignments = false
    let repeatTasks = false
    let completeTasks = false

    if (second == "tasks") {
        tasks = true
    }
    if (second == "assignments") {
        assignments = true
    }
    if (second == "repeat") {
        repeatTasks = true
    }
    if (second == "complete") {
        completeTasks = true
    }



    return (
        <div className="grid grid-cols-2 grid-rows-4 max-[943px]:grid-rows-7">
                <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                    <div className="grid grid-cols-2 grid-rows-1">
                        <div className="col-span-1 row-span-1">
                            <StyledLink text="/tasks/" href={"/todo/tasks"} active={tasks}/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <StyledLink text="/assignments/" href={"/todo/assignments"} active={assignments}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                    <div className="grid grid-cols-2 grid-rows-1">
                        <div className="col-span-1 row-span-1">
                            <StyledLink text="/repeat/" href={"/todo/repeat"} active={repeatTasks}/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <StyledLink text="/complete/" href={"/todo/complete"} active={completeTasks}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                    {/* password text box */}
                    
                    <input type="password" placeholder="password" className="h-full w-full" onChange={handleSetPassword} />
                    
                </div>
                <div className="col-span-1 row-span-1 max-[943px]:col-span-2">
                    <StyledButton text={repeat ? "repeat" : "dont repeat"} onclick={() => setRepeat(!repeat)} selected={repeat} />
                </div>

                
                <AssignmentMenu repeat={repeat}/>


                


            </div>
    )
}



export default FullTodoMenu



