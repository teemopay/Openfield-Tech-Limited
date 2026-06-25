import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;
    const mode = process.env.NEXT_PUBLIC_MODE;
    const LARK_WEBHOOK_URL =
      mode === "development"
        ? "https://open.larksuite.com/open-apis/bot/v2/hook/20f31138-5cb2-42ef-88c2-3b9d33dd162d"
        : "https://open.larksuite.com/open-apis/bot/v2/hook/2ce52729-5331-40ca-9380-f07400baadb0";
    if (!message) {
      return NextResponse.json(
        { error: "Message cannot be empty" },
        { status: 400 },
      );
    }

    const { telephone, email, message: other } = message;
    const params = [
      [
        {
          tag: "text",
          text: `Telephone: 【${telephone}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `E-mail: 【${email}】`,
        },
      ],
      [
        {
          tag: "text",
          text: `Message: 【${other || "--"}】`,
        },
      ],
      [
        {
          tag: "at",
          user_id: "3e5g5682",
        },
      ],
    ];
    const response = await fetch(LARK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msg_type: "post",
        content: {
          post: {
            zh_cn: {
              title: "【Openfield Tech Limited】官网留言:",
              content: params,
            },
          },
        },
      }),
    });

    if (response.ok) {
      return NextResponse.json({ status: "Message sent successfully" });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
