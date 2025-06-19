import Header from "@/app/components/Header/Menu";
import { menuItems } from "../types";
import Table from "@/app/components/Table";

export default function Projetos() {
  return (
    <section>
      <Header items={menuItems} admin />
      <div className="md:ml-50 flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="min-w-[400px] max-w-[700px] w-2/3 h-2/3">
          <h1 className="font-semibold text-[20px]">Projetos</h1>
          <Table />
        </div>
      </div>
    </section>
  );
}
