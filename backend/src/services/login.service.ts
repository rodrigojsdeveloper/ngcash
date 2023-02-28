import { userRepository } from "../repositories/user.repository";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { ILogin } from "../interfaces/login.interface";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

class LoginService {
  public async login(user: ILogin): Promise<{ token: string }> {
    const findUser = await userRepository.findOneBy({
      username: user.username,
    });

    if (!findUser) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const passwordMatch = await compare(user.password, findUser.password);

    if (!passwordMatch) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const token = sign(
      { username: user.username },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
        subject: findUser.id,
      }
    );

    return { token };
  }
}

export { LoginService };
