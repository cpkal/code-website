import Image from "next/image";

const imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/294/874/small/e-learning-web-banner-design-students-take-online-tests-during-online-classes-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg';

export default function Banner() {
  return (
    <div className="flex justify-center items-center text-white">
      <img src="https://via.placeholder.com/1200" alt="Banner" className="w-full h-64" />
    </div>
  );
}