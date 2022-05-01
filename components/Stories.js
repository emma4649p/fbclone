import StoryCard from "./StoryCard"

const stories = [
  {
    name: "aiony",
    src: "/stories/andrej-lisakov-9DRYbaWevgk-unsplash.jpg",
    profile: "/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg"
  },
  {
    name: "ashton",
    src: "/stories/bruno-van-der-kraan-55ulpBt_z2Q-unsplash.jpg",
    profile: "/profiles/ashton-bingham-EQFtEzJGERg-unsplash.jpg"
  },
  {
    name: "jane",
    src: "/stories/christian-regg-FNaFLvbLFuk-unsplash.jpg",
    profile: "/profiles/jane-almon-7rriIaBH6JY-unsplash.jpg"
  },
  {
    name: "jose",
    src: "/stories/krzysztof-maksimiuk-3JJqKm3b0zg-unsplash.jpg",
    profile: "/profiles/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg"
  },
  {
    name: "kimson",
    src: "/stories/lorenzo-moschi-XG391m6rH_8-unsplash.jpg",
    profile: "/profiles/kimson-doan-HD8KlyWRYYM-unsplash.jpg"
  },
  {
    name: "marin",
    src: "/stories/madhu-shesharam-KQZZCVyEWVk-unsplash.jpg",
    profile: "/profiles/marin-tulard-QdD8NwVjlGU-unsplash.jpg"
  },
  {
    name: "michael",
    src: "/stories/siyuan-hu-Jea4t6pte-k-unsplash.jpg",
    profile: "/profiles/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
  },
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