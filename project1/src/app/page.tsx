import Image from 'next/image'
import React from 'react'

import FileDisplay from './pages/file_display'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className=" grid lg:grid-cols-2 grid-cols-1 sm:items-center sm:justify-center mx-4 mt-2 px-2">
        
       <FileDisplay/>
       
   </div>
      </div>
    </main>
  )
}
