import axios from "axios"
const api =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5497647da2114041ad647eba8e002d6f`
let data = null
export const getBusinessNews = async () => {

        await axios.get(api)
        .then(res=>{
            console.log(res)
            data = res.data.articles
        })
        .catch(err=>{
            console.log(err)
        })
    return data 
}
// Standalone 