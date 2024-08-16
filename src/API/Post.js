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
export async function postForm(data,setVisible,setSuccess) {
    await axios.post("https://localhost:7056/api/postformdata",data)
    .then(()=>{
        setSuccess(true);
    })
    .catch((e)=>{
        console.log("Post error"+e.message);
        setVisible(true);
        setSuccess(false);
    })
}