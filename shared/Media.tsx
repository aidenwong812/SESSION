import Image from "next/image"
import { CSSProperties, DetailedHTMLProps, VideoHTMLAttributes } from "react"

interface IMedia {
  type: "video" | "image"
  link?: string
  posterLink?: string
  containerStyle?: CSSProperties
  containerClasses?: string
  className?: string
  videoProps?: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
  blurLink?: string
  alt?: string
  layout?: "fill" | "responsive" | "fixed" | "intrinsic"
  width?: string
  height?: string
  imageClasses?: string
}

function Media({
  type,
  link,
  containerClasses,
  containerStyle,
  blurLink,
  alt,
  layout = "fill",
  width,
  height,
  imageClasses,
}: IMedia) {
  return (
    <div className={`relative ${containerClasses || ""}`} style={containerStyle || {}}>
      {type === "image" && link && (
        <Image
          className={`absolute !w-full object-cover ${imageClasses}`}
          src={link}
          layout={layout}
          alt={alt || "not found image"}
          placeholder="blur"
          blurDataURL={
            blurLink ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=="
          }
          {...(width &&
            height && {
              width,
              height,
            })}
          unoptimized
        />
      )}
    </div>
  )
}

export default Media
