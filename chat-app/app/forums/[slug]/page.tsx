import ChatForum from "@/app/components/chatForum";
import { currentUser } from "@clerk/nextjs/server";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const user = await currentUser();

  return (
    <ChatForum
      slug={params.slug}
      clerkUser={{
        id: user?.id ?? "",
        name: user?.firstName ?? "",
        token: (user?.publicMetadata as { token?: string })?.token ?? "",
      }}
    />
  );
}
