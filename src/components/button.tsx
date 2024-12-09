import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link?: Url;
  background?: boolean;
}

export default function Button({ text, link, background = true }: ButtonProps) {
  return link ? (
    <Link href={link}>
      <button
        className=" rounded-md py-1 px-2"
        style={{ background: background ? "#1C5E21" : "transparent" }}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className=" rounded-md py-1 px-2"
      style={{ background: background ? "#1C5E21" : "transparent" }}
    >
      {text}
    </button>
  );
}
