import Note from "../models/Note.js"


// getAllNotes Controller
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        if(notes.length==0){return res.status(200).send({message:"No Notes Available. Create one"})}
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
// END getAllNotes Controller

export async function getNoteByID(req,res){
 try {
    const note=await note.findByID(req.params.id)
    if (!note) {
        return
        res.status(404).json({message:"Note Not Found"});
    }
    res.json(note)
 } catch (error) {
    console.error("Error in getNoteByID controller", error)
        res.status(500).json({ message: "Internal Server Error" })
 }
    
}

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
        const updatedNote = await Note.findByIdAndUpdate(req.params.id , {title, content},{new :true})
        if (!updatedNote) return res.status(404).json({message:"Note Not Found"})
            res.status(200).json(updatedNote)
        
    } catch (error) {
        
        console.error("Error in updateNote controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// END updateNote controller 



export async function deleteNote(req, res) {
    try {
        const deletedNote= await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({message:"Note Not Found"})
            res.status(200).json("Note Deleted Succesfully")

    } catch (error) {
               console.error("Error in deleteNote controller", error)
        res.status(500).json({ message: "Internal Server Error" })
    }

}

