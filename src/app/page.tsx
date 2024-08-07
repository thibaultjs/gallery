import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/fad3b6f7-e782-4f12-b59e-90f68362d676-ov0eak.png',
  'https://utfs.io/f/60cf502a-df7e-48e1-b95b-75fc07f1a377-ov0e7z.png',
  'https://utfs.io/f/08a58ac9-f3e3-4796-8d8b-f863e558aac6-ov0ed5.png',
  'https://utfs.io/f/9b549043-eaec-46a1-a89d-9087ad1f214d-ov0e9p.png',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));


export default function HomePage() {
  return (
    <main className="">
      <div className='flex flex-wrap gap-4'>
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className='w-48'>
            <img src={image.url} alt={`image-${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
