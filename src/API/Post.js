import axios from "axios";

export async function postSelectedTag(data,setVisible,setSuccess){
    await axios.post("https://localhost:7056/api/setselectedtag",data)
    .then(()=>setSuccess(true))
    .catch((e)=>{
        setVisible(true);
        console.log(e.message);
        setSuccess(false);
    });
}
export async function postGeneralData(data,setVisible,setSuccess) {
    await axios.post("https://localhost:7056/api/postgeneraldata",JSON.stringify(data))
    .then(()=>{
        setSuccess(true);
    })
    .catch((e)=>{
        console.log("Post error"+e.message);
        setVisible(true);
        setSuccess(false);
    })
}

export async function postProductsData(data,setVisible,setSuccess) {
    await axios.post("https://localhost:7056/api/postproductdata",JSON.stringify(data))
    .then(()=>{
        setSuccess(true);
    })
    .catch((e)=>{
        console.log("Post error"+e.message);
        setVisible(true);
        setSuccess(false);
    })
}