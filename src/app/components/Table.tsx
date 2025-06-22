import clsx from "clsx";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { TableProps } from "./types";

export default function Table({ blog, projects, last_updates }: TableProps) {
  return (
    <table className={clsx(" w-full my-10 ")}>
      <TableHead blog={blog} projects={projects} last_updates={last_updates} />
      <TableBody blog={blog} projects={projects} last_updates={last_updates} />
    </table>
  )
}
