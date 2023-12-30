import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import notFoundPicture from "../../public/404.jpg";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page is not found",
};

export default function NotFound() {
  return (
      <div>
        <Image src={notFoundPicture} alt="Picture of 404-page" width={500} />
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
  );
}
