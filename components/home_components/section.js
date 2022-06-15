
import LinkButton from "../link_button"

export default function Section({id, title, button, desc, link, custom, sectionCustom}) {
    return(
        <div id={id} className={`h-screen flex justify-center items-center flex-col ${sectionCustom}`}>
          <h1 className='text-4xl font-bold mb-2'>{title}</h1>
          <p className='text-lg font-semibold'>{desc}</p>
          <br/>
          <LinkButton title={button} link={link} custom={custom}/>
        </div>
    )
}