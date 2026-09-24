import Link from "lucide-react"
import { NotebookIcon } from "lucide-react";
const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">
                <NotebookIcon className="size-10 text-primary" />
            </div>

            <h2 className="text-2xl font-bold text-base-content mb-2">
                No Notes Found
            </h2>

            <p className="text-base-content/60">
                You don't have any notes yet. Create your first note!
            </p>
            <Link to={"/cre"}></Link>
        </div>
    );
};

export default NotesNotFound;