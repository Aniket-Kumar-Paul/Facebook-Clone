import React from 'react'
import StoryCard from './StoryCard'

// currently doing manual
const stories = [
  {
    name: "Sunny Singh",
    src: "https://links.papareact.com/zof",
    profile: "http://links.papareact.com/l4v"
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk"
  },
  {
    name: "Sunny Singh",
    src: "https://links.papareact.com/zof",
    profile: "http://links.papareact.com/l4v"
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk"
  },
  {
    name: "Sunny Singh",
    src: "https://links.papareact.com/zof",
    profile: "http://links.papareact.com/l4v"
  }
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories