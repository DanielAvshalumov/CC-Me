import JobSelect from "./JobSelect";

const contractsLayout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    return (
            <section>
                {/* <JobSelect /> */}
                {children}
            </section>
    )
}

export default contractsLayout;