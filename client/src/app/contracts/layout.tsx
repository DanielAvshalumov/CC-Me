import { Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import JobSelect from "./JobSelect";
import { getItem } from "./utils";
import JobHero from "./JobDisplay";
import JobProvider from "./provider";

const contractsLayout = async ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    const cachedJobs: Job[] = await getItem('init');

    return (
            <section style={{display:'flex', width:1500}}>
                <JobProvider>
                  <JobSelect jobs={cachedJobs}/>
                    {children}
                  <JobHero />
                </JobProvider>
            </section>
    )
}

export default contractsLayout;