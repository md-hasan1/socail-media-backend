import { UserRole } from "@prisma/client";
import prisma from "../../shared/prisma";
import * as bcrypt from "bcrypt";
import config from "../../config";

export const initiateSuperAdmin = async () => {
  const password = "123456789";
  const hashedPassword: string = await bcrypt.hash(
    password!,
    Number(config.bcrypt_salt_rounds)
  );
  const payload: any = {
    firstName: "MD Hasan",
    lastName: "Developer",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: UserRole.SUPER_ADMIN,
  };

  const isExistUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!isExistUser) {
    await prisma.user.create({
      data: payload,
    });
    console.log("admin created");
  }
};
