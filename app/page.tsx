import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`As a full-stack developer, I bring a diverse skill set with experience in both front-end and back-end technologies. I've worked extensively with Rails for backend development and React for building dynamic frontends. My expertise includes Node.js for server-side applications and a foundational knowledge of Golang. I've also developed cross-platform mobile apps using React Native and am currently expanding my skills as a beginner in .NET Blazor and MAUI. This varied background allows me to adapt quickly to new tools and technologies while delivering robust and scalable solutions.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
