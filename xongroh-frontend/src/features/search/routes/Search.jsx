import SearchCard from '@/features/search/components/SearchCard'
import PopularSearchFeed from '@/features/search/components/PopularSearchFeed'

const Search = () => {
  return (
    <div className="overflow-hidden">
      <SearchCard />
      <PopularSearchFeed />
    </div>
  )
}

export default Search
