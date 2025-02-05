import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const listings = await prisma.listing.findMany();
    res.json(listings);
  } else if (req.method === "POST") {
    const { title, description, price, category, sellerId } = req.body;
    const listing = await prisma.listing.create({
      data: { title, description, price, category, sellerId },
    });
    res.json(listing);
  }
}
