import { screen } from '@/robinjs/utils/index'

function Temp() {
    screen.subscribe(size => {
        console.log('temp-', size.height, size.width)
    })
    return (
        <>
        </>
    )
}

export default Temp