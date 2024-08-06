import axios from "axios";

export default class Fetch{
    static async fetchTagsByCount(setData,setIsLoading,count){
        try{
            setIsLoading(true);
            const responce = await axios.get(`https://localhost:7056/api/tag?count=${count}`);
            setData(responce.data);        
            setIsLoading(false);
        }
        catch(e){
            setIsLoading(true);
            console.error("Fetch error:", e.message)
        }
    }

    
}