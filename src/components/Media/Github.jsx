import Image from 'next/image'

export function Github({ url }) {
  return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image src="/sns-github.svg"  width={30} height={30} />
        </a>
  );
}