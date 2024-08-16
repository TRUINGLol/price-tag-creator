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
        try{
            setIsLoading(true);
            const responce = await axios.get("https://localhost:7056/api/tags");
            setData(responce.data);
            setIsLoading(false);
        }
        catch(e){
            setIsLoading(true);
            console.error("Fetch error:", e.message);
        }
    }
}