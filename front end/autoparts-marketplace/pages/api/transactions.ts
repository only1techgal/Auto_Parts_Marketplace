import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { listingId, buyerId, commission, totalAmount } = req.body;
    const transaction = await prisma.transaction.create({
      data: { listingId, buyerId, commission, totalAmount },
    });
    res.json(transaction);
  }
