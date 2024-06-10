import { Button } from "@nextui-org/react"
import { Check, X } from "lucide-react"

export function DayState({ day }: { day: boolean | undefined }) {
  return (
    <Button
      isIconOnly
      variant="flat"
      radius="full"
      color={
        day == true
          ? "success"
          : "danger" || day == undefined
          ? "default"
          : "default"
      }
    >
      {day == true ? <Check size={20} /> : <X /> || day == undefined ? "" : ""}
    </Button>
  )
}
