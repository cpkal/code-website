import Link from "next/link";

export default function CourseCard({ course }) {
  return(
    <Link href="/course/detail">
    <div className="bg-white rounded-lg border ease-in-out duration-300 hover:-translate-y-1 hover:shadow-foreground">
        <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
        <div className="p-3">
          <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
          <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
        </div>
      </div>
  </Link>
  )
}