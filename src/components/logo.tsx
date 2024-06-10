import { CheckCircle } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center py-4">
      <CheckCircle className="mx-2" />
      <p className="font-medium text-xl">meta.</p>
      <span className="font-bold text-xl text-green-500">diária</span>
    </div>
  )
}
