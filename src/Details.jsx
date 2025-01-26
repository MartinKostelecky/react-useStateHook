import React, {useState} from "react";

function Details() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        let name = "Santa Claus"
        setName(name);
        console.log(name);
    }

    const updateAge = () => {
        let age = 2025;
        setAge(age);
        console.log(age);
    }

    //TODO change to employed only on 24th of December
    const updateEmployed = () => {
        let isEmployed = false;
        setIsEmployed(!isEmployed);
        console.log(isEmployed);
    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set age</button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmployed}>Set employed</button>
        </div>
    )

}

export default Details;