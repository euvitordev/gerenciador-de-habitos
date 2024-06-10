import { DayState } from "@/components/dayState"
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react"
import { Plus, Trash } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
  const today = new Date()
  const todayWeekDay = today.getDay()
  const sortedweekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1))

  const habits = {
    "Beber água": {
      "2024-06-09": true,
      "2024-06-10": false,
      "2024-06-11": false,
      "2024-06-12": false,
      "2024-06-13": false,
      "2024-06-14": false,
      "2024-06-15": false,
    },
    Correr: {
      "2024-06-09": true,
      "2024-06-10": false,
      "2024-06-11": true,
      "2024-06-12": false,
      "2024-06-13": false,
      "2024-06-14": true,
      "2024-06-15": false,
    },
  }

  return (
    <main className="flex flex-col items-center justify-between w-screen h-[90vh] py-16 text-center">
      <div className="flex flex-col items-center gap-8 w-full px-4">
        {habits === null ||
          (Object.keys(habits).length === 0 && (
            <h2>Você não tem hábitos cadastrados</h2>
          ))}

        {habits !== null &&
          Object.entries(habits).map(([habit, habitStrik]) => (
            <Card key={habit} className="w-full">
              <CardHeader className="border-b border-zinc-200">
                <div className="flex items-center w-full justify-between">
                  <h2 className="font-medium">{habit}</h2>
                  <Button size="sm" isIconOnly variant="flat" color="danger">
                    <Trash size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <section className="grid grid-cols-7 gap-2">
                  {sortedweekDays.map((day) => (
                    <div
                      key={day}
                      className="flex flex-col gap-2 items-center justify-center last:font-bold"
                    >
                      <span className=" flex items-center justify-center ">
                        {day}
                      </span>

                      <DayState day={undefined} />
                    </div>
                  ))}
                </section>
              </CardBody>
            </Card>
          ))}
      </div>

      <div className="bg-zinc-50 w-full flex items-center justify-center fixed bottom-0 p-2">
        <Link
          href={"/novo-habito"}
          className="flex flex-col items-center justify-center w-44 p-2 gap-1"
        >
          <Button color="success" variant="flat" size="md" radius="full">
            <Plus />
          </Button>
          <span className=""> Novo hábito</span>
        </Link>
      </div>
      {/* <AddNewHabit /> */}
    </main>
  )
}
