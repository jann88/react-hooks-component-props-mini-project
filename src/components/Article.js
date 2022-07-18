import React from "react";
function emojiLists(minutes){
 const interval = minutes < 30 ? 5 :10 ;
   const emoji = minutes <30  ? " ☕️ " : "🍱" ;
    let emojis = "";
    for(let i=0; i<minutes; i+= interval){
    emojis += emoji;
}

    return (emojis);
}
function Article({title,date ="January 1, 1970",preview,minutes}){
    const emojis = emojiLists(minutes);
    /*function cups(min){
        let emojis = []
        if(min < 30){
            for(let i=min; i>0; i-=5){
            emojis.push('☕️ ')
        }
    }
            if(min>=30){
                for(let i=min; i>0; i-=10){
                    emojis.push('🍱')
                }
            }
                
                return `${emojis.join('')} ${min} min read`
        }*/
            return(
        <article>
            <h3>{title}</h3>
            <small>{date} {emojis}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    )

    }

    export default Article;