import { Typography } from "@mui/material";
import AuthContext from "../components/provider";


const contractsLayout = async ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {

    return (
            <section>
                {children}
            </section>
    )
}

export default contractsLayout;