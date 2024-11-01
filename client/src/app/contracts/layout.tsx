import { Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import JobSelect from "./JobSelect";
import { getItem } from "./utils";
import JobHero from "./JobDisplay";

const contractsLayout = async ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    const cachedJobs: Job[] = await getItem('init');
    console.log('cached jobs', cachedJobs);

    return (
            <section style={{display:'flex'}}>
                <JobSelect jobs={cachedJobs}/>
                {children}
                {/* <JobHero /> */}
            </section>
    )
}

export default contractsLayout;