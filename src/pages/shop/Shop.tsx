import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import Skeleton from '../../components/card/Skeleton'
import Button from '../../my_UI/button/Button'
import './shop.scss'

type CardProps = {
    title: string
    price: number
    image: string
    id: number
  }

const Shop: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [items, setItems] = React.useState([])

    const skeletons = [...new Array(9)].map((_, id) => <Skeleton key={id}/>)

    const things = items.map((obj: CardProps) => (
        <Card count={0} {...obj} key={obj.id}/>
    ))

    React.useEffect(() => {
        setIsLoading(true)
        axios.get('https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/pottery')
        .then((arr) => {
        setItems(arr.data)
        setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className='shop'>
                {
                    isLoading ? skeletons : things
                }
            </div>
            <Link to={'/'}>
                <Button btnClass='btn' btnText='Back'/>
            </Link>
        </div>
    )
}

export default Shop