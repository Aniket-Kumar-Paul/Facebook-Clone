import React from 'react'
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import Post from './Post';

function Posts({ posts }) {
    const [realtimePosts, loadingState, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc') // descending
    );

    return (
        <div>
            {
                realtimePosts ?
                    realtimePosts?.docs.map(post => (
                        <Post
                            key={post.id}
                            name={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data().postImage}
                        />
                    ))
                    : (posts.map((post) => ( // show the prefetched posts
                        <Post
                            key={post.id}
                            name={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data().postImage}
                        />
                    )))}
        </div>
    )
}

export default Posts