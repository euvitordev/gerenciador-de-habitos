"use client"
import React from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react"
import { Plus } from "lucide-react"

export function AddNewHabit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className="bg-zinc-50 w-full flex items-center justify-center fixed bottom-0">
        <Button
          onPress={onOpen}
          href={"/novo-habito"}
          size="lg"
          variant="light"
          radius="full"
          className="flex flex-col items-center h-fit gap-1 py-2"
        >
          <div className="w-24 p-2 flex items-center justify-center bg-green-500/50 rounded-full">
            <Plus />
          </div>
          <span className=""> Novo hábito</span>
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        size="3xl"
        backdrop="blur"
        onOpenChange={onOpenChange}
        className="h-[80vh]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Adiconar novo hábito
              </ModalHeader>
              <ModalBody>
                <label htmlFor="">Novo hábito</label>
                <Input
                  variant="flat"
                  placeholder="Digite o hábito..."
                  size="lg"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  size="lg"
                  radius="full"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  size="lg"
                  radius="full"
                  onPress={onClose}
                  className="w-80"
                >
                  Cadastrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
