import Banner from "@/components/Banner";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="p-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-balance">Esse ipsum minim amet eu exercitation laboris.</h2>
            
            <p className="text-sm mt-2 text-gray-500"> Dolore sit enim et pariatur do do reprehenderit. Eu veniam cupidatat id cupidatat aute ut non consequat duis sint sit do id et. Ex ipsum consequat quis adipisicing. Non consectetur aute qui velit laborum dolore nostrud officia. Reprehenderit elit tempor consectetur dolore deserunt sunt laborum eu fugiat ut. Id ad nostrud esse ad sint nisi labore mollit nostrud anim tempor officia et sunt. Irure quis laborum sit laborum nostrud amet aliqua magna sit sit consequat voluptate adipisicing tempor.</p>
          </div>
          <div className="flex w-full md:w-1/3 mt-4 md:mt-0"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded" alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className="p-16 bg-dark-accent text-on-dark-accent">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/3 md:mt-0 order-2"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded" alt="Placeholder" />
          </div>
          <div className="w-full md:w-2/3 order-1">
            <h2 className="text-2xl font-bold text-balance">Esse ipsum minim amet eu exercitation laboris.</h2>
            <p className="text-sm mt-2"> Dolore sit enim et pariatur do do reprehenderit. Eu veniam cupidatat id cupidatat aute ut non consequat duis sint sit do id et. Ex ipsum consequat quis adipisicing. Non consectetur aute qui velit laborum dolore nostrud officia. Reprehenderit elit tempor consectetur dolore deserunt sunt laborum eu fugiat ut. Id ad nostrud esse ad sint nisi labore mollit nostrud anim tempor officia et sunt. Irure quis laborum sit laborum nostrud amet aliqua magna sit sit consequat voluptate adipisicing tempor.</p>
            <Button>Hello</Button>
          </div>
        </div>
      </div>

      <div className="p-16">
        <h2 className="text-2xl font-semibold text-center">Esse ipsum minim amet eu exercitation laboris.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          {/* create 3 cards */}
          <div className="bg-white shadow rounded">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
          <div className="bg-white shadow rounded">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
          <div className="bg-white shadow rounded">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className="p-16 bg-dark-accent">
        <h2 className="text-2xl font-semibold text-on-dark-accent">Esse ipsum minim amet eu exercitation laboris.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-2 mt-3">
          {/* create 3 cards */}
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        
      </div>

      <div className="p-12"></div>

      {/* create footer */}
      <Footer />

    </main>
  );
}
