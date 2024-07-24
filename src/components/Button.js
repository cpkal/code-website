import Link from "next/link";

export default function Button({ children, ...props }) {
  return (
    <Link href={props.src || '#'}>
      {/* create button with my foreground variable on css */}
      
      <button className={`${props.isPrimary == `true` ? `hover:text-[--background]` : `bg-[var(--foreground)]`} rounded p-2`}>{ children }</button>
    </Link>
  );
}