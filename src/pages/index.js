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
           <nav className="flex justify-between px-20 py-10 items-center bg-zinc-100">
                <h1 className="text-xl text-gray-800 font-bold">TITULO</h1>
                <div className="flex items-center">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
                    </div>
                    <ul className="flex items-center space-x-6">
                    <li className="font-semibold text-gray-700 cursor-pointer">Home</li>
                    <li className="font-semibold text-gray-700 cursor-pointer">Articles</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </li>
                    </ul>
                </div>
            </nav>
           

           <main>
                <span>

                <section className="bg-white">
                    <div className="max-w-3xl px-2 py-16 mx-auto">
                        <div className="items-center md:flex md:space-x-6">
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur</h3>
                                <p className="max-w-md mt-4 text-gray-600 text-justify">Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" className="block mt-8 text-indigo-700 underline">Experienced team</a>
                            </div>
                
                            <div className="mt-8 md:mt-0 md:w-1/2">
                                <div className="flex items-center justify-center">
                                    <div className="max-w-md">
                                        <img className="object-cover object-center w-full rounded-md shadow" 
                                            src="https://images.unsplash.com/photo-1644870782089-627bbd8fd7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section classname="bg-white">
                    <div className="max-w-5xl px-6 py-16 mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, </h2>
                        <p className="max-w-lg mt-4 text-gray-600 text-justify">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                        <div className="grid gap-8 mt-10 md:mt-20 md:grid-cols-2">
                            <div className="flex space-x-4">
                                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.6268 23.7062C48.2466 24.4484 48.2466 25.5277 47.6268 26.2699L44.4812 30.0372C43.803 30.8493 43.4742 31.8971 43.5669 32.9512L44.0044 37.9287C44.0912 38.9165 43.4411 39.8188 42.4765 40.0491L38.0619 41.1031C36.9808 41.3612 36.0559 42.0575 35.5089 43.025L33.2053 47.099C32.6961 47.9995 31.5844 48.3631 30.6415 47.9375L26.6498 46.1358C25.6003 45.6621 24.3976 45.6636 23.3493 46.14L19.3597 47.9531C18.4161 48.3819 17.3014 48.0189 16.7912 47.1168L14.4911 43.0489C13.9441 42.0814 13.0192 41.3851 11.9381 41.127L7.52286 40.0728C6.55849 39.8426 5.90838 38.9406 5.99496 37.9529L6.43346 32.9505C6.52583 31.8968 6.19706 30.8494 5.5191 30.0375L2.37029 26.2665C1.75138 25.5253 1.75043 24.4477 2.36803 23.7054L5.52362 19.9127C6.1988 19.1012 6.52582 18.0557 6.43339 17.0041L5.99624 12.0308C5.90922 11.0408 6.56225 10.1372 7.52946 9.90904L11.9298 8.87123C13.0153 8.61522 13.9446 7.91765 14.4935 6.94684L16.7947 2.87709C17.3039 1.97664 18.4156 1.61302 19.3585 2.03858L23.3544 3.8422C24.4007 4.31444 25.5993 4.31444 26.6456 3.8422L30.6415 2.03858C31.5844 1.61301 32.6961 1.97663 33.2053 2.87709L35.5089 6.95112C36.0559 7.9186 36.9808 8.61486 38.0619 8.87297L42.4765 9.92701C43.4411 10.1573 44.0912 11.0596 44.0044 12.0474L43.5669 17.0249C43.4742 18.079 43.803 19.1268 44.4812 19.939L47.6268 23.7062ZM25 37.9326C26.8075 37.9326 28.2727 36.4674 28.2727 34.6599V34.4275C28.2727 32.6201 26.8075 31.1548 25 31.1548C23.1925 31.1548 21.7273 32.6201 21.7273 34.4275V34.6599C21.7273 36.4674 23.1925 37.9326 25 37.9326ZM25 28.377C26.8075 28.377 28.2727 26.9117 28.2727 25.1042V15.3162C28.2727 13.5087 26.8075 12.0435 25 12.0435C23.1925 12.0435 21.7273 13.5087 21.7273 15.3162V25.1042C21.7273 26.9117 23.1925 28.377 25 28.377Z"
                                        stroke="currentColor" stroke-width="2" />
                                </svg>
                
                                <div>
                                    <h4 className="text-xl font-medium text-gray-800">Design concept</h4>
                                    <p className="max-w-lg mt-4 text-gray-600 text-justify">Vitae nulla nunc euismod vel nunc euismod velpretium tellus
                                        accumsan nulla nunc euismod ve semper.</p>
                                </div>
                            </div>
                
                            <div className="flex space-x-4">
                                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 25C1 11.8023 11.8023 1 25 1C38.1977 1 49 11.8023 49 25C49 38.1977 38.1977 49 25 49C11.8023 49 1 38.1977 1 25ZM33.36 35.3573C34.7228 36.1959 36.5074 35.771 37.346 34.4082C38.1913 33.0346 37.7522 31.2351 36.3692 30.4053L28.221 25.5164C27.6186 25.155 27.25 24.504 27.25 23.8014V14.375C27.25 12.7872 25.9628 11.5 24.375 11.5C22.7872 11.5 21.5 12.7872 21.5 14.375V25.8236C21.5 27.2127 22.2206 28.5023 23.4036 29.2302L33.36 35.3573Z"
                                        stroke="currentColor" stroke-width="2" />
                                </svg>
                
                                <div>
                                    <h4 className="text-xl font-medium text-gray-800">Developing websites</h4>
                                    <p className="max-w-lg mt-4 text-gray-600 text-justify">Vitae nulla euismod velpretium tellus accumsan nulla nunc
                                        euismod ve semper. Vitae nulla euismod velpretium tellus
                                        accumsan nulla nunc euismod ve semper. Vitae nulla euismod velpretium tellus accumsan nulla nunc
                                        euismod ve semper.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                    
                    <div className="sm:flex items-center shadow-md">
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">LOREM IPDSUM</h1>
                        <p className="text-gray-700 mb-2 md:mb-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex justify-between mb-2">
                            <span className="font-thin text-sm">Feb 07th 2022</span>
                            <span className="sm:block hidden mb-2 text-gray-800 font-bold cursor-pointer">Read more</span>
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
                            </div>
                        </div>
                    </div>


                    <div className="sm:flex items-center shadow-md mt-10">
                        <div>
                        <img className="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="md:px-10 sh sm:px-5">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">LOREM IPDSUM</h1>
                        <p className="text-gray-700 mb-2 md:mb-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex justify-between mb-2">
                            <span className="font-thin text-sm">May 20th 2022</span>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold cursor-pointer">Read more</span>
                        </div>
                        </div>
                     </div>


                     <section className="bg-white">
                         <div className="max-w-exl px-6 py-16 mx-auto">
                             <div className="md:flex md:justify-between">
                                 <h2 className="text-3xl font-semibold text-gray-800">Titulo titulo titulo titulo</h2>
                             </div>
                             <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                 <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md cursor-pointer">
                                     <h2 className="text-xl font-modium text-gray-800">Titutlo</h2>
                                     <p className="max-w-md mt-4 text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                 </div>
                                 <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md cursor-pointer">
                                     <h2 className="text-xl font-medium text-gray-800">Titulo</h2>
                                     <p className="max-w-md mt-4 text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur, aliquam volutpat, viverra manga risus aliquam massa.</p>
                                 </div>
                                 <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md cursor-pointer">
                                     <h2 className="text-xl font-medium text-gray-800">Titulo</h2>
                                     <p className="max-w-md mt-4 text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur, aliquam volutpat, viverra manga risus aliquam massa.</p>
                                 </div>
                             </div>
                         </div>
                     </section>



                </span>
            </main>

            <footer className="flex flex-wrap items-center justify-between p-3 m-auto bg-zinc-100">
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
