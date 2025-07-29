import { useState } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { settoast } from "../redux/slice/toast_slice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

    var initState = {
        "name": '',
        "author": ''
    }

    const [book, setBook] = useState(initState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const addBook = async () => {
        const config = {
            headers:{
                'authorization':`Bearer ${token}`
            }
        }
        const resp = await axios.post('http://localhost:8082/library-management/books/create', book, config);
        if (resp.status === 200) {
            dispatch(settoast({message: "Book added", type: 'success'}));
        }
        navigate('/list-book');
    }

    return (
        <>
            <p>Add Books</p>
            <input type="text" placeholder="Enter Book Name" onChange={handleChange} name='name' value={book.name}/>
            <input type="text" placeholder="Enter Author Name" onChange={handleChange} name='author' value={book.author}/>
            <button onClick={addBook}>Add book</button>
        </>
    );
};

export default AddBook;