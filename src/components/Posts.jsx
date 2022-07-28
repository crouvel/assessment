import React, { Component, useState, useEffect } from 'react';
import ReactFilterTable from "react-filter-and-pagination-table";
import axios from 'axios';
import { PostCard } from './PostCard';
import './Posts.css'
import Loading from './Loading';


function Posts() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paginate, setpaginate] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios(`/api/posts`)
      .then((response) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
        response.data.posts.forEach(post => {
          post.categories.map(category => {
            if (!categories.includes(category.name)) {
              categories.push(category.name)
            }
          }
          );
        });
        setCategories(categories);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

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

  const showPosts = () => {
    if (posts.length > 0 ) {
      if (!selectedCategory) {
        return posts.slice(0, paginate).map((post) => <PostCard data={post} />);
      }else {
      
      return  posts.filter((post) => post.categories.map((category) => category.name).includes(selectedCategory)).slice(0, paginate).map((post) => <PostCard data={post} />);
      }
       
    } else {
      
      if(loading){
        return( 
        <Loading/>
        );
      }
      if (error) {
        return <p>{error}</p>;
      }

      return <p>We encounter a problem retrieving data.</p>;
    };
  }


  return (
    <>
      {/* <h1 className="text-center mt-1 font-weight-bold font-italic">Posts</h1> */}
      <div className="text-center">
        <div className="cards1">
          {showSelected()}
        </div>
        <button className="btn btn-success" onClick={load_more}>Load More</button>
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