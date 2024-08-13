import axios from "axios";

export default async function usePost(data,setVisible,setSuccess){
    await axios.post("https://localhost:7056/api/setselectedtag",data)
    .then(()=>setSuccess(true))
    .catch((e)=>{
        setVisible(true);
        console.log(e.message);
        setSuccess(false);
    });
}