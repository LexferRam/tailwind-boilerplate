import DropdownMenuComp from "@/components/DropdownMenu"
import { Button } from "@/components/ui/button"

export default function Home() {
  

  return (
    <div className="flex gap-2 m-4">

     <Button className="animate-in fade-in zoom-in duration-500">
      Primary Button
     </Button>

     <Button variant='secondary'>
      Outlined
     </Button>

     <Button variant='destructive'>
      Destructive
     </Button>

    <DropdownMenuComp />

    </div>
  )
}
