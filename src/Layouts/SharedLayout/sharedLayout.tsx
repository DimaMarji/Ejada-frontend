import { ISharedLayoutProps } from "../interface";
import useTokens from "../../Hooks/Auth/useToken";
import { useAppMediaQuery } from "../../Hooks/MediaQuery/use-app-media-query";
import SharedNavbar from "./SharedNavbar/sharedNavbar";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import SharedSidebar from "./SharedSidebar/sharedSidebar";

const SharedLayout: React.FC<ISharedLayoutProps> = ({ children }) => {
  const { accessToken, clearTokens } = useTokens();
  const { isTabletOrMobile } = useAppMediaQuery();


 


  return  <Layout>
<SharedSidebar/>
  <Layout>
    <Header />
    <Content style={{ margin: '24px 16px 0' }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout>
</Layout>;
};
export default SharedLayout;
