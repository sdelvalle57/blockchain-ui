import React from "react";

export default function Footer() {

  return (
    <footer className="w-full bg-gray-1500 pt-16 pb-10 lg:py-20 flex justify-center border-t border-t-gray-1200">
      <div className="container max-w-7xl px-4">
        <div className="grid gap-12 md:gap-12 lg:gap-16 lg:grid-cols-[1fr_3fr]">

          <div>
            <div className="flex flex-col gap-3 text-center items-center lg:text-left lg:grid">

              <p className="text-sm lg:text-base text-gray-500 leading-4 mt-1 lg:leading-5">
                Rust
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-1100 dark:text-gray-900 text-sm tracking-widest">
                POC Blockchain</h4>

            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-1100 dark:text-gray-900 text-sm tracking-widest">ECOSYSTEM</h4>
             
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-1100 dark:text-gray-900 text-sm tracking-widest">SOCIALS</h4>
              <div className="flex gap-2 text-gold-500">
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-1100 dark:text-gray-900 text-sm tracking-widest">Terms and Conditions</h4>
            </div>
          </div>

        </div>
        <p className="text-gray-500 dark:text-gray-900 md:text-center lg:text-left mt-16 text-sm lg:text-base">
          &copy; {new Date().getFullYear()} Santiago Del Valle
        </p>
      </div>
    </footer>
  );
}