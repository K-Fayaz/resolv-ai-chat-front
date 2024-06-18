
import { TextField , Avatar  } from "@mui/material";
import Badge from '@mui/material/Badge';
import { Outlet } from "react-router-dom";
import { useState } from "react";


let users = [
    {
        username:'Fayaz',
    },
    {
        username:'Anwar'
    },
    {
        username:'Taiseen'
    },
    {
        username:'Taireen'
    },
]

const Chat = ()=>{

    const [searchText,setSearchText] = useState('');

    const handleSearchInput = ()=>{

    }

    const handleNavigate = ()=>{

    }


    return(
        <div className="w-full h-screen">
            <header className="w-full p-5 border-b">
                <h1>Messages</h1>
            </header>
            <div style={{height:'92vh',overflow:'hidden'}} className="w-full flex flex-row">
                        <div style={{overflowY:'auto'}} className="w-1/4 h-full border-r smooth-scroll">
                            <div className="container z-10 sticky top-0 bg-white flex justify-center py-2">
                                <TextField
                                    className="w-11/12"
                                    size="small"
                                    id="input-with-icon-textfield"
                                    value={searchText}
                                    onChange={handleSearchInput}
                                    variant="outlined"
                                    autoComplete="off"
                                />
                            </div>
                            {
                                users.map((item,index)=>(
                                    <div key={index} onClick={()=> handleNavigate(index) } className="flex flex-row py-3 px-2 border-b z-0 cursor-pointer">
                                        <Avatar className="" src='' />
                                        <div className="w-full">
                                            <div className="flex flex-row justify-between">
                                                <div className="ml-2">
                                                    <h1 className="text-sm font-bold">{item.username}</h1>
                                                </div>
                                            </div>
                                            <div className="text-xs text-500 ml-2 mt-2">
                                                {/* { item.last_message !== null || undefined ? item.last_message.message : "Send your first message..." } */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-3/4 h-full">
                            <Outlet/>
                        </div>
                    </div>
        </div>
    )
}

export default Chat;