import { useState } from "react"
import Banner from "./Banner"
import Phones from "./Phones"

const Home = () => {
  const [searchIp, setSearchIp] = useState('iphone')
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchIp(e.target.search.value);
  }
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="rounded-lg flex justify-center items-center gap-4 my-4 py-2">
        <input type="text" placeholder="search here" name="search"
          className="p-4 my-2 input input-bordered input-primary w-full max-w-xs lg:max-w-lg" />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <Banner />
      <Phones searchIp={searchIp}/>
    </div>
  )
}

export default Home