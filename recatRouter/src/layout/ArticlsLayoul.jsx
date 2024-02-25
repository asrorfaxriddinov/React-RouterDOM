import { Outlet } from "react-router-dom";


function ArticlesLayoul() {
    return (
        <div>
            <h2 className="colors">My Articles</h2>
            <hr />
            <Outlet />
        </div>
    )
}

export default ArticlesLayoul