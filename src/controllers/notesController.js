import Note from "../models/Note.js"


// getAllNotes Controller
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
// END getAllNotes Controller


//createNote controller 
export async function createANote(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
//END createNote controller 


//updateNote controller 

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id , {title, content},{new :true,})
        if (!updatedNote) return res.status(404).json({message:"Note Not Found"})
            res.status(200).json(updatedNote)
        
    } catch (error) {
        
  console.error("Error in updateNote controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// END updateNote controller 



export function deleteNote(req, res) {
    res.status(201).json({ message: "Note deleted succeddfully!" })
}