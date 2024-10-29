import { Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import JobSelect from "./JobSelect";
import { getItem } from "./utils";

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
            </section>
    )
}

export default contractsLayout;