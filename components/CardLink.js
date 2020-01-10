import Link from 'next/link'

const CardLink = props => {
    if(props.href.startsWith("http"))
        return <a href={props.href}>{props.children}</a>
    else
        return <Link href={props.href}>{props.children}</Link>
}

export default CardLink;