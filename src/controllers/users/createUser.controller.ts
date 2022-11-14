import { Request, Response } from "express"
import { AppError, handleError } from "../../errors"
import { IUserRequest } from "../../interfaces/users"
import { createUserService } from "../../services/users/createUser.service"


const createUserController = async (req: Request, res: Response) => {

    try {

        const user: IUserRequest = req.body

        const newUser = await createUserService(user)

        return res.status(201).json(newUser)
    
    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { createUserController }
