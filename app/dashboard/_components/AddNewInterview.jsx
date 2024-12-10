"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

  

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false);


  return (
    <div className='p-8 border rounded-lg bg-slate-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
    onClick={() => setOpenDialog(true)}
    >

        <Dialog>
          <DialogTrigger className='font-bold text-lg text-center'>+ Add New</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
                </DialogDescription>
                <div className='flex gap-5 justify-end'>
                  <DialogClose>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button>Start Interview</Button>

                {/* <Button variant="ghost">Cancel</Button>
                <Button>Start Interview</Button> */}
                </div>
              
            </DialogHeader>
          </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview