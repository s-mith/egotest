import { useState, useEffect, useContext} from "react"

import { PasswordContext } from "@/pages/_app";


import OffAssignment from "@/components/offAssignment";
import FullTodoMenu from "@/components/fullTodoMenu";


export default function Home() {

    // every minute send a request to api/todo/assignments to get the assignments
    

    
    
    const [assignments, setAssignments] = useState([])

    
    const refresh = async () => {
        fetch("http://"+ process.env.CAPI +":3000/api/todo/assignments")
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


    useEffect(() => {
        refresh()
    }, [])
    



 
    return (
        <div id="page" className="bg-leafbrown bg-opacity-30 w-full h-full overflow-auto">


            <FullTodoMenu />

            
            <div id = "list" key={0}>
                {
                    // map over list of assignments and create an assignment component for each one
                    assignments.map((assignment, id) => {
                        return (
                            <OffAssignment key={id} title={assignment["title"]} due={assignment["due"]} description={assignment["description"]} />
                        )
                    })
                }
            </div>




        </div>

    )
}
