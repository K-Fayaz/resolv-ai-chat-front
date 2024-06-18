

import { TextField , Button , Avatar } from '@mui/material';
import { useRef , useState } from 'react';


const Login = ()=>{

    const inputRef = useRef(null);
    let [error,setError] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(inputRef.current !== null) {
            let username = inputRef.current?.querySelector('input')?.value;
            if(!username || username.length < 3)
            {
                setError(true);
                return;
            }

            alert("User has been created!!")

        }

    }

    const avatars = [
        {
            image:'bear.png',
            alt:'Bear'
        },
        {
            image:'../Assets/cat.png',
            alt:'Cat'
        },
        {
            image:'../Assets/penguin.png',
            alt:'Penguin'
        },
        {
            image:'../Assets/rabbit.png',
            alt:'Rabbit'
        }
    ];

    return(
        <div className="w-full h-screen grid place-items-center">
            <div className="w-1/4 p-5 rounded-sm shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <TextField 
                            ref={inputRef} 
                            className='w-full' 
                            error={error}
                            id="outlined-basic" 
                            size='small' 
                            label="enter username" 
                            variant="outlined" 
                            autoComplete='off'
                            helperText={error ? 'Username must atleast three letters':''}
                        />
                    </div>
                    <Button type='submit' variant='contained' size='small'>Login</Button>
                </form>
            </div>            
        </div>
    )
};

export default Login;