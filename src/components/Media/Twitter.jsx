import Image from 'next/image';

export function Twitter({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src="/sns-twitter.svg"
        width={30}
        height={30}
        alt="Twitter"
        priority
      />
    </a>
  );
}
