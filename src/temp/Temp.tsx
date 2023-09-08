import {useScreenSize} from '@/robinjs/utils'

function Temp() {
    const screen = useScreenSize()
    console.log('screen-temp', screen.gt.sm, screen.width, screen.height)
    return (
        <>
        </>
    )
}

export default Temp