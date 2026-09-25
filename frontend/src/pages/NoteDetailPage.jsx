import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../lib/axios"
import { toast } from "react-hot-toast"
import { ArrowLeftIcon, LoaderIcon, Trash } from "lucide-react"
import { Link } from "react-router-dom"

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)


  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)

      } catch (error) {
        console.log("Error in fetching note", error)
        toast.error('Failed to fetch note')
      } finally {
        setLoading(false)
      }


    }
    fetchNote()
  }, [id])
  const handleDelete = () => {

  }


  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">

            <Link to={`/`} className="btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5" />
              Back To Notes
            </Link>

            <button className="btn btn-error btn-outline" onClick={(e) => { handleDelete(e, note._id) }}>
              <Trash className="h-5 w-4" /> Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text"
                  placeholder="Note Title "
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({...note , title:e.target.value})}
                  />

              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea type="text"
                  placeholder="Write your note here..."
                  className="input input-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({...note , content:e.target.value})}
                />
              </div>
              <div className="card-action just">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
