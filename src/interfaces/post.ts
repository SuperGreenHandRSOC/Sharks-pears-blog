export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  tags:string[]
};
