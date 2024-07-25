import Link from "next/link";

export default function Button({ children, ...props }) {
  return (
    <Link href={props.src || '#'}>
      {/* create button with my foreground variable on css */}
      
      <button className={`${props.isPrimary == `true` ? `bg-foreground text-white text-sm border-2 border-sky-500` : `border-2 border-sky-500 text-sm text-foreground`} rounded-lg p-1 box-border mx-1`}>{ children }</button>
    </Link>
  );
}