"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { CANCEL, START_INTERVIEW, TELL_US_ABOUT_YOURSELF } from '@/utils/constants';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea';

  

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobRole, setJobRole] = useState(null);
    const [jobDescription, setJobDescription] = useState(null);
    const [yearsOfExperience, setYearsOfExperience] = useState(null);
  
  
    const onSubmit =  (e) => {

      e.preventDefault();
      console.log("Job Role: ", jobRole);
      console.log("Job Description: ", jobDescription);
      console.log("Years of Experience: ", yearsOfExperience);
    }


  return (

    <div>
      <div className='p-8 border rounded-lg bg-slate-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
          onClick={() => setOpenDialog(true)}>
        <h2>+Add New</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{TELL_US_ABOUT_YOURSELF}</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                  <div>
                  <h2>Add Details about your job/role, Job Description</h2>
                  <div className='mt-5 '>
                    <label >Job Role/Job Position</label>
                    <Input onChange={(e) => setJobRole(e.target.value)}
                    className="my-2" placeholder="Full Statck Developer, Backend Engineer etc." required />
                  </div>

                  <div className='mt-5 '>
                    <label >Job Description/Tech Stack (In Short)</label>
                    <Textarea onChange={(e) => setJobDescription(e.target.value)}
                    className="my-2" placeholder="ReactJS, NodeJS, MySQL, Springboot etc" required/>
                  </div>

                  <div className='mt-5 '>
                    <label >Years of experience</label>
                    <Input onChange={(e) => setYearsOfExperience(e.target.value)}
                    className="my-2" type="number" placeholder="4" min="0" max="30" required/>
                  </div>

                  </div>
                  <div className='flex gap-5 justify-end'>
                    <Button type="button" onClick={() => setOpenDialog(false )} variant="ghost">{CANCEL}</Button>
                    <Button
                     type="submit">{START_INTERVIEW}</Button>
                  </div>
              </form>

              
            </DialogDescription>

            
          </DialogHeader>
        </DialogContent>
      </Dialog>

      
    </div>
  )
}

export default AddNewInterview