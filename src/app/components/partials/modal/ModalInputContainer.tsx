"use client"

import Input from "../../Input";
import TextArea from "../../TextArea";

interface ModalInputContainerProps {
    blog?: boolean;
    projects?: boolean;
    last_updates?: boolean;
}

export default function ModalInputContainer({ blog, projects, last_updates }: ModalInputContainerProps) {

    return (
        <div className="flex flex-col" >
            <Input medium tipo="text" place="Título" />
            <Input medium tipo="date" />
            {projects && <Input medium tipo="text" place="Link do projeto" />}
            {blog && <TextArea />}
        </div>
    );
}
