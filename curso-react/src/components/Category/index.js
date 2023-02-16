import { Link } from 'wouter'

export default function Category({name, options}) {
    
    return <div>
        <h3>{name}</h3>
        {console.log(options)}
        <ul>
            {options.map(option => {
                return <li key={option.id}><Link to={`/search/${option.title}`} >{option.title}</Link></li>
            }
            )}
        </ul>
    </div>
}