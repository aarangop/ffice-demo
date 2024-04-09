import { client } from "@/lib/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await client.connect();

    const database = client.db("FfIceDemo");
    const routesCollection = database.collection("routes");
    const res = routesCollection.find({});
    if (res) {
      return NextResponse.json(res.toArray(), { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  await client.connect();

  const database = client.db("FfIceDemo");
  const routesCollection = database.collection("routes");
  const result = await routesCollection.insertOne(req.body);

  if (result.insertedId) {
    return NextResponse.json(
      { insertedId: result.insertedId },
      { status: 200 }
    );
  }
}
