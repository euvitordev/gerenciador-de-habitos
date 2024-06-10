import { Button, Input } from "@nextui-org/react"
import { X } from "lucide-react"
import Link from "next/link"

export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server"
    const habit = formData.get("habit")
    console.log(habit)
  }

  return (
    <main className="flex flex-col items-center w-screen">
      <form
        action={newHabit}
        className="flex flex-col items-center justify-center gap-12 my-12 w-full px-8"
      >
        <div className="flex items-center justify-center w-full">
          <Link href={"/"}>
            <Button isIconOnly color="danger" variant="light">
              <X />
            </Button>
          </Link>
          <div className="flex items-center justify-center w-full">
            <h2 className="font-medium text-3xl">Criar novo hábito</h2>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="font-medium text-xl">Nome do hábito</label>
          <Input
            className="w-full"
            variant="flat"
            id="habit"
            name="habit"
            type="text"
            placeholder="Digite o nome do hábito..."
            size="lg"
            isClearable
          />
        </div>

        <div className="flex gap-4 w-full fixed bottom-0 p-2">
          <Button
            type="submit"
            variant="shadow"
            color="success"
            size="lg"
            radius="full"
            className="w-full mx-8"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </main>
  )
}
