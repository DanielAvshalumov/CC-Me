import { Typography } from "@mui/material";
;

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