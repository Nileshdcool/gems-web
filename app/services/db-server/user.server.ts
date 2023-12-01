import type { User } from "@prisma/client";
import { prisma } from "~/services/db.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByPubkey(pubkey: User["pubkey"]) {
  return prisma.user.findUnique({ where: { pubkey } });
}

export async function createUser(pubkey: User["pubkey"]) {
  return prisma.user.create({
    data: {
      pubkey,
    },
  });
}

export async function deleteUserByPubkey(pubkey: User["pubkey"]) {
  return prisma.user.delete({ where: { pubkey } });
}

interface UserParams {
  username?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  banner?: string;
}

export async function findOrCreateUserByPubKey(
  pubkey: string,
  input: UserParams
) {
  let select = {
    id: true,
    pubkey: true,
    firstLogin: true,
  };
  let user = await prisma.user.findUnique({
    where: { pubkey },
  });

  if (user) {
    return user;
  }

  return await prisma.user.create({
    data: {
      pubkey,
    },
    select,
  });
}
