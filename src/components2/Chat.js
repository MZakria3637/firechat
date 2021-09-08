import React, { useEffect, useState } from 'react'
import { db } from '../firbase';
import SignOut from './SignOut'
const Items = ({ messages }) => {
    const newlist = messages.map((doc, index) => {
        return (
            <p
                key={index}
            >
                {doc.data()?.id} - {doc.data()?.text}
            </p>
        );
    })
    return (<div className="test">
        {newlist}
    </div>);
}
function Chat() {
    const [messages, setmessages] = useState([]);
    useEffect(() => {
        db.collection("messages").get().then((col) =>
            setmessages(col.docs)
        )
    }, []);

    return (
        <>
            <SignOut />
            <h1>Hello world</h1>
            <Items messages={messages} />
        </>
    )
}

export default Chat
