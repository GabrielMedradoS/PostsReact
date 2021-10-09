import { PostCard } from '../PostCard'
import './Posts.css'

export const Posts = ({ posts }) => ( //poderia ser com return tmb
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