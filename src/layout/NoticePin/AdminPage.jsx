import React from 'react';
import styled from 'styled-components';

import AdminTitle from 'components/Management/NoticePin/AdminTitle';

import AdminTable from 'components/Management/NoticePin/NewAdminTable';

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const AdminTitleLayout = styled(AdminTitle)`
  display: flex;
  padding: 0 0 0 40px;
`;

const AdminTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminTableLayout = styled(AdminTable)`
  max-width: 720px;
`;

const AdminPage = () => {
  return (
    <div
      className="admin-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AdminPageContainer>
        <AdminTitleLayout />
        <AdminTableWrapper>
          <AdminTableLayout />
        </AdminTableWrapper>
      </AdminPageContainer>
    </div>
  );
};

export default AdminPage;
