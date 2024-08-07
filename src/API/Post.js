import axios from "axios";

export default class Post{
    static async postData(data){
        try{
            await axios.post("https://localhost:7056/api/postdata",data);
        }
        catch(e){
            console.error("post error:"+e.message);
        }
    }
}