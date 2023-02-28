import jwt from "jsonwebtoken";

export const encodeToken = (data: string | object) =>{
    let token = jwt.sign({data},'SCMSystem', {expiresIn:'2h'});
    console.log(token)
    return token
}

export const checkToken = (token: string)=>{
    const verifyToken = jwt.verify(token,'SCMSystem' )

    if(verifyToken){
        console.log(verifyToken)

        return true;
    }else{
        console.log(verifyToken)
        return false
    }
}

export const decode = (token: string)=>{
    return jwt.decode(token);
}


export const kiemTraToken = (req: { headers: { accessToken: string; }; },res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void) =>{
    let {accessToken} = req.headers;
    console.log(accessToken)
    try {
        if(checkToken(accessToken)){
            next()
        }
    } catch (error) {
        res.status(401).send("token khong hop le")
    }
}

