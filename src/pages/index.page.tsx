import {Inter} from '@next/font/google'
import HomeContainer from './Home'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <main className="main">
                <HomeContainer/>
            </main>
        </>
    )
}
