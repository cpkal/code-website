export default function CourseSortByTime() {
    return (
      <select className="border-accent rounded ml-1">
        <option value="1">Filter by</option>
        <option value="2">Newest</option>
        <option value="3">Oldest</option>
      </select>
    );
}