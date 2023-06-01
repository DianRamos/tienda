import { NextApiRequest, NextApiResponse } from "next"
import {products} from "../db"


export default function handler(req: NextApiRequest, res: NextApiResponse){

const productsr = products
res.status(200).json(productsr)
    
}

