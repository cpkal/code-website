export default function CourseFilterByCategory() {
  return (
    <div className="border-bottom mt-2">
      <h2 className="text-sm font-bold">Kategori</h2>
      <ul>
        <li className="mt-1 text-sm flex flex-column">
          {/* add checkbo */}
          <input type="checkbox" className="mr-1" id="kategori" />
          <label for="kategori" className="text-xs">Machine Learning</label>
        </li>
        <li className="mt-1 text-sm flex flex-column">
          {/* add checkbo */}
          <input type="checkbox" className="mr-1" id="kategori" />
          <label for="kategori" className="text-xs">Competitive Programming</label>
        </li>
        <li className="mt-1 text-sm flex flex-column">
          {/* add checkbo */}
          <input type="checkbox" className="mr-1" id="kategori" />
          <label for="kategori" className="text-xs">CSS</label>
        </li>
      </ul>
    </div>
  );
}