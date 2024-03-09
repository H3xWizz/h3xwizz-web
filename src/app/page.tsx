import ProjectsTable from "@/components/projects-table";
import ContactForm from "@/components/contact-form";
import Logo from "@/components/logo";

export default async function Page() {

  return (
      <div className={'flex flex-col mx-[10vw] md:mx-[20vw]'}>
          <div id={'Hero'} className={'h-screen flex flex-col md:flex-row justify-center md:justify-between gap-10 text-center items-center'}>
              <Logo size={250}/>
              <p className={'text-2xl font-bold'}>Server administrator / Programmer</p>
          </div>
          <div id={'About'} className={'h-screen text-center flex flex-col gap-6 justify-center items-center'}>
              <p className={'text-[2rem] font-bold'}>About</p>
              <p>Welcome to my website! My name is Ksawier, and I&apos;m a young programming enthusiast born in 2003. From an
                  early age, fascinated by technology, I dedicated myself to the art of coding, and today, I would like
                  to share my passion and skills with you. I specialize in several programming languages, primarily
                  focusing on Next.js, Python, and Rust. My experience includes creating responsive and innovative
                  websites, as well as developing efficient and high-performance server applications. Feel free to
                  explore my portfolio, where you&apos;ll find projects I&apos;ve worked on, showcasing the diversity of my
                  skills. I&apos;m constantly evolving and expanding my horizons to deliver cutting-edge solutions in the
                  field of programming. If you have any questions, collaboration proposals, or a desire to exchange
                  experiences, don&apos;t hesitate to contact me. Together, we can create something exceptional! Thank you
                  for visiting my website. I hope you find inspiration and interesting information in the realm of
                  programming.</p>
          </div>
          <div id={'Projects'} className={'h-screen text-center flex flex-col gap-6 justify-center items-center'}>
              <p className={'text-[2rem] font-bold'}>Projects</p>
              <ProjectsTable/>
          </div>
          <div id={'Contact'} className={'h-screen text-center flex flex-col gap-6 justify-center items-center'}>
              <p className={'text-[2rem] font-bold'}>Contact</p>
              <ContactForm/>
          </div>
      </div>
  )
}
