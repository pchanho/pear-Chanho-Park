import React from 'react';
import { useConversations} from "../../api";
import { NavLink } from "react-router-dom";
import "./joinStyles.css";


export default function Join() {
    const { loading, conversations, error } = useConversations();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
        <div className='join-main'>
            <h1 id='join-heading'>Conversation List</h1>
            <div className="join-container">
                <NavLink to="/create" className="btn-join">+</NavLink>
                {conversations.map(conversation => (
                    <Conversation key={conversation.id} {...conversation} />
                ))}
                {/*<NavLink to="/create" className="btn">+</NavLink>*/}
            </div>
        </div>
    );
}

function Conversation(conversation) {
    const {_id, status, topic, category} = conversation;

    return (
            <div className={`join conversation-${topic}`}  key={topic}>
                <button className="conversation-item" onClick={'/chat'}>
                    {/*{status}*/}
                    Topic:<br></br>{topic}<br></br>Category:<br></br>{category}
                    {/*<NavLink to="/chat" className="btn">Join</NavLink>*/}
                </button>
           </div>
    );
}
