import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
    return (
        <>
            <footer className=" xl:hidden footer footer-horizontal footer-center rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a href="#background" className="link link-hover">Background</a>
                    <a href="#experience" className="link link-hover">Experience</a>
                    <a href="#projects" className="link link-hover">Projects</a>
                    <a href="#games" className="link link-hover">Games</a>
                </nav>
                <SocialMediaLinks />
            </footer>
        </>
    )
}