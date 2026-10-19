import axios from "axios";
const api=axios.create({
    baseURL:"https://notesapp-cigq.onrender.com//api"
})
export default api;