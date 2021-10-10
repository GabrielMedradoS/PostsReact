import P from 'prop-types';
import React from 'react';
import { PostCard } from '../PostCard'
import './Posts.css'

export const Posts = ({ posts = [] }) => ( //poderia ser com return tmb
    <div className="posts">

    {posts.map(post => ( //sempre que tiver um map tem que ter um key unica
      <PostCard
      key={post.id}
      title={post.title}
      body={post.body}
      cover={post.cover}/>
    ))}
  </div>
)

/* Posts.defaultProps = {
  posts: [],
}; */

Posts.propTypes = {
  posts: P.arrayOf(P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  }))
}
