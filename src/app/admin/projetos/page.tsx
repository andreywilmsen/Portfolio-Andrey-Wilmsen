"use client"

import Header from "@/app/components/Header/Menu";
import { menuItems } from "../types";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import Table from "@/app/components/Table";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";

export default function Projetos() {

  const dispatch = useDispatch();

  return (
    <section>
      <Header items={menuItems} admin />
      <div className="md:ml-50 flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="min-w-[400px] max-w-[700px] w-2/3 h-2/3">
          <h1 className="font-semibold text-[20px]">Projetos</h1>
          <Table projects />
          <div className="flex justify-center md:justify-start items-center">
            <Button onClick={() => dispatch(openModal())} hov addItem name="Adicionar" source="soma.png" color="bg-success" />
          </div>
        </div>
        <Modal projects nome={"Projetos"} />
      </div>
    </section>
  );
}
