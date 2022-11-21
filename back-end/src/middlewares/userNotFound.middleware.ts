import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities/users"


const userNotFoundMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { username } = req.body

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ username })

    if(!user) {

        return res.status(404).json({ message: 'User not found' })
    }

    next()
}

export { userNotFoundMiddleware }
