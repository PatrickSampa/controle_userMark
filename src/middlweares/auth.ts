import { NextFunction,Request,Response } from "express";
import { verify } from "jsonwebtoken";

type tokenPayload ={
    id: number;
    iat: number;
    exp: number
}


export function authMiddlwares(req: Request, res: Response, next: NextFunction){
    console.log("midd")
    const { authorization } = req.headers;
    console.log(req.headers)
    if(!authorization){
        return res.status(401).json({error: "token not provided"})
    }

    const [, token] = authorization.split(" ");

    try{

        const decode = verify(token, "secret");
        const { id } = decode as tokenPayload;

        req.userId = id;
        next();
    }catch(e){
        return res.status(401).json({error: "token invalid"})
    }
}