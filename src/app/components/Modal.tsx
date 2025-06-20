"use client"

import { useDispatch } from "react-redux";
import { closeModal } from "@/store/modalSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import clsx from "clsx";

export default function Modal() {

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

    return (

        <div className={clsx("fixed inset-0 bg-black bg-opacity-90 items-center justify-center z-50", isModalOpen ? "flex" : "hidden")}>
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full relative text-black">

                <h2 className="text-xl font-bold mb-4">Modal</h2>

                <p>Conteúdo modal</p>

                <button onClick={() => dispatch((closeModal()))} className="absolute top-2 right-2 text-black hover:text-black">✕</button>
            </div>
        </div>
    );
}
