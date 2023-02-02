import { NextApiRequest,NextApiResponse } from "next";

import { services } from "@/data";
import { Service } from "@/types";



export default (req:NextApiRequest, res: NextApiResponse<Service[]>) =>{
    res.status(200).json(services)
}