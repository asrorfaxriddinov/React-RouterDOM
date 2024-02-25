import { NavLink, useLocation } from "react-router-dom"

function BreadCraumps() {

    const location = useLocation()

    const currentLink = []

    const curmbs = location.pathname.split('/')
        .filter((crumb) => crumb != '')
        .map((crumb) => {
            currentLink.push(`/${crumb}`)
            return (
                <div className="crumb" key={crumb}>
                    <NavLink to={currentLink.join('')}>{crumb}</NavLink>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            {curmbs}
        </div>
    )
}

export default BreadCraumps