import {Link} from "react-router-dom"
import { NotebookIcon } from "lucide-react";
const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>

            <h2 className="text-2xl font-bold ">
                No Notes Found
            </h2>

            <p className="text-base-content/70">
                You don't have any notes yet. Create your first note!
            </p>
            <Link to="/create" className="btn btn-primary">Create Your First Note</Link>
        </div>
    );
};

export default NotesNotFound;