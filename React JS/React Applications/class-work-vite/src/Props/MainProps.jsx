// props : it's property 
// props : it's one component to another component data pass 
// props : read only 
// props : class and function

import React from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

function MainProps() {
    return (
        <div>
            {/* <h1 className='bg-info'>Main propers</h1> */}
            <div className="container">
                <h1 className='bg-info'>Class props Component</h1>
                <div className="row">
                    <ClassProps title="DREAM CAR 1" desc="ON THE WAY" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                    <ClassProps title="DREAM CAR 2" desc="ON THE WAY" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="DREAM CAR 3" desc="ON THE WAY" img="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg" />
                    <ClassProps title="DREAM CAR 4" desc="ON THE WAY" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                </div>
            </div>
            <div className="container">
                <h1 className='bg-info'>Function Props Component</h1>
                <div className="row">
                    <FunctionProps title="Nature 1" desc="Natural Beauty" img="https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg" />
                    <FunctionProps title="Nature 2" desc="Natural Beauty" img="https://cdn.pixabay.com/photo/2022/11/05/19/56/bachalpsee-7572681_1280.jpg" />
                    <FunctionProps title="Nature 3" desc="Natural Beauty" img="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" />
                    <FunctionProps title="Nature 4" desc="Natural Beauty" img="https://cdn.pixabay.com/photo/2022/02/22/20/48/lake-louise-7029569_1280.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainProps