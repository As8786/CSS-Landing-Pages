import React from 'react'

import Second from './SecondComp/Second'
import Third from './ThirdComp/ThirdComp'
import Four from './FourComp/FourComp'
import Five from './FiveComp/FiveComp'
import Six from "./SixComp/SixComp"
import Eight from "./EightComp/EightComp"
import Nine from './NineComp/NineComp'
import Ten from './TenComp/TenComp'
import Seven from './SevenComp/SevenComp'

class Main extends React.Component{
    render(){
        return (
            <div >
                <Second />
                <Third />
                <Four />
                <Five />
                <Six/>
                <Seven />
                <Eight/>
                <Nine />
                <Ten/>
             </div>   
        )
    }
}

export default Main