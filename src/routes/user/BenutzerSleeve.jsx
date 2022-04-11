import React, { useState, useEffect } from 'react'
import BenutzerTable from "./BenutzerTable";
import BenutzerForm from "./BenutzerForm";
import {empty} from "./BenutzerMeta";

export default (props) => {
    let url = "/benrrs-basis/v1/benutzer";
    const [ users, setUsers ] = useState( [] ),
            srv = (method, benutzer) => {
            fetch(method==="DELETE"?`${url}/${benutzer.id}`:url,{headers: {
                    "Content-Type": "application/json"
                },method:method, body: (benutzer)? JSON.stringify(benutzer):undefined})
                .then((response) => response.json())
                .then((data) => {
                    switch (method){
                        case "GET":
                            setUsers(data);
                            break;
                        case "PUT":
                            srv("GET");
                            break;
                        case "POST":
                            benutzer.id = data["digitaleIdentitaeten"][0].id;
                            setUsers([ ...users, benutzer ])
                            props.setCurrentUser(benutzer);
                            break
                        case "DELETE":
                            srv("GET");
                            break;
                    }
                })
                .catch((error) => {
                    // show toast
                }).finally(()=>{
                    // do something
            });
        },
    addUser = () => {
        props.setCurrentUser(empty);
        props.setMode(1);
    },
    updateUser = (id, updatedBenutzer) => {
        if (id){
            srv("PUT", updatedBenutzer);
        }else{
            srv("POST", updatedBenutzer);
        }
        props.setMode(0);
    },
    deleteUsers = (delArray) => {
        for (const row of delArray){
            srv("DELETE", {id:row.id});
        }
    }

    useEffect(() => {
        srv("GET");
    }, []);

    if (props.mode === 0){
        return(<BenutzerTable users={users} setCurrentUser={props.setCurrentUser}
                  addUser={addUser} deleteUsers={deleteUsers}/>)
    }else{
        return (
            <BenutzerForm
                currentUser={props.currentUser}
                updateUser={updateUser}
            />
        )
    }

}



