import Banner from "@/components/Banner";
import Button from "@/components/Button";
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
        <div className="flex">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold text-balance">Esse ipsum minim amet eu exercitation laboris.</h2>
            <p className="text-sm mt-2 text-gray-500"> Dolore sit enim et pariatur do do reprehenderit. Eu veniam cupidatat id cupidatat aute ut non consequat duis sint sit do id et. Ex ipsum consequat quis adipisicing. Non consectetur aute qui velit laborum dolore nostrud officia. Reprehenderit elit tempor consectetur dolore deserunt sunt laborum eu fugiat ut. Id ad nostrud esse ad sint nisi labore mollit nostrud anim tempor officia et sunt. Irure quis laborum sit laborum nostrud amet aliqua magna sit sit consequat voluptate adipisicing tempor.</p>
            <Button>Hello</Button>
          </div>
          <div className="flex w-1/3 ml-24"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded" alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className="p-16 bg-dark-accent text-on-dark-accent">
        <div className="flex">
          <div className="flex w-1/3 mr-24"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded" alt="Placeholder" />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold text-balance">Esse ipsum minim amet eu exercitation laboris.</h2>
            <p className="text-sm mt-2"> Dolore sit enim et pariatur do do reprehenderit. Eu veniam cupidatat id cupidatat aute ut non consequat duis sint sit do id et. Ex ipsum consequat quis adipisicing. Non consectetur aute qui velit laborum dolore nostrud officia. Reprehenderit elit tempor consectetur dolore deserunt sunt laborum eu fugiat ut. Id ad nostrud esse ad sint nisi labore mollit nostrud anim tempor officia et sunt. Irure quis laborum sit laborum nostrud amet aliqua magna sit sit consequat voluptate adipisicing tempor.</p>
            <Button>Hello</Button>
          </div>
        </div>
      </div>

      <div className="p-16">
        <h2 className="text-2xl font-semibold text-center">Esse ipsum minim amet eu exercitation laboris.</h2>
        <div className="grid grid-cols-3 mt-4">
          {/* create 3 cards */}
          <div className="bg-white shadow rounded mx-1">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
          <div className="bg-white shadow rounded mx-1">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
          <div className="bg-white shadow rounded mx-1">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-lg" alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className="p-16 bg-dark-accent">
        <h2 className="text-2xl font-semibold text-on-dark-accent">Esse ipsum minim amet eu exercitation laboris.</h2>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {/* create 3 cards */}
          
          <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                  <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                    <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                  </div>
                </div>
            </Link>

            <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                  <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                    <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                  </div>
                </div>
            </Link>

            <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                  <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                    <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                  </div>
                </div>
            </Link>

            <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                  <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                    <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                  </div>
                </div>
            </Link>
        </div>
      </div>

      <div className="p-12"></div>

      {/* create footer */}
      <footer className="p-4 bg-foreground text-white">
        <div className="flex">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Logo</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Social Media</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p>&copy; 2024</p>
        </div>
      </footer>

    </main>
  );
}
