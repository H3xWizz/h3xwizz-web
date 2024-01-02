import ProjectTable from "@/app/(pages)/projects/components/project-table";
import getRepos from "@/app/(pages)/projects/actions";

const revalidate = 14400

export default async function Page() {
    const data = await getRepos()

    return (
        <div className={'h-screen w-[calc(100vw-4.2rem)] flex flex-col gap-12 justify-center items-center'}>
            <p className={'text-4xl font-bold'}>Projects</p>
            <ProjectTable data={data.data || []}/>
        </div>
    )
}
