import React from 'react'
import Article from './Article'

function ArticleList({posts}){

    const post = posts.map((pst)=>{
        console.log(pst)

        return <Article key={pst.id} title={pst.title} date={pst.date} minutes={pst.minutes} />
    })
    return(
        <main>
            {post}

        </main>

    )
}

export default ArticleList