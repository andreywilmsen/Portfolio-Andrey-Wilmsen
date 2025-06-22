"use client"

import Header from "@/app/components/Header/Menu";
import { menuItems } from "../types";
import Table from "@/app/components/Table";
import Button from "@/app/components/Button";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import Modal from "@/app/components/Modal";

export default function Blog() {

    const dispatch = useDispatch();

    return (
        <>
            <section>
                <Header items={menuItems} admin />
                <div className="md:ml-50 flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
                    <div className="min-w-[400px] max-w-[700px] w-2/3 h-2/3">
                        <h1 className="font-semibold text-[20px]">Blog</h1>
                        <Table blog />
                        <div className="flex justify-center md:justify-start items-center">
                            <Button onClick={() => dispatch(openModal())} hov addItem name="Adicionar" source="soma.png" color="bg-success" />
                        </div>
                    </div>
                </div>
                <Modal blog nome={"Blog"} />
            </section>

        </>
    );
}
