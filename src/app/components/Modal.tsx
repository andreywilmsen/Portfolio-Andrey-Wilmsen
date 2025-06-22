"use client"

import { useDispatch } from "react-redux";
import { closeModal } from "@/store/modalSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ModalProps } from "./types";
import ModalInputContainer from "./partials/modal/ModalInputContainer";
import ModalButtonContainer from "./partials/modal/ModalButtonContainer";
import clsx from "clsx";


export default function Modal({ nome, blog, projects, last_updates }: ModalProps) {

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

    return (

        <div className={clsx("fixed inset-0 bg-black bg-opacity-90 items-center justify-center z-50", isModalOpen ? "flex" : "hidden")}>
            <div className="bg-secondary p-6 rounded shadow-lg max-w-[700px] w-full relative text-black mx-2">
                <h2 className="text-xl font-bold mb-4 text-[20px] ">EDITOR: {nome}</h2>
                <ModalInputContainer blog={blog} projects={projects} last_updates={last_updates} />
                <ModalButtonContainer />
                <button onClick={() => dispatch((closeModal()))} className="absolute top-2 right-2 text-black hover:text-black">✕</button>
            </div>
        </div>
    );
}
