import { useFetch } from "../../hooks/useFetch"
import { NavLink } from "react-router-dom"
function Articles(){
    const {data : articles, isPending, error} = useFetch('http://localhost:3000/articles')
    return(
        <div className="article-container">
        {isPending && <h3>Laoding...</h3>}
        {error && <h3>{error}</h3>}


        {articles && articles.map((article)=>{
            return(
                <div className="card" key={article.id}>
                    <h3>
                        Title: {article.title}
                    </h3>
                    <p>
                        Auther: <i>{article.auther }</i>
                    </p>
                    <NavLink  to={`/articls/${article.id}`}>Read More</NavLink>
                </div>
            )
        })}
        </div>
    )
}

export default Articles