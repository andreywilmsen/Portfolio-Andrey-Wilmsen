"use client"

import Input from "../../Input";
import TextArea from "../../TextArea";

export default function ModalInputContainer() {

    return (
        <div className="flex flex-col" >
            <Input medium tipo="text" place="Título da postagem" />
            <Input medium tipo="date" />
            <TextArea />
        </div>
    );
}
