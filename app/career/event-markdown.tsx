import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type EventMarkdownProps = {
  children: string;
};

function getSafeUrl(url?: string) {
  if (!url) {
    return "";
  }

  if (/^(https?:|mailto:|\/|#)/i.test(url)) {
    return url;
  }

  return "";
}

export function EventMarkdown({ children }: EventMarkdownProps) {
  const source = children.trim();

  if (!source) {
    return <p className="event-empty-text">待补充</p>;
  }

  return (
    <div className="event-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children: linkChildren, ...props }) {
            const safeHref = getSafeUrl(href);
            const isExternal = /^https?:/i.test(safeHref);

            return (
              <a
                {...props}
                href={safeHref}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {linkChildren}
              </a>
            );
          },
          img({ alt, src, ...props }) {
            return (
              // Markdown images do not provide dimensions, so CSS constrains layout width.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                {...props}
                alt={alt ?? ""}
                loading="lazy"
                src={getSafeUrl(typeof src === "string" ? src : undefined)}
              />
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
