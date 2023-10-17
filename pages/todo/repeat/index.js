import { useState, useEffect, useContext } from "react"
import { PasswordContext } from "@/pages/_app";





import FullTodoMenu from "@/components/fullTodoMenu";
import RepeatAssignment from "@/components/repeatAssignment";

export default function Home() {

    // every minute send a request to api/todo/assignments to get the assignments


    
    
    const [assignments, setAssignments] = useState([])


    const refresh = async () => {
        fetch(`https://`+ process.env.CAPI +`/api/todo/repeat`)
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
                    assignments.map((assignment, id) => {
                        return (
                            <RepeatAssignment key={id} due={assignment["due"]} description={assignment["description"]} repeat={assignment["repeat"]} title={assignment["title"]}/>
                        )
                    })
                }
            </div>




        </div>

    )
}
