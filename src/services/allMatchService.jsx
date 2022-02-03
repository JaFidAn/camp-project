import axios from "axios";

export default class AllMatchService{
    getAllMatch(){
        return axios.get("https://localhost:44363/api/AllMatches/getall");
    }

    getMatchById(matchId){
        return axios.get("https://localhost:44363/api/allmatches/getbyid?id="+matchId);
        
    }
}