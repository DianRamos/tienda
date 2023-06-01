import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsAPIResponse} from "../../../types";
import { defaultLocale } from "../../../locale/constants";
import { products } from "../dbLang";




export default function handler(req:NextApiRequest, res: NextApiResponse<ProductsAPIResponse>){

    const {lang}= req.query as {lang:string};

    const productsByLanguage = products[lang as string] ?? products[defaultLocale];
    res.status(200).json(productsByLanguage);
}
