import Image from "next/image";
import { PlayCircle } from "lucide-react";
import type { CareerVideo } from "./year-data";

type EventVideosProps = {
  displayTitle: string;
  videos: CareerVideo[];
};

export function EventVideos({ displayTitle, videos }: EventVideosProps) {
  if (videos.length === 0) {
    return <p className="event-empty-text">暂无相关视频</p>;
  }

  return (
    <div className="event-video-grid">
      {videos.map((video, videoIndex) => (
        <a
          className="event-video-link"
          href={video.href}
          key={`${video.href}-${videoIndex}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="event-video-cover">
            {video.cover ? (
              <Image
                alt={video.text || displayTitle}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 20rem, 100vw"
                src={video.cover}
              />
            ) : (
              <span className="event-video-placeholder">
                <PlayCircle className="size-10" />
              </span>
            )}
          </span>
          <span className="event-video-title">{video.text || displayTitle}</span>
        </a>
      ))}
    </div>
  );
}
