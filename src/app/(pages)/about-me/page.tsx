import type {Metadata} from "next"

export const metadata: Metadata = {
    title: 'About me',
}

export default function Page() {

    return (
        <div className={'h-screen w-[calc(100vw-4.2rem)] flex flex-col gap-4 text-center justify-center items-center'}>
            <p className={'text-4xl font-bold'}>About me</p>
            <p className={'text-sm mx-96'}>
                Welcome to my website! My name is Ksawier, and I&apos;m a young programming enthusiast born in 2003.
                From an early age, fascinated by technology, I dedicated myself to the art of coding, and today, I would
                like to share my passion and skills with you.
                I specialize in several programming languages, primarily focusing on Next.js, Python, and Rust. My
                experience includes creating responsive and innovative websites, as well as developing efficient and
                high-performance server applications.
                Feel free to explore my portfolio, where you&apos;ll find projects I&apos;ve worked on, showcasing the
                diversity of my skills. I&apos;m constantly evolving and expanding my horizons to deliver cutting-edge
                solutions in the field of programming.
                If you have any questions, collaboration proposals, or a desire to exchange experiences, don&apos;t
                hesitate to contact me. Together, we can create something exceptional!
                Thank you for visiting my website. I hope you find inspiration and interesting information in the realm
                of programming.
            </p>
        </div>
    )
}
