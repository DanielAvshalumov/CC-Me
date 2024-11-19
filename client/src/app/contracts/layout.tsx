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

    return (
            <section style={{display:'flex', width:1500}}>
                <JobSelect jobs={cachedJobs}/>
                {children}
                <JobHero />
            </section>
    )
}

export default contractsLayout;