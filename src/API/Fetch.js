import axios from "axios";

export default class Fetch{
    static async fetchTagsByCount(setData,setIsLoading,count){
        setIsLoading(true);
        await axios.get(`https://localhost:7056/api/tag?count=${count}`)
        .then((responce)=>{
            setIsLoading(false);
            setData(responce.data)
        })
        .catch((e)=>{
            console.log(e.message);
            setIsLoading(true);
        });
    }

    static async fetchAllTags(setData,setIsLoading){
        setIsLoading(true);
        await axios.get("https://localhost:7056/api/tags")
        .then((responce)=>{
            setIsLoading(false);
            setData(responce.data);
        })
        .catch((e)=>{
            setIsLoading(true);
            console.log("Fetch error:"+e.message);
        });
    }
}