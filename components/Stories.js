import StoryCard from "./StoryCard"

const stories = [
  {
    name: "andrej-lisakov-9DRYbaWevgk-unsplash",
    src: "/stories/andrej-lisakov-9DRYbaWevgk-unsplash.jpg",
    profile: "/stories/andrej-lisakov-9DRYbaWevgk-unsplash.jpg"
  }
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {
        stories.map(story => <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />)
      }
    </div>
  )
}

export default Stories