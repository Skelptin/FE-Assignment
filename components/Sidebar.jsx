"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";


const sidebarData = [
  {
    heading: "Discover",

    items: [
      {
        link: '/discover/explore',
        label: "Explore", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      },
      {
        link: '/discover/browse',
        label: "Browse", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      },
      {
        link: '/discover/radio',
        label: "Radio", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      }
    ]
  },
  {
    heading: "Library",
    items: [
      {
        link: '/library/playlists',
        label: "Playlists", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M21 15V6" />
          <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M12 12H3" />
          <path d="M16 6H3" />
          <path d="M12 18H3" />
        </svg>
      },
      {
        link: '/library/songs',
        label: "Songs", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <circle cx="8" cy="18" r="4" />
          <path d="M12 18V2l7 4" />
        </svg>
      },
      {
        link: '/library/madeforyou',
        label: "Made for You", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      },
      {
        link: '/library/artists',
        label: "Artists", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
          <circle cx="17" cy="7" r="5" />
        </svg>
      },
      {
        link: '/library/album',
        label: "Albums", icon: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
      },
    ]
  }

];
export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredItems = sidebarData.map((category) => ({
    heading: category.heading,
    items: category.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="flex ">
      <div className="bg-green-500 sm:visible max-lg:hidden text-black min-h-screen w-64 shadow-xl relative">
        <div className="space-y-4 py-4">
          <Input
            className="rounded-3xl w-3/4 sm:w-1/2 mx-auto item-center border-black"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredItems.map((category, index) => (
            <div key={index}>
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {category.heading}
              </h2>
              <div>
                {category.items.map((item, itemIndex) => (
                  <Link href={item.link} key={item.link}>
                    <Button
                      key={itemIndex}
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:visible lg:hidden">
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className="h-full w-64 bg-green-500 text-black z-50"
        >
          <DrawerTrigger asChild>
            <Button
              className="mt-5 bottom-4 flex right-4 rounded-full bg-white text-black p-3 z-50"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              {isDrawerOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose onClick={() => setIsDrawerOpen(false)} />
            <div className="p-4">
              <Input
                className="rounded-3xl w-3/4 sm:w-1/2 mx-auto item-center border-black"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <ul className="flex flex-col gap-4">
                {console.log(filteredItems)}
                {filteredItems.map((category, index) => (
                  <div key={index}>
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                      {category.heading}
                    </h2>
                    <div>
                      {category.items.map((item, itemIndex) => (
                        <Link href={item.link} key={item.link}>
                          <Button
                            key={itemIndex}
                            variant='ghost'
                            className="w-full justify-start"
                          >
                            {item.icon}
                            {item.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
        {/* Always rendered */}

      </div>
    </div>

  );
}