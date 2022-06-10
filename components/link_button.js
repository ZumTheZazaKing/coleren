import Link from "next/link";

export default function LinkButton({title, link, custom}){
  return(
    <div className={`m-2 rounded-xl shadow-lg overflow-hidden flex flex-col ${custom}`}>
      <Link href={`/${link}`}>
        <a>
          <h1 className='p-4 font-semibold'>{title}</h1>
        </a>
      </Link>
    </div>
  )
}