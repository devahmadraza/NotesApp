import express from "express"
import { getAllNotes , createANote ,updateNote ,deleteNote } from '../controllers/notesController.js';
const router=express.Router();

router.get("/" ,getAllNotes)
router.get("/:id" ,getNoteByID)
router.post("/",createANote)
router.put("/:id", updateNote)
router.delete('/:id', deleteNote)

export default router;