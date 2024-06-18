import React from "react";
import { Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useEffect, useState , useRef } from "react";


const ShowMessages = ()=>{

    let user = {
        username:'Ashutosh'
    }

    let messages = [

    ]

    const handleMessageSend = ()=>{

    }
    
    return(
        <div>
            {
               user && <React.Fragment>
                    <header className="w-full py-3 flex flex-row border-b">
                        <Avatar className="ml-5" src='' />
                        <div className="ml-2">
                            <h1 className="text-sm font-bold">{user.username}</h1>
                        </div>
                    </header>
                    <div className="w-full h-full relative">
                        <div  style={{height:'480px',overflow:'auto'}} className="w-full">
                            {
                                messages.map((item,index)=>{
                                    return(
                                        <div key={index} className={
                                            item.sender !== sessionStorage.getItem('user') ? 
                                            "clear-both w-auto text-sm bg-[#4D47C3] float-left p-3 my-2 ml-2 max-w-[500px] text-white rounded-ss rounded-e":
                                            "relative clear-both float-right mr-2 w-auto text-sm p-3 my-2 ml-2 bg-slate-200 max-w-[500px] rounded-s rounded-es px-5"
                                        } 
                                        >
                                            { item.message }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-full flex justify-around items-center relative mt">
                            <form onSubmit={handleMessageSend} className="w-11/12 flex flex-row justify-around">
                                <TextField
                                    className="w-11/12"
                                    id="outlined-multiline-flexible"
                                    maxRows={4}
                                    placeholder="Type Message"
                                    size="small"
                                    name="message"
                                    autoComplete="off"
                                />
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default ShowMessages;