import React from 'react'
import Input from './Input'
import Navbar from './Navbar'
import Output from './Output'
import { Redirect } from "react-router-dom";

function Home(props) {

    const [output, setOutput] = React.useState();
    const [display, setDisplay] = React.useState();

    function setResult(arr,display) {
        setOutput(arr);
        setDisplay(display);
    }

    if(JSON.parse(localStorage.getItem('user')) === null) {
        // console.log(JSON.parse(localStorage.getItem('user')))
        return <Redirect to ='/welcome' />
    }



    return (
        <>
            <Navbar userName={props.userName}/>
            <Input setResult={setResult}/>
            {output && display && <Output output={output} display={display}/>}
        </>
    )
}

export default Home