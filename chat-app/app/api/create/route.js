// app/api/getToken/route.ts
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/nextjs";

const api_key = "jrndphb6rq7u";
const api_secret = "5xvqn5j7b58jq7496hfnky6q7x4y85gdv6gwq9rh8e9jv69yb3v5fks75rjvzzan";

export async function GET() {
  const { user } = useUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  console.log(token)
  const user_id = user.id;

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(user_id);

  return Response.json({ token, user_id });
}
