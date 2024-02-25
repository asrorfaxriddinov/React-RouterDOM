import { useParams } from "react-router-dom"

import { useFetch } from "../../hooks/useFetch"
function ArticlesDetail() {
    const { id } = useParams()
    const url = "http://localhost:3000/articles/" + id
    const { data: article, error, isPending } = useFetch(url);
    console.log(article)
    return (
        <div className="colors">
            {isPending && <h3>Laoding...</h3>}
            {error && <h3>{error}</h3>}

            {article && <>
                <img src={article.image} alt={article.title} height="300px" />
                <h2>Title: {article.title}</h2>
                <p>Auther: <i>{article.auther}</i></p>
                <p>
                    {article.body}
                </p>
            </>}
        </div>
    )
}

export default ArticlesDetail