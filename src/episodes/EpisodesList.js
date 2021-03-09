import React, {useEffect} from 'react'
import CharactersInEpisode from './CharactersInEpisode'

const EpisodesList = (props) => {
    

    useEffect(()=>{
        document.addEventListener('scroll', showMore)
        return function(){ 
        document.removeEventListener('scroll', showMore)
        }
    }, [])


    const showMore =(e)=> { 
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight)<40){
            props.fetch(true)
        }
    }


    return (
        <div className='episodes-body'>
              {props.episodes.map(item=>
                    <div key={item.id} className='episode-par'>
                        <div  className='episode'>
                            <div>Name: {item.name}</div>
                            <div>Air date: {item.air_date}</div>
                            <div>Episode: {item.episode}</div>
                        </div>
                        <CharactersInEpisode characters={item.characters} title='Characters in episode'/>
                    </div>
)}   
        </div>
    )
}

export default EpisodesList
