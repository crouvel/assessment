import {
    useParams,
    Link
} from "react-router-dom";
import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './PostDetail.css';
import Loading from "./Loading";

function PostDetail() {
    let { id } = useParams();
    const [row, setRow] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`/api/posts/`)
            .then((response) => {
                console.log(response.data.posts.filter(obj => {
                    return obj.id == id
                }));
                setRow(response.data.posts.filter(obj => {
                    return obj.id == id
                }))
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const showDetails = () => {
        if (row.length > 0) {
            return (
                <article className="text-center">
                    <h1 className="text-center mt-4 font-italic"><b>Post Details:</b></h1>
                    <h2 className="text-center mt-3 font-italic"><b>{row[0].title}</b></h2>
                    <h4 className="text-center mt-3 mw-20">{row[0].summary}</h4>
                    <h4 className="text-center mt-5"><b>Categories:</b></h4>
                    {row[0].categories.map((category) => <h5 className="text-center"><i>{category.name}</i></h5>)}
                </article>
            );
        } else {
            if (loading) {
                return (
                    <Loading />
                );
            }
            if (error) {
                return <p>{error}</p>;
            }
            return <p>No data to show.</p>;
        };
    }

    return (
        <>
            <div className="btncontainer">
                <Link to="/posts">
                    <button className="btn btn-info mt-3 pl-3" ><b>{"<< BACK TO POSTS"}</b></button>
                </Link>
            </div>
            {showDetails()}
        </>
    );
}

export default PostDetail;