import React from "react";
import { Link } from "react-router-dom";

import { FaHeartbeat } from "react-icons/fa"

import './JoinRoom.css'

export default function JoinRoom() {
    return (
        <div>
            {/* <h1>Room here...</h1> */}
            <div className="join-container">
                <header className="join-header">
                    <h1><i className="fas fa-smile"> <FaHeartbeat/></i> Join Room</h1>
                </header>
                <main className="join-main">
                    <form >
                        <div className="form-control">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter username..."
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label for="room">Room</label>
                            <select name="room" id="room">
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python">Python</option>
                                <option value="PHP">PHP</option>
                                <option value="C#">C#</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Java">Java</option>
                            </select>
                        </div>
                        <Link to='/ChatRoom'>
                            <button type="submit" className="btn">Join Chat</button>
                        </Link>
                    </form>
                </main>
            </div>
        </div>
    );
}