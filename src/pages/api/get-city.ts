import { http } from "@/services/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function serverSideCall(req:NextApiRequest,res:NextApiResponse){
 const {q} = req.query
 const response = await http.get(`/geo/1.0/direct`, {params: {
    q,
    limit: 5,
    appid: process.env.APP_ID
}})
return res.status(200).json(response.data)

}