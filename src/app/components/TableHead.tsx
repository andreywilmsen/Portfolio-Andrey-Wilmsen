
import clsx from "clsx";
import { TableProps } from "./types";

export default function TableHead({ blog, projects, last_updates }: TableProps) {
  return (
    <thead>
      <tr className="text-start">
        <th className="text-start w-1/6 p-2">Data</th>
        <th className="text-start w-4/6 p-2">Descrição</th>
        {projects && <th className="text-start w-1/6 p-2">Link</th>}
        <th className="text-start w-1/6 p-2">Ações</th>
      </tr>
    </thead>

  )
}
