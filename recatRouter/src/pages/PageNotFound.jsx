import { NavLink } from "react-router-dom";

function PageNotFound(){
    return(
        <div className="pageNotFaund-container">
          <h1 className="colors">PageNotFound</h1>
          <p className="colors">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vel alias dolores dolorem, inventore, est ad nesciunt aspernatur porro culpa laboriosam. Eaque tenetur, animi fuga aperiam modi quaerat laudantium aut facilis porro inventore sint est magni, asperiores iusto eos architecto iure dolorem distinctio reprehenderit maxime, consequuntur quo. Unde veniam est quos et consequuntur! Optio nemo incidunt fugiat illo numquam, similique voluptates ad expedita esse laudantium, velit dignissimos perferendis explicabo. Dolor dolores unde molestiae laudantium, recusandae temporibus ut earum vel blanditiis voluptate in repellat aspernatur alias incidunt illo optio error maiores dolorem! Inventore tempore reprehenderit, voluptas reiciendis debitis fugit facere fugiat?</p>
          <NavLink to="/">
           Home Page
          </NavLink>
        </div>
        
    )
}

export default PageNotFound