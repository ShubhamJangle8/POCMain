import React from "react";
import './Header.css';
import DemandTrackerlogo from '../../img/AppLogo.png';// importing image from img folder
import Dehaze from '../../img/dehaze.svg'; // importing image from img folder
import { Link, NavLink, useHistory } from "react-router-dom";
import { auth } from '../../fireBase'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Header() {
    const history = useHistory();
    const goToLogin = async () => {
        history.push('/')
        await auth.signOut()
        console.log('Logged out')
    }
    const goToHome = () => {
        history.push('/reqlist')
    }
    const solutions = [
        {
            name: 'Analytics',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '#',
            icon: ChartBarIcon,
        },
        {
            name: 'Engagement',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '#',
            icon: CursorClickIcon,
        },
        { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
        {
            name: 'Integrations',
            description: "Connect with third-party tools that you're already using.",
            href: '#',
            icon: ViewGridIcon,
        },
        {
            name: 'Automations',
            description: 'Build strategic funnels that will drive your customers to convert',
            href: '#',
            icon: RefreshIcon,
        },
    ]
    const callsToAction = [
        { name: 'Watch Demo', href: '#', icon: PlayIcon },
        { name: 'Contact Sales', href: '#', icon: PhoneIcon },
    ]
    const resources = [
        {
            name: 'Help Center',
            description: 'Get all of your questions answered in our forums or contact support.',
            href: '#',
            icon: SupportIcon,
        },
        {
            name: 'Guides',
            description: 'Learn how to maximize our platform to get the most out of it.',
            href: '#',
            icon: BookmarkAltIcon,
        },
        {
            name: 'Events',
            description: 'See what meet-ups and other events we might be planning near you.',
            href: '#',
            icon: CalendarIcon,
        },
        { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
    ]
    const recentPosts = [
        { id: 1, name: 'Boost your conversion rate', href: '#' },
        { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
        { id: 3, name: 'Improve your customer experience', href: '#' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Solutions</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <a
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Docs
                        </a>

                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                                        <ul role="list" className="mt-4 space-y-4">
                                                            {recentPosts.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            {' '}
                                                            View all posts <span aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
        // <nav className="navbar navbar-expand-lg sticky-top bg-light navbar-light navigation">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">
        //             <img src={DemandTrackerlogo} alt="Logo" width="85" height="40" className="d-inline-block align-text-top" />
        //         </a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        //             aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarText">
        //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page"><i className="fas fa-user"></i>&nbsp;Welcome Guest</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page"><i className="fas fa-home" onClick={goToHome}></i>&nbsp;Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" ><i className="fas fa-sign-out-alt" onClick={goToLogin}></i>&nbsp;Logout</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>)
        // <div class="relative bg-white">
        //     <div class="max-w-7xl mx-auto px-4 sm:px-6">
        //         <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        //             <div class="flex justify-start lg:w-0 lg:flex-1">
        //                 <a href="#">
        //                     <span class="sr-only">Workflow</span>
        //                     <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
        //                 </a>
        //             </div>
        //             <div class="-mr-2 -my-2 md:hidden">
        //                 <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
        //                     <span class="sr-only">Open menu</span>

        //                     <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <nav class="hidden md:flex space-x-10">
        //                 <div class="relative">

        //                     <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
        //                         <span>Solutions</span>

        //                         <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        //                         </svg>
        //                     </button>


        //                     <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
        //                         <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        //                             <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Analytics</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Engagement</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Security</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Integrations</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Automations</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
        //                                     </div>
        //                                 </a>
        //                             </div>
        //                             <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
        //                                 <div class="flow-root">
        //                                     <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">

        //                                         <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        //                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        //                                         </svg>
        //                                         <span class="ml-3">Watch Demo</span>
        //                                     </a>
        //                                 </div>

        //                                 <div class="flow-root">
        //                                     <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">

        //                                         <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        //                                         </svg>
        //                                         <span class="ml-3">Contact Sales</span>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Pricing </a>
        //                 <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Docs </a>

        //                 <div class="relative">

        //                     <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
        //                         <span>More</span>

        //                         <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        //                         </svg>
        //                     </button>


        //                     <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
        //                         <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        //                             <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Help Center</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Get all of your questions answered in our forums or contact support.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Guides</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Learn how to maximize our platform to get the most out of it.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Events</p>
        //                                         <p class="mt-1 text-sm text-gray-500">See what meet-ups and other events we might be planning near you.</p>
        //                                     </div>
        //                                 </a>

        //                                 <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

        //                                     <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        //                                     </svg>
        //                                     <div class="ml-4">
        //                                         <p class="text-base font-medium text-gray-900">Security</p>
        //                                         <p class="mt-1 text-sm text-gray-500">Understand how we take your privacy seriously.</p>
        //                                     </div>
        //                                 </a>
        //                             </div>
        //                             <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
        //                                 <div>
        //                                     <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
        //                                     <ul role="list" class="mt-4 space-y-4">
        //                                         <li class="text-base truncate">
        //                                             <a href="#" class="font-medium text-gray-900 hover:text-gray-700"> Boost your conversion rate </a>
        //                                         </li>

        //                                         <li class="text-base truncate">
        //                                             <a href="#" class="font-medium text-gray-900 hover:text-gray-700"> How to use search engine optimization to drive traffic to your site </a>
        //                                         </li>

        //                                         <li class="text-base truncate">
        //                                             <a href="#" class="font-medium text-gray-900 hover:text-gray-700"> Improve your customer experience </a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                                 <div class="mt-5 text-sm">
        //                                     <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>
        //             <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        //                 <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
        //                 <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
        //             </div>
        //         </div>
        //     </div>


        //     <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        //         <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        //             <div class="pt-5 pb-6 px-5">
        //                 <div class="flex items-center justify-between">
        //                     <div>
        //                         <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        //                     </div>
        //                     <div class="-mr-2">
        //                         <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        //                             <span class="sr-only">Close menu</span>

        //                             <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        //                             </svg>
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div class="mt-6">
        //                     <nav class="grid gap-y-8">
        //                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        //                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        //                             </svg>
        //                             <span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
        //                         </a>

        //                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        //                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        //                             </svg>
        //                             <span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
        //                         </a>

        //                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        //                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        //                             </svg>
        //                             <span class="ml-3 text-base font-medium text-gray-900"> Security </span>
        //                         </a>

        //                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        //                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        //                             </svg>
        //                             <span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
        //                         </a>

        //                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

        //                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        //                             </svg>
        //                             <span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
        //                         </a>
        //                     </nav>
        //                 </div>
        //             </div>
        //             <div class="py-6 px-5 space-y-6">
        //                 <div class="grid grid-cols-2 gap-y-4 gap-x-8">
        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

        //                     <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
        //                 </div>
        //                 <div>
        //                     <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
        //                     <p class="mt-6 text-center text-base font-medium text-gray-500">
        //                         Existing customer?
        //                         <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>




    )

}