import Image from "next/image";
import { PlayCircle } from "lucide-react";
import type { CareerVideo } from "./year-data";

type TimelineEventVideosProps = {
  displayTitle: string;
  videos?: CareerVideo[];
};

export function TimelineEventVideos({ displayTitle, videos }: TimelineEventVideosProps) {
  if (!videos?.length) {
    return null;
  }

  return (
    <div className="timeline-video-list">
      {videos.map((video, videoIndex) => (
        <a
          className="timeline-video-link"
          href={video.href}
          key={`${video.href}-${videoIndex}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="timeline-video-cover">
            {video.cover ? (
              <Image
                alt={video.text || displayTitle}
                className="object-cover"
                fill
                sizes="112px"
                src={video.cover}
              />
            ) : (
              <span className="timeline-video-placeholder">
                <PlayCircle className="size-5" />
              </span>
            )}
          </span>
          <span className="timeline-video-title">{video.text || displayTitle}</span>
        </a>
      ))}
    </div>
  );
}
