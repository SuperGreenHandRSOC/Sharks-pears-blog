import Container from "@/app/_components/container";
import { Intro } from "@/app/_ui/intro";
import { MoreStories } from "@/app/_ui/more-stories";
import { getAllPosts } from "@/lib/api";
import {Search} from "../_ui/search";
import TagFileter from "../_ui/tagfilter";

export default async function Index({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}){
  const allPosts = getAllPosts();
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const morePosts = allPosts;
  const {query="", filter=[""]} = await searchParams;
  if (typeof(query) != 'string')
    var key = query[0];
  else
    var key = query;
  if (typeof(filter) != 'string')
    var fit = filter;
  else
    var fit = [filter];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="justify-center lg:w-4/5 lg:mt-20">
      <Container>
        <Intro />
        <div className="invisible mb-1 pb-0 lg:pb-5 lg:mb-8 lg:visible flex justify-between">
          <div className="w-2/5"><Search placeholder="Search articles, title only..."/></div>
          <TagFileter />
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} searchKey={key} filter={fit}/>}
      </Container>
    </div></main>
  );
}