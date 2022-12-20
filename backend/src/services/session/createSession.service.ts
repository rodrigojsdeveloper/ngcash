import { userRepository } from "../../repositories/userRepository";
import { ISessionRequest } from "../../interfaces/session";
import { UnauthorizedError } from "../../errors";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const createSessionService = async (user: ISessionRequest): Promise<object> => {
  const findUser = await userRepository.findOneBy({ username: user.username });

  if (!findUser) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const passwordMatch = await compare(user.password, findUser.password);

  if (!passwordMatch) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const token = jwt.sign(
    { username: user.username },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: findUser.id,
    }
  );

  return { token };
};

export { createSessionService };
