
import ChatForum from '@/app/components/chatForum';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

 return <ChatForum slug={slug} />;

}