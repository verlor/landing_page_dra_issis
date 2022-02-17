import * as React from "react"
import {Link} from 'gatsby'
import '../styles/global.css'

// markup
const IndexPage = () => {
    const linkStyle = `
    Hover:opacity-70
    text-sm
    sm:text-lg
   `
   const logoStyle=`
   text-gray-500 
   font-rammetto
   sm:text-base
   text-sm
   `
   return (
       <div>
           <nav className="flex sm:justify-between justify-around items-center bg-slate-200 lg:px-20 sm:px-6 py-8 text-gray-500">
               <h3 className={logoStyle}>HealthRoom</h3>
               <ul className="flex">
                   <li className={linkStyle}><Link to="/">Casa</Link></li>
                   <li className={linkStyle}><Link to="/contact">Contact</Link></li>
                   <li className={linkStyle}><Link to="/about">About Issis</Link></li>
               </ul>
           </nav>

           <main>
                <span>
                    <div className="sm:flex items-center shadow-md">
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">LOREM IPDSUM</h1>
                        <p className="text-gray-700 mb-2 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex justify-between mb-2">
                            <span className="font-thin text-sm">Feb 07th 2022</span>
                            <span className="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                        </div>
                        <div>
                        <img className="bg-cover" src="https://images.unsplash.com/photo-1625480860249-be231806e6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80" alt="" />
                        </div>
                    </div>


                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Lorem Ipsum</h2>

                            <div className="grid grid-cols-1 gap-y-10 sm:grip-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1628864005140-7770b9b8e7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1602928298849-325cec8771c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1518775804899-fa139ff3439e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1515534035694-7561db29d4f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1605648237010-35047eb55461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1563982277846-1299eec465d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1617122012130-9147bd818bae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Lorem Ipdsum</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>


                            </div>
                        </div>
                    </div>
                    <div class="sm:flex items-center shadow-md mt-10">
                        <div>
                        <img class="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div class="md:px-10 sh sm:px-5">
                        <h1 class="text-gray-800 font-bold text-2xl my-2">LOREM IPDSUM</h1>
                        <p class="text-gray-700 mb-2 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="flex justify-between mb-2">
                            <span class="font-thin text-sm">May 20th 2022</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                        </div>
                     </div>
                </span>
            </main>

           <footer className="text-center py-8 bg-slate-200 text-gray-500">
               <p>Copyright 2030 <span  className={logoStyle}>HealthRoom</span></p>
           </footer>
       </div>
   )
}

export default IndexPage
