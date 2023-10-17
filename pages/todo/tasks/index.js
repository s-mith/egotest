import { useState, useContext, useEffect } from 'react'
import React from "react";
import { PasswordContext } from "@/pages/_app";



import Assignment from "@/components/assignment";
import FullTodoMenu from "@/components/fullTodoMenu";


export default function Home() {

    // every minute send a request to api/todo/assignments to get the assignments


    

    const [assignments, setAssignments] = useState([])

    



    const refresh = async () => {
        fetch("http://"+ process.env.CAPI +":3000/api/todo/tasks")
            .then(response => response.json())
            .then(data => setAssignments(data))
            .then(console.log(assignments))
    } 

    useEffect(() => {
        const interval = setInterval(() => {
            // fetch assignments

            refresh()
            
        }
            , 5000);
        return () => clearInterval(interval);
    }
        , []);

    // fetch assignments on page load
    useEffect(() => {
        refresh()
    }, [])

    // repeat menu is a chunk of jsx

    

 
    return (
        <div id="page" className="bg-leafbrown bg-opacity-30 w-full h-full overflow-auto">
            
            
            <FullTodoMenu /> 
            

                <div id = "list" key={0}>
                    {
                        // map over dictionary of assignments and create an assignment component for each
                        Object.keys(assignments).map((key) => {
                            return <Assignment key={key} id={key} refresh={refresh} due={assignments[key]["due"]} description={assignments[key]["description"]} title={assignments[key]["title"]} />
                        })
                    }
                </div>





        </div>

    )
}
