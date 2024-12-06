import AuthService from "@/service/AuthService";
import ProfileSidebar from "./components/ProfileSidebar";

const profileLayout = async ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {

    return (
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <ProfileSidebar/>
                {children}
            </div>
    )
}

export default profileLayout;