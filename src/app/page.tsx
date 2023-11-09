import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <Image src="/logo.svg" height={150} width={150} alt=""/>
      <div className="flex flex-wrap text-sm text-center">
        <p>
          Hi, I'm Ksawier, a passionate programmer with several years of experience. I have worked with a variety of front-end and back-end applications, using languages like JavaScript, Python, Java, and technologies like React, Next.js, and Express.js. I've also had experience with SQL and NoSQL databases.
          I take pride in creating software solutions that make a real impact, and I'm always ready to tackle new challenges. Currently, I'm part of the innovative team at innpro, keeping up-to-date with the latest trends in programming.
          I'm open to new collaborations and projects. If you need programming assistance or have an idea you'd like to discuss, feel free to check out my portfolio and get in touch!
        </p>
      </div>
    </div>
  )
}
