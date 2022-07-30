
/***** POST DETAIL functional component *****/

// Include react-router-dom
import {
    useParams,
    Link
} from "react-router-dom";
import { Component, useState, useEffect } from 'react';

// Include axios
import axios from 'axios';

// Include style
import './PostDetail.css';

// Include Loading Component
import Loading from "./Loading";


function PostDetail() {

    // Constant that stores the post id thanks to useParams react-dom-router function 
    let { id } = useParams();

    // Constants that store all the local states
    const [row, setRow] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        /* Axios request to get the posts from the mock API
        Could have used Redux in order to avoid doing the same request twice in two different components. */
        axios(`/api/posts/`)
            .then((response) => {

                //get the data response
                console.log(response.data.posts.filter(obj => {
                    
                    // filters the fetched data to get the row corresponding to the id obtained in the route parameter
                    return obj.id === id
                }));

                // Sets row value to get the obtained post
                setRow(response.data.posts.filter(obj => {
                    return obj.id === id
                }))
            })
            .catch((error) => {

                //catches error and renders it in the component
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {

                //sets Loading local state to false
                setLoading(false);
            });
    }, []);

    /* Function to render details of the Post */
    const showDetails = () => {

        //Checks of the fetched data is not null
        if (row.length > 0) {

            //Renders the article that displays all the post's informations
            return (
                <article className="text-center">
                    <h1 className="text-center mt-4 font-italic"><b>Post Details:</b></h1>
                    <div className="details">
                        <div className="sub1">
                            <h2 className="text-center mt-4 font-italic"><b>{row[0].title}</b></h2>
                            <h3 className="text-center mt-5 font-italic"><b>Summary:</b></h3>
                            <h4 className="text-center mw-20">{row[0].summary}</h4>
                        </div>
                        <div>
                            <h4 className="mt-3"></h4>
                            <h4 className="text-center"><b></b>By: <img
                                src={row[0].author.avatar}
                                className="photo"
                            /><b>{row[0].author.name}</b></h4>
                        </div>
                        <div className="sub1">
                            <h4 className="text-center mt-3"><b>Categories:</b></h4>
                            {row[0].categories.map((category) => <h5 className="text-center"><i>{category.name}</i></h5>)}
                        </div>
                        <h4 className="pdate text-center mt-2"><b>Published: </b><i>{row[0].publishDate.slice(0, 10)}</i></h4>
                    </div>
                </article>
            );
        } else {

            //Checks if loading local state equals true
            if (loading) {
                return (
                    <Loading />
                );
            }

            //Checks is the error local state is not null
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
                    <button className="btn warn mt-3 pl-3" ><b>{"< BACK TO POSTS"}</b></button>
                </Link>
            </div>
            {showDetails()}
        </>
    );
}

export default PostDetail;