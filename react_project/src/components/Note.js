//http://localhost:3000/note/3z7bjleuvxttzsxlead0qhy9
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [formClass, setFormClass] = useState('');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert("Fill in the blanks");
            return false;
        }
        noteURL = url;
        window.location.href = env.url + "/" + url;
    }

    function searchNote() {
        window.location.href = env.url;
    }

    return (
        <div className="div">
            <div className={lineClass}>
                <h4>Note:</h4>
                <div className="text-3xl">{noteText}</div>
                <div><button className="button" onClick={searchNote}>Watch one more note</button></div>
            </div>
            <div className={errorClass}>
                <p>There's been an error. This hash was not found!</p>
                <div><button className="button" onClick={searchNote}>Back to search</button></div>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <label className="m-2" htmlFor="url">Enter hash note:</label>
                    <input className="peer resize-none rounded-[7px] border px-3 py-3 font-sans text-sm font-normal transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 form-control" type="text" name="url" id="url" />
                    <button type="submit" className=" btn btn-primary button">Search note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;
