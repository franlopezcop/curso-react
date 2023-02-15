import { Link } from 'wouter'

export default function Category({name, options =[]}) {
    return <div>
        <h3>{name}</h3>
        <ul>
            {options.map(option => {
                return <li key={option}><Link to={`/search/${option}`} >{option}</Link></li>
            }
            )}
        </ul>
    </div>
}