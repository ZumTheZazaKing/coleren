
import LinkButton from "../link_button"

export default function Section({title, button, desc, link, custom, bg}) {
    return(
        <div className={`h-screen flex justify-center items-center flex-col ${bg}`}>
          <h1 className='text-4xl font-bold mb-2'>{title}</h1>
          <p className='text-lg'>{desc}</p>
          <br/>
          <LinkButton title={button} link={link} custom={custom}/>
        </div>
    )
}