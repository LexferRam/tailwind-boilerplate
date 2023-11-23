'use client'
import DropdownMenuComp from "@/components/DropdownMenu"
import { Button } from "@/components/ui/button"
import { Alert, Button as ButtonMUI, Progress } from "@material-tailwind/react"

export default function Home() {
  

  return (
    <div className="flex gap-2 m-4">

     <Button className="animate-in fade-in zoom-in duration-500">
      Primary Button
     </Button>

     <Button variant='secondary'>
      Outlined
     </Button>

     <ButtonMUI size="lg" variant="outlined" className="bg-primary w-[250px] rounded-lg">
      test
     </ButtonMUI>

     <Button variant='destructive'>
      Destructive
     </Button>

    <DropdownMenuComp />

    </div>
  )
}
