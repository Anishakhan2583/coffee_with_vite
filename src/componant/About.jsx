import coffeeVideo from '../assets/coffee_animate.mp4'
import mobileVideo from '../assets/mobileVideo.mp4'
import group from '../assets/group.png'
export default function About() {

  return (
    <div className="bg-amber-400 py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">Simkarey elegant</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Everything you need to know about us
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">The Simkarey Expirence</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
Simkarey — A Legacy of Elegance Since 2005.                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  
                  <video src={mobileVideo} autoPlay loop muted playsInline></video>
                </div>
              </div>
            </div>


            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Our Service</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  At Simkarey Coffee, every cup is crafted with passion and precision.
We carefully select quality coffee beans to create a rich and unforgettable taste.
Our skilled baristas turn every blend into a beautifully crafted experience.
From smooth classics to indulgent specialty coffees, there is something for every taste.
We believe great coffee is not just a drink, but a moment to enjoy.
Our warm service makes every visit comfortable, welcoming, and memorable.
Each cup is prepared with attention to detail and served with care.
Whether you need a peaceful morning or an afternoon refreshment, we are here for you.
At Simkarey, we bring together elegant flavors, quality ingredients, and genuine hospitality.
Come experience coffee made with heart, served with warmth, and created to be savored.

                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <video src={coffeeVideo}
                autoPlay
    loop
    muted
    playsInline className='w-50'
                ></video>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>




          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Our Story</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                Simkarey began its journey in the charming city of Jakarta in 2005, with a simple passion for creating exceptional coffee and memorable moments. What started as a small coffee shop gradually grew through dedication, quality, and the love of our customers. Over the years, Simkarey has continued to evolve while staying true to its roots and commitment to excellence. Today, we proudly carry forward the same passion that started it all, bringing carefully crafted coffee and timeless elegance to every cup.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src={group}
                  className=" object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

