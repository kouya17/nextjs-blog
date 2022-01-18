import React from "react"

interface SelectBoxProps {
  items: string[],
  onChange?: (item: string) => void,
  default?: string,
}

const SelectBox = (props: SelectBoxProps) => {
  return (
    <div className="relative w-64">
      <select className="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded-lg leading-tight bg-gray-50 cursor-pointer" id="grid-state" onChange={(ev) => {props.onChange(ev.target.value)}}>
        {props.items.map(p => <option key={p} value={p}>{p}</option>)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  )
}

export default SelectBox