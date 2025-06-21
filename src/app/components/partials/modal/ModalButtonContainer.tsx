"use client"

import Button from "../../Button";

export default function ModalButtonContainer() {
    return (
        <div className="flex py-2">
            <Button hov modalButton name="Voltar" source="voltar.png" color="bg-delete" />
            <Button hov modalButton name="Adicionar" source="soma.png" color="bg-success" />
        </div>
    );
}
