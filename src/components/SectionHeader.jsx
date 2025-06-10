export default function SectionHeader({ title }) {
    return (
        <>
            <h3 className="sticky top-0 bg-opacity-80 backdrop-blur-md rounded-b-lg py-1 mt-12 text-3xl font-semibold tracking-tight sm:text-3xl">
                {title}
            </h3>
        </>
    )
}