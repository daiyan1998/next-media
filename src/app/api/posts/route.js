import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  // POST method
  try {
    const reqBody = await req.json();
    const { content, userId, userName } = reqBody;
    console.log(content);

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
export async function GET(req) {
  try {
    const allPosts = await Post.find();
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
