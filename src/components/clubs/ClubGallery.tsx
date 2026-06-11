import Image from "next/image";

interface ClubGalleryProps {
  images: string[];
  clubName: string;
}

export default function ClubGallery({ images, clubName }: ClubGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-lg overflow-hidden bg-brand-gray-light"
        >
          <Image
            src={src}
            alt={`${clubName} 활동 사진 ${i + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
