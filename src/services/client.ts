import Client from "@/interface/Client";
import axios from "axios";
require('axios')

const http = axios.create({
    baseURL: "http://localhost:8080/api/v1/clients",
    headers: {
        "Content-type": "application/json"
    }
});

export default class ClientService {

  constructor () {}

    create(data: Client) {
        return http.post("/create", data);
    }

}

