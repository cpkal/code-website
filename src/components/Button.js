import Link from "next/link";

export default function Button({ children, ...props }) {
  return (
    <Link href={props.src || '#'}>
      <button className={`${props.isPrimary == `true` ? `bg-blue-500` : `bg-gray-200`} text-white px-4 py-2`}>{ children }</button>
    </Link>
  );
}