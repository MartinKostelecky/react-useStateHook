import React, {useState} from "react";

function Details() {

    const date = new Date();
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(null);

    const updateName = () => {
        let name = "Santa Claus";
        setName(name);
        console.log(name);
    }

    const updateAge = () => {
        let age = 2025;
        setAge(age);
        console.log(age);
    }

    const updateEmployed = () => {
        let isEmployed = date.getUTCDate() === 24 && date.getMonth() === 11;
        setIsEmployed(isEmployed);
        console.log(date.getDate());
        console.log(date.getMonth());
        console.log(isEmployed);
    }

    return (
        <div className="container">
            <p className="text">Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p className="text">Age: {age}</p>
            <button onClick={updateAge}>Set age</button>

            <p className="text">Employed: {isEmployed === null ? "" : isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmployed}>Show is employed</button>
        </div>
    );

}

export default Details;