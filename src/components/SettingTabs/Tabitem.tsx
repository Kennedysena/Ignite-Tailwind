'user client'

import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

interface TabItemProps {
    value: string
    title: string
    isSelected?: boolean
}
export function TabItem({value, title, isSelected = false}: TabItemProps) {
    return (
        <Tabs.Trigger value={value} className="relative group px-1 p-b-4 text-sm font-medium dark:text-zinc-400 hover:text-violet-300 dark:data-[state=active]:text-violet-300 text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none">
            <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible::ring-offset-4">{title}</span>
            {isSelected && (
                <motion.div layoutId='activeTab' className='absolute -bottom-px left-0 right-0 h-0.5 bg-violet-500 dark:bg-violet-300'></motion.div>
            )}
                </Tabs.Trigger>
    )
}

