import type { NextApiRequest, NextApiResponse } from "next";
import { TyCsAPIResponse } from "../../../types";
import { defaultLocale } from "../../../locale/constants";
import { tycs } from "../dbLang";




export default function handler(req:NextApiRequest, res: NextApiResponse<TyCsAPIResponse>){

    const {lang}= req.query as {lang:string};

    const tycsByLanguage = tycs[lang as string] ?? tycs[defaultLocale];
    res.status(200).json(tycsByLanguage);
}
