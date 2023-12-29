import ProjectTable from "@/app/projects/components/project-table";

export default function Page() {

    return (
        <div className={'h-screen w-[calc(100vw-4.2rem)] flex flex-col gap-12 justify-center items-center'}>
            <p className={'text-4xl font-bold'}>Projects</p>
            <ProjectTable/>
        </div>
    )
}
