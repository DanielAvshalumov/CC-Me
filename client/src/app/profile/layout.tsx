import AuthService from "@/service/AuthService";
import ProfileSidebar from "./components/ProfileSidebar";
import AuthProvider from "./components/provider";

const profileLayout = async ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {

    return (
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <ProfileSidebar/>
                <AuthProvider>
                  {children}
                </AuthProvider>
            </div>
    )
}

export default profileLayout;