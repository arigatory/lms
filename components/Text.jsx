'use client'
import React from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'

export default function Text() {
    const handleClick = (mode) => {
        mode ? toast.success('Success!') : toast.error('Error!')
    }
  return (
    <div>
        <Button onClick={() => handleClick(false)} className="bg-red-600" variant="default">
            hi

        </Button>
    </div>
  )
}
