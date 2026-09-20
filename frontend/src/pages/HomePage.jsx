import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import RateLimitidUi from "../components/RateLimitidUi"
import axios from "axios"
import toast from "react-hot-toast"
const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes')
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)

      } catch (error) {
        console.log("Error Fetching Notes", error)
        console.log( error)
        if (error.response.status === 429) {
          setIsRateLimited(true)

        } else {
          toast.error("Failed To Load Notes")
        }
      } finally{
        setLoading(false)
      }

    }
    fetchNotes()
  }, [])

  return (
    <div className="nim-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitidUi />}

      <div className="max-w-7xl mx-auto p-4 my-6"> 
       { <div className="text-center text-primary py-10">Loading notes...</div>}
        </div>
    </div>
  )
}

export default HomePage;
