import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import HelloWorld from "./components/HelloWorld";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "8uZF6b3prKJyrkJbHEMaUw",  // ID of a project you are using
            token: "lYQ2CP3u327LlgTH5Et3plJFOAbY49411ox5mjR8okK7JaGxJ3IwWjbDVPb6tqzkPfPcFNOhIkg8A7J1A"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
    name: 'Hello World',
    props: { }
});