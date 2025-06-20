import clsx from "clsx";
import Button from "./Button";
import { tableItems } from "../admin/types";

export default function TableBody() {
  return (
    <tbody>
      {tableItems.map((item, index) => (
        <tr key={index} className={clsx(index % 2 ? "bg-table-row-one" : "bg-table-row-two")}>
          <td className="p-2 h-[40px] w-1/6 font-semibold">{item.data}:</td>
          <td className="p-2 w-4/6 h-[40px]">{item.descricao}</td>
          <td className="p-2 flex">
            <Button tableButton source="lapis.png" hov color="bg-edit" />
            <Button tableButton source="lixeira.png" hov color="bg-delete" />
          </td>
        </tr>
      ))}
    </tbody>
  )
}
