
/**** Functional Component POSTS ****/

import React, { Component, useState, useEffect } from 'react';

// Include axios
import axios from 'axios';

// Include PostCard component
import { PostCard } from './PostCard';

// Include style
import './Posts.css';

// Include Loading component
import Loading from './Loading';


function Posts() {

  // Constants that stores all the local states of the component
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // For pagination
  const [paginate, setpaginate] = useState(8);

  // For the selected category in the filter
  const [selectedCategory, setSelectedCategory] = useState();

  // For the list of categories for each post
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Axios request to retieve the posts from the mock API
    axios(`/api/posts`)
      .then((response) => {
        console.log(response.data.posts);
        // Sets the posts array value
        setPosts(response.data.posts);
        response.data.posts.forEach(post => {

          // Gets the categories for each posts from the fetched data and store it in the local constant categories
          post.categories.map(category => {
            if (!categories.includes(category.name)) {
              categories.push(category.name)
            }
          }
          );
        });

        // Sets local constant categories value
        setCategories(categories);
      })
      .catch((error) => {

        // Eventually catches the error and render it
        console.error("Error fetching data: ", error);
        setError(error);

      })
      .finally(() => {

        // Finally sets the local state loasing to false
        setLoading(false);

      });
  }, []);

  // Set pagination value to load more content
  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  // Change the value of the selected category when filtering b category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Shows the "filter by category" filter
  const showSelected = () => {
    return (
      <div className="mt-2">
        <div className="cat-text">Filter by Categories:</div>
        <div>
          <select
            className="select1 mt-1"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {categories.map((category) => <option value={category}>{category}</option>)
            }
          </select>
        </div>
      </div>
    );
  }

  // Show all the posts in PostCards
  const showPosts = () => {

    // Check if the posts list is not null
    if (posts.length > 0) {

      // Check if there's an enabled filter for a specific category
      if (!selectedCategory) {
        return posts.slice(0, paginate).map((post) => <PostCard data={post} />);
      } else {
        return posts.filter((post) => post.categories.map((category) => category.name).includes(selectedCategory)).slice(0, paginate).map((post) => <PostCard data={post} />);
      }
    } else {

      // Check if the local state loading equals true
      if (loading) {
        return (
          <Loading />
        );
      }

      // Check if the error local state is not null
      if (error) {
        return <p>{error}</p>;
      }
      return <p>No data to show.</p>;
    };
  }

  return (
    <>
       <h1 className="text-center mt-4"><b>Posts</b></h1>
      <h2 className="text-center mt-2 mb-5">You can reach the posts here ...</h2>
      <div className="text-center mb-3">
        <div className="mt-2 mb-3">
          {showSelected()}
        </div>
        <button className="btn load mt-2" onClick={load_more}>Load More</button>
        {posts.length > 0 ?
        <h4 className="mt-3"><b>{paginate} out of {selectedCategory? posts.filter((post) => post.categories.map((category) => category.name).includes(selectedCategory)).length : posts.length }</b></h4> :
        null}
      </div>
      <div className="cards">
        {
          showPosts()
        }
      </div>
    </>
  );
}

export default Posts;