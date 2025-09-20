// app/api/getToken/route.ts
import { StreamChat } from "stream-chat";


const api_key ="js7hnt7u44ev";
const api_secret = "ga39ajz5thacxzzga5g9abgw27tb45p7dkyb5yw49dk3t5zqh783gj87cvexpd9v";
const user_id = "user_32N6IQbJbFS0OGaQp2LuBoN1ftM";
export async function GET() {
  
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(user_id);
  console.log(token)

  // return Response.json({ token, user_id });
  return Response.json({message: "Hello Worlddd!"});
}
