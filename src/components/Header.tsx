import Link from "next/link";
import Head from 'next/head';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useRouter } from "next/router";

// import Web3Connect from "./common/Web3Connect";

export interface NavigationItem {
  name: string;
  href?: string;
  icon: string;
  action?: string;
  Logo: any;
}

const navigation = [

  { name: 'Blockchain', href: 'index' },
]


export default function Header(Logo:any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();

  return (
    <>
     <Head>
        <title>POC Blockchain - Rust - Apollo - NextJS</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
       
          <a href="#" className="-m-1.5 p-1.5">
          <img onClick={() => router.push('/')} className="h-8 w-auto" src="https://media.licdn.com/dms/image/D4D03AQGomI3g6Gx5Rg/profile-displayphoto-shrink_800_800/0/1666711319385?e=1694649600&v=beta&t=XS-FEdl_hiz1y6HBbGxIcekQiyquNefQ6EE99UVLSSQ" alt="" />
        
          </a>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={`/${item.href}`} 
                className="text-sm font-semibold leading-6 text-gray-900">{item.name}</Link>
            ))}
            
            {/* <ConnectButton /> */}
             {/* <Web3Connect /> */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
               
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        
      </header>

      


      
    </>
  );
}
