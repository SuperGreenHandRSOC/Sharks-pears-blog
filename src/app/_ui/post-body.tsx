import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
// import remarkToc from "remark-toc";
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm";
import style from "@/styles/markdown-styles.module.css"
import slugify from 'slugify'
import rehypeRaw from "rehype-raw"
import '@/styles/md-elements.css'

type Props = {
  content: string;
  className: string
};



export function PostBody({ content, className }: Props) {
  return (
    <div className={`mx-auto md:mx-0 js-toc-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        className={style.markdown}
        components={{
          code({ children, className, }) {
            const match: any = /language-(\w+)/.exec(className || "");
            return (
              <>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language={match && match[1]}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </>
            );
          },
          h1({ node, children }) {
            const text = String(children);
            const id = slugify(text, { lower: true, strict: true });
            return <h2 id={id}>{children}</h2>;
          },
          h2({ node, children }) {
            const text = String(children);
            const id = slugify(text, { lower: true, strict: true });
            return <h2 id={id}>{children}</h2>;
          },
          h3({ node, children }) {
            const text = String(children);
            const id = slugify(text, { lower: true, strict: true });
            return <h3 id={id}>{children}</h3>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
