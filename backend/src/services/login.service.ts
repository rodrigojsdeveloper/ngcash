import { userRepository } from "../repositories/userRepository";
import { ISessionRequest } from "../interfaces/session";
import { UnauthorizedError } from "../errors";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

class LoginServices {
  async login(user: ISessionRequest): Promise<{ token: string }> {
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

export { LoginServices };
