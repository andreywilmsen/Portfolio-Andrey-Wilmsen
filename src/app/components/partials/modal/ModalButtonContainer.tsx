"use client"

import Button from "../../Button";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/modalSlice";

export default function ModalButtonContainer() {

    const dispatch = useDispatch();

    return (
        <div className="flex py-2">
            <Button onClick={() => dispatch((closeModal()))} hov modalButton name="Voltar" source="voltar.png" color="bg-delete" />
            <Button hov modalButton name="Adicionar" source="soma.png" color="bg-success" />
        </div>
    );
}
