'use client'

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command'
import UserItem from './UserItem'

const Sidebar = () => {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <User />
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <CreditCard />
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <BellIcon />
                }

            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Settings />
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <Cookie />
                },
                ,
                {
                    link: "/",
                    text: "Logs",
                    icon: <MessageSquare />
                },

            ]
        }

    ]
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{overflow: 'visible' }}>
          
          <CommandList style={{ overflow: 'visible' }}>
                      {menuList.map((menu: any, key: number) => (
                          <CommandGroup key={key} heading="menu.group">
                              {menu.items.map((option: any, optionKey: number) => <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                  {option.text}
                                  {option.icon}
                              </CommandItem>)}
                    
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  )
}

export default Sidebar
