import React from "react";
import { useState } from "react";
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); //скрываем
    const [formClass, setFormClass] = useState('');

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + "/" + response.url);
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Fill in the blanks');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div className="div">
            <div className="flex flex-row">
                <form onSubmit={loadDataFromForm} className={`${formClass} flex justify-center items-center`}>
                    <label className="flex m-2" htmlFor="">Enter a note:</label>
                    <textarea className="peer resize-none rounded-[7px] border px-3 py-1 font-sans text-sm font-normal transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" name="note" id="note" placeholder="Link hash"></textarea>
                    <button className="button" type="submit">Create</button>
                </form>
                <div className={lineClass}>
                    <div className="font-bold">{url}</div>
                    <div><button className="button" onClick={() => { window.location.reload() }}>Create new</button></div>
                </div>
            </div>
        </div >
    );
}

export default Create;