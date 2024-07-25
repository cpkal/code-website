export default function Footer() {
  return (
    <footer className="p-4 bg-foreground text-white">
      <div className="md:flex">
        <div className="flex-1">
          <h3 className="text-lg font-bold">Logo</h3>
          <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-lg font-bold">Social Media</h3>
          <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p>&copy; 2024</p>
      </div>
    </footer>
  )
}