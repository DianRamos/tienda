import { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../db";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const tyc= tycs
    res.status(200).json(tyc)
}