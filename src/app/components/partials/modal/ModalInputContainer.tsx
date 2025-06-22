"use client"

import Input from "../../Input";
import TextArea from "../../TextArea";
import InputContainerTech from "./InputContainerTech";
import { tech } from "../../types";
import { ModalInputContainerProps } from "../../types";

export default function ModalInputContainer({ blog, projects, last_updates }: ModalInputContainerProps) {

    return (
        <div className="flex flex-col" >
            <Input medium tipo="text" place="Título" />
            <Input medium tipo="date" />
            {projects && <Input medium tipo="text" place="Link do projeto" />}
            {projects && <InputContainerTech tech={tech} />}
            {blog && <TextArea />}
        </div>
    );
}
