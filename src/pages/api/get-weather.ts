import { http } from "@/services/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function serverSideCall(req:NextApiRequest,res:NextApiResponse){
 const {lat,lon} = req.query
 const response = await http.get(`/data/2.5/weather`, {params: {
    lat,
    lon,
    appid: process.env.APP_ID
}})
return res.status(200).json(response.data)

}