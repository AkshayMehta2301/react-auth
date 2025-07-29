import { useEffect, useState } from "react";
import axios from "axios";

const ListBook = () => {

    const [bookList, setBookList] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(()=> {
        const getBooksData = async () => {
            const config = {
                headers:{
                    'authorization':`Bearer ${token}`
                }
            }
            const resp = await axios.get('http://localhost:8082/library-management/books', config);
            if (resp.status === 200) {
                setBookList(resp.data);
            }
        };
        getBooksData();
    }, [])

    return (
        <>
            <p>All Books</p>
            {bookList && bookList.map((book) => (
                <div>
                    <p>{book.name}</p>
                    <p>{book.author}</p>
                </div>
            ))}
        </>
    );
}

export default ListBook;