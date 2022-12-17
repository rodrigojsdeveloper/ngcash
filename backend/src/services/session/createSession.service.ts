import { userRepository } from "../../repositories/user.repository";
import { ISessionRequest } from "../../interfaces/session";
import { AppError } from "../../errors";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const createSessionService = async ({
  username,
  password,
}: ISessionRequest): Promise<object> => {
  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ username }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });

  return { token };
};

export { createSessionService };
