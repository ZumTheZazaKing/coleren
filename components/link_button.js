import Link from "next/link";

export default function LinkButton({title, link, custom, query, newTab, leftIcon, rightIcon}){
  return(
    <div className={`m-2 rounded-xl shadow-lg overflow-hidden flex flex-col ${custom}`}>
      <Link 
        href={{
          pathname:`/${link}`,
          query:query
        }}
        as={`/${link}`}
      >
        <a className="flex items-center" target={newTab ? "_blank" : ""}>
          {leftIcon ? leftIcon : ""}
          <h1 className='p-4 font-semibold'>{title}</h1>
          {rightIcon ? rightIcon : ""}
        </a>
      </Link>
    </div>
  )
}