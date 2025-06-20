import clsx from "clsx";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table() {
  return (
    <table className={clsx(" w-full my-10")}>
      <TableHead />
      <TableBody />
    </table>
  )
}
