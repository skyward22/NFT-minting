import React from 'react'
import {Flex, Image, Link} from '@chakra-ui/react'

const Social = () => {
    
  return (
    <div>
        <Flex justify="space-around" width="40%" padding="0 75px">
            <Link target="_blank" href="https://www.facebook.com/CryptopiaFilm">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"                 boxShadow="1px 3px 3px 2px #0F0F0F" boxSize="60px" margin="0 15px" />
            </Link>
            <Link target="_blank" href="https://twitter.com/CryptopiaFilm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"                 boxShadow="1px 3px 3px 2px #0F0F0F" boxSize="60px" margin="0 15px" />
            </Link>
        </Flex>
    </div>
  )
}

export default Social