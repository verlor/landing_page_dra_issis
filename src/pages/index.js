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
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1602928298849-325cec8771c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1518775804899-fa139ff3439e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1515534035694-7561db29d4f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1605648237010-35047eb55461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1563982277846-1299eec465d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>

                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://images.unsplash.com/photo-1617122012130-9147bd818bae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-full objecy-center object-cover group-hover:opacity-75">
                                        </img>
                                    </div>
                                    <h3 className="=mt-4 text-sm text-gray-500">Read more</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-600">lorem ipdsum</p>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="sm:flex items-center shadow-md mt-10">
                        <div>
                        <img className="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="md:px-10 sh sm:px-5">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">LOREM IPDSUM</h1>
                        <p className="text-gray-700 mb-2 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex justify-between mb-2">
                            <span className="font-thin text-sm">May 20th 2022</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
                        </div>
                        </div>
                     </div>
                </span>
            </main>

            <footer className="flex flex-wrap items-center justify-between p-3 m-auto bg-slate-300">
                <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                    <ul className="flex mx-auto text-neutral-500 text-center">
                    <li className="p-2 cursor-pointer hover:underline">Terms & Conditions</li>
                    <li className="p-2 cursor-pointer hover:underline">Privacy</li>
                    <li className="p-2 cursor-pointer hover:underline">Cookies</li>
                    </ul>
                    <ul className="flex mx-auto text-neutral-500 text-center">
                    <li className="p-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></li>
                    <li className="p-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24" viewBox="0 0 24 24"><path d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z" fillRule="evenodd" clipRule="evenodd"/></svg></li>
                    <li className="p-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></li>
                    </ul>
                    <div className="flex mx-auto text-neutral-500 text-center">
                        Copyright Business Name © 2021
                    </div>
                </div>
            </footer>

       </div>
   )
}

export default IndexPage
