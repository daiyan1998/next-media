import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  // POST method

  try {
    const reqBody = await req.json();
    const { content, userId, userName } = reqBody;
    console.log(reqBody);

    const newPost = new Post({
      userId,
      userName,
      content,
    });

    const createdPost = await newPost.save();
    console.log(createdPost);

    return NextResponse.json({
      message: "Post created successfully",
      success: true,
      createdPost,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// GET method
export async function GET() {
  try {
    const allPosts = await Post.find();
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
// Delete method

export async function DELETE(req) {
  try {
    const reqBody = await req.json();
    const id = reqBody.id;
    console.log(id);
    const objectId = new Types.ObjectId(id);

    const res = await Post.deleteOne({ _id: objectId });

    console.log("Delete Response:", res);

    if (res.deletedCount === 0) {
      throw new Error("No matching document found for deletion.");
    }

    return NextResponse.json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
