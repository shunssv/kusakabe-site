import Image from 'next/image'

export function Linkedin({ url }) {
  return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image src="/sns-linkedin.svg"  width={30} height={30} />
        </a>
  );
}