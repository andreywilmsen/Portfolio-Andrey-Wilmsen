import Header from "@/app/components/Header/Menu";
import { menuItems } from "../types";
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/Button";

export default function Sobre() {
  return (
    <section>
      <Header items={menuItems} admin />
      <div className="md:ml-50 flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="min-w-[400px] max-w-[700px] w-2/3 h-2/3">
          <h1 className="font-semibold text-[20px]">Sobre</h1>
          <div className="bg-gray-100 w-full h-full p-3 rounded-2xl my-10">
            <TextArea />
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <Button hov addItem name="Editar" source="lapis.png" color="bg-edit" />
          </div>
        </div>
      </div>
    </section>
  );
}
